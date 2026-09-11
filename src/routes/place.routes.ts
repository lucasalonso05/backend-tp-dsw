import { Router } from 'express';
import * as placeController from '../controllers/place.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// LECTURA PUBLICA: es el catalogo. Un asistente tiene que poder ver donde es
// un evento sin estar registrado.
router.get('/', placeController.getAll);
router.get('/:id', placeController.getById);

// ESCRITURA AUTENTICADA. Quien puede hacer que lo decide el service, porque
// depende del DATO (place.id_user) y no de la URL: por eso no alcanza un
// middleware como requireSelfOrAdmin.
router.post('/', authenticate, placeController.create);
router.put('/:id', authenticate, placeController.update);
router.delete('/:id', authenticate, placeController.delete_);

export default router;
