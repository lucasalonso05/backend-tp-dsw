import dotenv from 'dotenv';
import prisma from '../src/config/prisma';
import { hashear_password } from '../src/lib/password';

dotenv.config();

// El registro publico solo crea ASSISTANT, y PATCH /users/:id/role exige ser
// ADMIN. Sin este seed no existiria ningun ADMIN y nadie podria promover a
// nadie: es el huevo y la gallina del control de acceso.
//
// Se corre con:  npx prisma db seed
const main = async () => {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error('Faltan ADMIN_EMAIL y/o ADMIN_PASSWORD en el .env');
  }

  // upsert y no create: un seed tiene que poder correrse muchas veces sin
  // romper ni duplicar. Si el admin ya existe, no se toca.
  const admin = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      role: 'ADMIN',
      doc_type: 'DNI',
      doc_number: '00000001',
      name: 'Admin',
      surname: 'Eventify',
      email,
      password: await hashear_password(password),
      telephone: '0000000001',
    },
    select: { id: true, email: true, role: true },
  });

  console.log(`ADMIN listo -> id ${admin.id} | ${admin.email} | ${admin.role}`);
};

main()
  .catch((error) => {
    console.error((error as Error).message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
