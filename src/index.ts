import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/config';
import logger from './config/logger';
import placeRouter from './routes/place.routes';
import userRouter from './routes/user.routes'
import eventRouter from './routes/event.routes'
import orderRouter from './routes/order.routes'
import entryRouter from './routes/entry.routes'
import digitalticketRouter from './routes/digitalticket.routes'
import authRouter from './routes/auth.routes'
import { iniciar_expiracion_de_ordenes } from './jobs/expire_orders.job'
import { AppError, InputError } from './lib/errors'

const app: Application = express();

// ── Middlewares globales ────────────────────────────────
// Seguridad HTTP
app.use(helmet());

// Permite peticiones desde el frontend
app.use(cors({
  origin: process.env.FRONTEND_URL ?? 'http://localhost:5173',
  credentials: true,
}));

// Parsea el body de las peticiones como JSON
app.use(express.json());

// Registra cada petición en los logs
app.use(morgan('dev', {
  stream: {
    write: (message: string) => logger.info(message.trim())
  }
}));

// ── Ruta de prueba ──────────────────────────────────────
app.get('/api', (req: Request, res: Response) => {
  res.json({ mensaje: '¡Servidor de Eventify funcionando! 🎉' });
});

app.use('/api/auth', authRouter);

app.use('/api/places', placeRouter);

app.use('/api/users', userRouter);

app.use('/api/events', eventRouter);

app.use('/api/orders', orderRouter);

app.use('/api/entries', entryRouter);

app.use('/api/digital-tickets', digitalticketRouter);


// ── Ruta no encontrada ──────────────────────────────────
// Antes, una URL mal escrita caia en el 404 por defecto de Express, que
// responde HTML. El frontend espera SIEMPRE { error: ... } en JSON.
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: `No existe la ruta ${req.method} ${req.path}` });
});

// ── Middleware de errores globales ──────────────────────
// Va siempre AL FINAL. Ahora si se alcanza: los controllers estan envueltos en
// wrap(), que manda cualquier excepcion a next() en vez de traducirla ellos.
//
// Es el UNICO lugar del backend que decide un codigo HTTP a partir de un error.
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Validacion de entrada: se responde el array de issues de Zod, que es lo
  // que el interceptor del frontend sabe leer.
  if (err instanceof InputError) {
    return res.status(err.status).json({ error: err.issues });
  }

  // Error de dominio: el service ya dijo que paso y con que status.
  if (err instanceof AppError) {
    logger.warn(`${req.method} ${req.path} -> ${err.status}: ${err.message}`);
    return res.status(err.status).json({ error: err.message });
  }

  // Cualquier otra cosa es un fallo nuestro. El detalle va al log; al cliente
  // solo un mensaje generico, para no filtrar internals (rutas de archivos,
  // SQL, nombres de tablas).
  logger.error(`${req.method} ${req.path} -> 500: ${err.message}`);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ── Iniciar servidor ────────────────────────────────────
app.listen(config.port, () => {
  logger.info(`Servidor corriendo en http://localhost:${config.port}`);
  // Devuelve al pool el stock de las ordenes que nadie pago.
  iniciar_expiracion_de_ordenes();
});