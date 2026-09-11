import jwt from 'jsonwebtoken';
import { config } from './config';
import { role_user } from '../generated/prisma';

// Lo unico que viaja adentro del token. Un JWT esta FIRMADO, no encriptado:
// cualquiera que lo tenga puede leer este objeto. Por eso solo id y role,
// nada de datos personales ni del hash de la contrasena.
export interface token_payload {
  id: number;
  role: role_user;
}

// Genera un token para un usuario
export const generarToken = (payload: token_payload): string => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '24h' });
};

// Verifica si un token es valido. Devuelve null si la firma no coincide,
// si el token esta vencido o si esta mal formado.
export const verificarToken = (token: string): token_payload | null => {
  try {
    return jwt.verify(token, config.jwtSecret) as token_payload;
  } catch {
    return null;
  }
};
