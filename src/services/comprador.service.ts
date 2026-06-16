import prisma from '../config/prisma'
import { create_comprador_DTO, update_comprador_DTO } from '../schemas/comprador.schema';

export const getAll = async () => {
  try {
    const compradores = await prisma.comprador.findMany();
    return compradores;
  } catch (error) {
    throw new Error('Error al obtener los compradores');
  }
};

export const getById = async (id: number) => {
  try {
    const comprador_encontrado = await prisma.comprador.findUnique({ where: { id } });
    return comprador_encontrado;
  } catch (error) {
    throw new Error('Error al obtener comprador');
  }
};

export const create = async (data: create_comprador_DTO) => {
  try {
    const comprador_creado = await prisma.comprador.create({ data });
    return comprador_creado;
  } catch (error) {
    throw new Error('No se pudo crear comprador');
  }
};

export const update = async (id: number, data: update_comprador_DTO) => {
  try {
    const comprador_actualizado = await prisma.comprador.update({
      where: { id },
      data,
    });
    return comprador_actualizado;
  } catch (error) {
    throw new Error('No se pudo actualizar comprador');
  }
};

export const delete_ = async (id: number) => {
  try {
    const comprador_eliminado = await prisma.comprador.delete({ where: { id } });
    return comprador_eliminado;
  } catch (error) {
    throw new Error('No se pudo borrar comprador');
  }
};