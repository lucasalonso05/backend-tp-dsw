import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { create_user_schema, update_user_schema } from '../schemas/user.schema';

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(Number(id));
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_user_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const user = await userService.create(validation.data);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_user_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const user = await userService.update(Number(id), validation.data);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.delete_(Number(id));
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
