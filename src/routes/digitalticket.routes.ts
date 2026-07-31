import { Router } from 'express';
import * as digitalticketController from '../controllers/digitalticket.controller';

const router = Router();

router.get('/', digitalticketController.getAll);
router.post('/escanear', digitalticketController.escanear);
router.get('/:id_comprador/:cod_orden/:cod', digitalticketController.getById);
router.post('/', digitalticketController.create);

export default router;