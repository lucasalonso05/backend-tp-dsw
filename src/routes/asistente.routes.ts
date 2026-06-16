import { Router } from 'express';
import * as asistenteController from '../controllers/asistente.controller';

const router = Router();

router.get('/', asistenteController.getAll);
router.get('/:id', asistenteController.getById);
router.post('/', asistenteController.create);
router.put('/:id', asistenteController.update);
router.delete('/:id', asistenteController.delete_);

export default router;