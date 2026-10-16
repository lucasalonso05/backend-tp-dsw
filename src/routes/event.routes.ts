import { Router } from 'express';
import * as eventController from '../controllers/event.controller';
import { requireAuth, requireRoles } from '../middlewares/auth.middleware';

const router = Router();

// Lectura pública: el catálogo se puede explorar sin iniciar sesión.
router.get('/', eventController.getAll);
router.get('/:id', eventController.getById);

// Escritura: organizadores y admins. Que sea el dueño lo revisa el controller.
router.post('/', requireAuth, requireRoles('ORGANISER', 'ADMIN'), eventController.create);
router.put('/:id', requireAuth, requireRoles('ORGANISER', 'ADMIN'), eventController.update);
router.delete('/:id', requireAuth, requireRoles('ORGANISER', 'ADMIN'), eventController.delete_);

export default router;