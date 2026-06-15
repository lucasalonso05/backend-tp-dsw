import { z } from 'zod';

export const create_lugar_schema = z.object({
  capacidad: z.number().int(),
  descripcion: z.string().optional(),
  ciudad: z.string().min(1),
  calle: z.string().min(1),
  altura: z.string().min(1),
  cp: z.number().int().min(1),
  provincia: z.string().min(1),
});

export const update_lugar_schema = create_lugar_schema.partial();

export type create_lugar_DTO = z.infer<typeof create_lugar_schema>;
export type update_lugar_DTO = z.infer<typeof update_lugar_schema>;