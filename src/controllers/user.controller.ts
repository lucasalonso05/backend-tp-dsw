import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { register_user_schema, update_user_schema, update_role_schema } from '../schemas/user.schema';
import { InputError, NotFoundError } from '../lib/errors';

export const getAll = async (req: Request, res: Response) => {
  const users = await userService.getAll();
  res.status(200).json(users);
};

export const getById = async (req: Request, res: Response) => {
  const user = await userService.getById(Number(req.params.id));
  if (!user) throw new NotFoundError('Usuario no encontrado');
  res.status(200).json(user);
};

export const create = async (req: Request, res: Response) => {
  const validation = register_user_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const user = await userService.create(validation.data);
  res.status(201).json(user);
};

export const update = async (req: Request, res: Response) => {
  const validation = update_user_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const user = await userService.update(Number(req.params.id), validation.data);
  res.status(200).json(user);
};

export const delete_ = async (req: Request, res: Response) => {
  await userService.delete_(Number(req.params.id));
  res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
};

export const update_role = async (req: Request, res: Response) => {
  const validation = update_role_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const user = await userService.update_role(Number(req.params.id), validation.data.role);
  res.status(200).json(user);
};
