import { z } from 'zod';

export const order_item_input_schema = z.object({
  id_entry: z.number().int().positive(),
  quantity: z.number().int().positive(),
});

// El comprador sale del token: el pedido solo dice qué entradas y cuántas.
export const create_order_schema = z.object({
  items: z.array(order_item_input_schema).min(1),
});

// Una orden solo cambia de estado: se paga, se cancela o vence.
export const update_order_schema = z.object({
  status: z.enum(['PAID', 'CANCELLED', 'EXPIRED']),
  payment_reference: z.string().min(1).optional(),
});

export type order_item_input_DTO = z.infer<typeof order_item_input_schema>;
export type create_order_DTO = z.infer<typeof create_order_schema>;
export type update_order_DTO = z.infer<typeof update_order_schema>;