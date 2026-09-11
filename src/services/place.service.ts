import logger from '../config/logger'
import prisma from '../config/prisma'
import { actor, exigir_dueno, exigir_organizador } from '../lib/actor';
import { NotFoundError, ValidationError } from '../lib/errors';
import { create_place_DTO, update_place_DTO } from '../schemas/place.schema';

// El catalogo de lugares es publico: un asistente tiene que poder ver donde es
// un evento sin estar logueado. Lo que se protege es ESCRIBIR, no leer.
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

export const create = async (data: create_place_DTO, quien: actor) => {
  try {
    exigir_organizador(quien);

    // El dueño es quien crea, y sale del token.
    const place_created = await prisma.place.create({
      data: { ...data, id_user: quien.id },
    });
    return place_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

export const update = async (id: number, data: update_place_DTO, quien: actor) => {
  try {
    const existing = await prisma.place.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError('El lugar no existe');

    exigir_dueno(quien, existing.id_user, 'El lugar no te pertenece');

    // Bajar el aforo por debajo de lo que ya prometieron los eventos que se
    // hacen aca romperia la regla que event.create y event.update sostienen.
    // Es el mismo invariante de B7, mirado desde el lugar: si se controla de
    // un solo lado, no es un invariante.
    if (data.capacity !== undefined) {
      const mayor = await prisma.event.aggregate({
        where: { id_place: id, status: { not: 'CANCELLED' } },
        _max: { total_stock: true },
      });
      const comprometido = mayor._max.total_stock ?? 0;
      if (data.capacity < comprometido) {
        throw new ValidationError(
          `La capacidad (${data.capacity}) no puede ser menor al stock de un evento ya programado aca (${comprometido})`
        );
      }
    }

    const place_updated = await prisma.place.update({
      where: { id },
      data,
    });
    return place_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

export const delete_ = async (id: number, quien: actor) => {
  try {
    const existing = await prisma.place.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError('El lugar no existe');

    exigir_dueno(quien, existing.id_user, 'El lugar no te pertenece');

    const place_deleted = await prisma.place.delete({ where: { id } });
    return place_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};
