import prisma from '../config/prisma';
import logger from '../config/logger';
import { buildOrderPaidMail } from '../templates/order-paid.template';
import { sendMail } from './mail.service';

/**
 * Le manda al comprador el mail de una orden pagada. Se llama cuando el pago ya quedó guardado.
 * Nunca tira error: si falla la búsqueda o el envío, queda en el log y el pago sigue firme,
 * porque la orden ya está pagada y sus entradas están en Mis entradas.
 */
export const sendOrderPaidMail = async (orderId: number): Promise<void> => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        // El destinatario es el comprador de la orden, aunque la haya pagado otra persona.
        FK_user: { select: { name: true, email: true } },
        items: {
          include: {
            FK_entry: {
              select: {
                entry_name: true,
                FK_event: {
                  select: {
                    id: true,
                    title: true,
                    date_time_start: true,
                    FK_place: { select: { name: true, city: true } },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!order || order.status !== 'PAID' || !order.date_time_payment) {
      logger.warn(`Mail de la orden #${orderId} sin enviar: la orden no está pagada`);
      return;
    }

    // Prisma devuelve la plata como Decimal; la plantilla trabaja con números.
    const mail = buildOrderPaidMail({
      orderId: order.id,
      buyerName: order.FK_user.name,
      paidAt: order.date_time_payment,
      total: order.total.toNumber(),
      items: order.items.map((item) => ({
        entryName: item.FK_entry.entry_name,
        quantity: item.quantity,
        unitPrice: item.unit_price.toNumber(),
        subtotal: item.subtotal.toNumber(),
        event: {
          id: item.FK_entry.FK_event.id,
          title: item.FK_entry.FK_event.title,
          startsAt: item.FK_entry.FK_event.date_time_start,
          placeName: item.FK_entry.FK_event.FK_place.name,
          city: item.FK_entry.FK_event.FK_place.city,
        },
      })),
    });

    await sendMail({ to: order.FK_user.email, ...mail });
  } catch (error) {
    logger.error(`No se pudo preparar el mail de la orden #${orderId}: ${(error as Error).message}`);
  }
};