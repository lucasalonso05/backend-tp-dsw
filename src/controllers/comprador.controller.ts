import { Request, Response } from 'express';
import * as compradorService from '../services/comprador.service';
import { create_comprador_schema, update_comprador_schema, } from '../schemas/comprador.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const compradores = await compradorService.getAll();
    res.status(200).json(compradores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener compradores' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comprador = await compradorService.getById(Number(id));
    if (!comprador) {
      return res.status(404).json({ error: 'comprador no encontrado' });
    }
    res.status(200).json(comprador);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el comprador' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_comprador_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const comprador = await compradorService.create(validation.data);
    res.status(201).json(comprador);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el comprador' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_comprador_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const comprador = await compradorService.update(Number(id), validation.data);
    res.status(200).json(comprador);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el comprador' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await compradorService.delete_(Number(id));
    res.status(200).json({ mensaje: 'comprador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el comprador' });
  }
};