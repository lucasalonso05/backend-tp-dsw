import { describe, expect, it } from 'vitest';
import { config } from '../../src/config/config';
import { buildOrderPaidMail } from '../../src/templates/order-paid.template';
import type { OrderPaidMailData } from '../../src/templates/order-paid.template';

// El recital es el 10/12/2026 a las 23:00 UTC, que en Argentina son las 20:00.
const event = {
  id: 1,
  title: 'Recital de rock',
  startsAt: new Date('2026-12-10T23:00:00.000Z'),
  placeName: 'Estadio Central',
  city: 'Rosario',
};

// Una orden pagada de 3 entradas: 2 generales y 1 VIP.
const order: OrderPaidMailData = {
  orderId: 14,
  buyerName: 'Marco',
  paidAt: new Date('2026-11-06T21:33:00.000Z'),
  total: 70000,
  items: [
    {
      entryName: 'General', quantity: 2, unitPrice: 15000, subtotal: 30000, event,
    },
    {
      entryName: 'VIP', quantity: 1, unitPrice: 40000, subtotal: 40000, event,
    },
  ],
};

describe('buildOrderPaidMail: el mail de una orden pagada', () => {
  it('arma el asunto con Eventify, el evento y el número de orden', () => {
    expect(buildOrderPaidMail(order).subject).toBe('Eventify · Recital de rock · Orden #14');
  });

  it('saluda al comprador y cuenta las entradas en plural, con la hora argentina', () => {
    const { html } = buildOrderPaidMail(order);

    expect(html).toContain('Hola, Marco:');
    expect(html).toContain('Tus 3 entradas para Recital de rock del jueves 10 de diciembre a las 20:00 están listas.');
  });

  it('con una sola entrada usa el singular', () => {
    const { html } = buildOrderPaidMail({
      ...order,
      total: 15000,
      items: [{ ...order.items[0], quantity: 1, subtotal: 15000 }],
    });

    expect(html).toContain('Tu entrada para Recital de rock del jueves 10 de diciembre a las 20:00 está lista.');
  });

  it('una orden gratis muestra el total en $ 0,00', () => {
    const { html } = buildOrderPaidMail({
      ...order,
      total: 0,
      items: [{ ...order.items[0], quantity: 1, unitPrice: 0, subtotal: 0 }],
    });

    // \s también acepta el espacio que no se corta (U+00A0) que usa el formato es-AR.
    expect(html).toMatch(/\$\s0,00/);
  });

  it('escapa el texto que carga la gente: un título con HTML no se ejecuta', () => {
    const { html } = buildOrderPaidMail({
      ...order,
      buyerName: 'Ana <b>',
      items: [{ ...order.items[0], event: { ...event, title: 'Rock <script>alert(1)</script>' } }],
    });

    expect(html).toContain('Rock &lt;script&gt;alert(1)&lt;/script&gt;');
    expect(html).toContain('Hola, Ana &lt;b&gt;:');
    expect(html).not.toContain('<script>');
  });

  it('el botón lleva a Mis entradas del front de este ambiente', () => {
    expect(buildOrderPaidMail(order).html).toContain(`href="${config.frontendUrl}/mis-entradas"`);
  });
});