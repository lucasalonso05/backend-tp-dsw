import { z } from 'zod';

export const login_schema = z.object({
  email: z.email(),
  password: z.string().min(1),
});

export type login_DTO = z.infer<typeof login_schema>;