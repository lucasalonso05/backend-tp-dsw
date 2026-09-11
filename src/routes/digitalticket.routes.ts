import { Router } from 'express';
import * as digitalticketController from '../controllers/digitalticket.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// NADA de este recurso es publico: un ticket es la llave de entrada a un
// evento. Todas las rutas piden token; el service resuelve quien puede que
// cosa, porque depende del DATO (de quien es el ticket, de quien es el evento).
router.get('/', authenticate, digitalticketController.getAll);

// /scan va ANTES que /:id: Express matchea en orden y "scan" entraria como
// parametro. Aca no colisiona porque son metodos distintos (POST vs GET), pero
// el orden se respeta igual para que no dependa de ese detalle.
router.post('/scan', authenticate, digitalticketController.scan);

router.get('/:id', authenticate, digitalticketController.getById);
router.post('/', authenticate, digitalticketController.create);

export default router;
