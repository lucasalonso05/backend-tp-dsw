import { Request, Response } from 'express';
import * as entryService from '../services/entry.service';
import { create_entry_schema, update_entry_schema } from '../schemas/entry.schema';
import { actor_de } from '../lib/actor';
import { InputError, NotFoundError } from '../lib/errors';

export const getAll = async (req: Request, res: Response) => {
  const entries = await entryService.getAll();
  res.status(200).json(entries);
};

export const getById = async (req: Request, res: Response) => {
  const entry = await entryService.getById(Number(req.params.id));
  if (!entry) throw new NotFoundError('Entrada no encontrada');
  res.status(200).json(entry);
};

export const create = async (req: Request, res: Response) => {
  const validation = create_entry_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const entry = await entryService.create(validation.data, actor_de(req));
  res.status(201).json(entry);
};

export const update = async (req: Request, res: Response) => {
  const validation = update_entry_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const entry = await entryService.update(Number(req.params.id), validation.data, actor_de(req));
  res.status(200).json(entry);
};

export const delete_ = async (req: Request, res: Response) => {
  const entry = await entryService.delete_(Number(req.params.id), actor_de(req));
  res.status(200).json(entry);
};
