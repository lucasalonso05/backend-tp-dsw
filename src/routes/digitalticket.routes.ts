import { Router } from 'express';
import * as digitalticketController from '../controllers/digitalticket.controller';

const router = Router();

router.get('/', digitalticketController.getAll);
router.post('/scan', digitalticketController.scan);
router.get('/:id', digitalticketController.getById);
router.post('/', digitalticketController.create);

export default router;
