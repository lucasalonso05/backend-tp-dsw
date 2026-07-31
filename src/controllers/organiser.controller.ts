import { Request, Response } from 'express';
import * as organiserService from '../services/organiser.service';
import {create_organiser_schema, update_organiser_schema,} from '../schemas/organiser.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const organisers = await organiserService.getAll();
    res.status(200).json(organisers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener organizadores' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const organiser = await organiserService.getById(Number(id));
    if (!organiser) {
      return res.status(404).json({ error: 'Organizador no encontrado' });
    }
    res.status(200).json(organiser);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el organizador' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_organiser_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const organiser = await organiserService.create(validation.data);
    res.status(201).json(organiser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el organizador' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_organiser_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const organiser = await organiserService.update(Number(id), validation.data);
    res.status(200).json(organiser);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el organizador' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await organiserService.delete_(Number(id));
    res.status(200).json({ mensaje: 'organizador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el organizador' });
  }
};