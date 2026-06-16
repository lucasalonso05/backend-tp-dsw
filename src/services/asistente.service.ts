import prisma from '../config/prisma'
import { create_asistente_DTO, update_asistente_DTO } from '../schemas/asistente.schema';

export const getAll = async () => {
  try {
    const asistentes = await prisma.asistente.findMany();
    return asistentes;
  } catch (error) {
    throw new Error('Error al obtener los asistentes');
  }
};

export const getById = async (id: number) => {
  try {
    const asistente_encontrado = await prisma.asistente.findUnique({ where: { id } });
    return asistente_encontrado;
  } catch (error) {
    throw new Error('Error al obtener asistente');
  }
};

export const create = async (data: create_asistente_DTO) => {
  try {
    const asistente_creado = await prisma.asistente.create({ data });
    return asistente_creado;
  } catch (error) {
    throw new Error('No se pudo crear asistente');
  }
};

export const update = async (id: number, data: update_asistente_DTO) => {
  try {
    const asistente_actualizado = await prisma.asistente.update({
      where: { id },
      data,
    });
    return asistente_actualizado;
  } catch (error) {
    throw new Error('No se pudo actualizar asistente');
  }
};

export const delete_ = async (id: number) => {
  try {
    const asistente_eliminado = await prisma.asistente.delete({ where: { id } });
    return asistente_eliminado;
  } catch (error) {
    throw new Error('No se pudo borrar asistente');
  }
};