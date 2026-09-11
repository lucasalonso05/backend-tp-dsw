import { z } from 'zod';

export const user_role_schema = z.enum(['ASSISTANT', 'ORGANISER', 'ADMIN']);

export const register_user_schema = z.object({
  doc_type: z.string().min(1),
  doc_number: z.string().min(7).max(10),
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
  telephone: z.string().min(1).max(15),
  cuit: z.string().min(1).max(12).optional(),
});

export const update_user_schema = register_user_schema.partial();

export type register_user_DTO = z.infer<typeof register_user_schema>;
export type update_user_DTO = z.infer<typeof update_user_schema>;
export const update_role_schema = z.object({ role: user_role_schema });
