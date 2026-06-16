import { z } from 'zod';

export const create_asistente_schema = z.object({

  t_doc: z.string().min(1),
  n_doc: z.string().min(7).max(10),
  nombre: z.string().min(1),
  apellido: z.string().min(1),
  email: z.string().min(1),
  telefono: z.string().min(1).max(15),
});


export const update_asistente_schema = create_asistente_schema.partial();

export type create_asistente_DTO = z.infer<typeof create_asistente_schema>;
export type update_asistente_DTO = z.infer<typeof update_asistente_schema>;