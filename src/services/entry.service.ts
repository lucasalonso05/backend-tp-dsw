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

export const getById = async (id: number) => {
  try {
    const entry_found = await prisma.entry.findUnique({
      where: { id },
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

    const aggregate = await prisma.entry.aggregate({
      where: { id_event: data.id_event },
      _sum: { stock: true },
    });
    const current_total = aggregate._sum.stock ?? 0;
    if (current_total + data.stock > event.total_stock) {
      throw new Error('El stock de las entradas supera el stock total del evento');
    }

    const entry_created = await prisma.entry.create({ data });
    return entry_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

export const update = async (id: number, data: update_entry_DTO) => {
  try {
    const existing = await prisma.entry.findUnique({ where: { id } });
    if (!existing) throw new Error('La entrada no existe');

    if (data.id_event) {
      const event = await prisma.event.findUnique({
        where: { id: data.id_event },
      });
      if (!event) throw new Error('El evento no existe');
    }

    if (data.stock !== undefined && data.stock < existing.sold_stock) {
      throw new Error('El nuevo stock no puede ser menor a la cantidad ya vendida');
    }

    if (data.stock !== undefined) {
      const id_event = data.id_event ?? existing.id_event;
      const event = await prisma.event.findUnique({ where: { id: id_event } });
      if (!event) throw new Error('El evento no existe');

      const aggregate = await prisma.entry.aggregate({
        where: { id_event, NOT: { id } },
        _sum: { stock: true },
      });
      const others_total = aggregate._sum.stock ?? 0;
      if (others_total + data.stock > event.total_stock) {
        throw new Error('El stock de las entradas supera el stock total del evento');
      }
    }

    const entry_updated = await prisma.entry.update({
      where: { id },
      data,
    });
    return entry_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

export const delete_ = async (id: number) => {
  try {
    const entry_deleted = await prisma.entry.delete({
      where: { id },
    });
    return entry_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo eliminar la entrada');
  }
};
