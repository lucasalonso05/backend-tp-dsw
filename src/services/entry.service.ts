import logger from '../config/logger';
import prisma from '../config/prisma'
import { Prisma } from '../generated/prisma';
import { actor, exigir_dueno } from '../lib/actor';
import { ValidationError, NotFoundError, ConflictError } from '../lib/errors';
import { create_entry_DTO, update_entry_DTO } from '../schemas/entry.schema';

// Postgres aborta una de las transacciones en conflicto cuando corre en
// Serializable. Es esperable bajo concurrencia, pero el error crudo (P2034) no
// le dice nada a quien lo recibe.
const traducir_conflicto = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2034') {
    return new ConflictError('Otra modificacion de entradas ocurrio al mismo tiempo, intentalo de nuevo');
  }
  return error;
};

// Una entrada no tiene dueño propio: lo hereda del evento al que pertenece.
// Por eso el permiso se resuelve leyendo el evento, no la entrada.
const exigir_dueno_del_evento = (quien: actor, id_user_evento: number) =>
  exigir_dueno(quien, id_user_evento, 'El evento de esta entrada no te pertenece');

// El catalogo de entradas es publico: hay que poder ver tipos y precios antes
// de registrarse. Lo que se protege es escribir.
export const getAll = async () => {
  try {
    const entries = await prisma.entry.findMany();
    return entries;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener las entradas');
  }
};

export const getById = async (id: number) => {
  try {
    const entry_found = await prisma.entry.findUnique({
      where: { id },
    });
    return entry_found;
  } catch (error) {
    logger.error((error as Error).message);
    throw new Error('Error al obtener entrada');
  }
};

export const create = async (data: create_entry_DTO, quien: actor) => {
  try {
    // sumar -> comparar -> crear tiene la misma carrera que la reserva de
    // stock: dos entradas creadas al mismo tiempo pueden pasar las dos el
    // chequeo y superar juntas el total_stock del evento.
    //
    // No se puede resolver con un UPDATE condicional porque esto es un INSERT
    // y la condicion depende de un agregado sobre varias filas. Se sube el
    // nivel de aislamiento: en Serializable, Postgres aborta una de las dos si
    // el resultado no equivale a haberlas corrido una despues de la otra.
    const entry_created = await prisma.$transaction(async (tx) => {
      const event = await tx.event.findUnique({
        where: { id: data.id_event },
      });
      if (!event) throw new ValidationError('El evento no existe');

      exigir_dueno_del_evento(quien, event.id_user);

      // Las fechas de una entrada son su HORARIO DE ACCESO dentro del evento
      // (ver schema.prisma), asi que tienen que quedar contenidas en el rango
      // del evento. Que end > start ya lo valido Zod; lo que Zod NO puede
      // saber es como se relaciona esta entrada con SU evento, porque para eso
      // hay que ir a la base.
      if (new Date(data.date_time_start) < event.date_time_start) {
        throw new ValidationError('La entrada no puede empezar antes que el evento');
      }
      if (new Date(data.date_time_end) > event.date_time_end) {
        throw new ValidationError('La entrada no puede terminar despues que el evento');
      }

      const aggregate = await tx.entry.aggregate({
        where: { id_event: data.id_event },
        _sum: { stock: true },
      });
      const current_total = aggregate._sum.stock ?? 0;
      if (current_total + data.stock > event.total_stock) {
        throw new ValidationError('El stock de las entradas supera el stock total del evento');
      }

      return tx.entry.create({ data });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

    return entry_created;
  } catch (error) {
    logger.error((error as Error).message);
    throw traducir_conflicto(error);
  }
};

export const update = async (id: number, data: update_entry_DTO, quien: actor) => {
  try {
    // Mismo razonamiento que en create: las validaciones leen el estado de
    // varias filas (la propia entrada, el evento, la suma de las hermanas) y
    // despues escriben. Sin aislamiento, ese estado puede cambiar en el medio.
    const entry_updated = await prisma.$transaction(async (tx) => {
      const existing = await tx.entry.findUnique({ where: { id } });
      if (!existing) throw new NotFoundError('La entrada no existe');

      const id_event = data.id_event ?? existing.id_event;
      const event = await tx.event.findUnique({ where: { id: id_event } });
      if (!event) throw new ValidationError('El evento no existe');

      exigir_dueno_del_evento(quien, event.id_user);

      // Mover una entrada a un evento ajeno tambien requiere ser dueño del
      // evento de origen, o seria una forma de sacarle entradas a otro.
      if (data.id_event && data.id_event !== existing.id_event) {
        const origen = await tx.event.findUnique({ where: { id: existing.id_event } });
        if (origen) exigir_dueno_del_evento(quien, origen.id_user);
      }

      // ── FECHAS: se valida el estado RESULTANTE, no el request ──────────
      // En un update parcial puede venir una sola fecha. Zod comparo lo que
      // tenia a mano (nada, si vino una sola); aca se completa con lo que ya
      // esta guardado y se valida como va a quedar la fila.
      const inicio = data.date_time_start ? new Date(data.date_time_start) : existing.date_time_start;
      const fin = data.date_time_end ? new Date(data.date_time_end) : existing.date_time_end;

      if (fin <= inicio) {
        throw new ValidationError('La fecha de fin debe ser posterior a la de inicio');
      }
      if (inicio < event.date_time_start) {
        throw new ValidationError('La entrada no puede empezar antes que el evento');
      }
      if (fin > event.date_time_end) {
        throw new ValidationError('La entrada no puede terminar despues que el evento');
      }

      // El stock no puede bajar de lo ya vendido o reservado. sold_stock se
      // lee dentro de la transaccion serializable, asi que una compra
      // concurrente no puede colarse entre esta lectura y el update.
      if (data.stock !== undefined && data.stock < existing.sold_stock) {
        throw new ValidationError('El nuevo stock no puede ser menor a la cantidad ya vendida');
      }

      if (data.stock !== undefined) {
        const aggregate = await tx.entry.aggregate({
          where: { id_event, NOT: { id } },
          _sum: { stock: true },
        });
        const others_total = aggregate._sum.stock ?? 0;
        if (others_total + data.stock > event.total_stock) {
          throw new ValidationError('El stock de las entradas supera el stock total del evento');
        }
      }

      return tx.entry.update({
        where: { id },
        data,
      });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

    return entry_updated;
  } catch (error) {
    logger.error((error as Error).message);
    throw traducir_conflicto(error);
  }
};

export const delete_ = async (id: number, quien: actor) => {
  try {
    const existing = await prisma.entry.findUnique({
      where: { id },
      include: { FK_event: true },
    });
    if (!existing) throw new NotFoundError('La entrada no existe');

    exigir_dueno_del_evento(quien, existing.FK_event.id_user);

    // Una entrada con ventas no se puede borrar: hay ordenes y tickets
    // colgando de ella.
    if (existing.sold_stock > 0) {
      throw new ValidationError(
        `No se puede eliminar "${existing.entry_name}": ya tiene ${existing.sold_stock} vendida(s)`
      );
    }

    const entry_deleted = await prisma.entry.delete({
      where: { id },
    });
    return entry_deleted;
  } catch (error) {
    logger.error((error as Error).message);
    throw error;
  }
};
