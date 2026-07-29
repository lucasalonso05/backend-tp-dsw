import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/config';
import logger from './config/logger';
import placeRouter from './routes/place.routes';
import organiserRouter from './routes/organiser.routes.js'
import assistantRouter from './routes/assistant.routes'
import buyerRouter from './routes/buyer.routes'
import eventRouter from './routes/event.routes'
import orderRouter from './routes/order.routes'
import entryRouter from './routes/entry.routes'
import ticketdigitalRouter from './routes/ticket_digital.routes'

const app: Application = express();

// ── Middlewares globales ────────────────────────────────
// Seguridad HTTP
app.use(helmet());

// Permite peticiones desde el frontend
app.use(cors());

// Parsea el body de las peticiones como JSON
app.use(express.json());

// Registra cada petición en los logs
app.use(morgan('dev', {
  stream: {
    write: (message: string) => logger.info(message.trim())
  }
}));

// ── Ruta de prueba ──────────────────────────────────────
app.get('/', (req: Request, res: Response) => {
  res.json({ mensaje: '¡Servidor de Eventify funcionando! 🎉' });
});

// ── Middleware de errores globales ──────────────────────
// Va siempre AL FINAL — captura cualquier error no manejado
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ── Iniciar servidor ────────────────────────────────────
app.listen(config.port, () => {
  logger.info(`Servidor corriendo en http://localhost:${config.port}`);
});


app.use('/lugares', placeRouter);

app.use('/organizadores', organiserRouter);

app.use('/asistentes', assistantRouter);

app.use('/compradores', buyerRouter);

app.use('/eventos', eventRouter);

app.use('/ordenes', orderRouter);

app.use('/entradas', entryRouter);

app.use('/ticketsdigital', ticketdigitalRouter);