// Se ejecuta antes de cada archivo de test. Vitest corre con NODE_ENV=test, así que config.ts
// carga .env.test y la base es la de test. Va primero para que nada (por ejemplo Prisma)
// llegue a leer antes el .env de desarrollo.
import '../src/config/config';