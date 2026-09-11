import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { login_schema } from '../schemas/auth.schema';
import { InputError } from '../lib/errors';

export const login = async (req: Request, res: Response) => {
  const validation = login_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);

  // Las credenciales invalidas las lanza el service como UnauthorizedError; el
  // manejador global las traduce a 401.
  const result = await authService.login(validation.data);
  res.status(200).json(result);
};
