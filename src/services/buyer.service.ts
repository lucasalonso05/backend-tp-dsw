import logger from '../config/logger';
import prisma from '../config/prisma'
import { create_buyer_DTO, update_buyer_DTO } from '../schemas/buyer.schema';

export const getAll = async () => {
  try {
    const buyers = await prisma.buyer.findMany();
    return buyers;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener los compradores');
  }
};

export const getById = async (id: number) => {
  try {
    const buyer_found = await prisma.buyer.findUnique({ where: { id } });
    return buyer_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener comprador');
  }
};

export const create = async (data: create_buyer_DTO) => {
  try {
    const buyer_created = await prisma.buyer.create({ data });
    return buyer_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo crear comprador');
  }
};

export const update = async (id: number, data: update_buyer_DTO) => {
  try {
    const buyer_updated = await prisma.buyer.update({
      where: { id },
      data,
    });
    return buyer_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo actualizar comprador');
  }
};

export const delete_ = async (id: number) => {
  try {
    const buyer_deleted = await prisma.buyer.delete({ where: { id } });
    return buyer_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo borrar comprador');
  }
};