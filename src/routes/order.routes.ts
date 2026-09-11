import { Router } from 'express';
import * as orderController from '../controllers/order.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { wrap } from '../lib/wrap';

const router = Router();

// Ninguna ruta de ordenes es publica: una orden siempre pertenece a alguien.
// El filtro por dueno y las reglas de quien puede hacer que viven en el
// service, porque dependen del DATO (order.id_user) y no de la URL.
//
// No hay DELETE a proposito: una orden no se borra, se CANCELA
// (PUT { status: 'CANCELLED' }). Borrarla perderia el historial de compra y
// dejaria tickets huerfanos. Ver docs/api-contract.md.
router.get('/', authenticate, wrap(orderController.getAll));
router.get('/:id', authenticate, wrap(orderController.getById));
router.post('/', authenticate, wrap(orderController.create));
router.put('/:id', authenticate, wrap(orderController.update));

export default router;
