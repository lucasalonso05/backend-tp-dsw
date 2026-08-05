import prisma from '../config/prisma'
import { create_order_DTO, update_order_DTO } from '../schemas/order.schema';
import logger from '../config/logger'

export const getAll = async () => {
  try {
    const orders = await prisma.order.findMany({ include: { items: true } });
    return orders;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener las ordenes');
  }
};

export const getById = async (id: number) => {
  try {
    const order_found = await prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });
    return order_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener orden');
  }
};

export const create = async (data: create_order_DTO) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: data.id_user }
    });
    if (!user) throw new Error('El usuario no existe');

    const order_created = await prisma.$transaction(async (tx) => {
      let total = 0;
      const items_data: { id_entry: number; quantity: number; unit_price: number; subtotal: number }[] = [];

      for (const item of data.items) {
        const entry = await tx.entry.findUnique({ where: { id: item.id_entry } });
        if (!entry) throw new Error(`La entrada ${item.id_entry} no existe`);

        const available = entry.stock - entry.sold_stock;
        if (available < item.quantity) {
          throw new Error(`No hay stock suficiente para "${entry.entry_name}"`);
        }

        const unit_price = Number(entry.unit_price);
        const subtotal = unit_price * item.quantity;
        total += subtotal;

        await tx.entry.update({
          where: { id: entry.id },
          data: { sold_stock: { increment: item.quantity } },
        });

        items_data.push({ id_entry: entry.id, quantity: item.quantity, unit_price, subtotal });
      }

      return tx.order.create({
        data: {
          id_user: data.id_user,
          total,
          items: { create: items_data },
        },
        include: { items: true },
      });
    });

    return order_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

export const update = async (id: number, data: update_order_DTO) => {
  try {
    const existing = await prisma.order.findUnique({ where: { id }, include: { items: true } });
    if (!existing) throw new Error('La orden no existe');

    const is_already_closed = existing.status === 'CANCELLED' || existing.status === 'EXPIRED';
    const releases_stock = data.status
      && (data.status === 'CANCELLED' || data.status === 'EXPIRED')
      && !is_already_closed;

    const order_updated = await prisma.$transaction(async (tx) => {
      if (releases_stock) {
        for (const item of existing.items) {
          await tx.entry.update({
            where: { id: item.id_entry },
            data: { sold_stock: { decrement: item.quantity } },
          });
        }
      }

      return tx.order.update({
        where: { id },
        data: {
          ...data,
          date_time_payment: data.status === 'PAID' ? new Date() : undefined,
        },
        include: { items: true },
      });
    });

    return order_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};
