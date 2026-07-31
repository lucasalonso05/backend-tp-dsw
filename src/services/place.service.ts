import logger from '../config/logger'
import  prisma from '../config/prisma'
import { create_place_DTO, update_place_DTO } from '../schemas/place.schema';


export const getAll = async () => {
  try {
    const places = await prisma.place.findMany();
    return places;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener los lugares');
  }
};

export const getById = async (id: number) => {
  try {
    const place_found = await prisma.place.findUnique({ where: { id } });
    return place_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener lugar');
  }
};

export const create = async (data: create_place_DTO) => {
  try {
    const place_created = await prisma.place.create({ data });
    return place_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo crear lugar');
  }
};

export const update = async (id: number, data: update_place_DTO) => {
  try {
    const place_updated = await prisma.place.update({
      where: { id },
      data,
    });
    return place_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo actualizar lugar');
  }
};

export const delete_ = async (id: number) => {
  try {
    const place_deleted = await prisma.place.delete({ where: { id } });
    return place_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo borrar lugar');
  }
};
