import { Router } from 'express';
import * as eventController from '../controllers/event.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { wrap } from '../lib/wrap';

const router = Router();

// LECTURA PUBLICA: explorar el catalogo sin registrarse es el caso de uso
// principal del sistema. GET / acepta filtros, orden y paginacion por query.
router.get('/', wrap(eventController.getAll));
router.get('/:id', wrap(eventController.getById));

// ESCRITURA AUTENTICADA. El service verifica que sea organizador (al crear) y
// dueno del evento (al editar o cancelar).
router.post('/', authenticate, wrap(eventController.create));
router.put('/:id', authenticate, wrap(eventController.update));
router.delete('/:id', authenticate, wrap(eventController.delete_));

export default router;
