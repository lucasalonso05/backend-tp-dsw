# API · Categorías

Base: `/api/categories`. Una categoría tiene solo `id` y `name`. El nombre es único sin
distinguir mayúsculas: `Discoteca` y `DiscoTeca` son la misma.

### GET /api/categories
- **Acceso:** público
- **200:** `[ { "id": 1, "name": "Música", "createdAt": "…", "updatedAt": "…" } ]`, en orden alfabético
- **Errores:** 500

### GET /api/categories/:id
- **Acceso:** público
- **200:** `{ "id": 1, "name": "Música", "createdAt": "…", "updatedAt": "…" }`
- **Errores:** 400 id inválido · 404 no existe · 500

### POST /api/categories
- **Acceso:** organizador o admin
- **Body:** `{ "name": "Discoteca" }`
- **201:** la categoría creada
- **Errores:** 400 body inválido · 401 sin sesión · 403 otro rol · 409 ya existe (devuelve el nombre guardado) · 500

### PUT /api/categories/:id
- **Acceso:** admin
- **Body:** `{ "name": "Discoteca" }`
- **200:** la categoría actualizada
- **Errores:** 400 id o body inválidos · 401 sin sesión · 403 no es admin · 404 no existe · 409 ya existe otra con ese nombre · 500

### DELETE /api/categories/:id
- **Acceso:** admin
- **200:** `{ "mensaje": "Categoría eliminada correctamente" }`
- **Errores:** 400 id inválido · 401 sin sesión · 403 no es admin · 404 no existe · 409 tiene eventos asociados · 500

## Lo que cambió en los eventos

`event.category` (texto libre) pasó a ser la relación `event.id_category`.

- **POST y PUT /api/events** ahora reciben `id_category` (entero) en vez de `category`. Si la
  categoría no existe, responden 400 con `La categoría no existe`.
- **Todas las respuestas de evento** traen `id_category` y, dentro de `FK_category`, el `id` y el
  `name` de la categoría. Ya no traen `category`.
