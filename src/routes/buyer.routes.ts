import { Router } from 'express';
import * as buyerController from '../controllers/buyer.controller';

const router = Router();

router.get('/', buyerController.getAll);
router.get('/:id', buyerController.getById);
router.post('/', buyerController.create);
router.put('/:id', buyerController.update);
router.delete('/:id', buyerController.delete_);

export default router;