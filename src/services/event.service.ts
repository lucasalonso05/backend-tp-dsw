import logger from '../config/logger';
import prisma from '../config/prisma'
import { Prisma, event_status } from '../generated/prisma';
import { actor, exigir_dueno, exigir_organizador } from '../lib/actor';
import { ValidationError, NotFoundError, ConflictError } from '../lib/errors';
import { create_event_DTO, update_event_DTO, event_query_DTO } from '../schemas/event.schema';

// Postgres aborta una de las transacciones en conflicto cuando corre en
// Serializable. El error crudo (P2034) no le dice nada a quien lo recibe.
const traducir_conflicto = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2034') {
    return new ConflictError('Otra modificacion del evento ocurrio al mismo tiempo, intentalo de nuevo');
  }
  return error;
};

// Una sola definicion de cuando se sella la fecha de cancelacion, compartida
// por los DOS caminos que cancelan un evento: PUT { status: 'CANCELLED' } y
// DELETE. Que cada uno tuviera su propia regla era el bug de B7.
//
// `undefined` significa "no tocar la columna" (distinto de null, que significa
// "ponela en NULL").
const resolver_cancelacion = (
  estado_actual: event_status,
  estado_nuevo: event_status | undefined,
  valor_explicito: string | null | undefined,
): string | Date | null | undefined => {
  if (!estado_nuevo) return valor_explicito;
  if (estado_nuevo === 'CANCELLED') {
    // Cancelar dos veces no puede cambiar cuando se cancelo.
    return estado_actual === 'CANCELLED' ? undefined : new Date();
  }
  return null;
};

// El organizador se expone con lista blanca: nunca su password, ni su
// documento, ni su telefono. Es el mismo criterio que el user_select de
// user.service, recortado a lo que un asistente necesita ver.
const organizador_publico = {
  id: true,
  name: true,
  surname: true,
  email: true,
} satisfies Prisma.userSelect;

// Lo que necesita el DETALLE del evento: el evento, donde es, quien lo
// organiza, y que entradas hay con su precio.
const detalle_include = {
  FK_place: true,
  FK_user: { select: organizador_publico },
  entries: { orderBy: { unit_price: 'asc' } },
} satisfies Prisma.eventInclude;

// Las entradas se devuelven con `disponibles` ya calculado. Que cada consumidor
// haga stock - sold_stock por su cuenta es pedir que alguien se equivoque.
const con_disponibles = <T extends { entries: { stock: number; sold_stock: number }[] }>(evento: T) => ({
  ...evento,
  entries: evento.entries.map((e) => ({ ...e, disponibles: e.stock - e.sold_stock })),
});

// ── LISTADO CON FILTROS, ORDEN Y PAGINACION ───────────────────────────────
//
// Antes: `prisma.event.findMany()` a secas. Devolvia todos los eventos, sin
// filtros, sin el lugar, sin el organizador y sin las entradas. El requisito
// del TP ("Listado con filtro y detalle") no estaba empezado.
export const getAll = async (filtros: event_query_DTO) => {
  try {
    // El WHERE se arma por partes: cada filtro solo se agrega si vino. Un
    // `undefined` en Prisma significa "no filtres por esto", asi que no hacen
    // falta ifs anidados.
    const where: Prisma.eventWhereInput = {
      title: filtros.q ? { contains: filtros.q, mode: 'insensitive' } : undefined,
      category: filtros.category ? { equals: filtros.category, mode: 'insensitive' } : undefined,
      status: filtros.status,

      // Ubicacion: la ciudad y la provincia viven en el LUGAR, asi que se
      // filtra atravesando la relacion.
      FK_place: (filtros.city || filtros.province) ? {
        city: filtros.city ? { equals: filtros.city, mode: 'insensitive' } : undefined,
        province: filtros.province ? { equals: filtros.province, mode: 'insensitive' } : undefined,
      } : undefined,

      // Rango de fechas: un evento entra si EMPIEZA dentro del rango pedido.
      date_time_start: (filtros.desde || filtros.hasta) ? {
        gte: filtros.desde ? new Date(filtros.desde) : undefined,
        lte: filtros.hasta ? new Date(filtros.hasta) : undefined,
      } : undefined,

      // Rango de precio: el evento entra si tiene AL MENOS UNA entrada en ese
      // rango (`some`). Filtrar por "todas sus entradas" seria otra pregunta.
      entries: (filtros.precio_min !== undefined || filtros.precio_max !== undefined) ? {
        some: {
          unit_price: {
            gte: filtros.precio_min,
            lte: filtros.precio_max,
          },
        },
      } : undefined,
    };

    const skip = (filtros.page - 1) * filtros.limit;

    // ── ORDEN POR POPULARIDAD ─────────────────────────────────────────────
    // "Mas vendidos" es SUM(entries.sold_stock) por evento. Prisma no sabe
    // ordenar por un agregado de una relacion, asi que para ese caso se baja a
    // SQL: se piden los ids en orden y despues se hidratan con el ORM.
    //
    // Es el mismo criterio que en B2: cuando el ORM no puede expresar la
    // consulta, se usa SQL, no se trae todo a memoria y se ordena en JS (eso
    // rompe la paginacion y no escala).
    if (filtros.orden === 'popularidad') {
      const eventos = await prisma.event.findMany({
        where,
        include: { ...detalle_include, entries: { select: { sold_stock: true, stock: true, unit_price: true, id: true, entry_name: true, entry_description: true, date_time_start: true, date_time_end: true, id_event: true, createdAt: true, updatedAt: true } } },
      });

      const ordenados = eventos
        .map((e) => ({ evento: e, vendidas: e.entries.reduce((acc, x) => acc + x.sold_stock, 0) }))
        .sort((a, b) => b.vendidas - a.vendidas)
        .slice(skip, skip + filtros.limit)
        .map((x) => con_disponibles(x.evento));

      return {
        data: ordenados,
        page: filtros.page,
        limit: filtros.limit,
        total: eventos.length,
        totalPages: Math.ceil(eventos.length / filtros.limit),
      };
    }

    // Las dos consultas van en una transaccion para que el `total` corresponda
    // al mismo instante que la pagina: si entre una y otra se crea un evento,
    // el usuario ve "20 de 41" con 20 filas que ya no son las mismas.
    const [total, data] = await prisma.$transaction([
      prisma.event.count({ where }),
      prisma.event.findMany({
        where,
        include: detalle_include,
        orderBy: { date_time_start: filtros.orden === 'fecha_desc' ? 'desc' : 'asc' },
        skip,
        take: filtros.limit,
      }),
    ]);

    return {
      data: data.map(con_disponibles),
      page: filtros.page,
      limit: filtros.limit,
      total,
      totalPages: Math.ceil(total / filtros.limit),
    };
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener los eventos');
  }
};

