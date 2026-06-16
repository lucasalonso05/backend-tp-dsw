import { z } from 'zod';

export const create_organizador_schema = z.object({
  
  t_doc: z.string().min(1),
  n_doc: z.string().min(7).max(10),
  nombre: z.string().min(1),
  apellido: z.string().min(1),
  email: z.string().min(1),
  telefono: z.string().min(1).max(15),
  cuit: z.string().min(1).max(12)
});


export const update_organizador_schema = create_organizador_schema.partial();

export type create_organizador_DTO = z.infer<typeof create_organizador_schema>;
export type update_organizador_DTO = z.infer<typeof update_organizador_schema>;