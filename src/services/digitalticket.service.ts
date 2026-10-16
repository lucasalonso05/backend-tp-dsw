import logger from '../config/logger';
import prisma from '../config/prisma'
import { Prisma } from '../generated/prisma';
import { create_digitalticket_DTO } from '../schemas/digitalticket.schema';
import { v4 as uuidv4 } from 'uuid';

// Lo que necesita quien escanea: de qué evento y tipo de entrada es, y de quién.
const para_escaneo = {
  FK_user: { select: { id: true, name: true, surname: true } },
  FK_order_item: { include: { FK_entry: { include: { FK_event: true } } } },
} satisfies Prisma.digital_ticketInclude;

// Sin id_user devuelve todos (para un admin); con id_user, solo los de ese titular.
export const getAll = async (id_user?: number) => {
  try {
    const tickets = await prisma.digital_ticket.findMany({ where: { id_user } });
    return tickets;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener tickets digitales');
  }
};

export const getById = async (id: number) => {
  try {
    const ticket_found = await prisma.digital_ticket.findUnique({
      where: { id },
    });
    return ticket_found;

  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener ticket');
  }
};

export const create = async (data: create_digitalticket_DTO) => {
  try {
    const order_item = await prisma.order_item.findUnique({
      where: { id: data.id_order_item },
      include: { FK_order: true },
    });
    if (!order_item) throw new Error('El item de la orden no existe');
    if (order_item.FK_order.status !== 'PAID') throw new Error('La orden no está pagada');

    const user = await prisma.user.findUnique({
      where: { id: data.id_user },
    });
    if (!user) throw new Error('El usuario no existe');

    const issued_tickets = await prisma.digital_ticket.count({
      where: { id_order_item: data.id_order_item },
    });
    if (issued_tickets >= order_item.quantity) {
      throw new Error('Ya se emitieron todos los tickets de este item');
    }

    const qr_code = uuidv4();

    const ticket_created = await prisma.digital_ticket.create({ data: { ...data, qr_code } });
    return ticket_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

// Busca un ticket por su código QR, con su evento, tipo de entrada y titular.
export const findForScan = async (qr_code: string) => {
  try {
    const ticket = await prisma.digital_ticket.findUnique({ where: { qr_code }, include: para_escaneo });
    return ticket;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al buscar el ticket');
  }
};

// Marca el ticket como escaneado solo si todavía no lo estaba.
// Devuelve false si otro escaneo se adelantó.
export const markScanned = async (id: number) => {
  try {
    const result = await prisma.digital_ticket.updateMany({
      where: { id, status: 'UNSCANNED' },
      data: { status: 'SCANNED', date_time_scan: new Date() },
    });
    return result.count === 1;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al escanear el ticket');
  }
};