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
