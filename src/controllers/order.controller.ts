import { Request, Response } from 'express';
import logger from '../config/logger';
import * as orderService from '../services/order.service';
import { create_order_schema, update_order_schema } from '../schemas/order.schema';

// Lee el :id de la URL. Devuelve null si no es un entero positivo.
const readId = (req: Request) => {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
};

// Traduce los errores del negocio a códigos HTTP.
// Lo que no es un error conocido va al log y sale como 500, sin detalles internos.
const respondError = (res: Response, error: unknown, fallback: string) => {
  if (error instanceof orderService.InvalidOrderError) {
    return res.status(400).json({ error: error.message });
  }
  if (error instanceof orderService.OrderForbiddenError) {
    return res.status(403).json({ error: error.message });
  }
  if (error instanceof orderService.OrderNotFoundError) {
    return res.status(404).json({ error: error.message });
  }
  if (error instanceof orderService.OrderConflictError) {
    return res.status(409).json({ error: error.message });
  }
  logger.error((error as Error).message);
  return res.status(500).json({ error: fallback });
};

// Todas las rutas de órdenes exigen sesión (requireAuth), así que req.user siempre está.

// 200 · 500
export const getAll = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAll(req.user!);
    return res.status(200).json(orders);
  } catch (error) {
    return respondError(res, error, 'Error al obtener ordenes');
  }
};

// 200 · 400 id inválido · 404 no existe o no es tuya · 500
export const getById = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const order = await orderService.getById(id, req.user!);
    return res.status(200).json(order);
  } catch (error) {
    return respondError(res, error, 'Error al obtener la orden');
  }
};

// 201 · 400 datos inválidos o entrada inexistente · 409 sin stock o evento no a la venta · 500
export const create = async (req: Request, res: Response) => {
  const validation = create_order_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const order = await orderService.create(validation.data, req.user!);
    return res.status(201).json(order);
  } catch (error) {
    return respondError(res, error, 'Error al crear la orden');
  }
};

// 200 · 400 id o datos inválidos · 403 vencer sin ser admin · 404 · 409 ya no está pendiente · 500
export const update = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  const validation = update_order_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const order = await orderService.changeStatus(id, validation.data, req.user!);
    return res.status(200).json(order);
  } catch (error) {
    return respondError(res, error, 'Error al actualizar la orden');
  }
};