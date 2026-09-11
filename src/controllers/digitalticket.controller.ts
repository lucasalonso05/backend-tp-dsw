import { Request, Response } from 'express';
import * as digitalticketService from '../services/digitalticket.service';
import { create_digitalticket_schema, scan_schema } from '../schemas/digitalticket.schema';
import { actor_de } from '../lib/actor';
import { InputError, NotFoundError } from '../lib/errors';

export const getAll = async (req: Request, res: Response) => {
  const tickets = await digitalticketService.getAll(actor_de(req));
  res.status(200).json(tickets);
};

export const getById = async (req: Request, res: Response) => {
  const ticket = await digitalticketService.getById(Number(req.params.id), actor_de(req));
  if (!ticket) throw new NotFoundError('Ticket no encontrado');
  res.status(200).json(ticket);
};

export const create = async (req: Request, res: Response) => {
  const validation = create_digitalticket_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const ticket = await digitalticketService.create(validation.data, actor_de(req));
  res.status(201).json(ticket);
};

export const scan = async (req: Request, res: Response) => {
  const validation = scan_schema.safeParse(req.body);
  if (!validation.success) throw new InputError(validation.error.issues);
  const ticket = await digitalticketService.scan(validation.data.qr_code, actor_de(req));
  res.status(200).json(ticket);
};
