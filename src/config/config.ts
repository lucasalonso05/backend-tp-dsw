import dotenv from 'dotenv';

// Cada ambiente lee su propio archivo: `.env` en desarrollo y `.env.test` en los tests.
// En producción no hay archivo: Vercel carga las variables en el proyecto. dotenv nunca pisa
// una variable que ya existe, así que las de Vercel siempre ganan.
const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
dotenv.config({ path: envFile, quiet: true });

// Sin estas dos, la API no puede funcionar: mejor frenar al arrancar con un mensaje claro
// que fallar más tarde, en la primera consulta a la base o en el primer login.
const missing = ['DATABASE_URL', 'JWT_SECRET'].filter((name) => !process.env[name]);
if (missing.length > 0) {
  throw new Error(
    `Faltan variables de entorno: ${missing.join(', ')}. En tu compu, completalas en ${envFile} `
    + '(guiate con .env.example); en Vercel, en Settings → Environment Variables.',
  );
}

export const config = {
  port: process.env.PORT || '3000',
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL || '',
  jwtSecret: process.env.JWT_SECRET || '',
  // Dirección del front, para armar los links de los mails: el primer origen de FRONTEND_URL.
  frontendUrl: (process.env.FRONTEND_URL ?? 'http://localhost:5173')
    .split(',')[0]
    .trim()
    .replace(/\/$/, ''),
  // EmailJS manda los mails de compra. Los dos ID no son secretos; las dos claves sí.
  emailjs: {
    serviceId: process.env.EMAILJS_SERVICE_ID || 'eventify_gmail',
    templateId: process.env.EMAILJS_TEMPLATE_ID || 'orden_pagada',
    publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
    privateKey: process.env.EMAILJS_PRIVATE_KEY || '',
  },
};