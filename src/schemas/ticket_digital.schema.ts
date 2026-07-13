import {z} from 'zod';

export const create_ticketdigital_schema = z.object({
  
  estado: z.enum(['ESCANEADO', 'NO_ESCANEADO']).default("NO_ESCANEADO"),
  fecha_hora_uso: z.string().datetime().optional(),
  cod_orden: z.number().int().positive(),
  id_asistente: z.number().int().positive(),
  id_comprador: z.number().int().positive()
  
  });
  
export const update_ticketdigital_schema = create_ticketdigital_schema.partial();

export type create_ticketdigital_DTO = z.infer<typeof create_ticketdigital_schema>;
export type update_ticketdigital_DTO = z.infer<typeof update_ticketdigital_schema>;