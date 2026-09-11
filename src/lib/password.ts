import bcrypt from 'bcrypt';

// Un solo lugar donde vive el costo del hasheo. Antes estaba en user.service
// y el seed lo iba a duplicar: si los dos valores se separan, las contrasenas
// creadas por un camino y por el otro dejan de ser equivalentes.
const SALT_ROUNDS = 10;

export const hashear_password = (password: string): Promise<string> =>
  bcrypt.hash(password, SALT_ROUNDS);

export const comparar_password = (password: string, hash: string): Promise<boolean> =>
  bcrypt.compare(password, hash);
