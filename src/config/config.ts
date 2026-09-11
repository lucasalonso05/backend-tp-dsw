import dotenv from 'dotenv';

dotenv.config();

// Un secreto faltante tiene que matar el arranque con un mensaje claro, no
// producir media hora despues un error criptico de jsonwebtoken en el primer
// login. Fallar temprano y fuerte.
const requerida = (nombre: string): string => {
  const valor = process.env[nombre];
  if (!valor) {
    throw new Error(`Falta la variable de entorno ${nombre}. Revisa tu archivo .env`);
  }
  return valor;
};

export const config = {
  port: process.env.PORT || '3000',
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: requerida('DATABASE_URL'),
  jwtSecret: requerida('JWT_SECRET'),

  // Minutos que una orden puede quedarse en PENDING reservando stock antes de
  // que el job la pase a EXPIRED y devuelva las entradas al pool.
  // Configurable porque el valor correcto depende del medio de pago real.
  orderPaymentWindowMinutes: Number(process.env.ORDER_PAYMENT_WINDOW_MINUTES ?? 15),
};
