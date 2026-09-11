import { Request, Response } from 'express';
import * as placeService from '../services/place.service';
import { create_place_schema, update_place_schema } from '../schemas/place.schema';
import { actor_de } from '../lib/actor';
import { InputError, NotFoundError } from '../lib/errors';

// Sin try/catch: wrap() en las rutas manda cualquier excepcion al manejador
// global de index.ts, que es el unico lugar que decide codigos HTTP.

export const getAll = async (req: Request, res: Response) => {
  const places = await placeService.getAll();
  res.status(200).json(places);
};

export const getById = async (req: Request, res: Response) => {
  const place = await placeService.getById(Number(req.params.id));
  if (!place) throw new NotFoundError('Lugar no encontrado');
  res.status(200).json(place);
};

export const create = async (req: Request, res: Response) => {
  const validation = create_place_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const place = await placeService.create(validation.data, actor_de(req));
  res.status(201).json(place);
};

export const update = async (req: Request, res: Response) => {
  const validation = update_place_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const place = await placeService.update(Number(req.params.id), validation.data, actor_de(req));
  res.status(200).json(place);
};

export const delete_ = async (req: Request, res: Response) => {
  await placeService.delete_(Number(req.params.id), actor_de(req));
  res.status(200).json({ mensaje: 'Lugar eliminado correctamente' });
};
