import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    // Antes de cada archivo de test se carga la configuración, que con NODE_ENV=test lee .env.test.
    setupFiles: ['./tests/setup.ts'],
    // Los tests de integración comparten la base de test: los archivos corren de a uno.
    fileParallelism: false,
  },
});