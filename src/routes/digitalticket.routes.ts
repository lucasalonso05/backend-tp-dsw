import { Router } from 'express';
import * as digitalticketController from '../controllers/digitalticket.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { wrap } from '../lib/wrap';

const router = Router();

// NADA de este recurso es publico: un ticket es la llave de entrada a un
// evento. Todas las rutas piden token; el service resuelve quien puede que
// cosa, porque depende del DATO (de quien es el ticket, de quien es el evento).
//
// No hay PUT ni DELETE a proposito: el unico cambio de estado valido es el
// canje, que tiene su propio endpoint (/scan), y borrar un ticket destruiria
// la evidencia de que alguien entro al evento. Ver docs/api-contract.md.
router.get('/', authenticate, wrap(digitalticketController.getAll));

// /scan va ANTES que /:id: Express matchea en orden. Aca no colisiona porque
// son metodos distintos, pero el orden se respeta igual para que no dependa de
// ese detalle.
router.post('/scan', authenticate, wrap(digitalticketController.scan));

router.get('/:id', authenticate, wrap(digitalticketController.getById));
router.post('/', authenticate, wrap(digitalticketController.create));

export default router;
