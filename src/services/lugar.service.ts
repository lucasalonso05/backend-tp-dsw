import  prisma from '../config/prisma'
import { create_lugar_DTO, update_lugar_DTO } from '../schemas/lugar.schema';


export const getAll = async () => {
  try {
    const lugares = await prisma.lugar.findMany();
    return lugares;
  } catch (error) {
    throw new Error('Error al obtener los lugares');
  }
};

export const getById = async (id: number) => {
  try {
    const lugar_encontrado = await prisma.lugar.findUnique({ where: { id } });
    return lugar_encontrado;
  } catch (error) {
    throw new Error('Error al obtener lugar');
  }
};

export const create = async (data: create_lugar_DTO) => {
  try {
    const lugar_creado = await prisma.lugar.create({ data });
    return lugar_creado;
  } catch (error) {
    throw new Error('No se pudo crear lugar');
  }
};

export const update = async (id: number, data: update_lugar_DTO) => {
  try {
    const lugar_actualizado = await prisma.lugar.update({
      where: { id },
      data,
    });
    return lugar_actualizado;
  } catch (error) {
    throw new Error('No se pudo actualizar lugar');
  }
};

export const delete_ = async (id: number) => {
  try {
    const lugar_eliminado = await prisma.lugar.delete({ where: { id } });
    return lugar_eliminado;
  } catch (error) {
    throw new Error('No se pudo borrar lugar');
  }
};
