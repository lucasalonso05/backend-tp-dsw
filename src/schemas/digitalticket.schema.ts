import {z} from 'zod';

export const create_digitalticket_schema = z.object({

  id_order_item: z.number().int().positive(),
  id_user: z.number().int().positive(),

  });

export const update_digitalticket_schema = z.object({
  status: z.enum(['UNSCANNED', 'SCANNED']).default("UNSCANNED"),
});

export type create_digitalticket_DTO = z.infer<typeof create_digitalticket_schema>;
export type update_digitalticket_DTO = z.infer<typeof update_digitalticket_schema>;
