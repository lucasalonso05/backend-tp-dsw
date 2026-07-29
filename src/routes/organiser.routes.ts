import { Router } from 'express';
import * as organiserController from '../controllers/organiser.controller';

const router = Router();

router.get('/', organiserController.getAll);
router.get('/:id', organiserController.getById);
router.post('/', organiserController.create);
router.put('/:id', organiserController.update);
router.delete('/:id', organiserController.delete_);

export default router;