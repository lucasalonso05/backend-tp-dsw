import logger from '../config/logger';
import { config } from '../config/config';
import { expire_pending } from '../services/order.service';

// Cada cuanto se revisa si hay ordenes vencidas. Es independiente de la
// ventana de pago: la ventana define CUANDO vence una orden, esto define
// cada cuanto miramos. Un minuto es suficiente; nadie nota la diferencia
// entre expirar a los 15:00 y a los 15:59.
const INTERVALO_MS = 60_000;

export const iniciar_expiracion_de_ordenes = () => {
  const correr = async () => {
    try {
      const expiradas = await expire_pending();
      if (expiradas > 0) {
        logger.info(`Ordenes expiradas y stock liberado: ${expiradas}`);
      }
    } catch (error) {
      // Un fallo del job (base caida, timeout de Neon) no puede tumbar el
      // servidor: se loguea y se reintenta en la proxima vuelta.
      logger.error(`Fallo el job de expiracion de ordenes: ${(error as Error).message}`);
    }
  };

  correr();                                   // una pasada al arrancar
  const timer = setInterval(correr, INTERVALO_MS);
  timer.unref();                              // no impide que el proceso termine

  logger.info(
    `Job de expiracion activo: revisa cada ${INTERVALO_MS / 1000}s, ` +
    `ventana de pago ${config.orderPaymentWindowMinutes} min`
  );

  return timer;
};
