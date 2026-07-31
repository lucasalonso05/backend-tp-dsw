import { Router } from 'express';
import * as placeController from '../controllers/place.controller';

const router = Router();

router.get('/', placeController.getAll);
router.get('/:id', placeController.getById);
router.post('/', placeController.create);
router.put('/:id', placeController.update);
router.delete('/:id', placeController.delete_);

export default router;
