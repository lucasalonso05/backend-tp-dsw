# Colección de requests

Archivos `.http` para probar la API a mano. Se ejecutan con la extensión
**REST Client** de VS Code (`humao.rest-client`): aparece un *Send Request*
clickeable arriba de cada bloque.

## Cómo usarlos

1. Levantar el backend: `npm run dev`
2. Abrir cualquier `.http` y hacer click en *Send Request*
3. Para las rutas protegidas: ejecutar primero el login de `auth.http`, copiar
   el `token` de la respuesta y pegarlo en la variable `@token` del archivo

## Por qué están versionados

Son la documentación ejecutable de la API: cada vez que se arregla algo, el
request que lo demuestra queda acá. Un `.http` que devuelve lo esperado vale más
que un párrafo explicando lo que debería pasar.

⚠️ **Nunca pegar un token real de producción en estos archivos**, que van a git.
Para eso, REST Client soporta `{{$dotenv TOKEN}}`, que lo lee del `.env`
(ignorado por git).

## Archivos

| Archivo | Cubre |
|---|---|
| `auth.http` | login, y los 401 de credenciales inválidas |
| `users.http` | registro, escalada de privilegios (B1), cambio de rol |
| `places.http` | CRUD y permisos de dueño |
| `events.http` | CRUD + **listado con filtros, orden y paginación** (C1) |
| `entries.http` | CRUD, validación de stock y de horarios |
| `orders.http` | compra, máquina de estados, propiedad |
| `tickets.http` | emisión automática, escaneo y doble canje |

## Pruebas automáticas

Para la verificación end-to-end completa hay un script que corre todo de una:

```bash
npx ts-node scripts/smoke.ts
```
