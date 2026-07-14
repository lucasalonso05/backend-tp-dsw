import logger from '../config/logger';
import prisma from '../config/prisma'
import { create_entrada_DTO, update_entrada_DTO } from '../schemas/entrada.schema';

export const getAll = async () => {
  try {
    const entradas = await prisma.entrada.findMany();
    return entradas;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener las entradas');
  }
};

export const getById = async (id_evento: number, cod: number) => {
  try {
    const entrada_encontrada = await prisma.entrada.findUnique({
      where: { id_evento_cod: { id_evento, cod } },
    });
    return entrada_encontrada;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener entrada');
  }
};

export const create = async (data: create_entrada_DTO) => {
  try {
    const evento = await prisma.evento.findUnique({
      where: { id: data.id_evento },
    });
    if (!evento) throw new Error('El evento no existe');

    const entrada_creada = await prisma.entrada.create({ data });
    return entrada_creada;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

export const update = async (id_evento: number, cod: number, data: update_entrada_DTO) => {
  try {
    if (data.id_evento) {
      const evento = await prisma.evento.findUnique({
        where: { id: data.id_evento },
      });
      if (!evento) throw new Error('El evento no existe');
    }

    const entrada_actualizada = await prisma.entrada.update({
      where: { id_evento_cod: { id_evento, cod } },
      data,
    });
    return entrada_actualizada;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo actualizar la entrada');
  }
};

export const delete_ = async (id_evento: number, cod: number) => {
  try {
    const entrada_eliminada = await prisma.entrada.delete({
      where: { id_evento_cod: { id_evento, cod } },
    });
    return entrada_eliminada;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('No se pudo eliminar la entrada');
  }
};