import { Request, Response } from 'express';
import * as eventService from '../services/event.service';
import { create_event_schema, update_event_schema, event_query_schema } from '../schemas/event.schema';
import { actor_de } from '../lib/actor';
import { InputError, NotFoundError } from '../lib/errors';

// Sin try/catch: las rutas envuelven estos handlers con wrap(), que manda
// cualquier excepcion al manejador global de index.ts. El controller solo
// describe el caso feliz y lanza cuando algo no da.

export const getAll = async (req: Request, res: Response) => {
  // Los filtros salen del query string, no del body, y se validan igual que
  // cualquier entrada: un `?limit=abc` tiene que dar 400, no reventar adentro.
  const filtros = event_query_schema.safeParse(req.query);
  if (!filtros.success) throw new InputError(filtros.error.issues);

  const resultado = await eventService.getAll(filtros.data);
  res.status(200).json(resultado);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await eventService.getById(Number(id));
  if (!event) throw new NotFoundError('Evento no encontrado');
  res.status(200).json(event);
};

export const create = async (req: Request, res: Response) => {
  const validation = create_event_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);

  const event = await eventService.create(validation.data, actor_de(req));
  res.status(201).json(event);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const validation = update_event_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);

  const event = await eventService.update(Number(id), validation.data, actor_de(req));
  res.status(200).json(event);
};

export const delete_ = async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await eventService.delete_(Number(id), actor_de(req));
  res.status(200).json(event);
};
