import { Request, Response } from 'express';
import * as entryService from '../services/entry.service';
import * as eventService from '../services/event.service';
import { create_entry_schema, update_entry_schema } from '../schemas/entry.schema';
import { canManage } from '../middlewares/auth.middleware';

// Una entrada no tiene dueño propio: la gestiona el organizador de su evento, o un admin.
// Si quien pide no puede, responde el error y devuelve null.
const findManageableEntry = async (req: Request, res: Response) => {
  const entry = await entryService.getById(Number(req.params.id));
  if (!entry) {
    res.status(404).json({ error: 'Entrada no encontrada' });
    return null;
  }

  const event = await eventService.getById(entry.id_event);
  if (!event || !canManage(req.user!, event.id_user)) {
    res.status(403).json({ error: 'Solo el organizador del evento o un admin pueden modificar sus entradas' });
    return null;
  }

  return entry;
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const entries = await entryService.getAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener entradas' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const entry = await entryService.getById(Number(id));
    if (!entry) {
      return res.status(404).json({ error: 'Entrada no encontrada' });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la entrada' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_entry_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const event = await eventService.getById(validation.data.id_event);
    if (!event) {
      return res.status(400).json({ error: 'El evento no existe' });
    }
    if (!canManage(req.user!, event.id_user)) {
      return res.status(403).json({ error: 'Solo el organizador del evento o un admin pueden cargarle entradas' });
    }

    const entry = await entryService.create(validation.data);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const validation = update_entry_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    if (!(await findManageableEntry(req, res))) return;

    // Una entrada no se puede pasar a otro evento: si viene id_event, se ignora.
    const { id_event, ...data } = validation.data;

    const entry = await entryService.update(Number(req.params.id), data);
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    if (!(await findManageableEntry(req, res))) return;

    const entry = await entryService.delete_(Number(req.params.id));
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la entrada' });
  }
};