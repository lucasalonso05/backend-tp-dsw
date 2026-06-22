import prisma from '../config/prisma'
import { estado_evento } from '../generated/prisma/index.js';
import { create_evento_DTO, update_evento_DTO } from '../schemas/evento.schema';


export const getAll = async () => {
  try {
    const eventos = await prisma.evento.findMany();
    return eventos;
  } catch (error) {
    throw new Error('Error al obtener los eventos');
  }
};

export const getById = async (id: number) => {
  try {
    const evento_encontrado = await prisma.evento.findUnique({ where: { id } });
    return evento_encontrado;
  } catch (error) {
    throw new Error('Error al obtener evento');
  }
};

export const create = async (data: create_evento_DTO) => {

  try{
    const organizador = await prisma.organizador.findUnique({
      where: { id: data.id_organizador }
    });
    if (!organizador) throw new Error('El organizador no existe');


    const lugar = await prisma.lugar.findUnique({
      where: { id: data.id_lugar }
    });
    if (!lugar) throw new Error('El lugar no existe');


    
        const evento_creado = await prisma.evento.create({ data });
        return evento_creado;
    
  } catch(error){
      throw error;
  }
};


export const update = async (id: number, data: update_evento_DTO) => {
  try{
      if (data.id_organizador){
        const organizador = await prisma.organizador.findUnique({
          where: { id: data.id_organizador }
      }); 
      if (!organizador) throw new Error('El organizador no existe');
    }

      if (data.id_lugar) {
        const lugar = await prisma.lugar.findUnique({
        where: { id: data.id_lugar }
        });
      if (!lugar) throw new Error('El lugar no existe');
      }
        const evento_actualizado = await prisma.evento.update({where: { id }, data });
        return evento_actualizado;
    
  } catch(error){
      throw error;
  }
};
  
  


export const delete_ = async (id: number, data: update_evento_DTO) => {
  try{  
    if (data.id_organizador){
          const organizador = await prisma.organizador.findUnique({
            where: { id: data.id_organizador }
        }); 
        if (!organizador) throw new Error('El organizador no existe');
      }

        if (data.id_lugar) {
          const lugar = await prisma.lugar.findUnique({
          where: { id: data.id_lugar }
          });
        if (!lugar) throw new Error('El lugar no existe');
        }
          const evento_cancelado = await prisma.evento.update({where: { id }, data:{estado:'CANCELADO'} });
          return evento_cancelado;
      
  }catch(error){
      throw error;
  }
};

    
    
    
    
    
    
    
    