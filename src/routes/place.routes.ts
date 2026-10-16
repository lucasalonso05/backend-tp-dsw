import { Router } from 'express';
import * as placeController from '../controllers/place.controller';
import { requireAuth, requireRoles } from '../middlewares/auth.middleware';

const router = Router();

// Lectura pública: el catálogo se puede explorar sin iniciar sesión.
router.get('/', placeController.getAll);
router.get('/:id', placeController.getById);

// Escritura: organizadores y admins. Que sea el dueño lo revisa el controller.
router.post('/', requireAuth, requireRoles('ORGANISER', 'ADMIN'), placeController.create);
router.put('/:id', requireAuth, requireRoles('ORGANISER', 'ADMIN'), placeController.update);
router.delete('/:id', requireAuth, requireRoles('ORGANISER', 'ADMIN'), placeController.delete_);

export default router;