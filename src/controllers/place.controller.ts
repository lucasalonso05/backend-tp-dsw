import { Request, Response } from 'express';
import logger from '../config/logger';
import * as placeService from '../services/place.service';
import { create_place_schema, update_place_schema } from '../schemas/place.schema';

// Lee el :id de la URL. Devuelve null si no es un entero positivo.
const readId = (req: Request) => {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
};

// Traduce los errores del negocio a códigos HTTP.
// Lo que no es un error conocido va al log y sale como 500, sin detalles internos.
const respondError = (res: Response, error: unknown, fallback: string) => {
  if (error instanceof placeService.InvalidOwnerError) {
    return res.status(400).json({ error: error.message });
  }
  if (error instanceof placeService.NotPlaceOwnerError) {
    return res.status(403).json({ error: error.message });
  }
  if (error instanceof placeService.PlaceNotFoundError) {
    return res.status(404).json({ error: error.message });
  }
  if (error instanceof placeService.PlaceHasEventsError) {
    return res.status(409).json({ error: error.message });
  }
  logger.error((error as Error).message);
  return res.status(500).json({ error: fallback });
};

// 200 · 500
export const getAll = async (req: Request, res: Response) => {
  try {
    const places = await placeService.getAll();
    return res.status(200).json(places);
  } catch (error) {
    return respondError(res, error, 'Error al obtener lugares');
  }
};

// 200 · 400 id inválido · 404 · 500
export const getById = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const place = await placeService.getById(id);
    return res.status(200).json(place);
  } catch (error) {
    return respondError(res, error, 'Error al obtener el lugar');
  }
};

// 201 · 400 datos o dueño inválidos · 500
export const create = async (req: Request, res: Response) => {
  const validation = create_place_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    // La ruta exige sesión (requireAuth), así que req.user siempre está.
    const place = await placeService.create(validation.data, req.user!);
    return res.status(201).json(place);
  } catch (error) {
    return respondError(res, error, 'Error al crear el lugar');
  }
};

// 200 · 400 id, datos o dueño inválidos · 403 no es tuyo · 404 · 500
export const update = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  const validation = update_place_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const place = await placeService.update(id, validation.data, req.user!);
    return res.status(200).json(place);
  } catch (error) {
    return respondError(res, error, 'Error al actualizar el lugar');
  }
};

// 200 · 400 id inválido · 403 no es tuyo · 404 · 409 tiene eventos · 500
export const delete_ = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    await placeService.delete_(id, req.user!);
    return res.status(200).json({ mensaje: 'Lugar eliminado correctamente' });
  } catch (error) {
    return respondError(res, error, 'Error al eliminar el lugar');
  }
};