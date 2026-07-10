import prisma from '../config/prisma'
import { create_orden_DTO, update_orden_DTO } from '../schemas/orden.schema';


export const getAll = async () => {
  try {
    const ordenes = await prisma.orden.findMany();
    return ordenes;
  } catch (error) {
    throw new Error('Error al obtener las ordenes');
  }
};

export const getById = async (cod: number, id_comprador: number) => {
  try {
    const orden_encontrada = await prisma.orden.findUnique({ where: { id_comprador_cod: {id_comprador, cod } }});
    return orden_encontrada;
  } catch (error) {
    throw new Error('Error al obtener orden');
  }
};


export const create = async (data: create_orden_DTO) => {

  try{
    const comprador = await prisma.comprador.findUnique({
      where: { id: data.id_comprador }
    });
    if (!comprador) throw new Error('El comprador no existe');

    const precio_total = data.precio_unitario * data.cantidad;
      
    const orden_creada = await prisma.orden.create({ data: {...data, precio_total} });
      return orden_creada;
        } catch(error){
            throw error;
    }
  };


/*export const update = async (id_comprador: number, cod: number,data: update_orden_DTO) => {
  try {
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

    // Determinamos si hay que limpiar la fecha de cancelación
    const debeLimpiarCancelacion = data.estado && data.estado !== 'CANCELADO';

    const evento_actualizado = await prisma.evento.update({ 
      where: { id }, 
      data: {
        ...data, 
        fecha_hora_cancelacion: debeLimpiarCancelacion ? null : data.fecha_hora_cancelacion
      }
    });

    return evento_actualizado;

  } catch(error){
    throw error;
  }
};

export const delete_ = async (id_comprador: number, cod: number, data: update_orden_DTO) => {
  try{  
    if (data.id_comprador){
          const comprador = await prisma.comprador.findUnique({
            where: { id: data.id_comprador }
        }); 
        if (!comprador) throw new Error('El comprador no existe');
      }

        
          const orden_cancelada = await prisma.orden.update({where: { id_comprador_cod: {id_comprador, cod} }, data:{estado:'CANCELADO', fecha_hora_cancelacion: new Date()} });
          return evento_cancelado;
      
  }catch(error){
      throw error;
  }
};*/
