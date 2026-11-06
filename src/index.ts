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
import categoryRouter from './routes/category.routes'

const app: Application = express();

// ── Middlewares globales ────────────────────────────────
// Seguridad HTTP
app.use(helmet());

// Orígenes que pueden llamar a la API, separados por coma en FRONTEND_URL.
// Si no está definida, solo el frontend local.
const allowedOrigins = (process.env.FRONTEND_URL ?? 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim());

app.use(cors({
  origin: ["http://localhost:5173", "https://eventify.vercel.app"],
  credentials: true, // solo si usás cookies
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
app.get('/', (req: Request, res: Response) => {
  res.json({ mensaje: '¡Servidor de Eventify funcionando! 🎉' });
});

app.use('/api/places', placeRouter);

app.use('/api/users', userRouter);

app.use('/api/events', eventRouter);

app.use('/api/categories', categoryRouter);

app.use('/api/orders', orderRouter);

app.use('/api/entries', entryRouter);

app.use('/api/digital-tickets', digitalticketRouter);

app.use('/api/auth', authRouter);

// ── Middleware de errores globales ──────────────────────
// Va siempre AL FINAL — captura cualquier error no manejado
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if ('type' in err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'El cuerpo del pedido no es un JSON válido' });
  }

  logger.error(err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ── Iniciar servidor ────────────────────────────────────
app.listen(config.port, () => {
  logger.info(`Servidor corriendo en http://localhost:${config.port}`);
});