import prisma from '../config/prisma'
import { config } from '../config/config'
import { Prisma, order_status } from '../generated/prisma'
import { create_order_DTO, update_order_DTO } from '../schemas/order.schema';
import { ValidationError, ForbiddenError, NotFoundError, ConflictError } from '../lib/errors';
import logger from '../config/logger'

import { actor, es_admin } from '../lib/actor';

// ── MAQUINA DE ESTADOS DE LA ORDEN ───────────────────────────────────────
//
//        ┌─────────┐  pago confirmado   ┌──────┐
//        │ PENDING │ ─────────────────► │ PAID │
//        └────┬────┘                    └───┬──┘
//             │                             │ reembolso
//             │ cancela / vence             │
//             ▼                             ▼
//     ┌───────────┐  ┌─────────┐     ┌───────────┐
//     │ CANCELLED │  │ EXPIRED │     │ CANCELLED │
//     └───────────┘  └─────────┘     └───────────┘
//            (terminales: no se sale de ahi)
//
// Que CANCELLED y EXPIRED sean terminales resuelve de raiz el bug de B3: el
// stock se libera exactamente una vez y no hay forma de volver a un estado
// activo sin haber reservado de nuevo.
const TRANSICIONES: Record<order_status, order_status[]> = {
  PENDING: ['PAID', 'CANCELLED', 'EXPIRED'],
  PAID: ['CANCELLED'],
  CANCELLED: [],
  EXPIRED: [],
};

// Estados a los que llegar implica devolver las entradas al pool.
const LIBERAN_STOCK: order_status[] = ['CANCELLED', 'EXPIRED'];

// Lo unico que el dueño de una orden puede hacerle por su cuenta. Marcar una
// orden como PAID equivale a decir "ya pague": si lo pudiera hacer el propio
// comprador, las entradas serian gratis. Esa transicion la hace un ADMIN, y el
// dia que haya pasarela de pago, su webhook.
const TRANSICIONES_DEL_DUENIO: order_status[] = ['CANCELLED'];

// Para que el mensaje de error se lea como algo escrito por una persona.
const ESTADO_EN_TEXTO: Record<string, string> = {
  CANCELLED: 'cancelado',
  FINISHED: 'finalizado',
};

export const getAll = async (quien: actor) => {
  try {
    // Un ADMIN ve todas las ordenes; cualquier otro, solo las suyas. El filtro
    // se arma con el id del token, asi que no hay forma de pedir las ajenas.
    const orders = await prisma.order.findMany({
      where: es_admin(quien) ? {} : { id_user: quien.id },
      include: { items: true },
    });
    return orders;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener las ordenes');
  }
};

export const getById = async (id: number, quien: actor) => {
  const order_found = await prisma.order.findUnique({
    where: { id },
    include: { items: true },
  });

  if (!order_found) return null;

  // 404 y no 403 a proposito: responder "existe pero no es tuya" le confirma a
  // un curioso que ese id existe. Para quien no es dueño, la orden no existe.
  if (!es_admin(quien) && order_found.id_user !== quien.id) {
    throw new NotFoundError('Orden no encontrada');
  }

  return order_found;
};

