import { Request, Response } from 'express';
import * as digitalticketService from '../services/digitalticket.service';
import { create_digitalticket_schema } from '../schemas/digitalticket.schema';
import { canManage } from '../middlewares/auth.middleware';

// Un admin ve todos los tickets; cualquier otro, solo los suyos.
export const getAll = async (req: Request, res: Response) => {
  try {
    const user = req.user!;
    const tickets = await digitalticketService.getAll(user.role === 'ADMIN' ? undefined : user.id);
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
    if (!canManage(req.user!, ticket.id_user)) {
      return res.status(403).json({ error: 'Solo el titular o un admin pueden ver este ticket' });
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
    const qr_code = req.body?.qr_code;
    if (!qr_code || typeof qr_code !== 'string') {
      return res.status(400).json({ error: 'Debe enviar un código QR válido' });
    }

    const ticket = await digitalticketService.findForScan(qr_code.trim());
    if (!ticket) {
      return res.status(404).json({ error: 'El ticket no existe' });
    }

    // Solo escanea el organizador del evento del ticket, o un admin.
    const event = ticket.FK_order_item.FK_entry.FK_event;
    if (!canManage(req.user!, event.id_user)) {
      return res.status(403).json({ error: 'Este ticket es de un evento que no organizás' });
    }

    if (ticket.status === 'SCANNED' || !(await digitalticketService.markScanned(ticket.id))) {
      return res.status(409).json({ error: 'El ticket ya fue escaneado' });
    }

    const scanned = await digitalticketService.findForScan(ticket.qr_code);
    res.status(200).json(scanned);
  } catch (error) {
    res.status(500).json({ error: 'Error al escanear el ticket' });
  }
};