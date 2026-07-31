import { z } from 'zod';

export const create_entry_schema = z.object({
  entry_type: z.string().min(1),
  unit_price: z.number().min(1),
  date_time_start: z.iso.datetime(),
  date_time_end: z.iso.datetime(),
  id_event: z.number().int().positive(),
});

export const update_entry_schema = create_entry_schema.partial();

export type create_entry_DTO = z.infer<typeof create_entry_schema>;
export type update_entry_DTO = z.infer<typeof update_entry_schema>;