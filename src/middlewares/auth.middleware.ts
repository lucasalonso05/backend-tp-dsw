import { Request, Response, NextFunction } from 'express';
import { verificarToken } from '../config/jwt';

// AUTENTICACION: responde "quien sos".
// Lee el header Authorization, valida la firma del token y deja el payload
// en req.user para que lo usen los middlewares y controllers que siguen.
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;

  // El formato es exactamente "Bearer <token>", con un espacio.
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No autenticado' });
  }

  const token = header.slice('Bearer '.length).trim();
  const payload = verificarToken(token);

  // Mismo 401 para token ausente, invalido o vencido: al cliente no le sirve
  // saber cual de los tres fue, y al atacante tampoco.
  if (!payload) {
    return res.status(401).json({ error: 'No autenticado' });
  }

  req.user = payload;
  next();
};
