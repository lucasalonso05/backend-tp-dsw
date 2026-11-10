import dotenv from 'dotenv';

dotenv.config();

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