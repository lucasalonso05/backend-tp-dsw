import bcrypt from 'bcrypt';
import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';
import type { PayloadToken } from '../config/jwt';
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

// Errores del negocio de usuarios. No llevan código HTTP: el controller decide cómo responderlos.
export class UserNotFoundError extends Error {
  constructor() {
    super('Usuario no encontrado');
    this.name = 'UserNotFoundError';
  }
}

export class UserAlreadyExistsError extends Error {
  constructor() {
    super('Ya existe un usuario con ese email, teléfono o documento');
    this.name = 'UserAlreadyExistsError';
  }
}

export class UserHasRelatedDataError extends Error {
  constructor() {
    super('No se puede eliminar el usuario: tiene eventos, lugares, órdenes o tickets asociados');
    this.name = 'UserHasRelatedDataError';
  }
}

// Traduce los errores de Prisma que tienen un significado para el negocio.
// Cualquier otro error se devuelve tal cual: es una falla inesperada.
const translatePrismaError = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') return new UserAlreadyExistsError(); // email, teléfono o documento repetido
    if (error.code === 'P2025') return new UserNotFoundError(); // el usuario no existe
    if (error.code === 'P2003') return new UserHasRelatedDataError(); // otras tablas lo referencian
  }
  return error;
};

export const getAll = async () => {
  return prisma.user.findMany({ select: user_select });
};

export const getById = async (id: number) => {
  const user = await prisma.user.findUnique({ where: { id }, select: user_select });
  if (!user) throw new UserNotFoundError();
  return user;
};

// `actor` es quien hace el pedido. En el registro público no hay nadie con sesión.
export const create = async (data: create_user_DTO, actor?: PayloadToken) => {
  // Solo un admin puede elegir el rol: en el registro público siempre es ASSISTANT.
  const role = actor?.role === 'ADMIN' ? data.role : 'ASSISTANT';
  const password = await bcrypt.hash(data.password, SALT_ROUNDS);

  try {
    return await prisma.user.create({
      data: { ...data, role, password },
      select: user_select,
    });
  } catch (error) {
    throw translatePrismaError(error);
  }
};

export const update = async (id: number, data: update_user_DTO, actor: PayloadToken) => {
  // El rol solo lo cambia un admin: si lo manda otro, se ignora.
  const { role, ...resto } = data;
  const changes = actor.role === 'ADMIN' ? data : resto;
  const fields = changes.password
    ? { ...changes, password: await bcrypt.hash(changes.password, SALT_ROUNDS) }
    : changes;

  try {
    return await prisma.user.update({ where: { id }, data: fields, select: user_select });
  } catch (error) {
    throw translatePrismaError(error);
  }
};

export const delete_ = async (id: number) => {
  try {
    return await prisma.user.delete({ where: { id }, select: user_select });
  } catch (error) {
    throw translatePrismaError(error);
  }
};