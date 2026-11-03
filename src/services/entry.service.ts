import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';
import type { PayloadToken } from '../config/jwt';
import { canManage } from '../middlewares/auth.middleware';
import { create_entry_DTO, update_entry_DTO } from '../schemas/entry.schema';

// Errores del negocio de entradas. No llevan código HTTP: el controller decide cómo responderlos.
export class EntryNotFoundError extends Error {
  constructor() {
    super('Entrada no encontrada');
    this.name = 'EntryNotFoundError';
  }
}

export class NotEntryOwnerError extends Error {
  constructor(action: string) {
    super(`Solo el organizador del evento o un admin pueden ${action}`);
    this.name = 'NotEntryOwnerError';
  }
}

// Los datos de la entrada rompen una regla del negocio: evento, stock o fechas.
export class InvalidEntryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidEntryError';
  }
}

export class EntryAlreadyExistsError extends Error {
  constructor() {
    super('Ya existe una entrada con ese nombre en este evento');
    this.name = 'EntryAlreadyExistsError';
  }
}

export class EntryHasSalesError extends Error {
  constructor() {
    super('No se puede eliminar la entrada: ya tiene ventas o reservas');
    this.name = 'EntryHasSalesError';
  }
}

// ¿Es un error conocido de Prisma con este código?
const isPrismaError = (error: unknown, code: string) =>
  error instanceof Prisma.PrismaClientKnownRequestError && error.code === code;

export const getAll = async () => {
  return prisma.entry.findMany();
};

export const getById = async (id: number) => {
  const entry = await prisma.entry.findUnique({ where: { id } });
  if (!entry) throw new EntryNotFoundError();
  return entry;
};

// Una entrada no tiene dueño propio: la gestiona el organizador de su evento, o un admin.
// Se trae la entrada con su evento en una sola consulta.
const findManageableEntry = async (id: number, actor: PayloadToken, action: string) => {
  const entry = await prisma.entry.findUnique({ where: { id }, include: { FK_event: true } });
  if (!entry) throw new EntryNotFoundError();
  if (!canManage(actor, entry.FK_event.id_user)) throw new NotEntryOwnerError(action);
  return entry;
};

const checkDates = (start: Date, end: Date) => {
  if (end <= start) {
    throw new InvalidEntryError('La fecha de fin debe ser posterior a la de inicio');
  }
};

// La suma del stock de las entradas no puede superar el stock total del evento.
// `id_excluded` deja afuera a la entrada que se está editando, para no contarla dos veces.
const checkEventStock = async (
  event: { id: number; total_stock: number },
  stock: number,
  id_excluded?: number,
) => {
  const { _sum } = await prisma.entry.aggregate({
    where: { id_event: event.id, NOT: id_excluded ? { id: id_excluded } : undefined },
    _sum: { stock: true },
  });
  if ((_sum.stock ?? 0) + stock > event.total_stock) {
    throw new InvalidEntryError('El stock de las entradas supera el stock total del evento');
  }
};

// `actor` es quien hace el pedido: la ruta exige sesión.
export const create = async (data: create_entry_DTO, actor: PayloadToken) => {
  // El evento llega en el body: si no existe, el pedido trae un dato inválido (400),
  // no es un recurso de la URL que falta (404).
  const event = await prisma.event.findUnique({ where: { id: data.id_event } });
  if (!event) throw new InvalidEntryError('El evento no existe');
  if (!canManage(actor, event.id_user)) throw new NotEntryOwnerError('cargarle entradas');

  checkDates(new Date(data.date_time_start), new Date(data.date_time_end));
  await checkEventStock(event, data.stock);

  try {
    return await prisma.entry.create({ data });
  } catch (error) {
    // P2002: ya hay una entrada con ese nombre en el evento (@@unique([id_event, entry_name])).
    if (isPrismaError(error, 'P2002')) throw new EntryAlreadyExistsError();
    throw error;
  }
};

export const update = async (id: number, data: update_entry_DTO, actor: PayloadToken) => {
  const entry = await findManageableEntry(id, actor, 'modificar sus entradas');

  // Una entrada no se puede pasar a otro evento: si viene id_event, se ignora.
  const { id_event, ...changes } = data;

  // Las reglas se validan sobre cómo va a quedar la entrada: lo que llega o, si no llega, lo guardado.
  const stock = changes.stock ?? entry.stock;
  if (stock < entry.sold_stock) {
    throw new InvalidEntryError('El nuevo stock no puede ser menor a la cantidad ya vendida');
  }
  await checkEventStock(entry.FK_event, stock, id);
  checkDates(
    changes.date_time_start ? new Date(changes.date_time_start) : entry.date_time_start,
    changes.date_time_end ? new Date(changes.date_time_end) : entry.date_time_end,
  );

  try {
    return await prisma.entry.update({ where: { id }, data: changes });
  } catch (error) {
    if (isPrismaError(error, 'P2002')) throw new EntryAlreadyExistsError();
    throw error;
  }
};

export const delete_ = async (id: number, actor: PayloadToken) => {
  await findManageableEntry(id, actor, 'modificar sus entradas');

  try {
    return await prisma.entry.delete({ where: { id } });
  } catch (error) {
    // P2003: la base no deja borrar una entrada que ya tiene ventas (order_items la referencian).
    if (isPrismaError(error, 'P2003')) throw new EntryHasSalesError();
    throw error;
  }
};