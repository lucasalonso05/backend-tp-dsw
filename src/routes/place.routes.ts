import { Router } from 'express';
import * as placeController from '../controllers/place.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { wrap } from '../lib/wrap';

const router = Router();

// LECTURA PUBLICA: es el catalogo.
router.get('/', wrap(placeController.getAll));
router.get('/:id', wrap(placeController.getById));

// ESCRITURA AUTENTICADA. Quien puede hacer que lo decide el service, porque
// depende del DATO (place.id_user) y no de la URL.
router.post('/', authenticate, wrap(placeController.create));
router.put('/:id', authenticate, wrap(placeController.update));
router.delete('/:id', authenticate, wrap(placeController.delete_));

export default router;
