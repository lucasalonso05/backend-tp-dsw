import { z } from 'zod';

export const user_role_schema = z.enum(['ASSISTANT', 'ORGANISER', 'ADMIN']);

export const create_user_schema = z.object({
  role: user_role_schema.default('ASSISTANT'),
  doc_type: z.string().min(1),
  doc_number: z.string().min(7).max(10),
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
  telephone: z.string().min(1).max(15),
  cuit: z.string().min(1).max(12).optional(),
});

export const update_user_schema = create_user_schema.partial();

export type create_user_DTO = z.infer<typeof create_user_schema>;
export type update_user_DTO = z.infer<typeof update_user_schema>;
