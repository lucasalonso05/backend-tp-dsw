import { Request, Response } from 'express';
import * as digitalticketService from '../services/digitalticket.service';
import { create_digitalticket_schema } from '../schemas/digitalticket.schema';

export const getAll = async (req: Request, res: Response) => {
  try {
    const tickets = await digitalticketService.getAll();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tickets digitales' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ticket = await digitalticketService.getById(Number(id));
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
    const validation = create_digitalticket_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const ticket = await digitalticketService.create(validation.data);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const scan = async (req: Request, res: Response) => {
  try {
    const { qr_code } = req.body;
    if (!qr_code || typeof qr_code !== 'string') {
      return res.status(400).json({ error: 'Debe enviar un código QR válido' });
    }
    const ticket_updated = await digitalticketService.scan(qr_code);
    res.status(200).json(ticket_updated);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
