import { Router } from 'express';
import * as eventController from '../controllers/event.controller';

const router = Router();

router.get('/', eventController.getAll);
router.get('/:id', eventController.getById);
router.post('/', eventController.create);
router.put('/:id', eventController.update);
router.delete('/:id', eventController.delete_);

export default router;