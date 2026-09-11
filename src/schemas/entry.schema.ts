import { z } from 'zod';

// Mismo patron que event.schema: el objeto crudo aparte, porque un schema con
// .refine() encadenado ya no es un ZodObject y pierde .partial().
const entry_base = z.object({
  entry_name: z.string().min(1),
  entry_description: z.string().optional(),
  unit_price: z.number().positive().multipleOf(0.01),
  date_time_start: z.iso.datetime(),
  date_time_end: z.iso.datetime(),
  stock: z.number().int().positive(),
  id_event: z.number().int().positive(),
});

// Regla que relaciona dos campos: no pertenece a la definicion de ninguno de
// los dos. En un update parcial puede venir una sola fecha, y ahi no hay nada
// que comparar: eso lo resuelve el service contra lo ya guardado.
const rango_coherente = (data: { date_time_start?: string; date_time_end?: string }) =>
  !data.date_time_start ||
  !data.date_time_end ||
  new Date(data.date_time_end) > new Date(data.date_time_start);

const MENSAJE_RANGO = 'La fecha de fin debe ser posterior a la de inicio';

export const create_entry_schema = entry_base.refine(rango_coherente, {
  message: MENSAJE_RANGO,
  path: ['date_time_end'],
});

export const update_entry_schema = entry_base.partial().refine(rango_coherente, {
  message: MENSAJE_RANGO,
  path: ['date_time_end'],
});

export type create_entry_DTO = z.infer<typeof create_entry_schema>;
export type update_entry_DTO = z.infer<typeof update_entry_schema>;
