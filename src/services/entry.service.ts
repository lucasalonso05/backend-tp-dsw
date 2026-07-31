import logger from '../config/logger';
import prisma from '../config/prisma'
import { create_entry_DTO, update_entry_DTO } from '../schemas/entry.schema';

export const getAll = async () => {
  try {
    const entries = await prisma.entry.findMany();
    return entries;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener las entradas');
  }
};

export const getById = async (id_event: number, code: number) => {
  try {
    const entry_found = await prisma.entry.findUnique({
      where: { id_event_code: { id_event, code } },
    });
    return entry_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener entrada');
  }
};

export const create = async (data: create_entry_DTO) => {
  try {
    const event = await prisma.event.findUnique({
      where: { id: data.id_event },
    });
    if (!event) throw new Error('El evento no existe');

    const entry_created = await prisma.entry.create({ data });
    return entry_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

export const update = async (id_event: number, code: number, data: update_entry_DTO) => {
  try {
    if (data.id_event) {
      const event = await prisma.event.findUnique({
        where: { id: data.id_event },
      });
      if (!event) throw new Error('El evento no existe');
    }

    const entry_updated = await prisma.entrada.update({
      where: { id_event_code: { id_event, code } },
      data,
    });
    return entry_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo actualizar la entrada');
  }
};

export const delete_ = async (id_event: number, code: number) => {
  try {
    const entry_deleted = await prisma.entry.delete({
      where: { id_event_code: { id_event, code } },
    });
    return entry_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo eliminar la entrada');
  }
};