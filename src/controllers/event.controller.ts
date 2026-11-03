import { Request, Response } from 'express';
import logger from '../config/logger';
import * as eventService from '../services/event.service';
import { create_event_schema, update_event_schema } from '../schemas/event.schema';

// Lee el :id de la URL. Devuelve null si no es un entero positivo.
const readId = (req: Request) => {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
};

// Traduce los errores del negocio a códigos HTTP.
// Lo que no es un error conocido va al log y sale como 500, sin detalles internos.
const respondError = (res: Response, error: unknown, fallback: string) => {
  if (error instanceof eventService.InvalidEventError) {
    return res.status(400).json({ error: error.message });
  }
  if (error instanceof eventService.NotEventOwnerError) {
    return res.status(403).json({ error: error.message });
  }
  if (error instanceof eventService.EventNotFoundError) {
    return res.status(404).json({ error: error.message });
  }
  logger.error((error as Error).message);
  return res.status(500).json({ error: fallback });
};

// 200 · 500
export const getAll = async (req: Request, res: Response) => {
  try {
    const events = await eventService.getAll();
    return res.status(200).json(events);
  } catch (error) {
    return respondError(res, error, 'Error al obtener eventos');
  }
};

// 200 · 400 id inválido · 404 · 500
export const getById = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const event = await eventService.getById(id);
    return res.status(200).json(event);
  } catch (error) {
    return respondError(res, error, 'Error al obtener el evento');
  }
};

// 201 · 400 datos inválidos o regla del negocio · 500
export const create = async (req: Request, res: Response) => {
  const validation = create_event_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    // La ruta exige sesión (requireAuth), así que req.user siempre está.
    const event = await eventService.create(validation.data, req.user!);
    return res.status(201).json(event);
  } catch (error) {
    return respondError(res, error, 'Error al crear el evento');
  }
};

// 200 · 400 id, datos o regla del negocio · 403 no es tuyo · 404 · 500
export const update = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  const validation = update_event_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const event = await eventService.update(id, validation.data, req.user!);
    return res.status(200).json(event);
  } catch (error) {
    return respondError(res, error, 'Error al actualizar el evento');
  }
};

// Cancela el evento (no lo borra) y lo devuelve.
// 200 · 400 id inválido · 403 no es tuyo · 404 · 500
export const delete_ = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const event = await eventService.delete_(id, req.user!);
    return res.status(200).json(event);
  } catch (error) {
    return respondError(res, error, 'Error al cancelar el evento');
  }
};