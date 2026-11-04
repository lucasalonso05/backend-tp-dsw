import { Router } from 'express';
import * as categoryController from '../controllers/category.controller';
import { requireAuth, requireRoles } from '../middlewares/auth.middleware';

const router = Router();

// Lectura pública: la cartelera arma el filtro de categorías sin iniciar sesión.
router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);

// Un organizador puede crear la categoría que le falta mientras carga su evento.
router.post('/', requireAuth, requireRoles('ORGANISER', 'ADMIN'), categoryController.create);

// Renombrar o borrar una categoría afecta a los eventos de todos: solo un admin.
router.put('/:id', requireAuth, requireRoles('ADMIN'), categoryController.update);
router.delete('/:id', requireAuth, requireRoles('ADMIN'), categoryController.delete_);

export default router;
