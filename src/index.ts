import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/config';
import logger from './config/logger';
import lugarRouter from './routes/lugar.routes';
import organizadorRouter from './routes/organizador.routes'
import assistantRouter from './routes/assistant.routes'
import compradorRouter from './routes/buyer.routes'
import eventoRouter from './routes/evento.routes'
import ordenRouter from './routes/orden.routes'
import entradaRouter from './routes/entry.routes'
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


app.use('/lugares', lugarRouter);

app.use('/organizadores', organizadorRouter);

app.use('/asistentes', assistantRouter);

app.use('/compradores', compradorRouter);

app.use('/eventos', eventoRouter);

app.use('/ordenes', ordenRouter);

app.use('/entradas', entradaRouter)

app.use('/ticketsdigital', ticketdigitalRouter)