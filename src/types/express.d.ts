import { token_payload } from '../config/jwt';

// Declaration merging: Express no sabe nada de nuestro `req.user`, asi que le
// agregamos la propiedad a su interfaz Request. Sin esto, el middleware de
// autenticacion no compila y cada controller tendria que castear req a any.
//
// Es opcional (`?`) a proposito: en una ruta publica el middleware no corrio,
// asi que req.user no existe. El `?` obliga a chequearlo antes de usarlo.
declare global {
  namespace Express {
    interface Request {
      user?: token_payload;
    }
  }
}
