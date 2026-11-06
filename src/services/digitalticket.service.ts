import { v4 as uuidv4 } from 'uuid';
import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';
import type { PayloadToken } from '../config/jwt';
import { canManage } from '../middlewares/auth.middleware';
import { create_digitalticket_DTO } from '../schemas/digitalticket.schema';

// Lo que necesita quien escanea: de qué evento y tipo de entrada es, y de quién.
const for_scan = {
  FK_user: { select: { id: true, name: true, surname: true } },
  FK_order_item: { include: { FK_entry: { include: { FK_event: true } } } },
} satisfies Prisma.digital_ticketInclude;

// Errores del negocio de tickets. No llevan código HTTP: el controller decide cómo responderlos.
export class TicketNotFoundError extends Error {
  constructor() {
    super('Ticket no encontrado');
    this.name = 'TicketNotFoundError';
  }
}

export class TicketForbiddenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TicketForbiddenError';
  }
}

// Lo que se mandó está mal: por ejemplo, un item de orden o un usuario que no existen.
export class InvalidTicketError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidTicketError';
  }
}

// Lo que se pidió choca con el estado actual: ya escaneado, orden sin pagar, tickets ya emitidos.
export class TicketConflictError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TicketConflictError';
  }
}

// Un admin ve todos los tickets; cualquier otro, solo los suyos.
export const getAll = async (actor: PayloadToken) => {
  return prisma.digital_ticket.findMany({
    where: actor.role === 'ADMIN' ? {} : { id_user: actor.id },
  });
};

// Un ticket lo ve su titular o un admin. Para cualquier otro, no existe:
// los tickets son privados y sus ids son correlativos, igual que las órdenes.
export const getById = async (id: number, actor: PayloadToken) => {
  const ticket = await prisma.digital_ticket.findUnique({ where: { id } });
  if (!ticket || !canManage(actor, ticket.id_user)) throw new TicketNotFoundError();
  return ticket;
};

// Emisión manual: solo un admin (lo exige la ruta). Lo normal es que se emitan al pagar la orden.
export const create = async (data: create_digitalticket_DTO) => {
  const order_item = await prisma.order_item.findUnique({
    where: { id: data.id_order_item },
    include: { FK_order: true },
  });
  if (!order_item) throw new InvalidTicketError('El item de la orden no existe');
  if (order_item.FK_order.status !== 'PAID') throw new TicketConflictError('La orden no está pagada');

  const user = await prisma.user.findUnique({ where: { id: data.id_user } });
  if (!user) throw new InvalidTicketError('El usuario no existe');

  const issued_tickets = await prisma.digital_ticket.count({
    where: { id_order_item: data.id_order_item },
  });
  if (issued_tickets >= order_item.quantity) {
    throw new TicketConflictError('Ya se emitieron todos los tickets de este item');
  }

  // UUID y no el id: un código predecible se podría falsificar mirando otro ticket.
  return prisma.digital_ticket.create({ data: { ...data, qr_code: uuidv4() } });
};

// Canjea el ticket en la puerta. Solo puede el organizador del evento del ticket, o un admin.
// Canjea el ticket en la puerta del evento `id_event`.
// Solo puede el organizador del evento del ticket, o un admin.
export const scan = async (qr_code: string, id_event: number, actor: PayloadToken) => {
  const ticket = await prisma.digital_ticket.findUnique({ where: { qr_code }, include: for_scan });
  if (!ticket) throw new TicketNotFoundError();

  const event = ticket.FK_order_item.FK_entry.FK_event;
  if (!canManage(actor, event.id_user)) {
    throw new TicketForbiddenError('Este ticket es de un evento que no organizás');
  }

  // El ticket tiene que ser del evento que se está controlando: con dos eventos propios,
  // en la puerta de uno no puede entrar alguien con la entrada del otro.
  if (event.id !== id_event) {
    throw new TicketConflictError(`Este ticket es para otro evento: "${event.title}"`);
  }

  // Un evento cancelado no habilita ingresos, aunque el ticket esté sin usar.
  if (event.status === 'CANCELLED') {
    throw new TicketConflictError('El evento fue cancelado: el ticket no habilita el ingreso');
  }

  try {
    // Canje atómico: el UPDATE solo encuentra la fila si el ticket sigue sin escanear.
    // Si dos escaneos llegan a la vez, uno lo canjea y el otro recibe P2025.
    return await prisma.digital_ticket.update({
      where: { id: ticket.id, status: 'UNSCANNED' },
      data: { status: 'SCANNED', date_time_scan: new Date() },
      include: for_scan,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      throw new TicketConflictError('El ticket ya fue escaneado');
    }
    throw error;
  }
};