import prisma from '../config/prisma';
import logger from '../config/logger';
import { Prisma } from '../generated/prisma';
import { v4 as uuidv4 } from 'uuid';
import { create_order_DTO, update_order_DTO } from '../schemas/order.schema';

// Cada orden viaja con sus líneas, y cada línea con sus tickets.
const con_tickets = { items: { include: { tickets: true } } } satisfies Prisma.orderInclude;

// Sin id_user devuelve todas (para un admin); con id_user, solo las de ese comprador.
export const getAll = async (id_user?: number) => {
  try {
    const orders = await prisma.order.findMany({
      where: { id_user },
      include: con_tickets,
      orderBy: { createdAt: 'desc' },
    });
    return orders;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener las ordenes');
  }
};

export const getById = async (id: number) => {
  try {
    const order_found = await prisma.order.findUnique({ where: { id }, include: con_tickets });
    return order_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener orden');
  }
};

// Crea la orden PENDING y reserva el stock de cada entrada.
export const create = async (id_user: number, data: create_order_DTO) => {
  try {
    // Si llega dos veces la misma entrada, se suman las cantidades.
    const quantities = new Map<number, number>();
    for (const item of data.items) {
      quantities.set(item.id_entry, (quantities.get(item.id_entry) ?? 0) + item.quantity);
    }

    const order_created = await prisma.$transaction(async (tx) => {
      let total = 0;
      const items_data: { id_entry: number; quantity: number; unit_price: number; subtotal: number }[] = [];

      for (const [id_entry, quantity] of quantities) {
        const entry = await tx.entry.findUnique({ where: { id: id_entry }, include: { FK_event: true } });
        if (!entry) throw new Error(`La entrada ${id_entry} no existe`);
        if (entry.FK_event.status !== 'CONFIRMED') {
          throw new Error(`El evento de "${entry.entry_name}" no está a la venta`);
        }
        if (entry.stock - entry.sold_stock < quantity) {
          throw new Error(`No hay stock suficiente para "${entry.entry_name}"`);
        }

        const unit_price = Number(entry.unit_price);
        const subtotal = unit_price * quantity;
        total += subtotal;

        await tx.entry.update({
          where: { id: id_entry },
          data: { sold_stock: { increment: quantity } },
        });

        items_data.push({ id_entry, quantity, unit_price, subtotal });
      }

      return tx.order.create({
        data: { id_user, total, items: { create: items_data } },
        include: con_tickets,
      });
    });

    return order_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

// Solo una orden PENDING cambia de estado. PAID, CANCELLED y EXPIRED son finales.
export const changeStatus = async (id: number, data: update_order_DTO) => {
  try {
    await prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id },
        include: { items: { include: { FK_entry: { include: { FK_event: true } } } } },
      });
      if (!order) throw new Error('La orden no existe');

      if (data.status === 'PAID') {
        const inactive = order.items.find((item) => item.FK_entry.FK_event.status !== 'CONFIRMED');
        if (inactive) {
          throw new Error(`El evento de "${inactive.FK_entry.entry_name}" ya no está a la venta`);
        }
      }

      // El cambio solo se aplica si la orden sigue PENDING. Si dos pedidos llegan a la vez,
      // el segundo encuentra la orden ya cambiada y no hace nada.
      const claimed = await tx.order.updateMany({
        where: { id, status: 'PENDING' },
        data:
          data.status === 'PAID'
            ? {
                status: 'PAID',
                date_time_payment: new Date(),
                // No hay pasarela de pago: si no viene una referencia, se genera una simulada.
                payment_reference: data.payment_reference ?? `SIMULADO-${id}-${Date.now()}`,
              }
            : { status: data.status },
      });
      if (claimed.count === 0) throw new Error('La orden ya no está pendiente: no se puede cambiar');

      if (data.status === 'PAID') {
        // Un ticket por cada entrada comprada, cada uno con su código QR único.
        await tx.digital_ticket.createMany({
          data: order.items.flatMap((item) =>
            Array.from({ length: item.quantity }, () => ({
              qr_code: uuidv4(),
              id_order_item: item.id,
              id_user: order.id_user,
            })),
          ),
        });
      } else {
        // Cancelar o vencer una orden pendiente devuelve las entradas reservadas.
        for (const item of order.items) {
          await tx.entry.update({
            where: { id: item.id_entry },
            data: { sold_stock: { decrement: item.quantity } },
          });
        }
      }
    });

    return await getById(id);
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};