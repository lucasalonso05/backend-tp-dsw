import logger from '../config/logger';
import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';
import { create_user_DTO, update_user_DTO } from '../schemas/user.schema';

export const getAll = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener los usuarios');
  }
};

export const getById = async (id: number) => {
  try {
    const user_found = await prisma.user.findUnique({ where: { id } });
    return user_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener usuario');
  }
};

export const create = async (data: create_user_DTO) => {
  try {
    const user_created = await prisma.user.create({ data });
    return user_created;
  } catch (error) {
    logger.error((error as Error).message);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new Error('Ya existe un usuario con ese email, teléfono o documento');
    }
    throw new Error('No se pudo crear el usuario');
  }
};

export const update = async (id: number, data: update_user_DTO) => {
  try {
    const user_updated = await prisma.user.update({
      where: { id },
      data,
    });
    return user_updated;
  } catch (error) {
    logger.error((error as Error).message);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new Error('Ya existe un usuario con ese email, teléfono o documento');
    }
    throw new Error('No se pudo actualizar el usuario');
  }
};

export const delete_ = async (id: number) => {
  try {
    const user_deleted = await prisma.user.delete({ where: { id } });
    return user_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo borrar el usuario');
  }
};
