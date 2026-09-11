import logger from '../config/logger';
import prisma from '../config/prisma'
import { Prisma, event_status } from '../generated/prisma';
import { actor, exigir_dueno, exigir_organizador } from '../lib/actor';
import { ValidationError, NotFoundError, ConflictError } from '../lib/errors';
import { create_event_DTO, update_event_DTO } from '../schemas/event.schema';

// Postgres aborta una de las transacciones en conflicto cuando corre en
// Serializable. El error crudo (P2034) no le dice nada a quien lo recibe.
const traducir_conflicto = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2034') {
    return new ConflictError('Otra modificacion del evento ocurrio al mismo tiempo, intentalo de nuevo');
  }
  return error;
};

// Una sola definicion de cuando se sella la fecha de cancelacion, compartida
// por los DOS caminos que cancelan un evento: PUT { status: 'CANCELLED' } y
// DELETE. Que cada uno tuviera su propia regla era el bug de B7: DELETE
// sellaba la fecha y PUT no, asi que un evento podia quedar CANCELLED sin
// saber cuando.
//
// `undefined` significa "no tocar la columna" (distinto de null, que significa
// "ponela en NULL").
const resolver_cancelacion = (
  estado_actual: event_status,
  estado_nuevo: event_status | undefined,
  valor_explicito: string | null | undefined,
): string | Date | null | undefined => {
  if (!estado_nuevo) return valor_explicito;

  if (estado_nuevo === 'CANCELLED') {
    // Cancelar dos veces no puede cambiar cuando se cancelo.
    return estado_actual === 'CANCELLED' ? undefined : new Date();
  }

  // Sale de CANCELLED: la fecha deja de tener sentido.
  return null;
};

// El catalogo de eventos es publico: explorar eventos sin registrarse es el
// caso de uso principal del sistema. Lo que se protege es escribir.
export const getAll = async () => {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener los eventos');
  }
};

export const getById = async (id: number) => {
  try {
    const event_found = await prisma.event.findUnique({ where: { id } });
    return event_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener evento');
  }
};

export const create = async (data: create_event_DTO, quien: actor) => {
  try {
    exigir_organizador(quien);

    const place = await prisma.place.findUnique({
      where: { id: data.id_place }
    });
    if (!place) throw new ValidationError('El lugar no existe');

    if (data.total_stock > place.capacity) {
      throw new ValidationError(
        `El stock total (${data.total_stock}) no puede superar la capacidad de "${place.name}" (${place.capacity})`
      );
    }

    // El organizador es quien crea, y sale del token.
    const event_created = await prisma.event.create({
      data: { ...data, id_user: quien.id },
    });
    return event_created;

  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};

export const update = async (id: number, data: update_event_DTO, quien: actor) => {
  try {
    // Serializable, por el mismo motivo que entry.service: todo lo de abajo es
    // leer el estado de varias filas (el evento, el lugar, sus entradas) y
    // despues escribir. Sin aislamiento, ese estado puede cambiar en el medio.
    const event_updated = await prisma.$transaction(async (tx) => {
      const existing = await tx.event.findUnique({ where: { id } });
      if (!existing) throw new NotFoundError('El evento no existe');

      exigir_dueno(quien, existing.id_user, 'El evento no te pertenece');

      // ── TODO LO QUE SIGUE VALIDA EL ESTADO RESULTANTE ──────────────────
      // El patron se repite: cada valor es "el que viene en el request, o el
      // que ya esta guardado si no vino". Se valida como va a quedar la fila,
      // no lo que trajo el request. Un update parcial no exime de cumplir los
      // invariantes: solo cambia con que datos se completan.

      const id_place = data.id_place ?? existing.id_place;
      const place = await tx.place.findUnique({ where: { id: id_place } });
      if (!place) throw new ValidationError('El lugar no existe');

      const total_stock = data.total_stock ?? existing.total_stock;

      // El aforo manda. `create` ya lo validaba y `update` no, asi que se podia
      // subir el stock a mano, o mudar el evento a una sala mas chica, y el
      // evento quedaba vendiendo mas entradas de las que entran.
      if (total_stock > place.capacity) {
        throw new ValidationError(
          `El stock total (${total_stock}) no puede superar la capacidad de "${place.name}" (${place.capacity})`
        );
      }

      // Y tampoco puede quedar por debajo de lo ya repartido entre las
      // entradas: entry.create valida sum(entry.stock) <= event.total_stock,
      // pero sin esto el evento podia bajar su total despues y romper esa
      // misma regla desde el otro lado.
      const agregado = await tx.entry.aggregate({
        where: { id_event: id },
        _sum: { stock: true },
      });
      const repartido = agregado._sum.stock ?? 0;
      if (total_stock < repartido) {
        throw new ValidationError(
          `El stock total (${total_stock}) no puede ser menor a lo ya repartido en entradas (${repartido})`
        );
      }

      // ── FECHAS ─────────────────────────────────────────────────────────
      const inicio = data.date_time_start ? new Date(data.date_time_start) : existing.date_time_start;
      const fin = data.date_time_end ? new Date(data.date_time_end) : existing.date_time_end;

      if (fin <= inicio) {
        throw new ValidationError('La fecha de fin debe ser posterior a la de inicio');
      }

      // Las fechas de una entrada son su HORARIO DE ACCESO dentro del evento
      // (decidido y documentado en schema.prisma), asi que toda entrada tiene
      // que quedar contenida en el rango del evento. Un invariante se sostiene
      // DE LOS DOS LADOS: entry.* lo valida al crear y editar, y aca se evita
      // que mover el evento deje entradas colgando afuera.
      if (data.date_time_start || data.date_time_end) {
        const fuera = await tx.entry.count({
          where: {
            id_event: id,
            OR: [
              { date_time_start: { lt: inicio } },
              { date_time_end: { gt: fin } },
            ],
          },
        });
        if (fuera > 0) {
          throw new ValidationError(
            `El nuevo horario del evento deja ${fuera} entrada(s) fuera de su rango`
          );
        }
      }

      return tx.event.update({
        where: { id },
        data: {
          ...data,
          date_time_cancellation: resolver_cancelacion(
            existing.status,
            data.status,
            data.date_time_cancellation,
          ),
        }
      });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

    return event_updated;

  } catch (error) {
    logger.error((error as Error).message);
    throw traducir_conflicto(error);
  }
};

// Cancelacion logica: un evento nunca se borra de la base, se cancela. Hay
// historial de ordenes y tickets colgando de el.
export const delete_ = async (id: number, quien: actor) => {
  try {
    const existing = await prisma.event.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError('El evento no existe');

    exigir_dueno(quien, existing.id_user, 'El evento no te pertenece');

    // Mismo criterio que en update: cancelar dos veces no puede cambiar cuando
    // se cancelo.
    if (existing.status === 'CANCELLED') return existing;

    const event_cancelled = await prisma.event.update({
      where: { id },
      data: {
        status: 'CANCELLED',
        date_time_cancellation: resolver_cancelacion(existing.status, 'CANCELLED', undefined),
      }
    });
    return event_cancelled;

  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};
