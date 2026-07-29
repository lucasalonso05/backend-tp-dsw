import { Request, Response } from 'express';
import * as orderService from '../services/order.service';
import {create_order_schema, update_order_schema,} from '../schemas/order.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ordenes' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id_buyer, code } = req.params;
    const order = await orderService.getById(Number(id_buyer), Number(code));
    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener orden' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    // Primero validar con Zod
    const validation = create_order_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const order = await orderService.create(validation.data);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear orden' });
  }
};

