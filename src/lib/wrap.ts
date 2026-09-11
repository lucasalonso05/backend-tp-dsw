import { Request, Response, NextFunction } from 'express';

// Express 5 propaga las promesas rechazadas al manejador de errores, pero
// dejarlo implicito hace que se dependa de una version. `wrap` lo vuelve
// explicito: cualquier error que tire el handler -incluido el de un await- va
// a parar a `next()`, y de ahi al middleware global de index.ts.
//
// Para que sirve: antes cada controller repetia un try/catch que traducia el
// error a HTTP. Eran 30 copias del mismo bloque, y cada una podia quedar
// desalineada (de hecho pasaba: event.delete_ devolvia 500 donde correspondia
// un 404). Ahora el controller solo describe el caso feliz y LANZA; la
// traduccion vive en un unico lugar.
type handler = (req: Request, res: Response, next: NextFunction) => unknown;

export const wrap = (fn: handler) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
