import { z } from 'zod';

// Sin id_user: el dueño del lugar es quien lo crea, y eso sale del token.
// Misma regla que en las ordenes (B5). Antes venia en el body, y el service
// solo verificaba que ESE id fuera de un organizador: cualquiera podia crear
// lugares a nombre de cualquier organizador.
export const create_place_schema = z.object({
  name: z.string().min(1),
  capacity: z.number().int().positive(),
  description: z.string().optional(),
  province: z.string().min(1),
  city: z.string().min(1),
  street: z.string().min(1),
  street_number: z.string().min(1),
  zip_code: z.string().min(1),
});

// Al heredar de create, tampoco se puede transferir un lugar cambiandole el
// id_user por PUT.
export const update_place_schema = create_place_schema.partial();

export type create_place_DTO = z.infer<typeof create_place_schema>;
export type update_place_DTO = z.infer<typeof update_place_schema>;
