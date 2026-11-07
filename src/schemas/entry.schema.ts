import { z } from 'zod';

export const create_entry_schema = z.object({
  entry_name: z.string().min(1),
  entry_description: z.string().optional(),
  // De 0 (entrada gratis) a 99.999.999,99, con hasta 2 decimales.
  // El tope sale de la base: Decimal(10, 2) admite 8 cifras enteras. Sin él, un precio
  // más alto pasaría la validación, Postgres lo rechazaría y la API daría un 500.
  unit_price: z
    .number()
    .min(0, 'El precio no puede ser negativo')
    .max(99_999_999.99, 'El precio no puede superar 99.999.999,99')
    .multipleOf(0.01, 'El precio puede tener hasta 2 decimales'),  date_time_start: z.iso.datetime(),
  date_time_end: z.iso.datetime(),
  stock: z.number().int().positive(),
  id_event: z.number().int().positive(),
});

export const update_entry_schema = create_entry_schema.partial();

export type create_entry_DTO = z.infer<typeof create_entry_schema>;
export type update_entry_DTO = z.infer<typeof update_entry_schema>;
