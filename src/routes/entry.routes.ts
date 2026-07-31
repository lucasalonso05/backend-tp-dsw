import { Router } from 'express';
import * as entryController from '../controllers/entry.controller';

const router = Router();

router.get('/', entryController.getAll);
router.get('/:id_evento/:cod', entryController.getById);
router.post('/', entryController.create);
router.put('/:id_evento/:cod', entryController.update);
router.delete('/:id_evento/:cod', entryController.delete_);

export default router;