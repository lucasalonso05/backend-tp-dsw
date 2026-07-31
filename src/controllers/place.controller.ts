import { Request, Response } from 'express';
import * as placeService from '../services/place.service';
import {create_place_schema, update_place_schema,} from '../schemas/place.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const places = await placeService.getAll();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener lugares' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const place = await placeService.getById(Number(id));
    if (!place) {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el lugar' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    // Primero validar con Zod
    const validation = create_place_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const place = await placeService.create(validation.data);
    res.status(201).json(place);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el lugar' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_place_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const place = await placeService.update(Number(id), validation.data);
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el lugar' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await placeService.delete_(Number(id));
    res.status(200).json({ mensaje: 'Lugar eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el lugar' });
  }
};