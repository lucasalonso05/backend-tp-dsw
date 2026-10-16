import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { login_schema } from '../schemas/auth.schema';

export const login = async (req: Request, res: Response) => {
  try {
    const validation = login_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const session = await authService.login(validation.data);
    if (!session) {
      return res.status(401).json({ error: 'Email o contraseña incorrectos' });
    }

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};