import { Router } from 'express';
import * as orderController from '../controllers/order.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

// Una orden siempre es de alguien: todas las rutas piden sesión.
// Que sea el comprador (o un admin) lo revisa el controller.
router.get('/', requireAuth, orderController.getAll);
router.get('/:id', requireAuth, orderController.getById);
router.post('/', requireAuth, orderController.create);
router.put('/:id', requireAuth, orderController.update);

export default router;