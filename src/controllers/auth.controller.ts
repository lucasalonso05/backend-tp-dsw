import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { AppError } from '../lib/errors';
import { login_schema } from '../schemas/auth.schema';
import logger from '../config/logger';

export const login = async (req: Request, res: Response) => {
  try {
    const validation = login_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const result = await authService.login(validation.data);
    res.status(200).json(result);
  } catch (error) {
    // El status viaja adentro del error de dominio: ya no hace falta comparar
    // el mensaje como string para saber si es un 401 o un 500. Cualquier otro
    // error es un fallo nuestro y no debe filtrar detalles internos.
    if (error instanceof AppError) {
      return res.status(error.status).json({ error: error.message });
    }

    logger.error((error as Error).message);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};