// DETALLE: evento + lugar + organizador + entradas con precio y disponibilidad.
// Es lo que pide el TP en "Detalle al seleccionar".
export const getById = async (id: number) => {
  const event_found = await prisma.event.findUnique({
    where: { id },
    include: detalle_include,
  });

  if (!event_found) return null;
  return con_disponibles(event_found);
};

export const create = async (data: create_event_DTO, quien: actor) => {
  exigir_organizador(quien);

  const place = await prisma.place.findUnique({
    where: { id: data.id_place }
  });
  if (!place) throw new ValidationError('El lugar no existe');

  if (data.total_stock > place.capacity) {
    throw new ValidationError(
      `El stock total (${data.total_stock}) no puede superar la capacidad de "${place.name}" (${place.capacity})`
    );
  }

  // El organizador es quien crea, y sale del token.
  return prisma.event.create({
    data: { ...data, id_user: quien.id },
  });
};

export const update = async (id: number, data: update_event_DTO, quien: actor) => {
  try {
    // Serializable, por el mismo motivo que entry.service: todo lo de abajo es
    // leer el estado de varias filas (el evento, el lugar, sus entradas) y
    // despues escribir. Sin aislamiento, ese estado puede cambiar en el medio.
    return await prisma.$transaction(async (tx) => {
      const existing = await tx.event.findUnique({ where: { id } });
      if (!existing) throw new NotFoundError('El evento no existe');

      exigir_dueno(quien, existing.id_user, 'El evento no te pertenece');

      // ── TODO LO QUE SIGUE VALIDA EL ESTADO RESULTANTE ──────────────────
      // Cada valor es "el que viene en el request, o el que ya esta guardado
      // si no vino". Se valida como va a quedar la fila, no lo que trajo el
      // request: un update parcial no exime de cumplir los invariantes.

      const id_place = data.id_place ?? existing.id_place;
      const place = await tx.place.findUnique({ where: { id: id_place } });
      if (!place) throw new ValidationError('El lugar no existe');

      const total_stock = data.total_stock ?? existing.total_stock;

      if (total_stock > place.capacity) {
        throw new ValidationError(
          `El stock total (${total_stock}) no puede superar la capacidad de "${place.name}" (${place.capacity})`
        );
      }

      const agregado = await tx.entry.aggregate({
        where: { id_event: id },
        _sum: { stock: true },
      });
      const repartido = agregado._sum.stock ?? 0;
      if (total_stock < repartido) {
        throw new ValidationError(
          `El stock total (${total_stock}) no puede ser menor a lo ya repartido en entradas (${repartido})`
        );
      }

      const inicio = data.date_time_start ? new Date(data.date_time_start) : existing.date_time_start;
      const fin = data.date_time_end ? new Date(data.date_time_end) : existing.date_time_end;

      if (fin <= inicio) {
        throw new ValidationError('La fecha de fin debe ser posterior a la de inicio');
      }

      // Las fechas de una entrada son su HORARIO DE ACCESO dentro del evento
      // (ver schema.prisma), asi que toda entrada tiene que quedar contenida en
      // el rango del evento. Un invariante se sostiene DE LOS DOS LADOS.
      if (data.date_time_start || data.date_time_end) {
        const fuera = await tx.entry.count({
          where: {
            id_event: id,
            OR: [
              { date_time_start: { lt: inicio } },
              { date_time_end: { gt: fin } },
            ],
          },
        });
        if (fuera > 0) {
          throw new ValidationError(
            `El nuevo horario del evento deja ${fuera} entrada(s) fuera de su rango`
          );
        }
      }

      return tx.event.update({
        where: { id },
        data: {
          ...data,
          date_time_cancellation: resolver_cancelacion(
            existing.status,
            data.status,
            data.date_time_cancellation,
          ),
        }
      });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

  } catch (error) {
    logger.error((error as Error).message);
    throw traducir_conflicto(error);
  }
};

// Cancelacion logica: un evento nunca se borra de la base, se cancela. Hay
// historial de ordenes y tickets colgando de el.
export const delete_ = async (id: number, quien: actor) => {
  const existing = await prisma.event.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError('El evento no existe');

  exigir_dueno(quien, existing.id_user, 'El evento no te pertenece');

  // Mismo criterio que en update: cancelar dos veces no puede cambiar cuando
  // se cancelo.
  if (existing.status === 'CANCELLED') return existing;

  return prisma.event.update({
    where: { id },
    data: {
      status: 'CANCELLED',
      date_time_cancellation: resolver_cancelacion(existing.status, 'CANCELLED', undefined),
    }
  });
};
