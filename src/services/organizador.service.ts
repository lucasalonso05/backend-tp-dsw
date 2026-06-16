import prisma from '../config/prisma';
import { create_organizador_DTO, create_organizador_schema, update_organizador_DTO, update_organizador_schema} from '../schemas/organizador.schema';

export const getAll = async () => {
  try {

    const organizadores = await prisma.organizador.findMany();
    return organizadores; 
  } catch (error){
    throw new Error ('Error al obtener organizadores');
  }
};

export const getById = async (id: number) => {
  try {
    const organizador_encontrado = await prisma.organizador.findUnique({where: {id}})
    return organizador_encontrado;
  } catch (error){
    throw new Error ('Error al obtener organizador');
  }
};

export const create = async (data: create_organizador_DTO) => {
  try{
    const organizador_creado = await prisma.organizador.create({data});
    return organizador_creado;
  }catch(error){
    throw new Error ('No se pudo crear organizador');
  }
};

export const update = async (id: number, data: update_organizador_DTO) => {
  try{
    const organizador_actualizado = await prisma.organizador.update ({where: {id}, data});
    return organizador_actualizado;
  }catch (error){
    throw new Error('No se pudo actualizar organizador');
  }

};

export const delete_ = async (id: number) => {
  try{
    const organizador_eliminado = await prisma.organizador.delete({where: {id}});
    return organizador_eliminado;
  }catch(error){
    throw new Error('No se pudo eliminar organizador');
  }
};