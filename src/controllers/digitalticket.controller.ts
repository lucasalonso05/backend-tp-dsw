import { Request, Response } from 'express';
import logger from '../config/logger';
import * as digitalticketService from '../services/digitalticket.service';
import { create_digitalticket_schema, scan_schema } from '../schemas/digitalticket.schema';

// Lee el :id de la URL. Devuelve null si no es un entero positivo.
const readId = (req: Request) => {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
};

// Traduce los errores del negocio a códigos HTTP.
// Lo que no es un error conocido va al log y sale como 500, sin detalles internos.
const respondError = (res: Response, error: unknown, fallback: string) => {
  if (error instanceof digitalticketService.InvalidTicketError) {
    return res.status(400).json({ error: error.message });
  }
  if (error instanceof digitalticketService.TicketForbiddenError) {
    return res.status(403).json({ error: error.message });
  }
  if (error instanceof digitalticketService.TicketNotFoundError) {
    return res.status(404).json({ error: error.message });
  }
  if (error instanceof digitalticketService.TicketConflictError) {
    return res.status(409).json({ error: error.message });
  }
  logger.error((error as Error).message);
  return res.status(500).json({ error: fallback });
};

// Todas las rutas de tickets exigen sesión (requireAuth), así que req.user siempre está.

// 200 · 500
export const getAll = async (req: Request, res: Response) => {
  try {
    const tickets = await digitalticketService.getAll(req.user!);
    return res.status(200).json(tickets);
  } catch (error) {
    return respondError(res, error, 'Error al obtener tickets digitales');
  }
};

// 200 · 400 id inválido · 404 no existe o no es tuyo · 500
export const getById = async (req: Request, res: Response) => {
  const id = readId(req);
  if (id === null) {
    return res.status(400).json({ error: 'El id debe ser un número entero positivo' });
  }

  try {
    const ticket = await digitalticketService.getById(id, req.user!);
    return res.status(200).json(ticket);
  } catch (error) {
    return respondError(res, error, 'Error al obtener el ticket');
  }
};

// 201 · 400 datos inválidos o item/usuario inexistente · 409 orden sin pagar o tickets ya emitidos · 500
export const create = async (req: Request, res: Response) => {
  const validation = create_digitalticket_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const ticket = await digitalticketService.create(validation.data);
    return res.status(201).json(ticket);
  } catch (error) {
    return respondError(res, error, 'Error al emitir el ticket');
  }
};

// 200 · 400 falta el QR · 403 no es tu evento · 404 · 409 ya escaneado · 500
// 200 · 400 falta el QR o el evento · 403 no es tu evento · 404
// · 409 ya escaneado, de otro evento o de un evento cancelado · 500
export const scan = async (req: Request, res: Response) => {
  const validation = scan_schema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const { qr_code, id_event } = validation.data;
    const ticket = await digitalticketService.scan(qr_code, id_event, req.user!);
    return res.status(200).json(ticket);
  } catch (error) {
    return respondError(res, error, 'Error al escanear el ticket');
  }
};