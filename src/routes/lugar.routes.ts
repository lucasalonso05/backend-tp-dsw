import { Router } from 'express';
import * as lugarController from '../controllers/lugar.controller';

const router = Router();

router.get('/', lugarController.getAll);
router.get('/:id', lugarController.getById);
router.post('/', lugarController.create);
router.put('/:id', lugarController.update);
router.delete('/:id', lugarController.delete_);

export default router;
