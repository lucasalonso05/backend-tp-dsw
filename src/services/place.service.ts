import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';
import type { PayloadToken } from '../config/jwt';
import { canManage } from '../middlewares/auth.middleware';
import { create_place_DTO, update_place_DTO } from '../schemas/place.schema';

// Errores del negocio de lugares. No llevan código HTTP: el controller decide cómo responderlos.
export class PlaceNotFoundError extends Error {
  constructor() {
    super('Lugar no encontrado');
    this.name = 'PlaceNotFoundError';
  }
}

export class NotPlaceOwnerError extends Error {
  constructor(action: string) {
    super(`Solo el dueño del lugar o un admin pueden ${action}`);
    this.name = 'NotPlaceOwnerError';
  }
}

// El dueño indicado no sirve: no existe o no es organizador.
export class InvalidOwnerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidOwnerError';
  }
}

export class PlaceHasEventsError extends Error {
  constructor() {
    super('No se puede eliminar el lugar: tiene eventos asociados');
    this.name = 'PlaceHasEventsError';
  }
}

export const getAll = async () => {
  return prisma.place.findMany();
};

export const getById = async (id: number) => {
  const place = await prisma.place.findUnique({ where: { id } });
  if (!place) throw new PlaceNotFoundError();
  return place;
};

// Un lugar siempre pertenece a un organizador: el dueño tiene que existir y tener ese rol.
const checkOwner = async (id_user: number) => {
  const owner = await prisma.user.findUnique({ where: { id: id_user } });
  if (!owner) throw new InvalidOwnerError('El usuario no existe');
  if (owner.role !== 'ORGANISER') throw new InvalidOwnerError('El usuario no es un organizador');
};

// Busca el lugar y revisa que quien hace el pedido sea su dueño o un admin.
// Para saberlo hay que leer el lugar: por eso este permiso vive acá y no en la ruta.
const findManageablePlace = async (id: number, actor: PayloadToken, action: string) => {
  const place = await getById(id);
  if (!canManage(actor, place.id_user)) throw new NotPlaceOwnerError(action);
  return place;
};

// `actor` es quien hace el pedido: la ruta exige sesión.
export const create = async (data: create_place_DTO, actor: PayloadToken) => {
  // El dueño es quien crea el lugar. Un admin puede crearlo a nombre de un organizador.
  const id_user = actor.role === 'ADMIN' && data.id_user ? data.id_user : actor.id;
  await checkOwner(id_user);

  return prisma.place.create({ data: { ...data, id_user } });
};

export const update = async (id: number, data: update_place_DTO, actor: PayloadToken) => {
  await findManageablePlace(id, actor, 'modificarlo');

  // Solo un admin puede pasar el lugar a otro organizador: si lo manda otro, se ignora.
  const { id_user, ...resto } = data;
  const isAdmin = actor.role === 'ADMIN';
  if (isAdmin && id_user) await checkOwner(id_user);

  return prisma.place.update({ where: { id }, data: isAdmin ? data : resto });
};

export const delete_ = async (id: number, actor: PayloadToken) => {
  await findManageablePlace(id, actor, 'eliminarlo');

  try {
    return await prisma.place.delete({ where: { id } });
  } catch (error) {
    // P2003: la base no deja borrar un lugar que tiene eventos (la relación lo impide).
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003') {
      throw new PlaceHasEventsError();
    }
    throw error;
  }
};