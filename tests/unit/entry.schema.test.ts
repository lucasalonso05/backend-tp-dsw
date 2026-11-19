import { describe, expect, it } from 'vitest';
import { create_entry_schema, update_entry_schema } from '../../src/schemas/entry.schema';

// Una entrada válida: cada test cambia solo el precio.
const entry = {
  entry_name: 'General',
  date_time_start: '2026-12-10T20:00:00.000Z',
  date_time_end: '2026-12-10T23:00:00.000Z',
  stock: 100,
  id_event: 1,
};

// Los mensajes de error que devuelve el schema para un precio.
const priceErrors = (unit_price: number) => {
  const result = create_entry_schema.safeParse({ ...entry, unit_price });
  return result.success ? [] : result.error.issues.map((issue) => issue.message);
};

describe('create_entry_schema: el precio de una entrada', () => {
  it('acepta una entrada gratis (0)', () => {
    expect(priceErrors(0)).toEqual([]);
  });

  it('acepta precios con hasta 2 decimales, hasta el tope de 99.999.999,99', () => {
    expect(priceErrors(1500.5)).toEqual([]);
    expect(priceErrors(99999999.99)).toEqual([]);
  });

  it('rechaza un precio negativo', () => {
    expect(priceErrors(-1)).toEqual(['El precio no puede ser negativo']);
  });

  it('rechaza un precio por encima del tope de la base, Decimal(10, 2)', () => {
    expect(priceErrors(100000000)).toEqual(['El precio no puede superar 99.999.999,99']);
  });

  it('rechaza más de 2 decimales', () => {
    expect(priceErrors(10.005)).toEqual(['El precio puede tener hasta 2 decimales']);
  });

  it('al editar se aplican las mismas reglas', () => {
    expect(update_entry_schema.safeParse({ unit_price: 0 }).success).toBe(true);
    expect(update_entry_schema.safeParse({ unit_price: -5 }).success).toBe(false);
  });
});