/**
 * Verificación end-to-end de Eventify.
 *
 * No reemplaza a un set de tests unitarios: corre contra el servidor y la base
 * REALES, así que prueba la cadena entera (HTTP -> middleware -> controller ->
 * service -> Prisma -> Postgres) tal como la usa el frontend.
 *
 * Cada bloque corresponde a un bug que se arregló. Si alguno vuelve a fallar,
 * el nombre del caso dice exactamente qué se rompió.
 *
 *   npm run smoke        (con el backend corriendo en :3000)
 *
 * Requiere que exista el ADMIN semilla: npx prisma db seed
 */
import dotenv from 'dotenv';
import { randomUUID } from 'crypto';

dotenv.config();

const BASE = process.env.SMOKE_URL ?? 'http://localhost:3000/api';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'admin@eventify.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? '';

let ok = 0;
const fallas: string[] = [];

type Respuesta = { status: number; body: any };

const call = async (
  method: string,
  path: string,
  body?: unknown,
  token?: string,
): Promise<Respuesta> => {
  const res = await fetch(BASE + path, {
    method,
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  let parsed: any = null;
  try { parsed = await res.json(); } catch { /* sin cuerpo */ }
  return { status: res.status, body: parsed };
};

const ck = (titulo: string, esperado: unknown, obtenido: unknown) => {
  const pasa = JSON.stringify(esperado) === JSON.stringify(obtenido);
  if (pasa) ok++; else fallas.push(titulo);
  console.log(
    `${pasa ? '  ok  ' : ' FALLA'} ${titulo.padEnd(52)} ${JSON.stringify(obtenido)} (esp. ${JSON.stringify(esperado)})`,
  );
};

const titulo = (t: string) => console.log(`\n── ${t} ${'─'.repeat(Math.max(0, 60 - t.length))}`);

// Datos únicos por corrida: el script se puede correr muchas veces seguidas
// sin chocar con los @unique de email, teléfono y documento.
const sufijo = () => String(Date.now()).slice(-9) + Math.floor(Math.random() * 90 + 10);

const crearUsuario = async (nombre: string, adminToken?: string, organiser = false) => {
  const s = sufijo();
  const datos = {
    doc_type: 'DNI', doc_number: s.slice(0, 8),
    name: nombre, surname: 'Smoke',
    email: `${nombre}.${s}@smoke.test`, password: '12345678',
    telephone: s.slice(0, 11),
  };
  const creado = await call('POST', '/users', datos);
  const id = creado.body?.id;
  if (organiser && adminToken) {
    await call('PUT', `/users/${id}`, { cuit: '20' + s.slice(0, 9) }, adminToken);
    await call('PATCH', `/users/${id}/role`, { role: 'ORGANISER' }, adminToken);
  }
  const login = await call('POST', '/auth/login', { email: datos.email, password: '12345678' });
  return { id, token: login.body?.token as string, email: datos.email };
};

const main = async () => {
  console.log(`Eventify — verificación end-to-end contra ${BASE}\n`);

  if (!ADMIN_PASSWORD) {
    console.error('Falta ADMIN_PASSWORD en el .env (es la del admin semilla).');
    process.exit(1);
  }

  // ── Autenticación ──────────────────────────────────────────────────────
  titulo('auth');
  const loginAdmin = await call('POST', '/auth/login', { email: ADMIN_EMAIL, password: ADMIN_PASSWORD });
  ck('login del ADMIN', 200, loginAdmin.status);
  const ADMIN = loginAdmin.body?.token as string;
  if (!ADMIN) { console.error('Sin token de admin no se puede seguir.'); process.exit(1); }

  ck('el login no devuelve el password', undefined, loginAdmin.body?.user?.password);

  const malPass = await call('POST', '/auth/login', { email: ADMIN_EMAIL, password: 'incorrecta' });
  const malMail = await call('POST', '/auth/login', { email: 'nadie@smoke.test', password: '12345678' });
  ck('contraseña incorrecta -> 401', 401, malPass.status);
  ck('email inexistente -> 401', 401, malMail.status);
  ck('mismo mensaje en ambos (user enumeration)', malPass.body?.error, malMail.body?.error);

  const org = await crearUsuario('orga', ADMIN, true);
  const org2 = await crearUsuario('orgb', ADMIN, true);
  const cli = await crearUsuario('cliente');

  // ── B1: escalada de privilegios ────────────────────────────────────────
  titulo('B1 — escalada de privilegios');
  const s = sufijo();
  const intento = await call('POST', '/users', {
    role: 'ADMIN', doc_type: 'DNI', doc_number: s.slice(0, 8),
    name: 'Escalada', surname: 'Smoke', email: `esc.${s}@smoke.test`,
    password: '12345678', telephone: s.slice(0, 11),
  });
  ck('registro pidiendo role ADMIN -> ASSISTANT', 'ASSISTANT', intento.body?.role);
  ck('GET /users sin token -> 401', 401, (await call('GET', '/users')).status);
  ck('GET /users con token comun -> 403', 403, (await call('GET', '/users', undefined, cli.token)).status);

  // ── Protección de rutas ────────────────────────────────────────────────
  titulo('protección de rutas');
  const lugar = {
    name: 'Sala Smoke', capacity: 500, province: 'Santa Fe', city: 'Rosario',
    street: 'San Martin', street_number: '1', zip_code: '2000',
  };
  ck('POST /places sin token -> 401', 401, (await call('POST', '/places', lugar)).status);
  ck('POST /places como asistente -> 403', 403, (await call('POST', '/places', lugar, cli.token)).status);

  const place = await call('POST', '/places', lugar, org.token);
  ck('POST /places como organizador -> 201', 201, place.status);
  ck('el dueño sale del token', org.id, place.body?.id_user);
  ck('editar un lugar ajeno -> 403', 403,
    (await call('PUT', `/places/${place.body.id}`, { name: 'Robado' }, org2.token)).status);

  const INI = '2028-09-01T22:00:00.000Z';
  const FIN = '2028-09-02T04:00:00.000Z';
  const evento = await call('POST', '/events', {
    title: 'Smoke Fest', category: 'Musica', total_stock: 8,
    date_time_start: INI, date_time_end: FIN, id_place: place.body.id,
  }, org.token);
  ck('POST /events como organizador -> 201', 201, evento.status);
  ck('editar un evento ajeno -> 403', 403,
    (await call('PUT', `/events/${evento.body.id}`, { title: 'Robado' }, org2.token)).status);

  const entrada = await call('POST', '/entries', {
    entry_name: 'General', unit_price: 19.99, stock: 8,
    date_time_start: INI, date_time_end: FIN, id_event: evento.body.id,
  }, org.token);
  ck('POST /entries en evento propio -> 201', 201, entrada.status);
  ck('POST /entries en evento ajeno -> 403', 403, (await call('POST', '/entries', {
    entry_name: 'Intrusa', unit_price: 10, stock: 1,
    date_time_start: INI, date_time_end: FIN, id_event: evento.body.id,
  }, org2.token)).status);

  // ── B6: rangos de fechas ───────────────────────────────────────────────
  titulo('B6 — rangos de fechas');
  ck('evento con fin < inicio -> 400', 400, (await call('POST', '/events', {
    title: 'Imposible', category: 'T', total_stock: 5,
    date_time_start: FIN, date_time_end: INI, id_place: place.body.id,
  }, org.token)).status);
  ck('entrada que empieza antes que el evento -> 400', 400, (await call('POST', '/entries', {
    entry_name: 'Temprana', unit_price: 10, stock: 1,
    date_time_start: '2028-09-01T18:00:00.000Z', date_time_end: FIN, id_event: evento.body.id,
  }, org.token)).status);

  // ── B7: revalidación en update ─────────────────────────────────────────
  titulo('B7 — revalidación en event.update');
  ck('stock por encima del aforo -> 400', 400,
    (await call('PUT', `/events/${evento.body.id}`, { total_stock: 99999 }, org.token)).status);
  ck('stock por debajo de lo repartido -> 400', 400,
    (await call('PUT', `/events/${evento.body.id}`, { total_stock: 1 }, org.token)).status);

  // ── C1: listado con filtros ────────────────────────────────────────────
  titulo('C1 — listado con filtros y paginación');
  const listado = await call('GET', '/events?limit=5&page=1');
  ck('GET /events sin token -> 200 (catálogo público)', 200, listado.status);
  ck('viene paginado', true, typeof listado.body?.total === 'number' && Array.isArray(listado.body?.data));
  ck('respeta el limit', true, (listado.body?.data?.length ?? 99) <= 5);
  ck('trae el lugar incluido', true, !!listado.body?.data?.[0]?.FK_place);
  ck('trae el organizador incluido', true, !!listado.body?.data?.[0]?.FK_user);
  ck('el organizador no expone password', undefined, listado.body?.data?.[0]?.FK_user?.password);
  ck('limit fuera de rango -> 400', 400, (await call('GET', '/events?limit=999999')).status);

  const porCiudad = await call('GET', '/events?city=Rosario');
  ck('filtro por ciudad -> 200', 200, porCiudad.status);
  ck('filtro por categoría inexistente -> 0 resultados', 0,
    (await call('GET', '/events?category=NoExisteEstaCategoria')).body?.total);
  ck('orden por popularidad -> 200', 200, (await call('GET', '/events?orden=popularidad')).status);

  const detalle = await call('GET', `/events/${evento.body.id}`);
  ck('detalle trae entradas con disponibles', 8, detalle.body?.entries?.[0]?.disponibles);
  ck('detalle de un evento inexistente -> 404', 404, (await call('GET', '/events/99999999')).status);

  // ── B2: concurrencia ───────────────────────────────────────────────────
  titulo('B2 — sobreventa por concurrencia');
  const compras = await Promise.all(
    Array.from({ length: 15 }, () =>
      call('POST', '/orders', { items: [{ id_entry: entrada.body.id, quantity: 1 }] }, cli.token)),
  );
  const aceptadas = compras.filter((c) => c.status === 201).length;
  const tras = await call('GET', `/entries/${entrada.body.id}`);
  ck('15 compras simultáneas sobre stock 8', 8, tras.body?.sold_stock);
  ck('no se aceptaron más que el stock', true, aceptadas <= 8);
  ck('sin errores 500', 0, compras.filter((c) => c.status === 500).length);

  // ── B5: propiedad de las órdenes ───────────────────────────────────────
  titulo('B5 — propiedad de las órdenes');
  const miOrden = compras.find((c) => c.status === 201)!.body;
  ck('POST /orders sin token -> 401', 401,
    (await call('POST', '/orders', { items: [{ id_entry: entrada.body.id, quantity: 1 }] })).status);
  ck('la orden quedó a nombre del token', cli.id, miOrden.id_user);
  ck('leer una orden ajena -> 404', 404, (await call('GET', `/orders/${miOrden.id}`, undefined, org2.token)).status);
  ck('el dueño marcándola PAID -> 403', 403,
    (await call('PUT', `/orders/${miOrden.id}`, { status: 'PAID' }, cli.token)).status);

  // ── B8 + C2: dinero exacto y emisión automática ────────────────────────
  titulo('B8 + C2 — total exacto y tickets automáticos');
  ck('subtotal 19.99 x 1', '19.99', miOrden.items[0].subtotal);
  ck('la orden nace sin tickets', 0, miOrden.items[0].tickets?.length ?? 0);

  const pagada = await call('PUT', `/orders/${miOrden.id}`, { status: 'PAID', payment_reference: 'SMOKE-1' }, ADMIN);
  ck('ADMIN confirma el pago -> 200', 200, pagada.status);
  ck('C2: se emitió 1 ticket automáticamente', 1, pagada.body?.items?.[0]?.tickets?.length);
  const qr = pagada.body?.items?.[0]?.tickets?.[0]?.qr_code as string;
  ck('el QR es un UUID, no el id', true, /^[0-9a-f-]{36}$/.test(qr ?? ''));

  // ── B3: máquina de estados ─────────────────────────────────────────────
  titulo('B3 — máquina de estados de la orden');
  ck('PAID -> PENDING (inválida) -> 400', 400,
    (await call('PUT', `/orders/${miOrden.id}`, { status: 'PENDING' }, ADMIN)).status);
  ck('PAID -> CANCELLED -> 200', 200,
    (await call('PUT', `/orders/${miOrden.id}`, { status: 'CANCELLED' }, ADMIN)).status);
  ck('CANCELLED -> PAID (terminal) -> 400', 400,
    (await call('PUT', `/orders/${miOrden.id}`, { status: 'PAID' }, ADMIN)).status);

  // ── B2 + CUU3: escaneo del ticket ──────────────────────────────────────
  titulo('CUU 3 — escaneo del ticket');
  ck('scan sin token -> 401', 401, (await call('POST', '/digital-tickets/scan', { qr_code: qr })).status);
  ck('el dueño del ticket escaneándolo -> 403', 403,
    (await call('POST', '/digital-tickets/scan', { qr_code: qr }, cli.token)).status);
  ck('otro organizador -> 403', 403,
    (await call('POST', '/digital-tickets/scan', { qr_code: qr }, org2.token)).status);
  ck('el organizador del evento -> 200', 200,
    (await call('POST', '/digital-tickets/scan', { qr_code: qr }, org.token)).status);
  ck('doble canje -> 400', 400,
    (await call('POST', '/digital-tickets/scan', { qr_code: qr }, org.token)).status);
  ck('QR inexistente -> 404', 404,
    (await call('POST', '/digital-tickets/scan', { qr_code: randomUUID() }, org.token)).status);

  // ── C7: formato de errores ─────────────────────────────────────────────
  titulo('C7 — manejo de errores centralizado');
  const noExiste = await call('GET', '/ruta-que-no-existe');
  ck('ruta inexistente -> 404 en JSON', 404, noExiste.status);
  ck('  con la forma { error }', true, typeof noExiste.body?.error === 'string');
  const zod = await call('POST', '/auth/login', { email: 'no-es-email' });
  ck('body inválido -> 400', 400, zod.status);
  ck('  con el array de issues de Zod', true, Array.isArray(zod.body?.error));

  // ── Resumen ────────────────────────────────────────────────────────────
  console.log('\n' + '═'.repeat(74));
  if (fallas.length === 0) {
    console.log(`TODO OK — ${ok} comprobaciones`);
  } else {
    console.log(`${ok} ok, ${fallas.length} FALLARON:`);
    fallas.forEach((f) => console.log('  - ' + f));
    process.exit(1);
  }
};

main().catch((e) => {
  console.error('\nEl smoke test no pudo completarse:', (e as Error).message);
  console.error('¿Está corriendo el backend? (npm run dev)');
  process.exit(1);
});
