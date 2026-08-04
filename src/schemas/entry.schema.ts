import { z } from 'zod';

export const create_entry_schema = z.object({
  entry_name: z.string().min(1),
  entry_description: z.string().optional(),
  unit_price: z.number().positive().multipleOf(0.01),
  date_time_start: z.iso.datetime(),
  date_time_end: z.iso.datetime(),
  stock: z.number().int().positive(),
  id_event: z.number().int().positive(),
});

export const update_entry_schema = create_entry_schema.partial();

export type create_entry_DTO = z.infer<typeof create_entry_schema>;
export type update_entry_DTO = z.infer<typeof update_entry_schema>;
