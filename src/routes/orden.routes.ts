import { Router } from 'express';
import * as ordenController from '../controllers/orden.controller';

const router = Router();

router.get('/', ordenController.getAll);
router.get('/:id', ordenController.getById);
router.post('/', ordenController.create);

export default router;