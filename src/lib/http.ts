import { Response } from 'express';
import { AppError } from './errors';
import logger from '../config/logger';

// Traduce el error de dominio a HTTP. Con las clases de src/lib/errors, el
// status viaja adentro del error: el controller no adivina comparando textos.
// Cualquier otra cosa es un fallo nuestro y no debe filtrar detalles internos.
export const responder_error = (res: Response, error: unknown, fallback: string) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ error: error.message });
  }
  logger.error((error as Error).message);
  return res.status(500).json({ error: fallback });
};
