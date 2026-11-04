import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';
import { create_category_DTO, update_category_DTO } from '../schemas/category.schema';

// Errores del negocio de categorías. No llevan código HTTP: el controller decide cómo responderlos.
export class CategoryNotFoundError extends Error {
  constructor() {
    super('Categoría no encontrada');
    this.name = 'CategoryNotFoundError';
  }
}

// Lleva el nombre ya guardado, no el que se intentó crear, para poder decir cuál elegir.
export class CategoryAlreadyExistsError extends Error {
  constructor(name: string) {
    super(`Ya existe la categoría "${name}"`);
    this.name = 'CategoryAlreadyExistsError';
  }
}

export class CategoryHasEventsError extends Error {
  constructor() {
    super('No se puede eliminar la categoría: tiene eventos asociados');
    this.name = 'CategoryHasEventsError';
  }
}

// Alfabético: la lista alimenta el desplegable del formulario y el filtro de la cartelera.
export const getAll = async () => {
  return prisma.category.findMany({ orderBy: { name: 'asc' } });
};

export const getById = async (id: number) => {
  const category = await prisma.category.findUnique({ where: { id } });
  if (!category) throw new CategoryNotFoundError();
  return category;
};

// "Discoteca" y "DiscoTeca" son la misma categoría: se busca sin distinguir mayúsculas.
const findByName = async (name: string) => {
  return prisma.category.findFirst({ where: { name: { equals: name, mode: 'insensitive' } } });
};

export const create = async (data: create_category_DTO) => {
  const existing = await findByName(data.name);
  if (existing) throw new CategoryAlreadyExistsError(existing.name);

  try {
    return await prisma.category.create({ data });
  } catch (error) {
    // P2002: dos pedidos a la vez con el mismo nombre. El unique de la base es la última red.
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new CategoryAlreadyExistsError(data.name);
    }
    throw error;
  }
};

export const update = async (id: number, data: update_category_DTO) => {
  await getById(id);

  const existing = await findByName(data.name);
  // Corregirle las mayúsculas a la propia categoría sí vale: el choque es con otra.
  if (existing && existing.id !== id) throw new CategoryAlreadyExistsError(existing.name);

  try {
    return await prisma.category.update({ where: { id }, data });
  } catch (error) {
    // P2002: otro pedido le puso el mismo nombre a otra categoría al mismo tiempo.
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new CategoryAlreadyExistsError(data.name);
    }
    throw error;
  }
};

export const delete_ = async (id: number) => {
  await getById(id);

  try {
    return await prisma.category.delete({ where: { id } });
  } catch (error) {
    // P2003: la base no deja borrar una categoría que tiene eventos (la relación lo impide).
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003') {
      throw new CategoryHasEventsError();
    }
    throw error;
  }
};
