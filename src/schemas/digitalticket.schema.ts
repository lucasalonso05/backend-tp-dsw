import {z} from 'zod';

export const create_digitalticket_schema = z.object({
  
  estado: z.enum(['SCANNED', 'UNSCANNED']).default("UNSCANNED"),
  date_time_use: z.iso.datetime(),
  code_order: z.number().int().positive(),
  id_assistant: z.number().int().positive(),
  id_buyer: z.number().int().positive()
  
  });
  
export const update_digitalticket_schema = create_digitalticket_schema.partial();

export type create_digitalticket_DTO = z.infer<typeof create_digitalticket_schema>;
export type update_digitalticket_DTO = z.infer<typeof update_digitalticket_schema>;