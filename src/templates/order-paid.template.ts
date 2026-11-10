import { config } from '../config/config';

// El logo vive en el front publicado: los clientes de correo lo descargan de ahí. Es una URL fija
// porque una imagen de localhost no la puede mostrar Gmail, ni siquiera cuando probás en tu compu.
const LOGO_URL = 'https://eventify-frontend-nu-inky.vercel.app/logo-mail.png';

// El servidor puede estar en cualquier huso horario (Vercel usa UTC): las fechas se muestran
// siempre en hora argentina, que es la de los eventos.
const TIME_ZONE = 'America/Argentina/Buenos_Aires';

const BLUE = '#1e40af';
const TEXT = '#0f172a';
const MUTED = '#475569';
const BORDER = '#e2e8f0';

/** Lo que hace falta para armar el mail de una orden pagada. */
export interface OrderPaidMailData {
  orderId: number;
  buyerName: string;
  paidAt: Date;
  total: number;
  items: {
    entryName: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
    event: {
      id: number;
      title: string;
      startsAt: Date;
      placeName: string;
      city: string;
    };
  }[];
}

/** El mail listo para mandar con sendMail, menos el destinatario. */
export interface OrderPaidMail {
  subject: string;
  html: string;
}

/**
 * Los textos que escribe la gente (el título de un evento, un nombre) pasan por acá antes de ir
 * al HTML: así un "<" se muestra como texto y no se puede meter código en el mail.
 */
const escapeHtml = (text: string) => text
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const money = (amount: number) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })
  .format(amount);

