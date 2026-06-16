import { Router } from 'express';
import * as organizadorController from '../controllers/organizador.controller';

const router = Router();

router.get('/', organizadorController.getAll);
router.get('/:id', organizadorController.getById);
router.post('/', organizadorController.create);
router.put('/:id', organizadorController.update);
router.delete('/:id', organizadorController.delete_);

export default router;
