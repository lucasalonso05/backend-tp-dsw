import { Request, Response } from 'express';
import * as eventService from '../services/event.service';
import { create_event_schema, update_event_schema } from '../schemas/event.schema';
import { canManage } from '../middlewares/auth.middleware';

export const getAll = async (req: Request, res: Response) => {
  try {
    const events = await eventService.getAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await eventService.getById(Number(id));
    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el evento' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_event_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    // El dueño es quien crea el evento. Un admin puede crearlo a nombre de un organizador.
    const user = req.user!;
    const id_user =
      user.role === 'ADMIN' && validation.data.id_user ? validation.data.id_user : user.id;

    const event = await eventService.create({ ...validation.data, id_user });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_event_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const event = await eventService.getById(Number(id));
    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    if (!canManage(req.user!, event.id_user)) {
      return res.status(403).json({ error: 'Solo el organizador del evento o un admin pueden modificarlo' });
    }

    // Solo un admin puede pasar el evento a otro organizador.
    const { id_user, ...resto } = validation.data;
    const data = req.user!.role === 'ADMIN' ? validation.data : resto;

    const event_updated = await eventService.update(Number(id), data);
    res.status(200).json(event_updated);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await eventService.getById(Number(id));
    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    if (!canManage(req.user!, event.id_user)) {
      return res.status(403).json({ error: 'Solo el organizador del evento o un admin pueden cancelarlo' });
    }

    const event_cancelled = await eventService.delete_(Number(id));
    res.status(200).json(event_cancelled);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
};