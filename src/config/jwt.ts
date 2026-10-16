import jwt from 'jsonwebtoken';
import { config } from './config';
import type { role_user } from '../generated/prisma';

// Lo que viaja dentro del token: solo lo necesario para saber quién es y qué puede hacer.
export interface PayloadToken {
  id: number;
  role: role_user;
}

// Genera un token para un usuario
export const generateToken = (payload: PayloadToken): string => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '24h' });
};

// Verifica si un token es válido y devuelve su contenido
export const verifyToken = (token: string): PayloadToken | null => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    if (typeof decoded === 'string') return null;
    return { id: Number(decoded.id), role: decoded.role };
  } catch {
    return null;
  }
};