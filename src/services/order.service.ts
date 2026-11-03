import { v4 as uuidv4 } from 'uuid';
import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';
import type { PayloadToken } from '../config/jwt';
import { canManage } from '../middlewares/auth.middleware';
import { create_order_DTO, update_order_DTO } from '../schemas/order.schema';

// Cada orden viaja con sus líneas, y cada línea con sus tickets.
const con_tickets = { items: { include: { tickets: true } } } satisfies Prisma.orderInclude;

// Errores del negocio de órdenes. No llevan código HTTP: el controller decide cómo responderlos.
export class OrderNotFoundError extends Error {
  constructor() {
    super('Orden no encontrada');
    this.name = 'OrderNotFoundError';
  }
}

export class OrderForbiddenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OrderForbiddenError';
  }
}

// Lo que se mandó está mal: por ejemplo, una entrada que no existe.
export class InvalidOrderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidOrderError';
  }
}

// Lo que se pidió choca con el estado actual: sin stock, evento que no está a la venta,
// orden que ya no está pendiente.
export class OrderConflictError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OrderConflictError';
  }
}

// Un admin ve todas las órdenes; cualquier otro, solo las suyas.
export const getAll = async (actor: PayloadToken) => {
  return prisma.order.findMany({
    where: actor.role === 'ADMIN' ? {} : { id_user: actor.id },
    include: con_tickets,
    orderBy: { createdAt: 'desc' },
  });
};

// Una orden la ve su comprador o un admin. Para cualquier otro, no existe:
// las órdenes son privadas y sus ids son correlativos, así que un 403 confirmaría que existe.
export const getById = async (id: number, actor: PayloadToken) => {
  const order = await prisma.order.findUnique({ where: { id }, include: con_tickets });
  if (!order || !canManage(actor, order.id_user)) throw new OrderNotFoundError();
  return order;
};

// Crea la orden PENDING y reserva el stock de cada entrada. El comprador es quien hace el pedido.
export const create = async (data: create_order_DTO, actor: PayloadToken) => {
  // Si llega dos veces la misma entrada, se suman las cantidades.
  const quantities = new Map<number, number>();
  for (const item of data.items) {
    quantities.set(item.id_entry, (quantities.get(item.id_entry) ?? 0) + item.quantity);
  }

  // Todo en una transacción: si una entrada falla, se deshacen también las reservas de las anteriores.
  return prisma.$transaction(async (tx) => {
    let total = new Prisma.Decimal(0);
    const items_data: {
      id_entry: number;
      quantity: number;
      unit_price: Prisma.Decimal;
      subtotal: Prisma.Decimal;
    }[] = [];

    for (const [id_entry, quantity] of quantities) {
      const entry = await tx.entry.findUnique({ where: { id: id_entry }, include: { FK_event: true } });
      if (!entry) throw new InvalidOrderError(`La entrada ${id_entry} no existe`);
      if (entry.FK_event.status !== 'CONFIRMED') {
        throw new OrderConflictError(`El evento de "${entry.entry_name}" no está a la venta`);
      }

      // Reserva atómica: la condición de stock va dentro del UPDATE. La base la evalúa y escribe
      // en una sola operación, con la fila bloqueada: dos compras a la vez no pueden pasar las dos.
      const reserved = await tx.entry.updateMany({
        where: { id: id_entry, sold_stock: { lte: entry.stock - quantity } },
        data: { sold_stock: { increment: quantity } },
      });
      if (reserved.count === 0) {
        throw new OrderConflictError(`No hay stock suficiente para "${entry.entry_name}"`);
      }

      // La plata en Decimal: cuentas exactas, sin los errores del punto flotante.
      const subtotal = entry.unit_price.mul(quantity);
      total = total.add(subtotal);
      items_data.push({ id_entry, quantity, unit_price: entry.unit_price, subtotal });
    }

    return tx.order.create({
      data: { id_user: actor.id, total, items: { create: items_data } },
      include: con_tickets,
    });
  });
};

// Solo una orden PENDING cambia de estado. PAID, CANCELLED y EXPIRED son finales.
export const changeStatus = async (id: number, data: update_order_DTO, actor: PayloadToken) => {
  await prisma.$transaction(async (tx) => {
    const order = await tx.order.findUnique({
      where: { id },
      include: { items: { include: { FK_entry: { include: { FK_event: true } } } } },
    });
    // Misma regla que getById: para quien no es el comprador ni un admin, la orden no existe.
    if (!order || !canManage(actor, order.id_user)) throw new OrderNotFoundError();

    // El comprador puede pagar (pago simulado) o cancelar. Marcarla como vencida es tarea de un admin.
    if (data.status === 'EXPIRED' && actor.role !== 'ADMIN') {
      throw new OrderForbiddenError('Solo un admin puede marcar una orden como vencida');
    }

    if (data.status === 'PAID') {
      const inactive = order.items.find((item) => item.FK_entry.FK_event.status !== 'CONFIRMED');
      if (inactive) {
        throw new OrderConflictError(`El evento de "${inactive.FK_entry.entry_name}" ya no está a la venta`);
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
    if (claimed.count === 0) {
      throw new OrderConflictError('La orden ya no está pendiente: no se puede cambiar');
    }

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

  return getById(id, actor);
};