export const create = async (data: create_order_DTO, quien: actor) => {
  try {
    // Dos items con la misma entrada en una sola orden violan el
    // @@unique([id_order, id_entry]) del schema y revientan con un error crudo
    // de Prisma en medio de la transaccion. Se consolidan sumando cantidades,
    // que es lo que el usuario quiso decir al agregar dos veces lo mismo.
    const consolidados = new Map<number, number>();
    for (const item of data.items) {
      consolidados.set(item.id_entry, (consolidados.get(item.id_entry) ?? 0) + item.quantity);
    }

    // Los items se procesan SIEMPRE en el mismo orden (por id_entry). Si dos
    // ordenes simultaneas tomaran las mismas entradas en orden distinto, cada
    // una bloquearia la fila que la otra necesita: deadlock. Ordenar es la
    // forma barata de que eso no pueda pasar.
    const items = [...consolidados.entries()]
      .map(([id_entry, quantity]) => ({ id_entry, quantity }))
      .sort((a, b) => a.id_entry - b.id_entry);

    const ahora = new Date();

    const order_created = await prisma.$transaction(async (tx) => {
      // ── DINERO EN DECIMAL, NUNCA EN NUMBER ───────────────────────────
      // Prisma.Decimal es aritmetica decimal exacta (decimal.js). Antes esto
      // era `let total = 0` y `Number(entry.unit_price)`, es decir, punto
      // flotante binario: 0.07 * 3 da 0.21000000000000002.
      //
      // Con el modelo actual (precio * cantidad ENTERA) el error quedaba
      // absorbido por el redondeo a Decimal(10,2), asi que los totales salian
      // bien. Salian bien de casualidad: apenas entre un multiplicador que no
      // sea entero -un descuento, un impuesto- el redondeo deja de taparlo.
      let total = new Prisma.Decimal(0);
      const items_data: { id_entry: number; quantity: number; unit_price: Prisma.Decimal; subtotal: Prisma.Decimal }[] = [];

      for (const item of items) {
        // Se trae el evento en la misma consulta: las validaciones de contexto
        // de abajo lo necesitan y no tiene sentido pagar un round-trip extra.
        const entry = await tx.entry.findUnique({
          where: { id: item.id_entry },
          include: { FK_event: true },
        });
        if (!entry) throw new ValidationError(`La entrada ${item.id_entry} no existe`);

        const evento = entry.FK_event;

        // ── VALIDACIONES DE CONTEXTO DE LA COMPRA ────────────────────────
        // Tener stock disponible no significa que la entrada se pueda vender.

        if (evento.status !== 'CONFIRMED') {
          const estado = ESTADO_EN_TEXTO[evento.status] ?? evento.status.toLowerCase();
          throw new ValidationError(`El evento "${evento.title}" esta ${estado} y no admite compras`);
        }

        if (evento.date_time_end <= ahora) {
          throw new ValidationError(`El evento "${evento.title}" ya finalizo`);
        }

        if (entry.date_time_end <= ahora) {
          throw new ValidationError(`La entrada "${entry.entry_name}" ya no esta disponible`);
        }

        // NO se valida `ahora >= entry.date_time_start` y no es un olvido:
        // esas fechas son el HORARIO DE ACCESO de la entrada, no una ventana
        // de venta (decidido y documentado en schema.prisma). Validarlo
        // impediria la compra anticipada, que es todo el negocio.

        // ── RESERVA ATOMICA ──────────────────────────────────────────────
        // La condicion de stock viaja DENTRO del WHERE del UPDATE, no en un
        // `if` de JavaScript. La base evalua la condicion Y escribe en una
        // sola operacion, con la fila bloqueada: dos compras simultaneas se
        // serializan solas.
        //
        // Estar dentro de $transaction NO alcanzaba: Postgres corre en READ
        // COMMITTED, donde cada consulta ve un snapshot fresco. La transaccion
        // garantiza atomicidad (todo o nada), no exclusividad.
        const reserva = await tx.entry.updateMany({
          where: {
            id: entry.id,
            sold_stock: { lte: entry.stock - item.quantity },
          },
          data: { sold_stock: { increment: item.quantity } },
        });

        // count === 0 significa que la condicion no se cumplio en el instante
        // del UPDATE: ya no habia stock. Es la respuesta autoritativa de la
        // base, no una lectura que puede haber quedado vieja.
        if (reserva.count === 0) {
          throw new ValidationError(`No hay stock suficiente para "${entry.entry_name}"`);
        }

        // entry.unit_price YA es un Prisma.Decimal: convertirlo a number era
        // tirar la precision justo antes de usarla.
        const unit_price = entry.unit_price;
        const subtotal = unit_price.mul(item.quantity);
        total = total.add(subtotal);

        items_data.push({ id_entry: entry.id, quantity: item.quantity, unit_price, subtotal });
      }

      return tx.order.create({
        data: {
          // ── B5: el dueño sale del token, no del body ─────────────────
          // Antes esto era `data.id_user` y lo mandaba el cliente: cualquiera
          // podia crear ordenes a nombre de otro. El campo ya ni existe en el
          // DTO de entrada.
          id_user: quien.id,
          total,
          items: { create: items_data },
        },
        include: { items: true },
      });
    }, {
      // Este es el camino CALIENTE: en una salida a la venta entran cientos de
      // compras a la vez y todas piden una transaccion. Los defaults de Prisma
      // (maxWait 2s, timeout 5s) hacen que bajo rafaga algunas ni lleguen a
      // arrancar y el usuario reciba un error sin haber competido por el stock.
      //
      // Esto NO es lo que evita la sobreventa -eso lo hace el UPDATE
      // condicional de arriba- sino lo que evita rechazar a alguien por
      // impaciencia del pool en vez de por falta de entradas.
      //
      // El techo real es la cantidad de conexiones: en la DATABASE_URL conviene
      // fijar ?connection_limit=N segun lo que banque el plan de Neon.
      maxWait: 10_000,
      timeout: 15_000,
    });

    return order_created;
  } catch (error) {
    logger.error((error as Error).message);
    // P2028: la transaccion no pudo arrancar o expiro. No es culpa del cliente
    // ni un fallo nuestro definitivo: es congestion. Un 409 le dice "reintenta";
    // un 500 le dice "algo se rompio", que es mentira.
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2028') {
      throw new ConflictError('El servidor esta recibiendo muchas compras a la vez, volve a intentarlo');
    }
    throw error;
  }
};

