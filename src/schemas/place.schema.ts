import { z } from 'zod';

export const create_place_schema = z.object({
  name: z.string().min(1),
  capacity: z.number().int().positive(),
  description: z.string().optional(),
  province: z.string().min(1),
  city: z.string().min(1),
  street: z.string().min(1),
  street_number: z.string().min(1),
  zip_code: z.string().min(1),
  // Lo usa solo un admin para crear a nombre de un organizador; si no, el dueño sale del token.
  id_user: z.number().int().positive().optional(),});

export const update_place_schema = create_place_schema.partial();

export type create_place_DTO = z.infer<typeof create_place_schema>;
export type update_place_DTO = z.infer<typeof update_place_schema>;
