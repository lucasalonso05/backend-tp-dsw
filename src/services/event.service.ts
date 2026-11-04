import prisma from '../config/prisma';
import { Prisma, event_status } from '../generated/prisma';
import type { PayloadToken } from '../config/jwt';
import { canManage } from '../middlewares/auth.middleware';
import { create_event_DTO, update_event_DTO } from '../schemas/event.schema';

// Cada evento viaja con los datos públicos de su organizador (nunca email, teléfono ni documento)
// y con su categoría, que el front muestra en la tarjeta y usa en el filtro de la cartelera.
const con_relaciones = {
  FK_user: { select: { id: true, name: true, surname: true } },
  FK_category: { select: { id: true, name: true } },
} satisfies Prisma.eventInclude;

// Errores del negocio de eventos. No llevan código HTTP: el controller decide cómo responderlos.
export class EventNotFoundError extends Error {
  constructor() {
    super('Evento no encontrado');
    this.name = 'EventNotFoundError';
  }
}

export class NotEventOwnerError extends Error {
  constructor(action: string) {
    super(`Solo el organizador del evento o un admin pueden ${action}`);
    this.name = 'NotEventOwnerError';
  }
}

// Los datos del evento rompen una regla del negocio: organizador, lugar, capacidad o fechas.
export class InvalidEventError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidEventError';
  }
}

export const getAll = async () => {
  return prisma.event.findMany({ include: con_relaciones });
};

export const getById = async (id: number) => {
  const event = await prisma.event.findUnique({ where: { id }, include: con_relaciones });
  if (!event) throw new EventNotFoundError();
  return event;
};

// El organizador de un evento tiene que existir y tener ese rol.
const checkOrganiser = async (id_user: number) => {
  const organiser = await prisma.user.findUnique({ where: { id: id_user } });
  if (!organiser) throw new InvalidEventError('El organizador no existe');
  if (organiser.role !== 'ORGANISER') throw new InvalidEventError('El usuario no es un organizador');
};

const findPlace = async (id_place: number) => {
  const place = await prisma.place.findUnique({ where: { id: id_place } });
  if (!place) throw new InvalidEventError('El lugar no existe');
  return place;
};

// La categoría es de una tabla compartida: tiene que existir antes de usarla.
const checkCategory = async (id_category: number) => {
  const category = await prisma.category.findUnique({ where: { id: id_category } });
  if (!category) throw new InvalidEventError('La categoría no existe');
};

const checkCapacity = (total_stock: number, capacity: number) => {
  if (total_stock > capacity) {
    throw new InvalidEventError('El stock total no puede superar la capacidad del lugar');
  }
};

// El stock total no puede quedar por debajo de lo ya repartido en sus tipos de entrada.
const checkDistributedStock = async (id_event: number, total_stock: number) => {
  const { _sum } = await prisma.entry.aggregate({ where: { id_event }, _sum: { stock: true } });
  if (total_stock < (_sum.stock ?? 0)) {
    throw new InvalidEventError('El stock total no puede ser menor al ya repartido en sus entradas');
  }
};

const checkDates = (start: Date, end: Date) => {
  if (end <= start) {
    throw new InvalidEventError('La fecha de fin debe ser posterior a la de inicio');
  }
};

// Una sola regla para la fecha de cancelación, se cancele por PUT o por DELETE:
// cancelar la guarda (si ya estaba cancelado, se respeta la original) y cualquier otro estado la limpia.
const cancellationDate = (status: event_status, previous: Date | null) =>
  status === 'CANCELLED' ? previous ?? new Date() : null;

// Busca el evento y revisa que quien hace el pedido sea su organizador o un admin.
// Para saberlo hay que leer el evento: por eso este permiso vive acá y no en la ruta.
const findManageableEvent = async (id: number, actor: PayloadToken, action: string) => {
  const event = await getById(id);
  if (!canManage(actor, event.id_user)) throw new NotEventOwnerError(action);
  return event;
};

// `actor` es quien hace el pedido: la ruta exige sesión.
export const create = async (data: create_event_DTO, actor: PayloadToken) => {
  // El dueño es quien crea el evento. Un admin puede crearlo a nombre de un organizador.
  const id_user = actor.role === 'ADMIN' && data.id_user ? data.id_user : actor.id;
  await checkOrganiser(id_user);
  await checkCategory(data.id_category);

  const place = await findPlace(data.id_place);
  checkCapacity(data.total_stock, place.capacity);
  checkDates(new Date(data.date_time_start), new Date(data.date_time_end));

  return prisma.event.create({
    data: { ...data, id_user, date_time_cancellation: cancellationDate(data.status, null) },
    include: con_relaciones,
  });
};

export const update = async (id: number, data: update_event_DTO, actor: PayloadToken) => {
  const event = await findManageableEvent(id, actor, 'modificarlo');

  // Solo un admin puede pasar el evento a otro organizador: si lo manda otro, se ignora.
  const { id_user, ...resto } = data;
  const isAdmin = actor.role === 'ADMIN';
  if (isAdmin && id_user) await checkOrganiser(id_user);
  const changes = isAdmin ? data : resto;

  if (changes.id_category) await checkCategory(changes.id_category);

  // Las reglas se validan sobre cómo va a quedar el evento: lo que llega o, si no llega, lo guardado.
  const place = await findPlace(changes.id_place ?? event.id_place);
  const total_stock = changes.total_stock ?? event.total_stock;
  checkCapacity(total_stock, place.capacity);
  await checkDistributedStock(id, total_stock);
  checkDates(
    changes.date_time_start ? new Date(changes.date_time_start) : event.date_time_start,
    changes.date_time_end ? new Date(changes.date_time_end) : event.date_time_end,
  );

  const status = changes.status ?? event.status;
  return prisma.event.update({
    where: { id },
    data: { ...changes, date_time_cancellation: cancellationDate(status, event.date_time_cancellation) },
    include: con_relaciones,
  });
};

// Un evento no se borra: se cancela, porque tiene entradas y órdenes que dependen de él.
export const delete_ = async (id: number, actor: PayloadToken) => {
  const event = await findManageableEvent(id, actor, 'cancelarlo');

  return prisma.event.update({
    where: { id },
    data: {
      status: 'CANCELLED',
      date_time_cancellation: cancellationDate('CANCELLED', event.date_time_cancellation),
    },
    include: con_relaciones,
  });
};