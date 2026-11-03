import bcrypt from 'bcrypt';
import prisma from '../config/prisma';
import { generateToken } from '../config/jwt';
import { login_DTO } from '../schemas/auth.schema';

// Error del negocio: las credenciales no son válidas. No lleva código HTTP;
// el controller decide con qué código responder.
export class InvalidCredentialsError extends Error {
  constructor() {
    super('Email o contraseña incorrectos');
    this.name = 'InvalidCredentialsError';
  }
}

// Verifica las credenciales y arma la sesión: el token y el usuario sin contraseña.
// Si no son válidas, lanza InvalidCredentialsError.
export const login = async (data: login_DTO) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  // Mismo error si el email no existe o si la contraseña no coincide:
  // así nadie puede averiguar qué emails están registrados.
  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    throw new InvalidCredentialsError();
  }

  const { password, ...usuario } = user;
  return { token: generateToken({ id: user.id, role: user.role }), user: usuario };
};