const dateFormat = (options: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('es-AR', {
  ...options,
  timeZone: TIME_ZONE,
});

// "jueves 10 de diciembre"
const dayText = (date: Date) => dateFormat({ weekday: 'long', day: 'numeric', month: 'long' })
  .format(date)
  .replace(',', '');

// "jueves 10 de diciembre de 2026"
const fullDayText = (date: Date) => dateFormat({
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
}).format(date).replace(',', '');

// "20:00"
const timeText = (date: Date) => dateFormat({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
  .format(date);

// "6/11/2026, 18:33"
const shortDateTime = (date: Date) => dateFormat({
  day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
}).format(date);

/**
 * Arma el asunto y el cuerpo del mail que recibe el comprador cuando paga una orden: saludo,
 * evento, detalle tipo recibo y un botón a Mis entradas. Los QR no viajan en el mail: quedan en
 * Mis entradas, detrás del login, para que reenviar el mail no regale las entradas.
 */
export const buildOrderPaidMail = (data: OrderPaidMailData): OrderPaidMail => {
  // Los eventos de la orden, sin repetir. La pantalla de compra arma órdenes de un solo evento.
  const events = [...new Map(data.items.map((item) => [item.event.id, item.event])).values()];
  const [first] = events;
  const otherEvents = events.length - 1;
  const eventName = otherEvents > 0
    ? `${first.title} y ${otherEvents} evento${otherEvents > 1 ? 's' : ''} más`
    : first.title;

  const ticketCount = data.items.reduce((sum, item) => sum + item.quantity, 0);
  const ready = ticketCount === 1
    ? `Tu entrada para ${escapeHtml(eventName)}`
    : `Tus ${ticketCount} entradas para ${escapeHtml(eventName)}`;
  const when = otherEvents > 0 ? '' : ` del ${dayText(first.startsAt)} a las ${timeText(first.startsAt)}`;
  const readyEnd = ticketCount === 1 ? 'está lista' : 'están listas';

  const eventBlocks = events.map((event) => `
            <tr>
              <td style="padding:12px 16px;border:1px solid ${BORDER};border-radius:8px;">
                <div style="font-size:16px;font-weight:bold;color:${TEXT};">${escapeHtml(event.title)}</div>
                <div style="font-size:14px;color:${MUTED};">${fullDayText(event.startsAt)}, ${timeText(event.startsAt)}</div>
                <div style="font-size:14px;color:${MUTED};">${escapeHtml(event.placeName)}, ${escapeHtml(event.city)}</div>
              </td>
            </tr>
            <tr><td style="height:12px;line-height:12px;">&nbsp;</td></tr>`).join('');

  const rows = data.items.map((item) => {
    // Con más de un evento, cada línea aclara de cuál es.
    const name = otherEvents > 0 ? `${item.event.title} · ${item.entryName}` : item.entryName;
    return `
                <tr>
                  <td style="padding:8px 0;border-top:1px solid ${BORDER};">${escapeHtml(name)}</td>
                  <td align="right" style="padding:8px 0 8px 12px;border-top:1px solid ${BORDER};">${item.quantity}</td>
                  <td align="right" style="padding:8px 0 8px 12px;border-top:1px solid ${BORDER};white-space:nowrap;">${money(item.unitPrice)}</td>
                  <td align="right" style="padding:8px 0 8px 12px;border-top:1px solid ${BORDER};white-space:nowrap;">${money(item.subtotal)}</td>
                </tr>`;
  }).join('');

  const html = `
<div style="margin:0;padding:24px 12px;background:#f1f5f9;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid ${BORDER};border-radius:12px;font-family:Arial,Helvetica,sans-serif;color:${TEXT};">
    <tr>
      <td style="padding:18px 24px;border-bottom:1px solid ${BORDER};">
        <img src="${LOGO_URL}" width="32" height="32" alt="" style="vertical-align:middle;border:0;">
        <span style="vertical-align:middle;font-size:20px;font-weight:bold;color:${BLUE};">&nbsp;Eventify</span>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <p style="margin:0 0 4px;font-size:18px;font-weight:bold;">Hola, ${escapeHtml(data.buyerName)}:</p>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.5;color:${MUTED};">${ready}${when} ${readyEnd}.</p>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${eventBlocks}
        </table>

        <p style="margin:8px 0 6px;font-size:13px;color:${MUTED};">Detalle de la orden #${data.orderId}</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:${TEXT};">
          <tr style="font-size:12px;color:${MUTED};">
            <td style="padding:0 0 6px;">Entrada</td>
            <td align="right" style="padding:0 0 6px 12px;">Cant.</td>
            <td align="right" style="padding:0 0 6px 12px;">Precio</td>
            <td align="right" style="padding:0 0 6px 12px;">Subtotal</td>
          </tr>${rows}
          <tr>
            <td colspan="3" style="padding:10px 0;border-top:2px solid ${TEXT};font-weight:bold;">Total</td>
            <td align="right" style="padding:10px 0 10px 12px;border-top:2px solid ${TEXT};font-weight:bold;white-space:nowrap;">${money(data.total)}</td>
          </tr>
        </table>
        <p style="margin:4px 0 24px;font-size:13px;color:${MUTED};">Pagada el ${shortDateTime(data.paidAt)}</p>

        <table role="presentation" cellpadding="0" cellspacing="0" align="center">
          <tr>
            <td style="background:${BLUE};border-radius:999px;">
              <a href="${config.frontendUrl}/mis-entradas" style="display:inline-block;padding:12px 26px;color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;">Ver mis QR en Eventify</a>
            </td>
          </tr>
        </table>

        <p style="margin:24px 0 0;padding-top:16px;border-top:1px solid ${BORDER};font-size:13px;line-height:1.5;color:${MUTED};">
          Tus entradas también están siempre en <strong>Mis entradas</strong>, en Eventify.
          Cada QR vale para un solo ingreso: no lo compartas.
        </p>
      </td>
    </tr>
  </table>
</div>`;

  return {
    // El asunto es texto común: EmailJS lo pone tal cual en {{subject}}, que ya lo escapa.
    subject: `Eventify · ${eventName} · Orden #${data.orderId}`,
    html,
  };
};