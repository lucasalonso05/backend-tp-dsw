import { createLogger, format, transports } from 'winston';

// En Vercel el disco de la función es de solo lectura: no se pueden crear archivos de log.
// Ahí los logs van solo a la consola, que Vercel guarda en sus Runtime Logs.
// Vercel define VERCEL=1 en cada deploy; en tu máquina esa variable no existe.
const onVercel = process.env.VERCEL === '1';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    // Muestra los logs en la terminal
    new transports.Console(),
    // En local, además, los guarda en archivos: todos en app.log y solo los errores en error.log
    ...(onVercel
      ? []
      : [
          new transports.File({ filename: 'logs/app.log' }),
          new transports.File({ filename: 'logs/error.log', level: 'error' }),
        ]),
  ],
});

export default logger;