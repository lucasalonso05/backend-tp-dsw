import { Request, Response } from 'express';
import logger from '../config/logger';
import * as categoryService from '../services/category.service';
import { create_category_schema, update_category_schema } from '../schemas/category.schema';

// Lee el :id de la URL. Devuelve null si no es un entero positivo.
const readId = (req: Request) => {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
};

// Traduce los errores del negocio a códigos HTTP.
// Lo que no es un error conocido va al log y sale como 500, sin detalles internos.
const respondError = (res: Response, error: unknown, fallback: string) => {
  if (error instanceof categoryService.CategoryNotFoundError) {
    return res.status(404).json({ error: error.message });
  }
  // Una categoría repetida y una con eventos son los dos un conflicto con lo que ya hay.
  if (error instanceof categoryService.CategoryAlreadyExistsError
    || error instanceof categoryService.CategoryHasEventsError) {
    return res.status(409).json({ error: error.message });
  }
  logger.error((error as Error).message);
  return res.status(500).json({ error: fallback });
};

// 200 · 500
export const getAll = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    return respondError(res, error, 'Error al obtener categorías');
  }
};

// 200 · 400 id inválido · 404 · 500
export const getById = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const category = await categoryService.getById(id);
    return res.status(200).json(category);
  } catch (error) {
    return respondError(res, error, 'Error al obtener la categoría');
  }
};

// 201 · 400 datos inválidos · 409 ya existe · 500
export const create = async (req: Request, res: Response) => {
  const validation = create_category_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const category = await categoryService.create(validation.data);
    return res.status(201).json(category);
  } catch (error) {
    return respondError(res, error, 'Error al crear la categoría');
  }
};

// 200 · 400 id o datos inválidos · 404 · 409 ya existe · 500
export const update = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  const validation = update_category_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const category = await categoryService.update(id, validation.data);
    return res.status(200).json(category);
  } catch (error) {
    return respondError(res, error, 'Error al actualizar la categoría');
  }
};

// 200 · 400 id inválido · 404 · 409 tiene eventos · 500
export const delete_ = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    await categoryService.delete_(id);
    return res.status(200).json({ mensaje: 'Categoría eliminada correctamente' });
  } catch (error) {
    return respondError(res, error, 'Error al eliminar la categoría');
  }
};
