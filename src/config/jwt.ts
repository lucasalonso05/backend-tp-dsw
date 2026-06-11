import jwt from 'jsonwebtoken';
import { config } from './config';

// Genera un token para un usuario
export const generarToken = (payload: object): string => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '24h' });
};

// Verifica si un token es válido
export const verificarToken = (token: string): object | null => {
  try {
    return jwt.verify(token, config.jwtSecret) as object;
  } catch {
    return null;
  }
};