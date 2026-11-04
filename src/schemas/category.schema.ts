import { z } from 'zod';

export const create_category_schema = z.object({
  // Se guarda sin espacios al borde: " Discoteca " y "Discoteca" son la misma categoría.
  name: z.string().trim().min(1).max(40),
});

// Una categoría solo tiene nombre: editarla es cambiárselo, así que el nombre es obligatorio.
export const update_category_schema = create_category_schema;

export type create_category_DTO = z.infer<typeof create_category_schema>;
export type update_category_DTO = z.infer<typeof update_category_schema>;
