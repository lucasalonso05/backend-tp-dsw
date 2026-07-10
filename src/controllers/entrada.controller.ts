import { Request, Response } from 'express';
import * as entradaService from '../services/entrada.service';
import { create_entrada_schema, update_entrada_schema } from '../schemas/entrada.schema';

export const getAll = async (req: Request, res: Response) => {
  try {
    const entradas = await entradaService.getAll();
    res.status(200).json(entradas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener entradas' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id_evento, cod } = req.params;
    const entrada = await entradaService.getById(Number(id_evento), Number(cod));
    if (!entrada) {
      return res.status(404).json({ error: 'Entrada no encontrada' });
    }
    res.status(200).json(entrada);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la entrada' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_entrada_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const entrada = await entradaService.create(validation.data);
    res.status(201).json(entrada);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la entrada' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id_evento, cod } = req.params;
    const validation = update_entrada_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }
    const entrada = await entradaService.update(Number(id_evento), Number(cod), validation.data);
    res.status(200).json(entrada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la entrada' });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    const { id_evento, cod } = req.params;
    const entrada = await entradaService.delete_(Number(id_evento), Number(cod));
    res.status(200).json(entrada);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la entrada' });
  }
};