import { Request, Response } from 'express';
import logger from '../config/logger';
import * as userService from '../services/user.service';
import { create_user_schema, update_user_schema } from '../schemas/user.schema';

// Lee el :id de la URL. Devuelve null si no es un entero positivo.
const readId = (req: Request) => {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
};

// Traduce los errores del negocio a códigos HTTP.
// Lo que no es un error conocido va al log y sale como 500, sin detalles internos.
const respondError = (res: Response, error: unknown, fallback: string) => {
  if (error instanceof userService.UserNotFoundError) {
    return res.status(404).json({ error: error.message });
  }
  if (
    error instanceof userService.UserAlreadyExistsError ||
    error instanceof userService.UserHasRelatedDataError
  ) {
    return res.status(409).json({ error: error.message });
  }
  logger.error((error as Error).message);
  return res.status(500).json({ error: fallback });
};

// 200 · 500
export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return respondError(res, error, 'Error al obtener usuarios');
  }
};

// 200 · 400 id inválido · 404 · 500
export const getById = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const user = await userService.getById(id);
    return res.status(200).json(user);
  } catch (error) {
    return respondError(res, error, 'Error al obtener el usuario');
  }
};

// 201 · 400 datos inválidos · 409 ya existe · 500
export const create = async (req: Request, res: Response) => {
  const validation = create_user_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    // req.user puede no estar: en el registro público nadie inició sesión.
    const user = await userService.create(validation.data, req.user);
    return res.status(201).json(user);
  } catch (error) {
    return respondError(res, error, 'Error al crear el usuario');
  }
};

// 200 · 400 id o datos inválidos · 404 · 409 ya existe · 500
export const update = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  const validation = update_user_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    // La ruta exige sesión (requireAuth), así que req.user siempre está.
    const user = await userService.update(id, validation.data, req.user!);
    return res.status(200).json(user);
  } catch (error) {
    return respondError(res, error, 'Error al actualizar el usuario');
  }
};

// 200 · 400 id inválido · 404 · 409 tiene datos asociados · 500
export const delete_ = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    await userService.delete_(id);
    return res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    return respondError(res, error, 'Error al eliminar el usuario');
  }
};