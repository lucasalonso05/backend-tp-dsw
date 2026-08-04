import { z } from 'zod';

export const order_item_input_schema = z.object({
  id_entry: z.number().int().positive(),
  quantity: z.number().int().positive(),
});

export const create_order_schema = z.object({
  id_user: z.number().int().positive(),
  items: z.array(order_item_input_schema).min(1),
});

export const update_order_schema = z.object({
  status: z.enum(['PENDING', 'PAID', 'CANCELLED', 'EXPIRED']).optional(),
  payment_reference: z.string().min(1).optional(),
});

export type order_item_input_DTO = z.infer<typeof order_item_input_schema>;
export type create_order_DTO = z.infer<typeof create_order_schema>;
export type update_order_DTO = z.infer<typeof update_order_schema>;
