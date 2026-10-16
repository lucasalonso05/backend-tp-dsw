import type { PayloadToken } from '../config/jwt';

// Agrega a cada pedido de Express el usuario que lo hace, si inició sesión.
declare global {
  namespace Express {
    interface Request {
      user?: PayloadToken;
    }
  }
}

export {};