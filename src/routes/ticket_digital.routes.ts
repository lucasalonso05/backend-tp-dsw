import { Router } from 'express';
import * as ticketdigitalController from '../controllers/ticket_digital.controller';

const router = Router();

router.get('/', ticketdigitalController.getAll);
router.get('/:id_evento/:cod', ticketdigitalController.getById);
router.post('/', ticketdigitalController.create);

export default router;