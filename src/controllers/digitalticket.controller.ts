import { Request, Response } from 'express';
import * as digitalticketService from '../services/digitalticket.service';
import { create_digitalticket_schema } from '../schemas/digitalticket.schema';
import { actor_de } from '../lib/actor';
import { responder_error } from '../lib/http';

export const getAll = async (req: Request, res: Response) => {
  try {
    const tickets = await digitalticketService.getAll(actor_de(req));
    res.status(200).json(tickets);
  } catch (error) {
    responder_error(res, error, 'Error al obtener tickets digitales');
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ticket = await digitalticketService.getById(Number(id), actor_de(req));
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket no encontrado' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    responder_error(res, error, 'Error al obtener ticket');
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const validation = create_digitalticket_schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const ticket = await digitalticketService.create(validation.data, actor_de(req));
    res.status(201).json(ticket);
  } catch (error) {
    responder_error(res, error, 'Error al emitir el ticket');
  }
};

export const scan = async (req: Request, res: Response) => {
  try {
    const { qr_code } = req.body;
    if (!qr_code || typeof qr_code !== 'string') {
      return res.status(400).json({ error: 'Debe enviar un código QR válido' });
    }
    const ticket_updated = await digitalticketService.scan(qr_code, actor_de(req));
    res.status(200).json(ticket_updated);
  } catch (error) {
    responder_error(res, error, 'Error al escanear el ticket');
  }
};
