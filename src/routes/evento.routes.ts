import { Router } from 'express';
import * as eventoController from '../controllers/evento.controller';

const router = Router();

router.get('/', eventoController.getAll);
router.get('/:id', eventoController.getById);
router.post('/', eventoController.create);
router.put('/:id', eventoController.update);
router.delete('/:id', eventoController.delete_);

export default router;