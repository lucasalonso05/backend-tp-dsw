import logger from '../config/logger';
import { comparar_password } from '../lib/password';
import prisma from '../config/prisma';
import { generarToken } from '../config/jwt';
import { login_DTO } from '../schemas/auth.schema';
import { UnauthorizedError } from '../lib/errors';

// Un único mensaje para "el email no existe" y para "la contraseña es
// incorrecta". Distinguirlos convertiría al login en una herramienta para
// averiguar qué emails están registrados (user enumeration).
// El controller lo compara para decidir el 401, por eso se exporta.
export const CREDENCIALES_INVALIDAS = 'Email o contraseña incorrectos';

export const login = async (data: login_DTO) => {
  // Sin user_select: acá SÍ necesitamos el hash para poder compararlo.
  // user_select es un filtro de RESPUESTA, no de consulta.
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (!user) {
    // Específico en el log, genérico en la respuesta.
    logger.warn(`Login fallido: no existe el email ${data.email}`);
    throw new UnauthorizedError(CREDENCIALES_INVALIDAS);
  }

  const password_ok = await comparar_password(data.password, user.password);

  if (!password_ok) {
    logger.warn(`Login fallido: contraseña incorrecta para ${data.email}`);
    throw new UnauthorizedError(CREDENCIALES_INVALIDAS);
  }

  // Solo id y role: el payload de un JWT está firmado, no encriptado, y
  // cualquiera que tenga el token puede leerlo.
  const token = generarToken({ id: user.id, role: user.role });

  // El objeto vino con el hash porque consultamos sin user_select. Se descarta
  // acá para no filtrar por el login lo que el resto de la API ya protege.
  const { password, ...user_sin_password } = user;

  return { token, user: user_sin_password };
};
