import { z } from 'zod';

export const create_place_schema = z.object({
  capacidad: z.number().int(),
  descripcion: z.string().optional(),
  ciudad: z.string().min(1),
  calle: z.string().min(1),
  altura: z.string().min(1),
  cp: z.number().int().min(1),
  provincia: z.string().min(1),
});

export const update_place_schema = create_place_schema.partial();

export type create_place_DTO = z.infer<typeof create_place_schema>;
export type update_place_DTO = z.infer<typeof update_place_schema>;