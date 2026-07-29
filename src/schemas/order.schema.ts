import {z} from 'zod';

export const create_order_schema = z.object({
  
  date_time: z.iso.datetime().optional(),
  unit_price: z.number().positive().multipleOf(0.01),
  quantity: z.number().int().positive(), 
  id_buyer: z.number().int().positive(),

  });
  
export const update_order_schema = create_order_schema.partial();

export type create_order_DTO = z.infer<typeof create_order_schema>;
export type update_order_DTO = z.infer<typeof update_order_schema>;