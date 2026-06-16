
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AsistenciaScalarFieldEnum = {
  id_asistente: 'id_asistente',
  id_evento: 'id_evento',
  fecha_hora_asistencia: 'fecha_hora_asistencia',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EventoScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  categoria: 'categoria',
  fecha_hora_inicio: 'fecha_hora_inicio',
  fecha_hora_fin: 'fecha_hora_fin',
  estado: 'estado',
  stock: 'stock',
  id_organizador: 'id_organizador',
  id_lugar: 'id_lugar',
  fecha_hora_creacion: 'fecha_hora_creacion',
  fecha_hora_cancelacion: 'fecha_hora_cancelacion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LugarScalarFieldEnum = {
  id: 'id',
  capacidad: 'capacidad',
  descripcion: 'descripcion',
  ciudad: 'ciudad',
  calle: 'calle',
  altura: 'altura',
  cp: 'cp',
  provincia: 'provincia'
};

exports.Prisma.EntradaScalarFieldEnum = {
  id_evento: 'id_evento',
  cod: 'cod',
  tipo_entrada: 'tipo_entrada',
  precio_unitario: 'precio_unitario',
  horario_inicio: 'horario_inicio',
  horario_fin: 'horario_fin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrdenScalarFieldEnum = {
  id_comprador: 'id_comprador',
  cod: 'cod',
  fecha_hora: 'fecha_hora',
  precio_unitario: 'precio_unitario',
  cantidad: 'cantidad',
  precio_total: 'precio_total',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Ticket_digitalScalarFieldEnum = {
  id_comprador: 'id_comprador',
  cod_orden: 'cod_orden',
  cod: 'cod',
  qr: 'qr',
  estado: 'estado',
  fecha_hora_uso: 'fecha_hora_uso',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AsistenteScalarFieldEnum = {
  id: 'id',
  t_doc: 't_doc',
  n_doc: 'n_doc',
  nombre: 'nombre',
  apellido: 'apellido',
  email: 'email',
  telefono: 'telefono',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrganizadorScalarFieldEnum = {
  id: 'id',
  t_doc: 't_doc',
  n_doc: 'n_doc',
  nombre: 'nombre',
  apellido: 'apellido',
  email: 'email',
  telefono: 'telefono',
  cuit: 'cuit',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CompradorScalarFieldEnum = {
  id: 'id',
  t_doc: 't_doc',
  n_doc: 'n_doc',
  nombre: 'nombre',
  apellido: 'apellido',
  email: 'email',
  telefono: 'telefono',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.estado_evento = exports.$Enums.estado_evento = {
  PENDIENTE: 'PENDIENTE',
  CONFIRMADO: 'CONFIRMADO',
  REALIZADO: 'REALIZADO',
  CANCELADO: 'CANCELADO'
};

exports.estado_ticket_digital = exports.$Enums.estado_ticket_digital = {
  NO_ESCANEADO: 'NO_ESCANEADO',
  ESCANEADO: 'ESCANEADO'
};

exports.Prisma.ModelName = {
  asistencia: 'asistencia',
  evento: 'evento',
  lugar: 'lugar',
  entrada: 'entrada',
  orden: 'orden',
  ticket_digital: 'ticket_digital',
  asistente: 'asistente',
  organizador: 'organizador',
  comprador: 'comprador'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
