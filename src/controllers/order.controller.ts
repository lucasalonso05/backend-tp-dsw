import { Request, Response } from 'express';
import * as orderService from '../services/order.service';
import { create_order_schema, update_order_schema } from '../schemas/order.schema';
import { actor_de } from '../lib/actor';
import { responder_error } from '../lib/http';

export const getAll = async (req: Request, res: Response) => {
  try {
    // El service filtra por dueño salvo que sea ADMIN.
    const orders = await orderService.getAll(actor_de(req));
    res.status(200).json(orders);
  } catch (error) {
    responder_error(res, error, 'Error al obtener ordenes');
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await orderService.getById(Number(id), actor_de(req));
    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    res.status(200).json(order);
  } catch (error) {
    responder_error(res, error, 'Error al obtener orden');
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_order_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    // El id_user ya no viaja en el body: sale del token.
    const order = await orderService.create(validation.data, actor_de(req));
    res.status(201).json(order);
  } catch (error) {
    responder_error(res, error, 'Error al crear la orden');
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_order_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const order = await orderService.update(Number(id), validation.data, actor_de(req));
    res.status(200).json(order);
  } catch (error) {
    responder_error(res, error, 'Error al actualizar la orden');
  }
};
