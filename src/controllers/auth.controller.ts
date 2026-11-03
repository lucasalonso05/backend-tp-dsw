import { Request, Response } from 'express';
import logger from '../config/logger';
import * as authService from '../services/auth.service';
import { login_schema } from '../schemas/auth.schema';

export const login = async (req: Request, res: Response) => {
  // 400: el pedido no trae email y contraseña con la forma correcta.
  const validation = login_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const session = await authService.login(validation.data);
    // 200: credenciales correctas.
    return res.status(200).json(session);
  } catch (error) {
    // 401: el negocio rechazó las credenciales.
    if (error instanceof authService.InvalidCredentialsError) {
      return res.status(401).json({ error: error.message });
    }
    // 500: algo que no esperábamos (base caída, un bug). El detalle va al log, no al cliente.
    logger.error((error as Error).message);
    return res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};