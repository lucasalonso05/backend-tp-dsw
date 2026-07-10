import { Router } from 'express';
import * as entradaController from '../controllers/entrada.controller';

const router = Router();

router.get('/', entradaController.getAll);
router.get('/:id_evento/:cod', entradaController.getById);
router.post('/', entradaController.create);
router.put('/:id_evento/:cod', entradaController.update);
router.delete('/:id_evento/:cod', entradaController.delete_);

export default router;