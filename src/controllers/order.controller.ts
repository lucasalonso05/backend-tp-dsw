import { Request, Response } from 'express';
import * as orderService from '../services/order.service';
import { create_order_schema, update_order_schema } from '../schemas/order.schema';
import { canManage } from '../middlewares/auth.middleware';

// Un admin ve todas las órdenes; cualquier otro, solo las suyas.
export const getAll = async (req: Request, res: Response) => {
  try {
    const user = req.user!;
    const orders = await orderService.getAll(user.role === 'ADMIN' ? undefined : user.id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ordenes' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await orderService.getById(Number(id));
    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    if (!canManage(req.user!, order.id_user)) {
      return res.status(403).json({ error: 'Solo el comprador o un admin pueden ver esta orden' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener orden' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_order_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    // El comprador es quien inició sesión.
    const order = await orderService.create(req.user!.id, validation.data);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_order_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const order = await orderService.getById(Number(id));
    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    if (!canManage(req.user!, order.id_user)) {
      return res.status(403).json({ error: 'Solo el comprador o un admin pueden modificar esta orden' });
    }
    // El comprador puede pagar (pago simulado) o cancelar. Marcarla como vencida es tarea de un admin.
    if (validation.data.status === 'EXPIRED' && req.user!.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Solo un admin puede marcar una orden como vencida' });
    }

    const order_updated = await orderService.changeStatus(Number(id), validation.data);
    res.status(200).json(order_updated);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};