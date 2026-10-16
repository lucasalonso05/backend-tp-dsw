import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../config/jwt';
import type { PayloadToken } from '../config/jwt';
import type { role_user } from '../generated/prisma';

// Un recurso lo puede modificar su dueño o un admin.
export const canManage = (user: PayloadToken, id_user: number) =>
  user.role === 'ADMIN' || user.id === id_user;

// Lee el header "Authorization: Bearer <token>" y devuelve su contenido, o null.
const readToken = (req: Request) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) return null;
  return verifyToken(header.slice(7));
};

// Exige haber iniciado sesión. Deja en req.user quién hace el pedido.
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const user = readToken(req);
  if (!user) {
    return res.status(401).json({ error: 'Tenés que iniciar sesión' });
  }
  req.user = user;
  next();
};

// No exige sesión: si el pedido trae un token válido, deja el usuario en req.user.
// Sirve para rutas públicas que se comportan distinto cuando las usa un admin.
export const optionalAuth = (req: Request, res: Response, next: NextFunction) => {
  req.user = readToken(req) ?? undefined;
  next();
};

// Exige alguno de los roles indicados. Va siempre después de requireAuth.
export const requireRoles = (...roles: role_user[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'No tenés permiso para hacer esto' });
    }
    next();
  };

// Deja pasar si el :id de la URL es el del propio usuario, o si es admin.
export const onlySelfOrAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || !canManage(req.user, Number(req.params.id))) {
    return res.status(403).json({ error: 'No tenés permiso para hacer esto' });
  }
  next();
};