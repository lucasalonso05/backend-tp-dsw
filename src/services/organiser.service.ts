import prisma from '../config/prisma';
import { create_organiser_DTO, create_organiser_schema, update_organiser_DTO, update_organiser_schema} from '../schemas/organiser.schema';
import logger from '../config/logger'


export const getAll = async () => {
  try {

    const organisers = await prisma.organiser.findMany();
    return organisers; 
  } catch (error){
    logger.error((error as Error).message);
    throw new Error ('Error al obtener organizadores');
  }
};

export const getById = async (id: number) => {
  try {
    const organiser_found = await prisma.organiser.findUnique({where: {id}})
    return organiser_found;
  } catch (error){
    logger.error((error as Error).message);
    throw new Error ('Error al obtener organizador');
  }
};

export const create = async (data: create_organiser_DTO) => {
  try{
    const organiser_created = await prisma.organiser.create({data});
    return organiser_created;
  }catch(error){
    logger.error((error as Error).message);
    throw new Error ('No se pudo crear organizador');
  }
};

export const update = async (id: number, data: update_organiser_DTO) => {
  try{
    const organiser_updated = await prisma.organiser.update ({where: {id}, data});
    return organiser_updated;
  }catch (error){
    logger.error((error as Error).message);
    throw new Error('No se pudo actualizar organizador');
  }

};

export const delete_ = async (id: number) => {
  try{
    const organiser_deleted = await prisma.organiser.delete({where: {id}});
    return organiser_deleted;
  }catch(error){
    logger.error((error as Error).message);
    throw new Error('No se pudo eliminar organizador');
  }
};