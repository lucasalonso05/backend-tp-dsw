import { Request, Response } from 'express';
import * as buyerService from '../services/buyer.service';
import { create_buyer_schema, update_buyer_schema, } from '../schemas/buyer.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const buyers = await buyerService.getAll();
    res.status(200).json(buyers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener compradores' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const buyer = await buyerService.getById(Number(id));
    if (!buyer) {
      return res.status(404).json({ error: 'Comprador no encontrado' });
    }
    res.status(200).json(buyer);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el comprador' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_buyer_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const buyer = await buyerService.create(validation.data);
    res.status(201).json(buyer);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el comprador' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_buyer_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const buyer = await buyerService.update(Number(id), validation.data);
    res.status(200).json(buyer);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el comprador' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await buyerService.delete_(Number(id));
    res.status(200).json({ mensaje: 'Comprador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el comprador' });
  }
};