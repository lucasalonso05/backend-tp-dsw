import { z } from 'zod';

export const create_evento_schema = z.object({
  
  titulo: z.string().min(1),
  categoria: z.string().min(1),
  stock: z.number().int(),
  fecha_hora_inicio: z.string().datetime(),
  fecha_hora_fin: z.string().datetime(),
  fecha_hora_cancelacion: z.string().datetime().nullable().optional(),
  estado: z.enum(['PENDIENTE', 'CONFIRMADO', 'REALIZADO', 'CANCELADO']).default("PENDIENTE"),
  id_organizador: z.number().int().positive(),
  id_lugar: z.number().int().positive(),

  });
  
export const update_evento_schema = create_evento_schema.partial();

export type create_evento_DTO = z.infer<typeof create_evento_schema>;
export type update_evento_DTO = z.infer<typeof update_evento_schema>;