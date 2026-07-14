import logger from '../config/logger';
import prisma from '../config/prisma'
import { create_ticketdigital_DTO, update_ticketdigital_DTO} from '../schemas/ticket_digital.schema';
import { v4 as uuidv4 } from 'uuid';

export const getAll = async () => {
  try {
    const tickets = await prisma.ticket_digital.findMany();
    return tickets;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener tickets digitales');
  }
};

export const getById = async (id_comprador: number, cod_orden: number, cod: number) => {
  try {
    const ticket_encontrado = await prisma.ticket_digital.findUnique({
      where: { id_comprador_cod_orden_cod: { id_comprador, cod_orden, cod } },
    });
    return ticket_encontrado;

  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener ticket');
  }
};

export const create = async (data: create_ticketdigital_DTO) => {
  try {
    const comprador = await prisma.comprador.findUnique({
      where: { id: data.id_comprador },
    });
    if (!comprador) throw new Error('El comprador no existe');

    const asistente = await prisma.asistente.findUnique({
      where: { id: data.id_asistente },
    });
    if (!asistente) throw new Error('El asistente no existe');

    const orden = await prisma.orden.findUnique({
      where: { 
        id_comprador_cod: { 
          id_comprador: data.id_comprador, 
          cod: data.cod_orden 
        } 
      },
    });
    if (!orden) throw new Error('La orden no existe');

    const qr = uuidv4();
    
    const ticket_digital_creado = await prisma.ticket_digital.create({data: {...data, qr}});
    return ticket_digital_creado;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
  };

export const escanear = async (qr: string) => {

  try{
    const ticket = await prisma.ticket_digital.findUnique({where: {qr}});
    if(!ticket) throw new Error ('El ticket no existe');
    if (ticket.estado === 'ESCANEADO') throw new Error ('El ticket ya fue escaneado');

    const ticket_actualizado = await prisma.ticket_digital.update({
      where: {qr}, 
      data: {
        estado: 'ESCANEADO',
        fecha_hora_uso: new Date(),
      }
    });
    return ticket_actualizado;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }

};