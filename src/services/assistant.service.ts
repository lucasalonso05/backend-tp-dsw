import logger from '../config/logger';

import prisma from '../config/prisma'
import { create_assistant_DTO, update_assistant_DTO } from '../schemas/assistant.schema';

export const getAll = async () => {
  try {
    const assistants = await prisma.assistant.findMany();
    return assistants;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener los asistentes');
  }
};

export const getById = async (id: number) => {
  try {
    const assistant_found = await prisma.assistant.findUnique({ where: { id } });
    return assistant_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener asistente');
  }
};

export const create = async (data: create_assistant_DTO) => {
  try {
    const assistant_created = await prisma.assistant.create({ data });
    return assistant_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo crear asistente');
  }
};

export const update = async (id: number, data: update_assistant_DTO) => {
  try {
    const assistant_updated = await prisma.assistant.update({
      where: { id },
      data,
    });
    return assistant_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo actualizar asistente');
  }
};

export const delete_ = async (id: number) => {
  try {
    const assistant_deleted = await prisma.assistant.delete({ where: { id } });
    return assistant_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo borrar asistente');
  }
};