import { Router } from 'express';
import * as assistantController from '../controllers/assistant.controller';

const router = Router();

router.get('/', assistantController.getAll);
router.get('/:id', assistantController.getById);
router.post('/', assistantController.create);
router.put('/:id', assistantController.update);
router.delete('/:id', assistantController.delete_);

export default router;