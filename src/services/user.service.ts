import bcrypt from 'bcrypt';
import logger from '../config/logger';
import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';
import { create_user_DTO, update_user_DTO } from '../schemas/user.schema';

const SALT_ROUNDS = 10;

// Campos que se exponen hacia afuera: nunca incluye password
const user_select = {
  id: true,
  role: true,
  doc_type: true,
  doc_number: true,
  name: true,
  surname: true,
  email: true,
  telephone: true,
  cuit: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.userSelect;

export const getAll = async () => {
  try {
    const users = await prisma.user.findMany({ select: user_select });
    return users;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener los usuarios');
  }
};

export const getById = async (id: number) => {
  try {
    const user_found = await prisma.user.findUnique({
      where: { id },
      select: user_select,
    });
    return user_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener usuario');
  }
};

export const create = async (data: create_user_DTO) => {
  try {
    const password = await bcrypt.hash(data.password, SALT_ROUNDS);
    const user_created = await prisma.user.create({
      data: { ...data, password },
      select: user_select,
    });
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
      data: data.password
        ? { ...data, password: await bcrypt.hash(data.password, SALT_ROUNDS) }
        : data,
      select: user_select,
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
    const user_deleted = await prisma.user.delete({
      where: { id },
      select: user_select,
    });
    return user_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo borrar el usuario');
  }
};
