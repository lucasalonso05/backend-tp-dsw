import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import {
  optionalAuth,
  requireAuth,
  onlySelfOrAdmin,
  requireRoles,
} from '../middlewares/auth.middleware';

const router = Router();

// Registro público. Si lo usa un admin con sesión, puede elegir el rol.
router.post('/', optionalAuth, userController.create);

// El listado expone datos personales de todos: solo admin.
router.get('/', requireAuth, requireRoles('ADMIN'), userController.getAll);

// Cada uno ve y edita lo suyo; el admin, todo.
router.get('/:id', requireAuth, onlySelfOrAdmin, userController.getById);
router.put('/:id', requireAuth, onlySelfOrAdmin, userController.update);

router.delete('/:id', requireAuth, requireRoles('ADMIN'), userController.delete_);

export default router;