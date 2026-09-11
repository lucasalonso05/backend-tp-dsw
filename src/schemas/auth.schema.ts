import { z } from 'zod';

// min(1) y no min(8): el login VERIFICA credenciales, no valida reglas de
// negocio. Exigir el largo mínimo acá dejaría afuera de su propia cuenta a
// cualquier usuario cuya contraseña sea anterior a esa regla.
export const login_schema = z.object({
  email: z.email(),
  password: z.string().min(1),
});

export type login_DTO = z.infer<typeof login_schema>;
