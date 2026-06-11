import { createLogger, format, transports } from 'winston';

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
    // Guarda todos los logs en un archivo
    new transports.File({ filename: 'logs/app.log' }),
    // Guarda solo los errores en un archivo separado
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
});

export default logger;