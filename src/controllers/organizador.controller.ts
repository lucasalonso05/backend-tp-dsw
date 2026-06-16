import { Request, Response } from 'express';
import * as organizadorService from '../services/organizador.service';
import {create_organizador_schema, update_organizador_schema,} from '../schemas/organizador.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const organizadores = await organizadorService.getAll();
    res.status(200).json(organizadores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener organizadores' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const organizador = await organizadorService.getById(Number(id));
    if (!organizador) {
      return res.status(404).json({ error: 'organizadores no encontrado' });
    }
    res.status(200).json(organizador);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el organizador' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_organizador_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const organizador = await organizadorService.create(validation.data);
    res.status(201).json(organizador);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el organizador' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_organizador_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const organizador = await organizadorService.update(Number(id), validation.data);
    res.status(200).json(organizador);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el organizador' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await organizadorService.delete_(Number(id));
    res.status(200).json({ mensaje: 'organizador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el organizador' });
  }
};