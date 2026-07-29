import { z } from 'zod';

export const create_organiser_schema = z.object({
  
  doc_type: z.string().min(1),
  doc_number: z.string().min(7).max(10),
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.string().min(1),
  telephone: z.string().min(1).max(15),
  cuit: z.string().min(1).max(12)
});


export const update_organiser_schema = create_organiser_schema.partial();

export type create_organiser_DTO = z.infer<typeof create_organiser_schema>;
export type update_organiser_DTO = z.infer<typeof update_organiser_schema>;