export const update = async (id: number, data: update_order_DTO, quien: actor) => {
  try {
    const existing = await prisma.order.findUnique({ where: { id }, include: { items: true } });
    if (!existing) throw new NotFoundError('La orden no existe');

    // Misma regla que en getById: para quien no es dueño, la orden no existe.
    if (!es_admin(quien) && existing.id_user !== quien.id) {
      throw new NotFoundError('La orden no existe');
    }

    const nuevo_estado = data.status;
    const cambia_de_estado = nuevo_estado !== undefined && nuevo_estado !== existing.status;

    // Un usuario comun solo puede CANCELAR su orden. Ni marcarla como pagada
    // (seria regalarse las entradas) ni tocarle el payment_reference.
    if (!es_admin(quien)) {
      if (!cambia_de_estado || !TRANSICIONES_DEL_DUENIO.includes(nuevo_estado!)) {
        throw new ForbiddenError('Solo podes cancelar tu orden; el resto lo gestiona un administrador');
      }
    }

    // Sin cambio de estado no hay nada que validar ni stock que mover: es una
    // edicion de campos sueltos (tipicamente payment_reference). Solo ADMIN
    // llega aca, por el chequeo de arriba.
    if (!cambia_de_estado) {
      const order_updated = await prisma.order.update({
        where: { id },
        data: { payment_reference: data.payment_reference },
        include: { items: true },
      });
      return order_updated;
    }

    // La transicion se valida contra la tabla, no con ifs sueltos. Agregar un
    // estado nuevo manana es agregar una fila, no auditar el metodo entero.
    if (!TRANSICIONES[existing.status].includes(nuevo_estado!)) {
      const posibles = TRANSICIONES[existing.status];
      throw new ValidationError(
        posibles.length === 0
          ? `Una orden ${existing.status} es final: no se puede pasar a ${nuevo_estado}`
          : `No se puede pasar una orden de ${existing.status} a ${nuevo_estado}. Transiciones validas: ${posibles.join(', ')}`
      );
    }

    const libera_stock = LIBERAN_STOCK.includes(nuevo_estado!);

    await prisma.$transaction(async (tx) => {
      // Mismo patron que la reserva de stock: el estado viejo va en el WHERE.
      // Si otra request (o el job de expiracion) cambio la orden entre nuestro
      // findUnique y este UPDATE, count da 0 y abortamos en vez de liberar
      // stock dos veces.
      const cambio = await tx.order.updateMany({
        where: { id, status: existing.status },
        data: {
          status: nuevo_estado,
          payment_reference: data.payment_reference,
          date_time_payment: nuevo_estado === 'PAID' ? new Date() : undefined,
        },
      });

      if (cambio.count === 0) {
        throw new ConflictError('La orden cambio de estado mientras se procesaba, volve a intentarlo');
      }

      if (libera_stock) {
        for (const item of existing.items) {
          await tx.entry.update({
            where: { id: item.id_entry },
            data: { sold_stock: { decrement: item.quantity } },
          });
        }
      }
    });

    return await prisma.order.findUnique({ where: { id }, include: { items: true } });
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

// ── EXPIRACION DE ORDENES PENDIENTES ─────────────────────────────────────
//
// Una orden PENDING reserva stock desde que se crea. Si el usuario abandona el
// pago, esas entradas quedaban bloqueadas PARA SIEMPRE: nadie mas podia
// comprarlas y nadie las habia pagado.
//
// El propio schema.prisma ya documentaba el estado EXPIRED como "vencio la
// ventana de pago y se libero el stock", pero no habia nada que lo produjera.
//
// No recibe `actor`: no lo dispara una persona sino el job de fondo.
export const expire_pending = async () => {
  const limite = new Date(Date.now() - config.orderPaymentWindowMinutes * 60_000);

  const vencidas = await prisma.order.findMany({
    where: { status: 'PENDING', createdAt: { lt: limite } },
    include: { items: true },
  });

  let expiradas = 0;

  for (const order of vencidas) {
    try {
      const libero = await prisma.$transaction(async (tx) => {
        // El status viejo en el WHERE, otra vez: si el usuario pago justo
        // ahora, count da 0 y no le devolvemos el stock de una orden pagada.
        const cambio = await tx.order.updateMany({
          where: { id: order.id, status: 'PENDING' },
          data: { status: 'EXPIRED' },
        });

        if (cambio.count === 0) return false;

        for (const item of order.items) {
          await tx.entry.update({
            where: { id: item.id_entry },
            data: { sold_stock: { decrement: item.quantity } },
          });
        }
        return true;
      });

      if (libero) expiradas++;
    } catch (error) {
      // Una orden que falla no puede frenar a las demas.
      logger.error(`No se pudo expirar la orden ${order.id}: ${(error as Error).message}`);
    }
  }

  return expiradas;
};
