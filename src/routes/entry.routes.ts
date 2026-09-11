import { Router } from 'express';
import * as entryController from '../controllers/entry.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { wrap } from '../lib/wrap';

const router = Router();

// LECTURA PUBLICA: tipos de entrada y precios son parte del catalogo.
router.get('/', wrap(entryController.getAll));
router.get('/:id', wrap(entryController.getById));

// ESCRITURA AUTENTICADA. Una entrada no tiene dueno propio: lo HEREDA del
// evento al que pertenece, asi que el permiso se resuelve leyendo el evento.
router.post('/', authenticate, wrap(entryController.create));
router.put('/:id', authenticate, wrap(entryController.update));
router.delete('/:id', authenticate, wrap(entryController.delete_));

export default router;
