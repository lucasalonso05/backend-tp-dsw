import { z } from 'zod';

// El objeto crudo se guarda aparte a proposito. Una vez que se le encadena un
// .refine(), el schema deja de ser un ZodObject y PIERDE el metodo .partial().
// Si `create` llevara el refine directo, `create.partial()` no compilaria.
//
// Sin id_user: el organizador del evento es quien lo crea, y eso sale del
// token. Misma regla que en las ordenes (B5) y en los lugares.
const event_base = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  total_stock: z.number().int().positive(),
  date_time_start: z.iso.datetime(),
  date_time_end: z.iso.datetime(),
  date_time_cancellation: z.iso.datetime().nullable().optional(),
  status: z.enum(['CONFIRMED', 'FINISHED', 'CANCELLED']).default("CONFIRMED"),
  id_place: z.number().int().positive(),
});

// Zod valida campo por campo. Una regla que relaciona DOS campos no entra en
// la definicion de ninguno de los dos: va como refinamiento sobre el objeto.
//
// En el update puede venir una sola de las dos fechas, y entonces no hay nada
// que comparar: eso lo valida el service contra lo que ya esta guardado.
// Zod valida la FORMA del request; el service valida contra el ESTADO.
const rango_coherente = (data: { date_time_start?: string; date_time_end?: string }) =>
  !data.date_time_start ||
  !data.date_time_end ||
  new Date(data.date_time_end) > new Date(data.date_time_start);

const MENSAJE_RANGO = 'La fecha de fin debe ser posterior a la de inicio';

export const create_event_schema = event_base.refine(rango_coherente, {
  message: MENSAJE_RANGO,
  path: ['date_time_end'],
});

export const update_event_schema = event_base.partial().refine(rango_coherente, {
  message: MENSAJE_RANGO,
  path: ['date_time_end'],
});

export type create_event_DTO = z.infer<typeof create_event_schema>;
export type update_event_DTO = z.infer<typeof update_event_schema>;
