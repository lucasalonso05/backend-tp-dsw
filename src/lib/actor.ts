import { Request } from 'express';
import { role_user } from '../generated/prisma';
import { UnauthorizedError, ForbiddenError } from './errors';

// Quien esta haciendo la operacion. Sale SIEMPRE del token, nunca del body:
// ese era el agujero de B5, y aplica igual a lugares, eventos y entradas.
export interface actor {
  id: number;
  role: role_user;
}

export const es_admin = (quien: actor) => quien.role === 'ADMIN';

// Las rutas protegidas pasan por `authenticate`, asi que req.user existe. El
// tipo lo marca opcional (una ruta publica no lo tendria), asi que se verifica
// una vez aca en vez de castear a any en cada handler.
export const actor_de = (req: Request): actor => {
  if (!req.user) throw new UnauthorizedError();
  return req.user;
};

// Permiso que depende del DATO, no de la URL: hay que leer el recurso para
// saber de quien es. Por eso vive en el service y no en un middleware.
export const exigir_dueno = (quien: actor, id_dueno: number, mensaje = 'No autorizado') => {
  if (es_admin(quien)) return;
  if (quien.id === id_dueno) return;
  throw new ForbiddenError(mensaje);
};

// Solo un organizador (o un admin) puede tener lugares y eventos.
export const exigir_organizador = (quien: actor) => {
  if (es_admin(quien)) return;
  if (quien.role === 'ORGANISER') return;
  throw new ForbiddenError('Solo un organizador puede realizar esta accion');
};
