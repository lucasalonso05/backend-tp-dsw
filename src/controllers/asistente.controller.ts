import { Request, Response } from 'express';
import * as asistenteService from '../services/asistente.service';
import { create_asistente_schema, update_asistente_schema, } from '../schemas/asistente.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const asistentes = await asistenteService.getAll();
    res.status(200).json(asistentes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener asistentes' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const asistente = await asistenteService.getById(Number(id));
    if (!asistente) {
      return res.status(404).json({ error: 'asistente no encontrado' });
    }
    res.status(200).json(asistente);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el asistente' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_asistente_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const asistente = await asistenteService.create(validation.data);
    res.status(201).json(asistente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el asistente' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_asistente_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const asistente = await asistenteService.update(Number(id), validation.data);
    res.status(200).json(asistente);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el asistente' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await asistenteService.delete_(Number(id));
    res.status(200).json({ mensaje: 'asistente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el asistente' });
  }
};