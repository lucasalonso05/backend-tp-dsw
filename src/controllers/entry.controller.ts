import { Request, Response } from 'express';
import logger from '../config/logger';
import * as entryService from '../services/entry.service';
import { create_entry_schema, update_entry_schema } from '../schemas/entry.schema';

// Lee el :id de la URL. Devuelve null si no es un entero positivo.
const readId = (req: Request) => {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
};

// Traduce los errores del negocio a códigos HTTP.
// Lo que no es un error conocido va al log y sale como 500, sin detalles internos.
const respondError = (res: Response, error: unknown, fallback: string) => {
  if (error instanceof entryService.InvalidEntryError) {
    return res.status(400).json({ error: error.message });
  }
  if (error instanceof entryService.NotEntryOwnerError) {
    return res.status(403).json({ error: error.message });
  }
  if (error instanceof entryService.EntryNotFoundError) {
    return res.status(404).json({ error: error.message });
  }
  if (
    error instanceof entryService.EntryAlreadyExistsError ||
    error instanceof entryService.EntryHasSalesError
  ) {
    return res.status(409).json({ error: error.message });
  }
  logger.error((error as Error).message);
  return res.status(500).json({ error: fallback });
};

// 200 · 500
export const getAll = async (req: Request, res: Response) => {
  try {
    const entries = await entryService.getAll();
    return res.status(200).json(entries);
  } catch (error) {
    return respondError(res, error, 'Error al obtener entradas');
  }
};

// 200 · 400 id inválido · 404 · 500
export const getById = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const entry = await entryService.getById(id);
    return res.status(200).json(entry);
  } catch (error) {
    return respondError(res, error, 'Error al obtener la entrada');
  }
};

// 201 · 400 datos inválidos o regla del negocio · 403 no es tu evento · 409 nombre repetido · 500
export const create = async (req: Request, res: Response) => {
  const validation = create_entry_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    // La ruta exige sesión (requireAuth), así que req.user siempre está.
    const entry = await entryService.create(validation.data, req.user!);
    return res.status(201).json(entry);
  } catch (error) {
    return respondError(res, error, 'Error al crear la entrada');
  }
};

// 200 · 400 id, datos o regla del negocio · 403 no es tu evento · 404 · 409 nombre repetido · 500
export const update = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  const validation = update_entry_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const entry = await entryService.update(id, validation.data, req.user!);
    return res.status(200).json(entry);
  } catch (error) {
    return respondError(res, error, 'Error al actualizar la entrada');
  }
};

// 200 · 400 id inválido · 403 no es tu evento · 404 · 409 tiene ventas · 500
export const delete_ = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const entry = await entryService.delete_(id, req.user!);
    return res.status(200).json(entry);
  } catch (error) {
    return respondError(res, error, 'Error al eliminar la entrada');
  }
};