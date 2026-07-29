import { Request, Response } from 'express';
import * as assistantService from '../services/assistant.service';
import { create_assistant_schema, update_assistant_schema, } from '../schemas/assistant.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const assistants = await assistantService.getAll();
    res.status(200).json(assistants);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener asistentes' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const assistant = await assistantService.getById(Number(id));
    if (!assistant) {
      return res.status(404).json({ error: 'Asistente no encontrado' });
    }
    res.status(200).json(assistant);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el asistente' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_assistant_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const assistant = await assistantService.create(validation.data);
    res.status(201).json(assistant);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el asistente' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_assistant_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const assistant = await assistantService.update(Number(id), validation.data);
    res.status(200).json(assistant);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el asistente' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await assistantService.delete_(Number(id));
    res.status(200).json({ mensaje: 'Asistente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el asistente' });
  }
};