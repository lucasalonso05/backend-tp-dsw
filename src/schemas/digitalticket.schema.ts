import { z } from 'zod';

export const create_digitalticket_schema = z.object({
  id_order_item: z.number().int().positive(),
  id_user: z.number().int().positive(),
});


export const scan_schema = z.object({
  qr_code: z.string().trim().min(1),
  id_event: z.number().int().positive(),
});
export type create_digitalticket_DTO = z.infer<typeof create_digitalticket_schema>;
export type scan_DTO = z.infer<typeof scan_schema>;