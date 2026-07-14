import { Router } from 'express';
import * as ticketdigitalController from '../controllers/ticket_digital.controller';

const router = Router();

router.get('/', ticketdigitalController.getAll);
router.post('/escanear', ticketdigitalController.escanear);
router.get('/:id_comprador/:cod_orden/:cod', ticketdigitalController.getById);
router.post('/', ticketdigitalController.create);

export default router;