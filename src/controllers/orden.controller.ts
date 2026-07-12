import { Request, Response } from 'express';
import * as ordenService from '../services/orden.service';
import {create_orden_schema, update_orden_schema,} from '../schemas/orden.schema';


export const getAll = async (req: Request, res: Response) => {
  try {
    const ordenes = await ordenService.getAll();
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ordenes' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id_comprador, cod } = req.params;
    const orden = await ordenService.getById(Number(id_comprador), Number(cod));
    if (!orden) {
      return res.status(404).json({ error: 'orden no encontrada' });
    }
    res.status(200).json(orden);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener orden' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    // Primero validar con Zod
    const validation = create_orden_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues});
    }
   
    const orden = await ordenService.create(validation.data);
    res.status(201).json(orden);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear orden' });
  }
};

/*export const update = async (req: Request, res: Response) => {
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
};*/