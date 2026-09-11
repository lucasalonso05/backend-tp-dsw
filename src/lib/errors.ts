// Errores de dominio con su codigo HTTP adentro.
//
// Antes, los services tiraban `new Error('texto')` y el controller adivinaba
// el status comparando el mensaje como string. Eso era fragil: reescribir un
// mensaje cambiaba el codigo de respuesta EN SILENCIO, sin que fallara ningun
// tipo ni ninguna prueba. (Quedo anotado como deuda consciente en el cierre de
// PR 2; esto es pagarla.)
//
// Ahora el service dice QUE paso y el controller solo traduce.
//
// Adopcion parcial a proposito: se usa en `auth` y en `orders`. Llevarlo al
// resto de los services es C7, que incluye ademas reactivar el middleware
// global de errores de index.ts (hoy inalcanzable porque todos los controllers
// capturan por su cuenta).

export class AppError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message);
    this.name = new.target.name;
  }
}

/** 400 — el pedido llego mal armado o viola una regla de negocio. */
export class ValidationError extends AppError {
  constructor(message: string) { super(message, 400); }
}

/** 401 — no se quien sos. */
export class UnauthorizedError extends AppError {
  constructor(message = 'No autenticado') { super(message, 401); }
}

/** 403 — se quien sos y no te alcanza. */
export class ForbiddenError extends AppError {
  constructor(message = 'No autorizado') { super(message, 403); }
}

/** 404 — no existe, o no existe PARA VOS (ver nota abajo). */
export class NotFoundError extends AppError {
  constructor(message = 'No encontrado') { super(message, 404); }
}

/** 409 — el estado cambio debajo nuestro; reintentar tiene sentido. */
export class ConflictError extends AppError {
  constructor(message: string) { super(message, 409); }
}

/**
 * 400 con el detalle de Zod. Existe para que la validacion de entrada tambien
 * salga por el manejador global: asi TODAS las respuestas de error se arman en
 * un unico lugar, y el controller nunca llama a res.status() en un camino de
 * error.
 *
 * Transporta el array de `issues` tal cual, porque el interceptor del frontend
 * ya sabe concatenar sus `message` (ver ApiError en src/types/api.ts).
 */
export class InputError extends AppError {
  constructor(public readonly issues: unknown) {
    super('Datos invalidos', 400);
  }
}
