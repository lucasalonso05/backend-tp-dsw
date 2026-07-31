import logger from '../config/logger';
import prisma from '../config/prisma'
import { create_digitalticket_DTO, update_digitalticket_DTO} from '../schemas/digitalticket.schema';
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

export const getById = async (id_buyer: number, code_order: number, code: number) => {
  try {
    const ticket_found = await prisma.digital_ticket.findUnique({
      where: { id_buyer_code_order_code: { id_buyer, code_order, code } },
    });
    return ticket_found;

  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener ticket');
  }
};

export const create = async (data: create_digitalticket_DTO) => {
  try {
    const buyer = await prisma.buyer.findUnique({
      where: { id: data.id_buyer },
    });
    if (!buyer) throw new Error('El comprador no existe');

    const assistant = await prisma.assistant.findUnique({
      where: { id: data.id_assistant },
    });
    if (!assistant) throw new Error('El asistente no existe');

    const ororderden = await prisma.order.findUnique({
      where: { 
        id_buyer_code: { 
          id_buyer: data.id_buyer, 
          code: data.code_order 
        } 
      },
    });
    if (!order) throw new Error('La orden no existe');

    const qr = uuidv4();
    
    const ticket_created = await prisma.digital_ticket.create({data: {...data, qr}});
    return ticket_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
  };

export const scan = async (qr: string) => {

  try{
    const ticket = await prisma.digital_ticket.findUnique({where: {qr}});
    if(!ticket) throw new Error ('El ticket no existe');
    if (ticket.status === 'SCANNED') throw new Error ('El ticket ya fue escaneado');

    const ticket_updated = await prisma.digital_ticket.update({
      where: {qr}, 
      data: {
        status: 'SCANNED',
        date_time_use: new Date(),
      }
    });
    return ticket_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }

};

export function scan(qr: string) {
  throw new Error('Function not implemented.');
}
