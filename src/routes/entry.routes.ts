import { Router } from 'express';
import * as entryController from '../controllers/entry.controller';

const router = Router();

router.get('/', entryController.getAll);
router.get('/:id', entryController.getById);
router.post('/', entryController.create);
router.put('/:id', entryController.update);
router.delete('/:id', entryController.delete_);

export default router;
