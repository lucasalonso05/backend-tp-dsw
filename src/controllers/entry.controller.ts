import { Request, Response } from 'express';
import * as entryService from '../services/entry.service';
import { create_entry_schema, update_entry_schema } from '../schemas/entry.schema';

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

    const entry = await entryService.create(validation.data);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_entry_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const entry = await entryService.update(Number(id), validation.data);
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const entry = await entryService.delete_(Number(id));
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la entrada' });
  }
};
