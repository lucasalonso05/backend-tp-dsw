import { Request, Response } from 'express';
import * as lugarService from '../services/lugar.service';
import {create_lugar_schema, update_lugar_schema,} from '../schemas/lugar.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const lugares = await lugarService.getAll();
    res.status(200).json(lugares);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener lugares' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const lugar = await lugarService.getById(Number(id));
    if (!lugar) {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
    res.status(200).json(lugar);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el lugar' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    // Primero validar con Zod
    const validation = create_lugar_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const lugar = await lugarService.create(validation.data);
    res.status(201).json(lugar);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el lugar' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_lugar_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const lugar = await lugarService.update(Number(id), validation.data);
    res.status(200).json(lugar);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el lugar' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await lugarService.delete_(Number(id));
    res.status(200).json({ mensaje: 'Lugar eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el lugar' });
  }
};