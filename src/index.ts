import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/config';
import logger from './config/logger';
import lugarRouter from './routes/lugar.routes';
import organizadorRouter from './routes/organizador.routes'
import asistenteRouter from './routes/asistente.routes'


const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(morgan('dev', {
  stream: {
    write: (message: string) => logger.info(message.trim())
  }
}));

app.get('/', (req: Request, res: Response) => {
  res.json({ mensaje: '¡Servidor de Eventify funcionando! 🎉' });
});

app.use('/lugares', lugarRouter);
app.use('/organizadores', organizadorRouter);
app.use('/asistentes', asistenteRouter);

// Middleware de errores: SIEMPRE después de las rutas
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// listen: al final de todo
app.listen(config.port, () => {
  logger.info(`Servidor corriendo en http://localhost:${config.port}`);
});
