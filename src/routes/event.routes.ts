import { Router } from 'express';
import * as eventController from '../controllers/event.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// LECTURA PUBLICA: explorar el catalogo de eventos sin registrarse es el caso
// de uso principal del sistema.
router.get('/', eventController.getAll);
router.get('/:id', eventController.getById);

// ESCRITURA AUTENTICADA. El service verifica que sea organizador (al crear) y
// dueño del evento (al editar o cancelar).
router.post('/', authenticate, eventController.create);
router.put('/:id', authenticate, eventController.update);
router.delete('/:id', authenticate, eventController.delete_);

export default router;
