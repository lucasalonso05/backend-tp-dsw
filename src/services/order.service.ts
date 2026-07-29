import prisma from '../config/prisma'
import { create_order_DTO, update_order_DTO } from '../schemas/order.schema';
import logger from '../config/logger'

export const getAll = async () => {
  try {
    const orders = await prisma.order.findMany();
    return orders;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener las ordenes');
  }
};

export const getById = async (code: number, id_buyer: number) => {
  try {
    const order_found = await prisma.order.findUnique({ where: { id_buyer_code: {id_buyer, code } }});
    return order_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener orden');
  }
};


export const create = async (data: create_order_DTO) => {

  try{
    const buyer = await prisma.buyer.findUnique({
      where: { id: data.id_buyer }
    });
    if (!buyer) throw new Error('El comprador no existe');

    const total_price = data.unit_price * data.quantity;

      
    const order_created = await prisma.order.create({ data: {...data, total_price} });
      return order_created;
        } catch(error){
          logger.error((error as Error).message);
            throw error;
    }
  };
