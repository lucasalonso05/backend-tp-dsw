import { config } from '../config/config';
import logger from '../config/logger';

const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';

// Si EmailJS tarda más que esto, se corta: la compra no puede quedar esperando un mail.
const TIMEOUT_MS = 8000;

export interface MailMessage {
  /** El destinatario: en una compra, el mail del comprador. */
  to: string;
  subject: string;
  /** El cuerpo completo del mail. Va al hueco {{{html}}} de la plantilla. */
  html: string;
}

/**
 * Manda un mail con la plantilla de EmailJS. Nunca tira error: si algo falla, lo deja en el log
 * y devuelve false, porque un mail que no sale no puede deshacer una compra que ya se hizo.
 * En el log va el asunto y no el destinatario: el mail del comprador es un dato personal.
 */
export const sendMail = async (message: MailMessage): Promise<boolean> => {
  const {
    serviceId, templateId, publicKey, privateKey,
  } = config.emailjs;

  // Sin claves (por ejemplo, en una compu sin el .env completo) no se intenta mandar nada.
  if (!publicKey || !privateKey) {
    logger.warn(`Mail sin enviar, faltan las claves de EmailJS: "${message.subject}"`);
    return false;
  }

  try {
    const response = await fetch(EMAILJS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          to_email: message.to,
          subject: message.subject,
          html: message.html,
        },
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!response.ok) {
      // EmailJS explica el problema en texto, por ejemplo una clave o una plantilla mal cargada.
      const detail = await response.text();
      logger.error(`EmailJS respondió ${response.status} para "${message.subject}": ${detail}`);
      return false;
    }

    logger.info(`Mail enviado: "${message.subject}"`);
    return true;
  } catch (error) {
    // No hubo respuesta: sin conexión, o EmailJS tardó más que TIMEOUT_MS.
    logger.error(`No se pudo contactar a EmailJS para "${message.subject}": ${(error as Error).message}`);
    return false;
  }
};