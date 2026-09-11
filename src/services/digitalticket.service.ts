import logger from '../config/logger';
import prisma from '../config/prisma'
import { Prisma } from '../generated/prisma';
import { actor, es_admin, exigir_dueno } from '../lib/actor';
import { ValidationError, NotFoundError, ForbiddenError, ConflictError } from '../lib/errors';
import { create_digitalticket_DTO } from '../schemas/digitalticket.schema';
import { v4 as uuidv4 } from 'uuid';

// Nada de este recurso es publico: un ticket es la llave de entrada a un
// evento. Antes TODO estaba abierto — cualquiera podia emitir tickets y
// escanearlos sin autenticarse. El trabajo de B2 protegia contra el doble
// canje concurrente, pero no contra alguien que simplemente llamara al
// endpoint.

export const getAll = async (quien: actor) => {
  try {
    // Un ADMIN ve todos; cualquier otro, solo los suyos. El filtro se arma con
    // el id del token, asi que no hay forma de pedir los ajenos.
    const tickets = await prisma.digital_ticket.findMany({
      where: es_admin(quien) ? {} : { id_user: quien.id },
    });
    return tickets;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener tickets digitales');
  }
};

export const getById = async (id: number, quien: actor) => {
  const ticket_found = await prisma.digital_ticket.findUnique({
    where: { id },
  });

  if (!ticket_found) return null;

  // 404 y no 403: responder "existe pero no es tuyo" le confirma a un curioso
  // que ese id existe. Mismo criterio que en las ordenes.
  if (!es_admin(quien) && ticket_found.id_user !== quien.id) {
    throw new NotFoundError('Ticket no encontrado');
  }

  return ticket_found;
};

export const create = async (data: create_digitalticket_DTO, quien: actor) => {
  try {
    // contar -> decidir -> crear tiene la misma carrera que la reserva de
    // stock: dos emisiones simultaneas del ultimo ticket pasan las dos el
    // chequeo y se emite uno de mas.
    //
    // Aca no se puede resolver con un UPDATE condicional (no estamos
    // actualizando: estamos insertando), asi que se sube el nivel de
    // aislamiento. Serializable hace que Postgres aborte una de las dos
    // transacciones si el resultado no equivale a haberlas corrido en fila.
    const ticket_created = await prisma.$transaction(async (tx) => {
      const order_item = await tx.order_item.findUnique({
        where: { id: data.id_order_item },
        include: { FK_order: true },
      });
      if (!order_item) throw new ValidationError('El item de la orden no existe');

      // Solo el dueño de la orden (o un ADMIN) puede emitir sus tickets.
      exigir_dueno(quien, order_item.FK_order.id_user, 'Esa orden no te pertenece');

      // Y solo si esta pagada: emitir tickets de una orden PENDING seria
      // entregar la entrada antes de cobrarla.
      if (order_item.FK_order.status !== 'PAID') {
        throw new ValidationError(
          `La orden esta en estado ${order_item.FK_order.status}: solo se emiten tickets de ordenes pagadas`
        );
      }

      const user = await tx.user.findUnique({
        where: { id: data.id_user },
      });
      if (!user) throw new ValidationError('El usuario no existe');

      const issued_tickets = await tx.digital_ticket.count({
        where: { id_order_item: data.id_order_item },
      });
      if (issued_tickets >= order_item.quantity) {
        throw new ValidationError('Ya se emitieron todos los tickets de este item');
      }

      const qr_code = uuidv4();

      return tx.digital_ticket.create({ data: { ...data, qr_code } });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

    return ticket_created;
  } catch (error) {
    logger.error((error as Error).message);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2034') {
      throw new ConflictError('Otra emision de tickets ocurrio al mismo tiempo, intentalo de nuevo');
    }
    throw error;
  }
};

export const scan = async (qr_code: string, quien: actor) => {
  try {
    // Primero se resuelve QUIEN puede escanear este ticket. Escanear es una
    // accion del organizador en la puerta de SU evento: el dueño del ticket no
    // se autovalida la entrada, y el organizador de otro evento no tiene nada
    // que hacer aca.
    //
    // El camino es ticket -> order_item -> entry -> event -> id_user.
    const ticket = await prisma.digital_ticket.findUnique({
      where: { qr_code },
      include: { FK_order_item: { include: { FK_entry: { include: { FK_event: true } } } } },
    });
    if (!ticket) throw new NotFoundError('El ticket no existe');

    const organizador = ticket.FK_order_item.FK_entry.FK_event.id_user;
    if (!es_admin(quien) && quien.id !== organizador) {
      throw new ForbiddenError('Solo el organizador del evento puede escanear sus tickets');
    }

    // ── CANJE ATOMICO ──────────────────────────────────────────────────
    // El status viejo va en el WHERE. Solo la primera llamada encuentra el
    // ticket en UNSCANNED y lo pasa a SCANNED; cualquier llamada posterior
    // (o simultanea) no matchea ninguna fila.
    //
    // Con el patron anterior -leer, chequear status, actualizar- dos escaneos
    // del mismo QR al mismo tiempo pasaban los dos el chequeo y el ticket se
    // canjeaba dos veces. Justo lo que el CUU 3 pide evitar.
    const escaneado = await prisma.digital_ticket.updateMany({
      where: { qr_code, status: 'UNSCANNED' },
      data: {
        status: 'SCANNED',
        date_time_scan: new Date(),
      },
    });

    // count === 0 aca solo puede significar "ya estaba escaneado": la
    // existencia ya la verificamos arriba.
    if (escaneado.count === 0) {
      throw new ValidationError('El ticket ya fue escaneado');
    }

    return await prisma.digital_ticket.findUnique({ where: { qr_code } });
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};
