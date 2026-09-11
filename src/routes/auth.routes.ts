import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { wrap } from '../lib/wrap';

const router = Router();

router.post('/login', wrap(authController.login));

export default router;
