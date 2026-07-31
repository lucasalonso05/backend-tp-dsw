import logger from '../config/logger';
import prisma from '../config/prisma'
import { status_event } from '../generated/prisma/index.js';
import { create_event_DTO, update_event_DTO } from '../schemas/event.schema';


export const getAll = async () => {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener los eventos');
  }
};

export const getById = async (id: number) => {
  try {
    const event_found = await prisma.event.findUnique({ where: { id } });
    return event_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener evento');
  }
};

export const create = async (data: create_event_DTO) => {

  try{
    const organiser = await prisma.organiser.findUnique({
      where: { id: data.id_organiser }
    });
    if (!organiser) throw new Error('El organizador no existe');


    const place = await prisma.place.findUnique({
      where: { id: data.id_place }
    });
    if (!place) throw new Error('El lugar no existe');

   
        const event_created = await prisma.event.create({ data });
        return event_created;
  
  } catch(error){
    logger.error((error as Error).message);
      throw error;
  }
};


  
export const update = async (id: number, data: update_event_DTO) => {
  try {
    if (data.id_organiser){
      const organiser = await prisma.organiser.findUnique({
        where: { id: data.id_organiser }
      });
      if (!organiser) throw new Error('El organizador no existe');
    }

    if (data.id_place) {
      const place = await prisma.place.findUnique({
        where: { id: data.id_place }
      });
      if (!place) throw new Error('El lugar no existe');
    }

    const shouldCleanCancellation = data.status && data.status !== 'CANCELLED';

    const event_updated = await prisma.event.update({ 
      where: { id }, 
      data: {
        ...data, 
        date_time_cancellation: shouldCleanCancellation ? null : data.date_time_cancellation
      }
    });

    return event_updated;

  } catch(error){
    logger.error((error as Error).message);
    throw error;
  }
};

export const delete_ = async (id: number, data: update_event_DTO) => {
  try{  
    if (data.id_organiser){
          const organiser = await prisma.organiser.findUnique({
            where: { id: data.id_organiser }
        }); 
        if (!organiser) throw new Error('El organizador no existe');
      }

        if (data.id_place) {
          const place = await prisma.place.findUnique({
          where: { id: data.id_place }
          });
        if (!place) throw new Error('El lugar no existe');
        }
          const event_cancelled = await prisma.event.update({where: { id }, data:{estado:'CANCELLED', date_time_cancellation: new Date()} });
          return event_cancelled;
      
  }catch(error){
    logger.error((error as Error).message);
      throw error;
  }
};

    
    
    
    
    
    
    
    