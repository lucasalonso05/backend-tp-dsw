# Contrato de API — Eventify

Fuente de verdad del acuerdo entre `backend-tp-dsw` y `frontend-tp-dsw`.
Si algo de acá cambia, **se avisa antes de mergear**: no hay compilador que
detecte una discrepancia entre los dos repos.

Base URL: `http://localhost:3000/api`

---

## Autenticación

### `POST /api/auth/login`

**Request**

```json
{
  "email": "ana@ejemplo.com",
  "password": "12345678"
}
```

**200 OK**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "role": "ORGANISER",
    "doc_type": "DNI",
    "doc_number": "40123456",
    "name": "Ana",
    "surname": "Perez",
    "email": "ana@ejemplo.com",
    "telephone": "3411234567",
    "cuit": "20401234568",
    "createdAt": "2026-09-11T20:47:30.296Z",
    "updatedAt": "2026-09-11T20:47:30.296Z"
  }
}
```

> `user` tiene **exactamente** la forma del `user_select` del backend: nunca
> incluye `password`. Es el mismo objeto que devuelve `GET /api/users/:id`,
> y se corresponde con la interfaz `User` de `src/types/user.ts` en el frontend.

**401 Unauthorized** — credenciales inválidas

```json
{ "error": "Email o contraseña incorrectos" }
```

> Misma respuesta si el email no existe y si la contraseña es incorrecta.
> Distinguirlos permitiría averiguar qué emails están registrados
> (*user enumeration*).

**400 Bad Request** — el body no pasó la validación de Zod

```json
{ "error": [ { "code": "invalid_type", "path": ["email"], "message": "..." } ] }
```

---

## Cómo viaja el token

El frontend guarda el token en `localStorage` bajo la clave `token`, y el
interceptor de `src/api/client.ts` lo adjunta en cada request:

```
Authorization: Bearer <token>
```

**El espacio después de `Bearer` es obligatorio.**

### Contenido del token

```json
{ "id": 1, "role": "ORGANISER", "iat": 1757620050, "exp": 1757706450 }
```

Vence a las **24 h** (`expiresIn: '24h'` en `src/config/jwt.ts`).

> ⚠️ Un JWT está **firmado, no encriptado**. El payload es Base64: cualquiera
> que tenga el token puede leerlo. La firma garantiza que nadie lo modificó,
> no que nadie lo lea. Por eso solo viajan `id` y `role`.

### Respuestas de las rutas protegidas

| Situación | Código | Body |
|---|---|---|
| Falta el header, o el token es inválido o venció | `401` | `{ "error": "No autenticado" }` |
| Token válido pero el permiso no alcanza | `403` | `{ "error": "No autorizado" }` |

> 401 = *no sé quién sos*. 403 = *sé quién sos y no te alcanza*.

### Los tres niveles de protección

| Middleware | Regla |
|---|---|
| *(ninguno)* | ruta pública |
| `authenticate` | hace falta un token válido |
| `requireRole('ADMIN')` | además, el `role` del token tiene que estar en la lista |
| `requireSelfOrAdmin()` | además, el `id` del token tiene que coincidir con el `:id` de la URL — salvo que sea ADMIN, que pasa siempre |

---

## Usuarios

| Endpoint | Protección |
|---|---|
| `POST /api/users` | 🌐 pública |
| `GET /api/users` | 🔒 solo ADMIN |
| `GET /api/users/:id` | 🔒 propio o ADMIN |
| `PUT /api/users/:id` | 🔒 propio o ADMIN |
| `DELETE /api/users/:id` | 🔒 propio o ADMIN |
| `PATCH /api/users/:id/role` | 🔒 solo ADMIN |

### `POST /api/users` — registro público

El campo `role` **no se acepta**: todo registro crea un `ASSISTANT`.
Si se envía, se ignora en silencio.

```json
{
  "doc_type": "DNI", "doc_number": "40123456",
  "name": "Ana", "surname": "Perez",
  "email": "ana@ejemplo.com", "password": "12345678",
  "telephone": "3411234567",
  "cuit": "20401234568"
}
```

**201 Created** → el objeto `user` (sin `password`).
**400** → `{ "error": "Ya existe un usuario con ese email, teléfono o documento" }`

### `PATCH /api/users/:id/role` — solo ADMIN 🔒

```json
{ "role": "ORGANISER" }
```

**200 OK** → el objeto `user` actualizado.
**400** → `{ "error": "Para ser organizador el usuario debe tener un CUIT cargado" }`
**403** → si quien llama no es ADMIN.

> Promover a `ORGANISER` **exige que el usuario ya tenga `cuit` cargado**: un
> organizador factura, sin CUIT no puede operar. Se carga con
> `PUT /api/users/:id` antes de promover.

---

## Órdenes

| Endpoint | Protección |
|---|---|
| `GET /api/orders` | 🔒 autenticado — devuelve **solo las propias**; ADMIN ve todas |
| `GET /api/orders/:id` | 🔒 propia o ADMIN |
| `POST /api/orders` | 🔒 autenticado |
| `PUT /api/orders/:id` | 🔒 propia (solo cancelar) o ADMIN (cualquier transición válida) |

### `POST /api/orders`

```json
{ "items": [ { "id_entry": 7, "quantity": 2 } ] }
```

> **No lleva `id_user`.** El dueño de la orden sale del token. Si se envía, se
> ignora.

Items repetidos con la misma `id_entry` se **consolidan** sumando cantidades.

**201 Created** → la orden con sus `items`, en estado `PENDING`.
**400** → sin stock, evento cancelado/finalizado/pasado, o entrada no disponible.

> Crear la orden **reserva el stock inmediatamente**. Si no se paga dentro de la
> ventana configurada (`ORDER_PAYMENT_WINDOW_MINUTES`, default 15 min), un job la
> pasa a `EXPIRED` y devuelve las entradas.

### `PUT /api/orders/:id`

```json
{ "status": "CANCELLED" }
```

Transiciones válidas:

```
PENDING   → PAID | CANCELLED | EXPIRED
PAID      → CANCELLED
CANCELLED → (terminal)
EXPIRED   → (terminal)
```

**403** → el dueño intentó algo que no sea cancelar (marcar como `PAID` la haría gratis).
**400** → transición inválida según la tabla.
**409** → la orden cambió de estado mientras se procesaba; reintentar.

> Una orden ajena responde **404, no 403**: decir "existe pero no es tuya" le
> confirma a un curioso que ese id existe.

---

## Errores

Los services lanzan errores de dominio con su status adentro
(`src/lib/errors.ts`), y el controller solo traduce:

| Clase | Status |
|---|---|
| `ValidationError` | 400 |
| `UnauthorizedError` | 401 |
| `ForbiddenError` | 403 |
| `NotFoundError` | 404 |
| `ConflictError` | 409 |

Adoptado en `auth` y `orders`. Llevarlo al resto es **C7**.

---

## Lugares, eventos y entradas

**Lectura pública, escritura autenticada.** Explorar el catálogo sin registrarse
es el caso de uso principal del sistema; lo que se protege es escribir.

| Endpoint | Protección |
|---|---|
| `GET /api/places` · `/events` · `/entries` (y `/:id`) | 🌐 pública |
| `POST /api/places` | 🔒 ORGANISER o ADMIN |
| `PUT` / `DELETE /api/places/:id` | 🔒 dueño (`place.id_user`) o ADMIN |
| `POST /api/events` | 🔒 ORGANISER o ADMIN |
| `PUT` / `DELETE /api/events/:id` | 🔒 dueño (`event.id_user`) o ADMIN |
| `POST` / `PUT` / `DELETE /api/entries/:id` | 🔒 dueño **del evento** al que pertenece, o ADMIN |

> `POST /api/places` y `POST /api/events` **ya no aceptan `id_user`**: el dueño
> es quien crea, y sale del token. Mandarlo se ignora.

> Una entrada no tiene dueño propio: lo **hereda del evento**. Por eso el
> permiso se resuelve leyendo el evento, no la entrada.

`DELETE /api/events/:id` **no borra**: cancela (cancelación lógica) y sella
`date_time_cancellation`. Cancelar dos veces no cambia esa fecha.

`DELETE /api/entries/:id` falla con **400** si la entrada ya tiene ventas.

### `GET /api/events` — listado con filtros, orden y paginación

Todos los parámetros son opcionales y van en el query string.

| Param | Qué filtra |
|---|---|
| `q` | texto en el título (insensible a mayúsculas) |
| `category` | categoría exacta |
| `city` · `province` | ubicación — viven en el **lugar**, se filtra atravesando la relación |
| `status` | `CONFIRMED` · `FINISHED` · `CANCELLED` |
| `desde` · `hasta` | ISO. El evento entra si **empieza** dentro del rango |
| `precio_min` · `precio_max` | el evento entra si tiene **al menos una** entrada en ese rango |
| `orden` | `fecha` (default) · `fecha_desc` · `popularidad` (más vendidos) |
| `page` | default 1 |
| `limit` | default 20, **máximo 100** (un `?limit=999999` devuelve 400) |

**200 OK**

```json
{
  "data": [ { "...evento...", "FK_place": {...}, "FK_user": {...}, "entries": [ { "...", "disponibles": 298 } ] } ],
  "page": 1, "limit": 20, "total": 41, "totalPages": 3
}
```

> ⚠️ **Cambio de forma.** Antes devolvía un array pelado; ahora devuelve este
> objeto. En el frontend hay que entrar por `.data` (ver `Paginated<T>` en
> `src/types/api.ts`).

Cada evento trae **el lugar**, **el organizador** (solo `id`, `name`, `surname`,
`email` — nunca el password ni el documento) y **sus entradas con `disponibles`
ya calculado** (`stock - sold_stock`).

### `GET /api/events/:id` — detalle

Misma forma que un elemento de `data`: evento + lugar + organizador + entradas
con precio y disponibilidad. Es lo que pide el TP en *"Detalle al seleccionar"*.

### Horario de las entradas

`entry.date_time_start` / `date_time_end` son el **horario de acceso** de ese
tipo de entrada dentro del evento (`"VIP: 20:00-02:00"`). **No son una ventana
de venta**: la compra anticipada está permitida y no se valida contra ellas.

Invariante sostenido desde los dos lados (`entry.*` y `event.update`):

```
event.date_time_start <= entry.date_time_start
entry.date_time_end   <= event.date_time_end
```

---

## Tickets digitales

**Nada es público.** Un ticket es la llave de entrada a un evento.

| Endpoint | Protección |
|---|---|
| `GET /api/digital-tickets` | 🔒 autenticado — solo los propios; ADMIN ve todos |
| `GET /api/digital-tickets/:id` | 🔒 propio o ADMIN (**404** si es ajeno) |
| `POST /api/digital-tickets` | 🔒 dueño de la orden o ADMIN, y la orden debe estar **`PAID`** |
| `POST /api/digital-tickets/scan` | 🔒 **organizador del evento** del ticket, o ADMIN |

> **El escaneo lo hace el organizador en la puerta de SU evento.** El dueño del
> ticket no se autovalida la entrada, y el organizador de otro evento no tiene
> nada que hacer ahí. El permiso se resuelve recorriendo
> `ticket → order_item → entry → event → id_user`.

Escanear un ticket ya escaneado devuelve **400**.


### Emisión automática de tickets

Al pasar una orden a **`PAID`**, el backend emite **un ticket por unidad** de
cada ítem, en la **misma transacción** que el cambio de estado: no puede existir
una orden pagada sin sus tickets.

La respuesta de `PUT /api/orders/:id` ya los trae dentro de cada ítem:

```json
{ "items": [ { "quantity": 2, "tickets": [ { "qr_code": "uuid...", "status": "UNSCANNED" }, { ... } ] } ] }
```

Es idempotente: si algunos ya se habían emitido a mano, solo completa los que
faltan. `POST /api/digital-tickets` sigue existiendo para ese caso.

---

## Endpoints que NO existen (y por qué)

Decisiones tomadas, no olvidos:

| Endpoint ausente | Motivo |
|---|---|
| `DELETE /api/orders/:id` | Una orden **se cancela, no se borra** (`PUT { status: 'CANCELLED' }`). Borrarla perdería el historial de compra y dejaría tickets huérfanos. |
| `PUT /api/digital-tickets/:id` | El único cambio de estado válido de un ticket es el **canje**, y tiene su propio endpoint (`/scan`). |
| `DELETE /api/digital-tickets/:id` | Borrar un ticket destruiría la evidencia de que alguien entró al evento. |
| `DELETE /api/events/:id` **real** | Existe la ruta, pero hace **cancelación lógica**: marca `CANCELLED` y sella la fecha. Hay órdenes y tickets colgando del evento. |

---

## Estado de implementación

| Pieza | Estado |
|---|---|
| `POST /api/users` (sin `role`) | ✅ |
| `POST /api/auth/login` | ✅ |
| middlewares `authenticate` / `requireRole` / `requireSelfOrAdmin` | ✅ |
| `PATCH /api/users/:id/role` | ✅ |
| `/users` protegido | ✅ |
| `/orders` protegido + dueño desde el token | ✅ |
| `/places`, `/events`, `/entries` protegidos | ✅ |
| `/digital-tickets` protegido (incluido el escaneo) | ✅ |
| Errores de dominio tipados | ✅ los 7 módulos |

**No queda ningún endpoint de escritura sin autenticar.**

Lo único público, a propósito: el registro (`POST /api/users`), el login, y la
lectura del catálogo (`GET` de lugares, eventos y entradas).
