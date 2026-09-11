import { Request, Response } from 'express';
import * as orderService from '../services/order.service';
import { create_order_schema, update_order_schema } from '../schemas/order.schema';
import { actor_de } from '../lib/actor';
import { InputError, NotFoundError } from '../lib/errors';

export const getAll = async (req: Request, res: Response) => {
  // El service filtra por dueno salvo que sea ADMIN.
  const orders = await orderService.getAll(actor_de(req));
  res.status(200).json(orders);
};

export const getById = async (req: Request, res: Response) => {
  const order = await orderService.getById(Number(req.params.id), actor_de(req));
  if (!order) throw new NotFoundError('Orden no encontrada');
  res.status(200).json(order);
};

export const create = async (req: Request, res: Response) => {
  const validation = create_order_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  // El id_user ya no viaja en el body: sale del token.
  const order = await orderService.create(validation.data, actor_de(req));
  res.status(201).json(order);
};

export const update = async (req: Request, res: Response) => {
  const validation = update_order_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const order = await orderService.update(Number(req.params.id), validation.data, actor_de(req));
  res.status(200).json(order);
};
