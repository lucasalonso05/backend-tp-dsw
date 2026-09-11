import { Router } from 'express';
import * as orderController from '../controllers/order.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Ninguna ruta de ordenes es publica: una orden siempre pertenece a alguien.
// El filtro por dueño y las reglas de quien puede hacer que viven en el
// service, porque dependen del DATO (order.id_user) y no de la URL.
router.get('/', authenticate, orderController.getAll);
router.get('/:id', authenticate, orderController.getById);
router.post('/', authenticate, orderController.create);
router.put('/:id', authenticate, orderController.update);

export default router;
