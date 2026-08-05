import { z } from 'zod';

export const create_event_schema = z.object({

  title: z.string().min(1),
  category: z.string().min(1),
  total_stock: z.number().int().positive(),
  date_time_start: z.iso.datetime(),
  date_time_end: z.iso.datetime(),
  date_time_cancellation: z.iso.datetime().nullable().optional(),
  status: z.enum(['CONFIRMED', 'FINISHED', 'CANCELLED']).default("CONFIRMED"),
  id_user: z.number().int().positive(),
  id_place: z.number().int().positive(),

  });

export const update_event_schema = create_event_schema.partial();

export type create_event_DTO = z.infer<typeof create_event_schema>;
export type update_event_DTO = z.infer<typeof update_event_schema>;
