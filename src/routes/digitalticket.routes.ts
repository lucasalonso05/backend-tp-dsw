import { Router } from 'express';
import * as digitalticketController from '../controllers/digitalticket.controller';
import { requireAuth, requireRoles } from '../middlewares/auth.middleware';

const router = Router();

// Un ticket es la llave de entrada a un evento: nada de este recurso es público.
router.get('/', requireAuth, digitalticketController.getAll);

// Escanear en la puerta: organizadores y admins. Que sea SU evento lo revisa el controller.
router.post('/scan', requireAuth, requireRoles('ORGANISER', 'ADMIN'), digitalticketController.scan);

router.get('/:id', requireAuth, digitalticketController.getById);

// Los tickets se emiten solos al pagar la orden. Esta ruta queda para que un admin
// complete alguno a mano si hiciera falta.
router.post('/', requireAuth, requireRoles('ADMIN'), digitalticketController.create);

export default router;