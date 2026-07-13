import { Request, Response } from 'express';
import * as ticketdigitalService from '../services/ticket_digital.service';
import { create_ticketdigital_schema} from '../schemas/ticket_digital.schema';

export const getAll = async (req: Request, res: Response) => {
  try {
    const tickets = await ticketdigitalService.getAll();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tickets digitales' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id_comprador, cod_orden, cod } = req.params;
    const ticket = await ticketdigitalService.getById(Number(id_comprador), Number(cod_orden), Number(cod));
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket no encontrado' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ticket' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_ticketdigital_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const ticket = await ticketdigitalService.create(validation.data);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el ticket digital' });
  }
};