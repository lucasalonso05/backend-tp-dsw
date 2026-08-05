import { Request, Response } from 'express';
import * as eventService from '../services/event.service';
import {create_event_schema, update_event_schema,} from '../schemas/event.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const events = await eventService.getAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await eventService.getById(Number(id));
    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el evento' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    // Primero validar con Zod
    const validation = create_event_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const event = await eventService.create(validation.data);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_event_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const event = await eventService.update(Number(id), validation.data);
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};


export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await eventService.delete_(Number(id));
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
};