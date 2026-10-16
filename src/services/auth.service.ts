import bcrypt from 'bcrypt';
import logger from '../config/logger';
import prisma from '../config/prisma';
import { generateToken } from '../config/jwt';
import { login_DTO } from '../schemas/auth.schema';

// Devuelve el token y el usuario (sin contraseña), o null si las credenciales no son válidas.
export const login = async (data: login_DTO) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: data.email } });

    // Mismo resultado si el email no existe o si la contraseña no coincide:
    // así nadie puede averiguar qué emails están registrados.
    if (!user || !(await bcrypt.compare(data.password, user.password))) return null;

    const { password, ...usuario } = user;
    return { token: generateToken({ id: user.id, role: user.role }), user: usuario };
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al iniciar sesión');
  }
};