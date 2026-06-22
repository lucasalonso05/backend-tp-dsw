import { Request, Response } from 'express';
import * as eventoService from '../services/evento.service';
import {create_evento_schema, update_evento_schema,} from '../schemas/evento.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const eventos = await eventoService.getAll();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const evento = await eventoService.getById(Number(id));
    if (!evento) {
      return res.status(404).json({ error: 'evento no encontrado' });
    }
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el evento' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    // Primero validar con Zod
    const validation = create_evento_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const evento = await eventoService.create(validation.data);
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el evento' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validation = update_evento_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const evento = await eventoService.update(Number(id), validation.data);
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el evento' });
  }
};


// Modificación en el controlador (eliminas las líneas 60 a 63)
export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Pasas un objeto vacío si el servicio sigue esperando un DTO
    const evento = await eventoService.delete_(Number(id), {}); 

    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
};