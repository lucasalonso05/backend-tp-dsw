import {z} from 'zod';

export const create_orden_schema = z.object({
  
  fecha_hora: z.string().datetime().optional(),
  precio_unitario: z.number().positive().multipleOf(0.01),
  cantidad: z.number().int().positive(), 
  id_comprador: z.number().int().positive(),

  });
  
export const update_orden_schema = create_orden_schema.partial();

export type create_orden_DTO = z.infer<typeof create_orden_schema>;
export type update_orden_DTO = z.infer<typeof update_orden_schema>;