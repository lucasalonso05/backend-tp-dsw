import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { requireRole, requireSelfOrAdmin } from '../middlewares/role.middleware';

const router = Router();

// PUBLICA: registro. Siempre crea un ASSISTANT (el rol lo pone el servidor).
router.post('/', userController.create);

// SOLO ADMIN: el listado completo expone emails, telefonos y documentos de
// todos los usuarios. Es el endpoint mas sensible del recurso.
router.get('/', authenticate, requireRole('ADMIN'), userController.getAll);

// PROPIO O ADMIN: cada uno ve, edita y borra lo suyo.
router.get('/:id', authenticate, requireSelfOrAdmin(), userController.getById);
router.put('/:id', authenticate, requireSelfOrAdmin(), userController.update);
router.delete('/:id', authenticate, requireSelfOrAdmin(), userController.delete_);

// SOLO ADMIN: unico camino para cambiar de rol.
// Cadena de middlewares: primero QUIEN es (authenticate), despues si PUEDE
// (requireRole), y solo entonces corre el controller.
router.patch('/:id/role', authenticate, requireRole('ADMIN'), userController.update_role);

export default router;
