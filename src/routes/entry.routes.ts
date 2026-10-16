import { Router } from 'express';
import * as entryController from '../controllers/entry.controller';
import { requireAuth, requireRoles } from '../middlewares/auth.middleware';

const router = Router();

// Lectura pública: el catálogo se puede explorar sin iniciar sesión.
router.get('/', entryController.getAll);
router.get('/:id', entryController.getById);

// Escritura: organizadores y admins. Que sea el dueño del evento lo revisa el controller.
router.post('/', requireAuth, requireRoles('ORGANISER', 'ADMIN'), entryController.create);
router.put('/:id', requireAuth, requireRoles('ORGANISER', 'ADMIN'), entryController.update);
router.delete('/:id', requireAuth, requireRoles('ORGANISER', 'ADMIN'), entryController.delete_);

export default router;