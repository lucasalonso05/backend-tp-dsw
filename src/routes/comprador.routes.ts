import { Router } from 'express';
import * as compradorController from '../controllers/comprador.controller';

const router = Router();

router.get('/', compradorController.getAll);
router.get('/:id', compradorController.getById);
router.post('/', compradorController.create);
router.put('/:id', compradorController.update);
router.delete('/:id', compradorController.delete_);

export default router;