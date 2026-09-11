import { Request, Response, NextFunction } from 'express';
import { role_user } from '../generated/prisma';

// AUTORIZACION: responde "que podes hacer".
// Va SIEMPRE despues de authenticate, que es quien llena req.user.
//
// Es una factory: requireRole('ADMIN') devuelve el middleware ya configurado.
// Asi se puede parametrizar por ruta sin escribir uno distinto para cada rol.
export const requireRole = (...roles: role_user[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Si no hay user es que authenticate no corrio antes: error de armado de
    // la ruta, no del cliente. Se responde 401 igual por las dudas.
    if (!req.user) {
      return res.status(401).json({ error: 'No autenticado' });
    }

    // 401 = no se quien sos. 403 = se quien sos y no te alcanza.
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'No autorizado' });
    }

    next();
  };
};

// PROPIEDAD: responde "esto es tuyo?".
// requireRole no alcanza para /users/:id, porque el permiso no depende solo
// del rol sino de QUE registro se esta tocando: un ASSISTANT puede editar su
// propio perfil, pero no el de otro.
//
// Un ADMIN pasa siempre. Cualquier otro rol, solo si el id de la URL coincide
// con el id que viene firmado en su token. El id del token no se puede
// falsificar: cambiarlo invalida la firma.
export const requireSelfOrAdmin = (param: string = 'id') => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'No autenticado' });
    }

    if (req.user.role === 'ADMIN') {
      return next();
    }

    if (req.user.id === Number(req.params[param])) {
      return next();
    }

    return res.status(403).json({ error: 'No autorizado' });
  };
};
