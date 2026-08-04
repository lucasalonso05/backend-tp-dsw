import logger from '../config/logger';
import prisma from '../config/prisma'
import { create_digitalticket_DTO } from '../schemas/digitalticket.schema';
import { v4 as uuidv4 } from 'uuid';

export const getAll = async () => {
  try {
    const tickets = await prisma.digital_ticket.findMany();
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
    });
    if (!order_item) throw new Error('El item de la orden no existe');

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

export const scan = async (qr_code: string) => {

  try{
    const ticket = await prisma.digital_ticket.findUnique({ where: { qr_code } });
    if (!ticket) throw new Error('El ticket no existe');
    if (ticket.status === 'SCANNED') throw new Error('El ticket ya fue escaneado');

    const ticket_updated = await prisma.digital_ticket.update({
      where: { qr_code },
      data: {
        status: 'SCANNED',
        date_time_scan: new Date(),
      }
    });
    return ticket_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }

};
