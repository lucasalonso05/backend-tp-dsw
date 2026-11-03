import { z } from 'zod';

export const create_digitalticket_schema = z.object({
  id_order_item: z.number().int().positive(),
  id_user: z.number().int().positive(),
});

// El código que lee la cámara en la puerta. trim() saca los espacios o saltos de línea
// que a veces agrega el lector.
export const scan_schema = z.object({
  qr_code: z.string().trim().min(1),
});

export type create_digitalticket_DTO = z.infer<typeof create_digitalticket_schema>;
export type scan_DTO = z.infer<typeof scan_schema>;