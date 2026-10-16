import { Request, Response } from 'express';
import * as placeService from '../services/place.service';
import { create_place_schema, update_place_schema } from '../schemas/place.schema';
import { canManage } from '../middlewares/auth.middleware';

export const getAll = async (req: Request, res: Response) => {
  try {
    const places = await placeService.getAll();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener lugares' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const place = await placeService.getById(Number(id));
    if (!place) {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el lugar' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_place_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    // El dueño es quien crea el lugar. Un admin puede crearlo a nombre de un organizador.
    const user = req.user!;
    const id_user =
      user.role === 'ADMIN' && validation.data.id_user ? validation.data.id_user : user.id;

    const place = await placeService.create({ ...validation.data, id_user });
    res.status(201).json(place);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_place_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const place = await placeService.getById(Number(id));
    if (!place) {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
    if (!canManage(req.user!, place.id_user)) {
      return res.status(403).json({ error: 'Solo el dueño del lugar o un admin pueden modificarlo' });
    }

    // Solo un admin puede pasar el lugar a otro organizador.
    const { id_user, ...resto } = validation.data;
    const data = req.user!.role === 'ADMIN' ? validation.data : resto;

    const place_updated = await placeService.update(Number(id), data);
    res.status(200).json(place_updated);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const place = await placeService.getById(Number(id));
    if (!place) {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
    if (!canManage(req.user!, place.id_user)) {
      return res.status(403).json({ error: 'Solo el dueño del lugar o un admin pueden eliminarlo' });
    }

    await placeService.delete_(Number(id));
    res.status(200).json({ mensaje: 'Lugar eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el lugar' });
  }
};