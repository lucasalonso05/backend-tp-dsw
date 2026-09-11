import { Router } from 'express';
import * as entryController from '../controllers/entry.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// LECTURA PUBLICA: tipos de entrada y precios son parte del catalogo.
router.get('/', entryController.getAll);
router.get('/:id', entryController.getById);

// ESCRITURA AUTENTICADA. Una entrada no tiene dueño propio: lo HEREDA del
// evento al que pertenece, asi que el permiso se resuelve leyendo el evento.
router.post('/', authenticate, entryController.create);
router.put('/:id', authenticate, entryController.update);
router.delete('/:id', authenticate, entryController.delete_);

export default router;
