import { z } from 'zod';

export const create_buyer_schema = z.object({

  doc_type: z.string().min(1),
  doc_number: z.string().min(7).max(10),
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.string().min(1),
  telephone: z.string().min(1).max(15),
});


export const update_buyer_schema = create_buyer_schema.partial();

export type create_buyer_DTO = z.infer<typeof create_buyer_schema>;
export type update_buyer_DTO = z.infer<typeof update_buyer_schema>;