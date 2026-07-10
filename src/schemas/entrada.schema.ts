import { z } from 'zod';

export const create_entrada_schema = z.object({
  tipo_entrada: z.string().min(1),
  precio_unitario: z.number().min(1),
  horario_inicio: z.string().datetime(),
  horario_fin: z.string().datetime(),
  id_evento: z.number().int().positive(),
});

export const update_entrada_schema = create_entrada_schema.partial();

export type create_entrada_DTO = z.infer<typeof create_entrada_schema>;
export type update_entrada_DTO = z.infer<typeof update_entrada_schema>;