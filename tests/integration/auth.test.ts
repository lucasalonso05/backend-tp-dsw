import request from 'supertest';
import { afterAll, describe, expect, it } from 'vitest';
import app from '../../src/index';
import prisma from '../../src/config/prisma';

// Datos únicos en cada corrida: el mail y el teléfono no se pueden repetir en la base.
const unique = Date.now().toString().slice(-8);
const user = {
  doc_type: 'DNI',
  doc_number: `3${unique.slice(-7)}`,
  name: 'Test',
  surname: 'Integración',
  email: `test.${unique}@eventify.test`,
  password: 'clave-de-prueba',
  telephone: `11${unique}`,
};

// Lo que cada paso le deja al siguiente: el id del usuario creado y su token.
let userId: number;
let token: string;

describe('Sesión: registrarse, iniciar sesión y usar el token', () => {
  afterAll(async () => {
    // Deja la base de test como estaba, aunque algún paso haya fallado.
    await prisma.user.deleteMany({ where: { email: user.email } });
    await prisma.$disconnect();
  });

  it('registra un usuario nuevo (201) sin devolver la contraseña', async () => {
    const res = await request(app).post('/api/users').send(user);

    expect(res.status).toBe(201);
    expect(res.body.email).toBe(user.email);
    expect(res.body.role).toBe('ASSISTANT');
    expect(res.body).not.toHaveProperty('password');
    userId = res.body.id;
  });

  it('inicia sesión con la contraseña correcta (200) y recibe un token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: user.email, password: user.password });

    expect(res.status).toBe(200);
    expect(typeof res.body.token).toBe('string');
    expect(res.body.user.email).toBe(user.email);
    expect(res.body.user).not.toHaveProperty('password');
    token = res.body.token;
  });

  it('rechaza una contraseña incorrecta (401)', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: user.email, password: 'otra-clave' });

    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Email o contraseña incorrectos');
  });

  it('con el token ve su propio usuario (200); sin token, no (401)', async () => {
    const withToken = await request(app)
      .get(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(withToken.status).toBe(200);
    expect(withToken.body.email).toBe(user.email);

    const withoutToken = await request(app).get(`/api/users/${userId}`);
    expect(withoutToken.status).toBe(401);
    expect(withoutToken.body.error).toBe('Tenés que iniciar sesión');
  });
});