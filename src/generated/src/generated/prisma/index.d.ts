
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model asistencia
 * 
 */
export type asistencia = $Result.DefaultSelection<Prisma.$asistenciaPayload>
/**
 * Model evento
 * 
 */
export type evento = $Result.DefaultSelection<Prisma.$eventoPayload>
/**
 * Model lugar
 * 
 */
export type lugar = $Result.DefaultSelection<Prisma.$lugarPayload>
/**
 * Model entrada
 * 
 */
export type entrada = $Result.DefaultSelection<Prisma.$entradaPayload>
/**
 * Model orden
 * 
 */
export type orden = $Result.DefaultSelection<Prisma.$ordenPayload>
/**
 * Model ticket_digital
 * 
 */
export type ticket_digital = $Result.DefaultSelection<Prisma.$ticket_digitalPayload>
/**
 * Model asistente
 * 
 */
export type asistente = $Result.DefaultSelection<Prisma.$asistentePayload>
/**
 * Model organizador
 * 
 */
export type organizador = $Result.DefaultSelection<Prisma.$organizadorPayload>
/**
 * Model comprador
 * 
 */
export type comprador = $Result.DefaultSelection<Prisma.$compradorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const estado_evento: {
  PENDIENTE: 'PENDIENTE',
  CONFIRMADO: 'CONFIRMADO',
  REALIZADO: 'REALIZADO',
  CANCELADO: 'CANCELADO'
};

export type estado_evento = (typeof estado_evento)[keyof typeof estado_evento]


export const estado_ticket_digital: {
  NO_ESCANEADO: 'NO_ESCANEADO',
  ESCANEADO: 'ESCANEADO'
};

export type estado_ticket_digital = (typeof estado_ticket_digital)[keyof typeof estado_ticket_digital]

}

export type estado_evento = $Enums.estado_evento

export const estado_evento: typeof $Enums.estado_evento

export type estado_ticket_digital = $Enums.estado_ticket_digital

export const estado_ticket_digital: typeof $Enums.estado_ticket_digital

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Asistencias
 * const asistencias = await prisma.asistencia.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Asistencias
   * const asistencias = await prisma.asistencia.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.asistencia`: Exposes CRUD operations for the **asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.asistenciaDelegate<ExtArgs>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.eventoDelegate<ExtArgs>;

  /**
   * `prisma.lugar`: Exposes CRUD operations for the **lugar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lugars
    * const lugars = await prisma.lugar.findMany()
    * ```
    */
  get lugar(): Prisma.lugarDelegate<ExtArgs>;

  /**
   * `prisma.entrada`: Exposes CRUD operations for the **entrada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entradas
    * const entradas = await prisma.entrada.findMany()
    * ```
    */
  get entrada(): Prisma.entradaDelegate<ExtArgs>;

  /**
   * `prisma.orden`: Exposes CRUD operations for the **orden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ordens
    * const ordens = await prisma.orden.findMany()
    * ```
    */
  get orden(): Prisma.ordenDelegate<ExtArgs>;

  /**
   * `prisma.ticket_digital`: Exposes CRUD operations for the **ticket_digital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_digitals
    * const ticket_digitals = await prisma.ticket_digital.findMany()
    * ```
    */
  get ticket_digital(): Prisma.ticket_digitalDelegate<ExtArgs>;

  /**
   * `prisma.asistente`: Exposes CRUD operations for the **asistente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistentes
    * const asistentes = await prisma.asistente.findMany()
    * ```
    */
  get asistente(): Prisma.asistenteDelegate<ExtArgs>;

  /**
   * `prisma.organizador`: Exposes CRUD operations for the **organizador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizadors
    * const organizadors = await prisma.organizador.findMany()
    * ```
    */
  get organizador(): Prisma.organizadorDelegate<ExtArgs>;

  /**
   * `prisma.comprador`: Exposes CRUD operations for the **comprador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compradors
    * const compradors = await prisma.comprador.findMany()
    * ```
    */
  get comprador(): Prisma.compradorDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "asistencia" | "evento" | "lugar" | "entrada" | "orden" | "ticket_digital" | "asistente" | "organizador" | "comprador"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      asistencia: {
        payload: Prisma.$asistenciaPayload<ExtArgs>
        fields: Prisma.asistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          findFirst: {
            args: Prisma.asistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          findMany: {
            args: Prisma.asistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>[]
          }
          create: {
            args: Prisma.asistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          createMany: {
            args: Prisma.asistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.asistenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>[]
          }
          delete: {
            args: Prisma.asistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          update: {
            args: Prisma.asistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          deleteMany: {
            args: Prisma.asistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.asistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.asistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.asistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.asistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
          }
        }
      }
      evento: {
        payload: Prisma.$eventoPayload<ExtArgs>
        fields: Prisma.eventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          findFirst: {
            args: Prisma.eventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          findMany: {
            args: Prisma.eventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>[]
          }
          create: {
            args: Prisma.eventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          createMany: {
            args: Prisma.eventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>[]
          }
          delete: {
            args: Prisma.eventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          update: {
            args: Prisma.eventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          deleteMany: {
            args: Prisma.eventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.eventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      lugar: {
        payload: Prisma.$lugarPayload<ExtArgs>
        fields: Prisma.lugarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lugarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lugarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload>
          }
          findFirst: {
            args: Prisma.lugarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lugarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload>
          }
          findMany: {
            args: Prisma.lugarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload>[]
          }
          create: {
            args: Prisma.lugarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload>
          }
          createMany: {
            args: Prisma.lugarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lugarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload>[]
          }
          delete: {
            args: Prisma.lugarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload>
          }
          update: {
            args: Prisma.lugarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload>
          }
          deleteMany: {
            args: Prisma.lugarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lugarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lugarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugarPayload>
          }
          aggregate: {
            args: Prisma.LugarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLugar>
          }
          groupBy: {
            args: Prisma.lugarGroupByArgs<ExtArgs>
            result: $Utils.Optional<LugarGroupByOutputType>[]
          }
          count: {
            args: Prisma.lugarCountArgs<ExtArgs>
            result: $Utils.Optional<LugarCountAggregateOutputType> | number
          }
        }
      }
      entrada: {
        payload: Prisma.$entradaPayload<ExtArgs>
        fields: Prisma.entradaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entradaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entradaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload>
          }
          findFirst: {
            args: Prisma.entradaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entradaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload>
          }
          findMany: {
            args: Prisma.entradaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload>[]
          }
          create: {
            args: Prisma.entradaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload>
          }
          createMany: {
            args: Prisma.entradaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.entradaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload>[]
          }
          delete: {
            args: Prisma.entradaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload>
          }
          update: {
            args: Prisma.entradaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload>
          }
          deleteMany: {
            args: Prisma.entradaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entradaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.entradaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradaPayload>
          }
          aggregate: {
            args: Prisma.EntradaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrada>
          }
          groupBy: {
            args: Prisma.entradaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntradaGroupByOutputType>[]
          }
          count: {
            args: Prisma.entradaCountArgs<ExtArgs>
            result: $Utils.Optional<EntradaCountAggregateOutputType> | number
          }
        }
      }
      orden: {
        payload: Prisma.$ordenPayload<ExtArgs>
        fields: Prisma.ordenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload>
          }
          findFirst: {
            args: Prisma.ordenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload>
          }
          findMany: {
            args: Prisma.ordenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload>[]
          }
          create: {
            args: Prisma.ordenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload>
          }
          createMany: {
            args: Prisma.ordenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload>[]
          }
          delete: {
            args: Prisma.ordenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload>
          }
          update: {
            args: Prisma.ordenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload>
          }
          deleteMany: {
            args: Prisma.ordenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordenPayload>
          }
          aggregate: {
            args: Prisma.OrdenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrden>
          }
          groupBy: {
            args: Prisma.ordenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordenCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenCountAggregateOutputType> | number
          }
        }
      }
      ticket_digital: {
        payload: Prisma.$ticket_digitalPayload<ExtArgs>
        fields: Prisma.ticket_digitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_digitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_digitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload>
          }
          findFirst: {
            args: Prisma.ticket_digitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_digitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload>
          }
          findMany: {
            args: Prisma.ticket_digitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload>[]
          }
          create: {
            args: Prisma.ticket_digitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload>
          }
          createMany: {
            args: Prisma.ticket_digitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticket_digitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload>[]
          }
          delete: {
            args: Prisma.ticket_digitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload>
          }
          update: {
            args: Prisma.ticket_digitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload>
          }
          deleteMany: {
            args: Prisma.ticket_digitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_digitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticket_digitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_digitalPayload>
          }
          aggregate: {
            args: Prisma.Ticket_digitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_digital>
          }
          groupBy: {
            args: Prisma.ticket_digitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_digitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_digitalCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_digitalCountAggregateOutputType> | number
          }
        }
      }
      asistente: {
        payload: Prisma.$asistentePayload<ExtArgs>
        fields: Prisma.asistenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asistenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asistenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload>
          }
          findFirst: {
            args: Prisma.asistenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asistenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload>
          }
          findMany: {
            args: Prisma.asistenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload>[]
          }
          create: {
            args: Prisma.asistenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload>
          }
          createMany: {
            args: Prisma.asistenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.asistenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload>[]
          }
          delete: {
            args: Prisma.asistenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload>
          }
          update: {
            args: Prisma.asistenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload>
          }
          deleteMany: {
            args: Prisma.asistenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.asistenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.asistenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistentePayload>
          }
          aggregate: {
            args: Prisma.AsistenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistente>
          }
          groupBy: {
            args: Prisma.asistenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.asistenteCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenteCountAggregateOutputType> | number
          }
        }
      }
      organizador: {
        payload: Prisma.$organizadorPayload<ExtArgs>
        fields: Prisma.organizadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload>
          }
          findFirst: {
            args: Prisma.organizadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload>
          }
          findMany: {
            args: Prisma.organizadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload>[]
          }
          create: {
            args: Prisma.organizadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload>
          }
          createMany: {
            args: Prisma.organizadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload>[]
          }
          delete: {
            args: Prisma.organizadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload>
          }
          update: {
            args: Prisma.organizadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload>
          }
          deleteMany: {
            args: Prisma.organizadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.organizadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizadorPayload>
          }
          aggregate: {
            args: Prisma.OrganizadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizador>
          }
          groupBy: {
            args: Prisma.organizadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizadorCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizadorCountAggregateOutputType> | number
          }
        }
      }
      comprador: {
        payload: Prisma.$compradorPayload<ExtArgs>
        fields: Prisma.compradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.compradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.compradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload>
          }
          findFirst: {
            args: Prisma.compradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.compradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload>
          }
          findMany: {
            args: Prisma.compradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload>[]
          }
          create: {
            args: Prisma.compradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload>
          }
          createMany: {
            args: Prisma.compradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.compradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload>[]
          }
          delete: {
            args: Prisma.compradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload>
          }
          update: {
            args: Prisma.compradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload>
          }
          deleteMany: {
            args: Prisma.compradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.compradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.compradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradorPayload>
          }
          aggregate: {
            args: Prisma.CompradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprador>
          }
          groupBy: {
            args: Prisma.compradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.compradorCountArgs<ExtArgs>
            result: $Utils.Optional<CompradorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    entradas: number
    asistencias: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas?: boolean | EventoCountOutputTypeCountEntradasArgs
    asistencias?: boolean | EventoCountOutputTypeCountAsistenciasArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountEntradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entradaWhereInput
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
  }


  /**
   * Count Type LugarCountOutputType
   */

  export type LugarCountOutputType = {
    eventos: number
  }

  export type LugarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | LugarCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * LugarCountOutputType without action
   */
  export type LugarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LugarCountOutputType
     */
    select?: LugarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LugarCountOutputType without action
   */
  export type LugarCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoWhereInput
  }


  /**
   * Count Type OrdenCountOutputType
   */

  export type OrdenCountOutputType = {
    tickets: number
  }

  export type OrdenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | OrdenCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * OrdenCountOutputType without action
   */
  export type OrdenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCountOutputType
     */
    select?: OrdenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdenCountOutputType without action
   */
  export type OrdenCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_digitalWhereInput
  }


  /**
   * Count Type AsistenteCountOutputType
   */

  export type AsistenteCountOutputType = {
    asistencias: number
  }

  export type AsistenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | AsistenteCountOutputTypeCountAsistenciasArgs
  }

  // Custom InputTypes
  /**
   * AsistenteCountOutputType without action
   */
  export type AsistenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsistenteCountOutputType
     */
    select?: AsistenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsistenteCountOutputType without action
   */
  export type AsistenteCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
  }


  /**
   * Count Type OrganizadorCountOutputType
   */

  export type OrganizadorCountOutputType = {
    eventos: number
  }

  export type OrganizadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | OrganizadorCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * OrganizadorCountOutputType without action
   */
  export type OrganizadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizadorCountOutputType
     */
    select?: OrganizadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizadorCountOutputType without action
   */
  export type OrganizadorCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoWhereInput
  }


  /**
   * Count Type CompradorCountOutputType
   */

  export type CompradorCountOutputType = {
    ordenes: number
  }

  export type CompradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | CompradorCountOutputTypeCountOrdenesArgs
  }

  // Custom InputTypes
  /**
   * CompradorCountOutputType without action
   */
  export type CompradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompradorCountOutputType
     */
    select?: CompradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompradorCountOutputType without action
   */
  export type CompradorCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaAvgAggregateOutputType = {
    id_asistente: number | null
    id_evento: number | null
  }

  export type AsistenciaSumAggregateOutputType = {
    id_asistente: number | null
    id_evento: number | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id_asistente: number | null
    id_evento: number | null
    fecha_hora_asistencia: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id_asistente: number | null
    id_evento: number | null
    fecha_hora_asistencia: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id_asistente: number
    id_evento: number
    fecha_hora_asistencia: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsistenciaAvgAggregateInputType = {
    id_asistente?: true
    id_evento?: true
  }

  export type AsistenciaSumAggregateInputType = {
    id_asistente?: true
    id_evento?: true
  }

  export type AsistenciaMinAggregateInputType = {
    id_asistente?: true
    id_evento?: true
    fecha_hora_asistencia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id_asistente?: true
    id_evento?: true
    fecha_hora_asistencia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id_asistente?: true
    id_evento?: true
    fecha_hora_asistencia?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistencia to aggregate.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type asistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithAggregationInput | asistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: asistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _avg?: AsistenciaAvgAggregateInputType
    _sum?: AsistenciaSumAggregateInputType
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id_asistente: number
    id_evento: number
    fecha_hora_asistencia: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends asistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type asistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asistente?: boolean
    id_evento?: boolean
    fecha_hora_asistencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FK_asistente?: boolean | asistenteDefaultArgs<ExtArgs>
    FK_evento?: boolean | eventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type asistenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asistente?: boolean
    id_evento?: boolean
    fecha_hora_asistencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FK_asistente?: boolean | asistenteDefaultArgs<ExtArgs>
    FK_evento?: boolean | eventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type asistenciaSelectScalar = {
    id_asistente?: boolean
    id_evento?: boolean
    fecha_hora_asistencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type asistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FK_asistente?: boolean | asistenteDefaultArgs<ExtArgs>
    FK_evento?: boolean | eventoDefaultArgs<ExtArgs>
  }
  export type asistenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FK_asistente?: boolean | asistenteDefaultArgs<ExtArgs>
    FK_evento?: boolean | eventoDefaultArgs<ExtArgs>
  }

  export type $asistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asistencia"
    objects: {
      FK_asistente: Prisma.$asistentePayload<ExtArgs>
      FK_evento: Prisma.$eventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_asistente: number
      id_evento: number
      fecha_hora_asistencia: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }

  type asistenciaGetPayload<S extends boolean | null | undefined | asistenciaDefaultArgs> = $Result.GetResult<Prisma.$asistenciaPayload, S>

  type asistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<asistenciaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface asistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asistencia'], meta: { name: 'asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {asistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asistenciaFindUniqueArgs>(args: SelectSubset<T, asistenciaFindUniqueArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {asistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, asistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asistenciaFindFirstArgs>(args?: SelectSubset<T, asistenciaFindFirstArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, asistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id_asistente`
     * const asistenciaWithId_asistenteOnly = await prisma.asistencia.findMany({ select: { id_asistente: true } })
     * 
     */
    findMany<T extends asistenciaFindManyArgs>(args?: SelectSubset<T, asistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Asistencia.
     * @param {asistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
     */
    create<T extends asistenciaCreateArgs>(args: SelectSubset<T, asistenciaCreateArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Asistencias.
     * @param {asistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends asistenciaCreateManyArgs>(args?: SelectSubset<T, asistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asistencias and returns the data saved in the database.
     * @param {asistenciaCreateManyAndReturnArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asistencias and only return the `id_asistente`
     * const asistenciaWithId_asistenteOnly = await prisma.asistencia.createManyAndReturn({ 
     *   select: { id_asistente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends asistenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, asistenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Asistencia.
     * @param {asistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
     */
    delete<T extends asistenciaDeleteArgs>(args: SelectSubset<T, asistenciaDeleteArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Asistencia.
     * @param {asistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends asistenciaUpdateArgs>(args: SelectSubset<T, asistenciaUpdateArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Asistencias.
     * @param {asistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends asistenciaDeleteManyArgs>(args?: SelectSubset<T, asistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends asistenciaUpdateManyArgs>(args: SelectSubset<T, asistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asistencia.
     * @param {asistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends asistenciaUpsertArgs>(args: SelectSubset<T, asistenciaUpsertArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends asistenciaCountArgs>(
      args?: Subset<T, asistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends asistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asistenciaGroupByArgs['orderBy'] }
        : { orderBy?: asistenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, asistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asistencia model
   */
  readonly fields: asistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FK_asistente<T extends asistenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, asistenteDefaultArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    FK_evento<T extends eventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventoDefaultArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the asistencia model
   */ 
  interface asistenciaFieldRefs {
    readonly id_asistente: FieldRef<"asistencia", 'Int'>
    readonly id_evento: FieldRef<"asistencia", 'Int'>
    readonly fecha_hora_asistencia: FieldRef<"asistencia", 'DateTime'>
    readonly createdAt: FieldRef<"asistencia", 'DateTime'>
    readonly updatedAt: FieldRef<"asistencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * asistencia findUnique
   */
  export type asistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia findUniqueOrThrow
   */
  export type asistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia findFirst
   */
  export type asistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia findFirstOrThrow
   */
  export type asistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia findMany
   */
  export type asistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencias to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia create
   */
  export type asistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a asistencia.
     */
    data: XOR<asistenciaCreateInput, asistenciaUncheckedCreateInput>
  }

  /**
   * asistencia createMany
   */
  export type asistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asistencias.
     */
    data: asistenciaCreateManyInput | asistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asistencia createManyAndReturn
   */
  export type asistenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many asistencias.
     */
    data: asistenciaCreateManyInput | asistenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * asistencia update
   */
  export type asistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a asistencia.
     */
    data: XOR<asistenciaUpdateInput, asistenciaUncheckedUpdateInput>
    /**
     * Choose, which asistencia to update.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia updateMany
   */
  export type asistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asistencias.
     */
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyInput>
    /**
     * Filter which asistencias to update
     */
    where?: asistenciaWhereInput
  }

  /**
   * asistencia upsert
   */
  export type asistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the asistencia to update in case it exists.
     */
    where: asistenciaWhereUniqueInput
    /**
     * In case the asistencia found by the `where` argument doesn't exist, create a new asistencia with this data.
     */
    create: XOR<asistenciaCreateInput, asistenciaUncheckedCreateInput>
    /**
     * In case the asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asistenciaUpdateInput, asistenciaUncheckedUpdateInput>
  }

  /**
   * asistencia delete
   */
  export type asistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter which asistencia to delete.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia deleteMany
   */
  export type asistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistencias to delete
     */
    where?: asistenciaWhereInput
  }

  /**
   * asistencia without action
   */
  export type asistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
  }


  /**
   * Model evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    id_organizador: number | null
    id_lugar: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
    stock: number | null
    id_organizador: number | null
    id_lugar: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    categoria: string | null
    fecha_hora_inicio: Date | null
    fecha_hora_fin: Date | null
    estado: $Enums.estado_evento | null
    stock: number | null
    id_organizador: number | null
    id_lugar: number | null
    fecha_hora_creacion: Date | null
    fecha_hora_cancelacion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    categoria: string | null
    fecha_hora_inicio: Date | null
    fecha_hora_fin: Date | null
    estado: $Enums.estado_evento | null
    stock: number | null
    id_organizador: number | null
    id_lugar: number | null
    fecha_hora_creacion: Date | null
    fecha_hora_cancelacion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    titulo: number
    categoria: number
    fecha_hora_inicio: number
    fecha_hora_fin: number
    estado: number
    stock: number
    id_organizador: number
    id_lugar: number
    fecha_hora_creacion: number
    fecha_hora_cancelacion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
    stock?: true
    id_organizador?: true
    id_lugar?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
    stock?: true
    id_organizador?: true
    id_lugar?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    titulo?: true
    categoria?: true
    fecha_hora_inicio?: true
    fecha_hora_fin?: true
    estado?: true
    stock?: true
    id_organizador?: true
    id_lugar?: true
    fecha_hora_creacion?: true
    fecha_hora_cancelacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    titulo?: true
    categoria?: true
    fecha_hora_inicio?: true
    fecha_hora_fin?: true
    estado?: true
    stock?: true
    id_organizador?: true
    id_lugar?: true
    fecha_hora_creacion?: true
    fecha_hora_cancelacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    titulo?: true
    categoria?: true
    fecha_hora_inicio?: true
    fecha_hora_fin?: true
    estado?: true
    stock?: true
    id_organizador?: true
    id_lugar?: true
    fecha_hora_creacion?: true
    fecha_hora_cancelacion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evento to aggregate.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type eventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoWhereInput
    orderBy?: eventoOrderByWithAggregationInput | eventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: eventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date
    fecha_hora_fin: Date
    estado: $Enums.estado_evento
    stock: number
    id_organizador: number
    id_lugar: number
    fecha_hora_creacion: Date
    fecha_hora_cancelacion: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends eventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type eventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    categoria?: boolean
    fecha_hora_inicio?: boolean
    fecha_hora_fin?: boolean
    estado?: boolean
    stock?: boolean
    id_organizador?: boolean
    id_lugar?: boolean
    fecha_hora_creacion?: boolean
    fecha_hora_cancelacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entradas?: boolean | evento$entradasArgs<ExtArgs>
    asistencias?: boolean | evento$asistenciasArgs<ExtArgs>
    FK_lugar?: boolean | lugarDefaultArgs<ExtArgs>
    FK_organizador?: boolean | organizadorDefaultArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type eventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    categoria?: boolean
    fecha_hora_inicio?: boolean
    fecha_hora_fin?: boolean
    estado?: boolean
    stock?: boolean
    id_organizador?: boolean
    id_lugar?: boolean
    fecha_hora_creacion?: boolean
    fecha_hora_cancelacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FK_lugar?: boolean | lugarDefaultArgs<ExtArgs>
    FK_organizador?: boolean | organizadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type eventoSelectScalar = {
    id?: boolean
    titulo?: boolean
    categoria?: boolean
    fecha_hora_inicio?: boolean
    fecha_hora_fin?: boolean
    estado?: boolean
    stock?: boolean
    id_organizador?: boolean
    id_lugar?: boolean
    fecha_hora_creacion?: boolean
    fecha_hora_cancelacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type eventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas?: boolean | evento$entradasArgs<ExtArgs>
    asistencias?: boolean | evento$asistenciasArgs<ExtArgs>
    FK_lugar?: boolean | lugarDefaultArgs<ExtArgs>
    FK_organizador?: boolean | organizadorDefaultArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FK_lugar?: boolean | lugarDefaultArgs<ExtArgs>
    FK_organizador?: boolean | organizadorDefaultArgs<ExtArgs>
  }

  export type $eventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evento"
    objects: {
      entradas: Prisma.$entradaPayload<ExtArgs>[]
      asistencias: Prisma.$asistenciaPayload<ExtArgs>[]
      FK_lugar: Prisma.$lugarPayload<ExtArgs>
      FK_organizador: Prisma.$organizadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      categoria: string
      fecha_hora_inicio: Date
      fecha_hora_fin: Date
      estado: $Enums.estado_evento
      stock: number
      id_organizador: number
      id_lugar: number
      fecha_hora_creacion: Date
      fecha_hora_cancelacion: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type eventoGetPayload<S extends boolean | null | undefined | eventoDefaultArgs> = $Result.GetResult<Prisma.$eventoPayload, S>

  type eventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<eventoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface eventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evento'], meta: { name: 'evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {eventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventoFindUniqueArgs>(args: SelectSubset<T, eventoFindUniqueArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {eventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventoFindUniqueOrThrowArgs>(args: SelectSubset<T, eventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventoFindFirstArgs>(args?: SelectSubset<T, eventoFindFirstArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventoFindFirstOrThrowArgs>(args?: SelectSubset<T, eventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventoFindManyArgs>(args?: SelectSubset<T, eventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evento.
     * @param {eventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends eventoCreateArgs>(args: SelectSubset<T, eventoCreateArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Eventos.
     * @param {eventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventoCreateManyArgs>(args?: SelectSubset<T, eventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {eventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventoCreateManyAndReturnArgs>(args?: SelectSubset<T, eventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Evento.
     * @param {eventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends eventoDeleteArgs>(args: SelectSubset<T, eventoDeleteArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evento.
     * @param {eventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventoUpdateArgs>(args: SelectSubset<T, eventoUpdateArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Eventos.
     * @param {eventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventoDeleteManyArgs>(args?: SelectSubset<T, eventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventoUpdateManyArgs>(args: SelectSubset<T, eventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evento.
     * @param {eventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends eventoUpsertArgs>(args: SelectSubset<T, eventoUpsertArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventoCountArgs>(
      args?: Subset<T, eventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventoGroupByArgs['orderBy'] }
        : { orderBy?: eventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evento model
   */
  readonly fields: eventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entradas<T extends evento$entradasArgs<ExtArgs> = {}>(args?: Subset<T, evento$entradasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "findMany"> | Null>
    asistencias<T extends evento$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, evento$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany"> | Null>
    FK_lugar<T extends lugarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lugarDefaultArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    FK_organizador<T extends organizadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizadorDefaultArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the evento model
   */ 
  interface eventoFieldRefs {
    readonly id: FieldRef<"evento", 'Int'>
    readonly titulo: FieldRef<"evento", 'String'>
    readonly categoria: FieldRef<"evento", 'String'>
    readonly fecha_hora_inicio: FieldRef<"evento", 'DateTime'>
    readonly fecha_hora_fin: FieldRef<"evento", 'DateTime'>
    readonly estado: FieldRef<"evento", 'estado_evento'>
    readonly stock: FieldRef<"evento", 'Int'>
    readonly id_organizador: FieldRef<"evento", 'Int'>
    readonly id_lugar: FieldRef<"evento", 'Int'>
    readonly fecha_hora_creacion: FieldRef<"evento", 'DateTime'>
    readonly fecha_hora_cancelacion: FieldRef<"evento", 'DateTime'>
    readonly createdAt: FieldRef<"evento", 'DateTime'>
    readonly updatedAt: FieldRef<"evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * evento findUnique
   */
  export type eventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento findUniqueOrThrow
   */
  export type eventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento findFirst
   */
  export type eventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento findFirstOrThrow
   */
  export type eventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento findMany
   */
  export type eventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento create
   */
  export type eventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The data needed to create a evento.
     */
    data: XOR<eventoCreateInput, eventoUncheckedCreateInput>
  }

  /**
   * evento createMany
   */
  export type eventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventoCreateManyInput | eventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evento createManyAndReturn
   */
  export type eventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many eventos.
     */
    data: eventoCreateManyInput | eventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * evento update
   */
  export type eventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The data needed to update a evento.
     */
    data: XOR<eventoUpdateInput, eventoUncheckedUpdateInput>
    /**
     * Choose, which evento to update.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento updateMany
   */
  export type eventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventoUpdateManyMutationInput, eventoUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventoWhereInput
  }

  /**
   * evento upsert
   */
  export type eventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The filter to search for the evento to update in case it exists.
     */
    where: eventoWhereUniqueInput
    /**
     * In case the evento found by the `where` argument doesn't exist, create a new evento with this data.
     */
    create: XOR<eventoCreateInput, eventoUncheckedCreateInput>
    /**
     * In case the evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventoUpdateInput, eventoUncheckedUpdateInput>
  }

  /**
   * evento delete
   */
  export type eventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter which evento to delete.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento deleteMany
   */
  export type eventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventoWhereInput
  }

  /**
   * evento.entradas
   */
  export type evento$entradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    where?: entradaWhereInput
    orderBy?: entradaOrderByWithRelationInput | entradaOrderByWithRelationInput[]
    cursor?: entradaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * evento.asistencias
   */
  export type evento$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    cursor?: asistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * evento without action
   */
  export type eventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
  }


  /**
   * Model lugar
   */

  export type AggregateLugar = {
    _count: LugarCountAggregateOutputType | null
    _avg: LugarAvgAggregateOutputType | null
    _sum: LugarSumAggregateOutputType | null
    _min: LugarMinAggregateOutputType | null
    _max: LugarMaxAggregateOutputType | null
  }

  export type LugarAvgAggregateOutputType = {
    id: number | null
    capacidad: number | null
    cp: number | null
  }

  export type LugarSumAggregateOutputType = {
    id: number | null
    capacidad: number | null
    cp: number | null
  }

  export type LugarMinAggregateOutputType = {
    id: number | null
    capacidad: number | null
    descripcion: string | null
    ciudad: string | null
    calle: string | null
    altura: string | null
    cp: number | null
    provincia: string | null
  }

  export type LugarMaxAggregateOutputType = {
    id: number | null
    capacidad: number | null
    descripcion: string | null
    ciudad: string | null
    calle: string | null
    altura: string | null
    cp: number | null
    provincia: string | null
  }

  export type LugarCountAggregateOutputType = {
    id: number
    capacidad: number
    descripcion: number
    ciudad: number
    calle: number
    altura: number
    cp: number
    provincia: number
    _all: number
  }


  export type LugarAvgAggregateInputType = {
    id?: true
    capacidad?: true
    cp?: true
  }

  export type LugarSumAggregateInputType = {
    id?: true
    capacidad?: true
    cp?: true
  }

  export type LugarMinAggregateInputType = {
    id?: true
    capacidad?: true
    descripcion?: true
    ciudad?: true
    calle?: true
    altura?: true
    cp?: true
    provincia?: true
  }

  export type LugarMaxAggregateInputType = {
    id?: true
    capacidad?: true
    descripcion?: true
    ciudad?: true
    calle?: true
    altura?: true
    cp?: true
    provincia?: true
  }

  export type LugarCountAggregateInputType = {
    id?: true
    capacidad?: true
    descripcion?: true
    ciudad?: true
    calle?: true
    altura?: true
    cp?: true
    provincia?: true
    _all?: true
  }

  export type LugarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lugar to aggregate.
     */
    where?: lugarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lugars to fetch.
     */
    orderBy?: lugarOrderByWithRelationInput | lugarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lugarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lugars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lugars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lugars
    **/
    _count?: true | LugarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LugarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LugarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LugarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LugarMaxAggregateInputType
  }

  export type GetLugarAggregateType<T extends LugarAggregateArgs> = {
        [P in keyof T & keyof AggregateLugar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLugar[P]>
      : GetScalarType<T[P], AggregateLugar[P]>
  }




  export type lugarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lugarWhereInput
    orderBy?: lugarOrderByWithAggregationInput | lugarOrderByWithAggregationInput[]
    by: LugarScalarFieldEnum[] | LugarScalarFieldEnum
    having?: lugarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LugarCountAggregateInputType | true
    _avg?: LugarAvgAggregateInputType
    _sum?: LugarSumAggregateInputType
    _min?: LugarMinAggregateInputType
    _max?: LugarMaxAggregateInputType
  }

  export type LugarGroupByOutputType = {
    id: number
    capacidad: number
    descripcion: string | null
    ciudad: string
    calle: string
    altura: string
    cp: number
    provincia: string
    _count: LugarCountAggregateOutputType | null
    _avg: LugarAvgAggregateOutputType | null
    _sum: LugarSumAggregateOutputType | null
    _min: LugarMinAggregateOutputType | null
    _max: LugarMaxAggregateOutputType | null
  }

  type GetLugarGroupByPayload<T extends lugarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LugarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LugarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LugarGroupByOutputType[P]>
            : GetScalarType<T[P], LugarGroupByOutputType[P]>
        }
      >
    >


  export type lugarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capacidad?: boolean
    descripcion?: boolean
    ciudad?: boolean
    calle?: boolean
    altura?: boolean
    cp?: boolean
    provincia?: boolean
    eventos?: boolean | lugar$eventosArgs<ExtArgs>
    _count?: boolean | LugarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lugar"]>

  export type lugarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capacidad?: boolean
    descripcion?: boolean
    ciudad?: boolean
    calle?: boolean
    altura?: boolean
    cp?: boolean
    provincia?: boolean
  }, ExtArgs["result"]["lugar"]>

  export type lugarSelectScalar = {
    id?: boolean
    capacidad?: boolean
    descripcion?: boolean
    ciudad?: boolean
    calle?: boolean
    altura?: boolean
    cp?: boolean
    provincia?: boolean
  }

  export type lugarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | lugar$eventosArgs<ExtArgs>
    _count?: boolean | LugarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lugarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $lugarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lugar"
    objects: {
      eventos: Prisma.$eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      capacidad: number
      descripcion: string | null
      ciudad: string
      calle: string
      altura: string
      cp: number
      provincia: string
    }, ExtArgs["result"]["lugar"]>
    composites: {}
  }

  type lugarGetPayload<S extends boolean | null | undefined | lugarDefaultArgs> = $Result.GetResult<Prisma.$lugarPayload, S>

  type lugarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<lugarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LugarCountAggregateInputType | true
    }

  export interface lugarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lugar'], meta: { name: 'lugar' } }
    /**
     * Find zero or one Lugar that matches the filter.
     * @param {lugarFindUniqueArgs} args - Arguments to find a Lugar
     * @example
     * // Get one Lugar
     * const lugar = await prisma.lugar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lugarFindUniqueArgs>(args: SelectSubset<T, lugarFindUniqueArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lugar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {lugarFindUniqueOrThrowArgs} args - Arguments to find a Lugar
     * @example
     * // Get one Lugar
     * const lugar = await prisma.lugar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lugarFindUniqueOrThrowArgs>(args: SelectSubset<T, lugarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lugar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugarFindFirstArgs} args - Arguments to find a Lugar
     * @example
     * // Get one Lugar
     * const lugar = await prisma.lugar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lugarFindFirstArgs>(args?: SelectSubset<T, lugarFindFirstArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lugar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugarFindFirstOrThrowArgs} args - Arguments to find a Lugar
     * @example
     * // Get one Lugar
     * const lugar = await prisma.lugar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lugarFindFirstOrThrowArgs>(args?: SelectSubset<T, lugarFindFirstOrThrowArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lugars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lugars
     * const lugars = await prisma.lugar.findMany()
     * 
     * // Get first 10 Lugars
     * const lugars = await prisma.lugar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lugarWithIdOnly = await prisma.lugar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lugarFindManyArgs>(args?: SelectSubset<T, lugarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lugar.
     * @param {lugarCreateArgs} args - Arguments to create a Lugar.
     * @example
     * // Create one Lugar
     * const Lugar = await prisma.lugar.create({
     *   data: {
     *     // ... data to create a Lugar
     *   }
     * })
     * 
     */
    create<T extends lugarCreateArgs>(args: SelectSubset<T, lugarCreateArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lugars.
     * @param {lugarCreateManyArgs} args - Arguments to create many Lugars.
     * @example
     * // Create many Lugars
     * const lugar = await prisma.lugar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lugarCreateManyArgs>(args?: SelectSubset<T, lugarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lugars and returns the data saved in the database.
     * @param {lugarCreateManyAndReturnArgs} args - Arguments to create many Lugars.
     * @example
     * // Create many Lugars
     * const lugar = await prisma.lugar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lugars and only return the `id`
     * const lugarWithIdOnly = await prisma.lugar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lugarCreateManyAndReturnArgs>(args?: SelectSubset<T, lugarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lugar.
     * @param {lugarDeleteArgs} args - Arguments to delete one Lugar.
     * @example
     * // Delete one Lugar
     * const Lugar = await prisma.lugar.delete({
     *   where: {
     *     // ... filter to delete one Lugar
     *   }
     * })
     * 
     */
    delete<T extends lugarDeleteArgs>(args: SelectSubset<T, lugarDeleteArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lugar.
     * @param {lugarUpdateArgs} args - Arguments to update one Lugar.
     * @example
     * // Update one Lugar
     * const lugar = await prisma.lugar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lugarUpdateArgs>(args: SelectSubset<T, lugarUpdateArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lugars.
     * @param {lugarDeleteManyArgs} args - Arguments to filter Lugars to delete.
     * @example
     * // Delete a few Lugars
     * const { count } = await prisma.lugar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lugarDeleteManyArgs>(args?: SelectSubset<T, lugarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lugars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lugars
     * const lugar = await prisma.lugar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lugarUpdateManyArgs>(args: SelectSubset<T, lugarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lugar.
     * @param {lugarUpsertArgs} args - Arguments to update or create a Lugar.
     * @example
     * // Update or create a Lugar
     * const lugar = await prisma.lugar.upsert({
     *   create: {
     *     // ... data to create a Lugar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lugar we want to update
     *   }
     * })
     */
    upsert<T extends lugarUpsertArgs>(args: SelectSubset<T, lugarUpsertArgs<ExtArgs>>): Prisma__lugarClient<$Result.GetResult<Prisma.$lugarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lugars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugarCountArgs} args - Arguments to filter Lugars to count.
     * @example
     * // Count the number of Lugars
     * const count = await prisma.lugar.count({
     *   where: {
     *     // ... the filter for the Lugars we want to count
     *   }
     * })
    **/
    count<T extends lugarCountArgs>(
      args?: Subset<T, lugarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LugarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lugar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LugarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LugarAggregateArgs>(args: Subset<T, LugarAggregateArgs>): Prisma.PrismaPromise<GetLugarAggregateType<T>>

    /**
     * Group by Lugar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lugarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lugarGroupByArgs['orderBy'] }
        : { orderBy?: lugarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lugarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLugarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lugar model
   */
  readonly fields: lugarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lugar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lugarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends lugar$eventosArgs<ExtArgs> = {}>(args?: Subset<T, lugar$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lugar model
   */ 
  interface lugarFieldRefs {
    readonly id: FieldRef<"lugar", 'Int'>
    readonly capacidad: FieldRef<"lugar", 'Int'>
    readonly descripcion: FieldRef<"lugar", 'String'>
    readonly ciudad: FieldRef<"lugar", 'String'>
    readonly calle: FieldRef<"lugar", 'String'>
    readonly altura: FieldRef<"lugar", 'String'>
    readonly cp: FieldRef<"lugar", 'Int'>
    readonly provincia: FieldRef<"lugar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lugar findUnique
   */
  export type lugarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * Filter, which lugar to fetch.
     */
    where: lugarWhereUniqueInput
  }

  /**
   * lugar findUniqueOrThrow
   */
  export type lugarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * Filter, which lugar to fetch.
     */
    where: lugarWhereUniqueInput
  }

  /**
   * lugar findFirst
   */
  export type lugarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * Filter, which lugar to fetch.
     */
    where?: lugarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lugars to fetch.
     */
    orderBy?: lugarOrderByWithRelationInput | lugarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lugars.
     */
    cursor?: lugarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lugars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lugars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lugars.
     */
    distinct?: LugarScalarFieldEnum | LugarScalarFieldEnum[]
  }

  /**
   * lugar findFirstOrThrow
   */
  export type lugarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * Filter, which lugar to fetch.
     */
    where?: lugarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lugars to fetch.
     */
    orderBy?: lugarOrderByWithRelationInput | lugarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lugars.
     */
    cursor?: lugarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lugars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lugars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lugars.
     */
    distinct?: LugarScalarFieldEnum | LugarScalarFieldEnum[]
  }

  /**
   * lugar findMany
   */
  export type lugarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * Filter, which lugars to fetch.
     */
    where?: lugarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lugars to fetch.
     */
    orderBy?: lugarOrderByWithRelationInput | lugarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lugars.
     */
    cursor?: lugarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lugars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lugars.
     */
    skip?: number
    distinct?: LugarScalarFieldEnum | LugarScalarFieldEnum[]
  }

  /**
   * lugar create
   */
  export type lugarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * The data needed to create a lugar.
     */
    data: XOR<lugarCreateInput, lugarUncheckedCreateInput>
  }

  /**
   * lugar createMany
   */
  export type lugarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lugars.
     */
    data: lugarCreateManyInput | lugarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lugar createManyAndReturn
   */
  export type lugarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many lugars.
     */
    data: lugarCreateManyInput | lugarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lugar update
   */
  export type lugarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * The data needed to update a lugar.
     */
    data: XOR<lugarUpdateInput, lugarUncheckedUpdateInput>
    /**
     * Choose, which lugar to update.
     */
    where: lugarWhereUniqueInput
  }

  /**
   * lugar updateMany
   */
  export type lugarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lugars.
     */
    data: XOR<lugarUpdateManyMutationInput, lugarUncheckedUpdateManyInput>
    /**
     * Filter which lugars to update
     */
    where?: lugarWhereInput
  }

  /**
   * lugar upsert
   */
  export type lugarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * The filter to search for the lugar to update in case it exists.
     */
    where: lugarWhereUniqueInput
    /**
     * In case the lugar found by the `where` argument doesn't exist, create a new lugar with this data.
     */
    create: XOR<lugarCreateInput, lugarUncheckedCreateInput>
    /**
     * In case the lugar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lugarUpdateInput, lugarUncheckedUpdateInput>
  }

  /**
   * lugar delete
   */
  export type lugarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
    /**
     * Filter which lugar to delete.
     */
    where: lugarWhereUniqueInput
  }

  /**
   * lugar deleteMany
   */
  export type lugarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lugars to delete
     */
    where?: lugarWhereInput
  }

  /**
   * lugar.eventos
   */
  export type lugar$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    where?: eventoWhereInput
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    cursor?: eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * lugar without action
   */
  export type lugarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugar
     */
    select?: lugarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugarInclude<ExtArgs> | null
  }


  /**
   * Model entrada
   */

  export type AggregateEntrada = {
    _count: EntradaCountAggregateOutputType | null
    _avg: EntradaAvgAggregateOutputType | null
    _sum: EntradaSumAggregateOutputType | null
    _min: EntradaMinAggregateOutputType | null
    _max: EntradaMaxAggregateOutputType | null
  }

  export type EntradaAvgAggregateOutputType = {
    id_evento: number | null
    cod: number | null
    precio_unitario: Decimal | null
  }

  export type EntradaSumAggregateOutputType = {
    id_evento: number | null
    cod: number | null
    precio_unitario: Decimal | null
  }

  export type EntradaMinAggregateOutputType = {
    id_evento: number | null
    cod: number | null
    tipo_entrada: string | null
    precio_unitario: Decimal | null
    horario_inicio: Date | null
    horario_fin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntradaMaxAggregateOutputType = {
    id_evento: number | null
    cod: number | null
    tipo_entrada: string | null
    precio_unitario: Decimal | null
    horario_inicio: Date | null
    horario_fin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntradaCountAggregateOutputType = {
    id_evento: number
    cod: number
    tipo_entrada: number
    precio_unitario: number
    horario_inicio: number
    horario_fin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntradaAvgAggregateInputType = {
    id_evento?: true
    cod?: true
    precio_unitario?: true
  }

  export type EntradaSumAggregateInputType = {
    id_evento?: true
    cod?: true
    precio_unitario?: true
  }

  export type EntradaMinAggregateInputType = {
    id_evento?: true
    cod?: true
    tipo_entrada?: true
    precio_unitario?: true
    horario_inicio?: true
    horario_fin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntradaMaxAggregateInputType = {
    id_evento?: true
    cod?: true
    tipo_entrada?: true
    precio_unitario?: true
    horario_inicio?: true
    horario_fin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntradaCountAggregateInputType = {
    id_evento?: true
    cod?: true
    tipo_entrada?: true
    precio_unitario?: true
    horario_inicio?: true
    horario_fin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntradaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrada to aggregate.
     */
    where?: entradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entradas to fetch.
     */
    orderBy?: entradaOrderByWithRelationInput | entradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entradas
    **/
    _count?: true | EntradaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntradaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntradaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntradaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntradaMaxAggregateInputType
  }

  export type GetEntradaAggregateType<T extends EntradaAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrada[P]>
      : GetScalarType<T[P], AggregateEntrada[P]>
  }




  export type entradaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entradaWhereInput
    orderBy?: entradaOrderByWithAggregationInput | entradaOrderByWithAggregationInput[]
    by: EntradaScalarFieldEnum[] | EntradaScalarFieldEnum
    having?: entradaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntradaCountAggregateInputType | true
    _avg?: EntradaAvgAggregateInputType
    _sum?: EntradaSumAggregateInputType
    _min?: EntradaMinAggregateInputType
    _max?: EntradaMaxAggregateInputType
  }

  export type EntradaGroupByOutputType = {
    id_evento: number
    cod: number
    tipo_entrada: string
    precio_unitario: Decimal
    horario_inicio: Date
    horario_fin: Date
    createdAt: Date
    updatedAt: Date
    _count: EntradaCountAggregateOutputType | null
    _avg: EntradaAvgAggregateOutputType | null
    _sum: EntradaSumAggregateOutputType | null
    _min: EntradaMinAggregateOutputType | null
    _max: EntradaMaxAggregateOutputType | null
  }

  type GetEntradaGroupByPayload<T extends entradaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntradaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntradaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntradaGroupByOutputType[P]>
            : GetScalarType<T[P], EntradaGroupByOutputType[P]>
        }
      >
    >


  export type entradaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    cod?: boolean
    tipo_entrada?: boolean
    precio_unitario?: boolean
    horario_inicio?: boolean
    horario_fin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FK_evento?: boolean | eventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrada"]>

  export type entradaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    cod?: boolean
    tipo_entrada?: boolean
    precio_unitario?: boolean
    horario_inicio?: boolean
    horario_fin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FK_evento?: boolean | eventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrada"]>

  export type entradaSelectScalar = {
    id_evento?: boolean
    cod?: boolean
    tipo_entrada?: boolean
    precio_unitario?: boolean
    horario_inicio?: boolean
    horario_fin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type entradaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FK_evento?: boolean | eventoDefaultArgs<ExtArgs>
  }
  export type entradaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FK_evento?: boolean | eventoDefaultArgs<ExtArgs>
  }

  export type $entradaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entrada"
    objects: {
      FK_evento: Prisma.$eventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      cod: number
      tipo_entrada: string
      precio_unitario: Prisma.Decimal
      horario_inicio: Date
      horario_fin: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entrada"]>
    composites: {}
  }

  type entradaGetPayload<S extends boolean | null | undefined | entradaDefaultArgs> = $Result.GetResult<Prisma.$entradaPayload, S>

  type entradaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<entradaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntradaCountAggregateInputType | true
    }

  export interface entradaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entrada'], meta: { name: 'entrada' } }
    /**
     * Find zero or one Entrada that matches the filter.
     * @param {entradaFindUniqueArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entradaFindUniqueArgs>(args: SelectSubset<T, entradaFindUniqueArgs<ExtArgs>>): Prisma__entradaClient<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Entrada that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {entradaFindUniqueOrThrowArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entradaFindUniqueOrThrowArgs>(args: SelectSubset<T, entradaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entradaClient<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Entrada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradaFindFirstArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entradaFindFirstArgs>(args?: SelectSubset<T, entradaFindFirstArgs<ExtArgs>>): Prisma__entradaClient<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Entrada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradaFindFirstOrThrowArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entradaFindFirstOrThrowArgs>(args?: SelectSubset<T, entradaFindFirstOrThrowArgs<ExtArgs>>): Prisma__entradaClient<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Entradas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entradas
     * const entradas = await prisma.entrada.findMany()
     * 
     * // Get first 10 Entradas
     * const entradas = await prisma.entrada.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const entradaWithId_eventoOnly = await prisma.entrada.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends entradaFindManyArgs>(args?: SelectSubset<T, entradaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Entrada.
     * @param {entradaCreateArgs} args - Arguments to create a Entrada.
     * @example
     * // Create one Entrada
     * const Entrada = await prisma.entrada.create({
     *   data: {
     *     // ... data to create a Entrada
     *   }
     * })
     * 
     */
    create<T extends entradaCreateArgs>(args: SelectSubset<T, entradaCreateArgs<ExtArgs>>): Prisma__entradaClient<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Entradas.
     * @param {entradaCreateManyArgs} args - Arguments to create many Entradas.
     * @example
     * // Create many Entradas
     * const entrada = await prisma.entrada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entradaCreateManyArgs>(args?: SelectSubset<T, entradaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entradas and returns the data saved in the database.
     * @param {entradaCreateManyAndReturnArgs} args - Arguments to create many Entradas.
     * @example
     * // Create many Entradas
     * const entrada = await prisma.entrada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entradas and only return the `id_evento`
     * const entradaWithId_eventoOnly = await prisma.entrada.createManyAndReturn({ 
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends entradaCreateManyAndReturnArgs>(args?: SelectSubset<T, entradaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Entrada.
     * @param {entradaDeleteArgs} args - Arguments to delete one Entrada.
     * @example
     * // Delete one Entrada
     * const Entrada = await prisma.entrada.delete({
     *   where: {
     *     // ... filter to delete one Entrada
     *   }
     * })
     * 
     */
    delete<T extends entradaDeleteArgs>(args: SelectSubset<T, entradaDeleteArgs<ExtArgs>>): Prisma__entradaClient<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Entrada.
     * @param {entradaUpdateArgs} args - Arguments to update one Entrada.
     * @example
     * // Update one Entrada
     * const entrada = await prisma.entrada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entradaUpdateArgs>(args: SelectSubset<T, entradaUpdateArgs<ExtArgs>>): Prisma__entradaClient<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Entradas.
     * @param {entradaDeleteManyArgs} args - Arguments to filter Entradas to delete.
     * @example
     * // Delete a few Entradas
     * const { count } = await prisma.entrada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entradaDeleteManyArgs>(args?: SelectSubset<T, entradaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entradas
     * const entrada = await prisma.entrada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entradaUpdateManyArgs>(args: SelectSubset<T, entradaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entrada.
     * @param {entradaUpsertArgs} args - Arguments to update or create a Entrada.
     * @example
     * // Update or create a Entrada
     * const entrada = await prisma.entrada.upsert({
     *   create: {
     *     // ... data to create a Entrada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrada we want to update
     *   }
     * })
     */
    upsert<T extends entradaUpsertArgs>(args: SelectSubset<T, entradaUpsertArgs<ExtArgs>>): Prisma__entradaClient<$Result.GetResult<Prisma.$entradaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Entradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradaCountArgs} args - Arguments to filter Entradas to count.
     * @example
     * // Count the number of Entradas
     * const count = await prisma.entrada.count({
     *   where: {
     *     // ... the filter for the Entradas we want to count
     *   }
     * })
    **/
    count<T extends entradaCountArgs>(
      args?: Subset<T, entradaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntradaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntradaAggregateArgs>(args: Subset<T, EntradaAggregateArgs>): Prisma.PrismaPromise<GetEntradaAggregateType<T>>

    /**
     * Group by Entrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entradaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entradaGroupByArgs['orderBy'] }
        : { orderBy?: entradaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entradaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntradaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entrada model
   */
  readonly fields: entradaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entrada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entradaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FK_evento<T extends eventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventoDefaultArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entrada model
   */ 
  interface entradaFieldRefs {
    readonly id_evento: FieldRef<"entrada", 'Int'>
    readonly cod: FieldRef<"entrada", 'Int'>
    readonly tipo_entrada: FieldRef<"entrada", 'String'>
    readonly precio_unitario: FieldRef<"entrada", 'Decimal'>
    readonly horario_inicio: FieldRef<"entrada", 'DateTime'>
    readonly horario_fin: FieldRef<"entrada", 'DateTime'>
    readonly createdAt: FieldRef<"entrada", 'DateTime'>
    readonly updatedAt: FieldRef<"entrada", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * entrada findUnique
   */
  export type entradaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * Filter, which entrada to fetch.
     */
    where: entradaWhereUniqueInput
  }

  /**
   * entrada findUniqueOrThrow
   */
  export type entradaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * Filter, which entrada to fetch.
     */
    where: entradaWhereUniqueInput
  }

  /**
   * entrada findFirst
   */
  export type entradaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * Filter, which entrada to fetch.
     */
    where?: entradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entradas to fetch.
     */
    orderBy?: entradaOrderByWithRelationInput | entradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entradas.
     */
    cursor?: entradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entradas.
     */
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * entrada findFirstOrThrow
   */
  export type entradaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * Filter, which entrada to fetch.
     */
    where?: entradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entradas to fetch.
     */
    orderBy?: entradaOrderByWithRelationInput | entradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entradas.
     */
    cursor?: entradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entradas.
     */
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * entrada findMany
   */
  export type entradaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * Filter, which entradas to fetch.
     */
    where?: entradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entradas to fetch.
     */
    orderBy?: entradaOrderByWithRelationInput | entradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entradas.
     */
    cursor?: entradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entradas.
     */
    skip?: number
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * entrada create
   */
  export type entradaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * The data needed to create a entrada.
     */
    data: XOR<entradaCreateInput, entradaUncheckedCreateInput>
  }

  /**
   * entrada createMany
   */
  export type entradaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entradas.
     */
    data: entradaCreateManyInput | entradaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entrada createManyAndReturn
   */
  export type entradaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many entradas.
     */
    data: entradaCreateManyInput | entradaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * entrada update
   */
  export type entradaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * The data needed to update a entrada.
     */
    data: XOR<entradaUpdateInput, entradaUncheckedUpdateInput>
    /**
     * Choose, which entrada to update.
     */
    where: entradaWhereUniqueInput
  }

  /**
   * entrada updateMany
   */
  export type entradaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entradas.
     */
    data: XOR<entradaUpdateManyMutationInput, entradaUncheckedUpdateManyInput>
    /**
     * Filter which entradas to update
     */
    where?: entradaWhereInput
  }

  /**
   * entrada upsert
   */
  export type entradaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * The filter to search for the entrada to update in case it exists.
     */
    where: entradaWhereUniqueInput
    /**
     * In case the entrada found by the `where` argument doesn't exist, create a new entrada with this data.
     */
    create: XOR<entradaCreateInput, entradaUncheckedCreateInput>
    /**
     * In case the entrada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entradaUpdateInput, entradaUncheckedUpdateInput>
  }

  /**
   * entrada delete
   */
  export type entradaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
    /**
     * Filter which entrada to delete.
     */
    where: entradaWhereUniqueInput
  }

  /**
   * entrada deleteMany
   */
  export type entradaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entradas to delete
     */
    where?: entradaWhereInput
  }

  /**
   * entrada without action
   */
  export type entradaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrada
     */
    select?: entradaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradaInclude<ExtArgs> | null
  }


  /**
   * Model orden
   */

  export type AggregateOrden = {
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  export type OrdenAvgAggregateOutputType = {
    id_comprador: number | null
    cod: number | null
    precio_unitario: Decimal | null
    cantidad: number | null
    precio_total: Decimal | null
  }

  export type OrdenSumAggregateOutputType = {
    id_comprador: number | null
    cod: number | null
    precio_unitario: Decimal | null
    cantidad: number | null
    precio_total: Decimal | null
  }

  export type OrdenMinAggregateOutputType = {
    id_comprador: number | null
    cod: number | null
    fecha_hora: Date | null
    precio_unitario: Decimal | null
    cantidad: number | null
    precio_total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdenMaxAggregateOutputType = {
    id_comprador: number | null
    cod: number | null
    fecha_hora: Date | null
    precio_unitario: Decimal | null
    cantidad: number | null
    precio_total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdenCountAggregateOutputType = {
    id_comprador: number
    cod: number
    fecha_hora: number
    precio_unitario: number
    cantidad: number
    precio_total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdenAvgAggregateInputType = {
    id_comprador?: true
    cod?: true
    precio_unitario?: true
    cantidad?: true
    precio_total?: true
  }

  export type OrdenSumAggregateInputType = {
    id_comprador?: true
    cod?: true
    precio_unitario?: true
    cantidad?: true
    precio_total?: true
  }

  export type OrdenMinAggregateInputType = {
    id_comprador?: true
    cod?: true
    fecha_hora?: true
    precio_unitario?: true
    cantidad?: true
    precio_total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdenMaxAggregateInputType = {
    id_comprador?: true
    cod?: true
    fecha_hora?: true
    precio_unitario?: true
    cantidad?: true
    precio_total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdenCountAggregateInputType = {
    id_comprador?: true
    cod?: true
    fecha_hora?: true
    precio_unitario?: true
    cantidad?: true
    precio_total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orden to aggregate.
     */
    where?: ordenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ordens to fetch.
     */
    orderBy?: ordenOrderByWithRelationInput | ordenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ordens
    **/
    _count?: true | OrdenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenMaxAggregateInputType
  }

  export type GetOrdenAggregateType<T extends OrdenAggregateArgs> = {
        [P in keyof T & keyof AggregateOrden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrden[P]>
      : GetScalarType<T[P], AggregateOrden[P]>
  }




  export type ordenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordenWhereInput
    orderBy?: ordenOrderByWithAggregationInput | ordenOrderByWithAggregationInput[]
    by: OrdenScalarFieldEnum[] | OrdenScalarFieldEnum
    having?: ordenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenCountAggregateInputType | true
    _avg?: OrdenAvgAggregateInputType
    _sum?: OrdenSumAggregateInputType
    _min?: OrdenMinAggregateInputType
    _max?: OrdenMaxAggregateInputType
  }

  export type OrdenGroupByOutputType = {
    id_comprador: number
    cod: number
    fecha_hora: Date
    precio_unitario: Decimal
    cantidad: number
    precio_total: Decimal
    createdAt: Date
    updatedAt: Date
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  type GetOrdenGroupByPayload<T extends ordenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenGroupByOutputType[P]>
        }
      >
    >


  export type ordenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comprador?: boolean
    cod?: boolean
    fecha_hora?: boolean
    precio_unitario?: boolean
    cantidad?: boolean
    precio_total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickets?: boolean | orden$ticketsArgs<ExtArgs>
    FK_comprador?: boolean | compradorDefaultArgs<ExtArgs>
    _count?: boolean | OrdenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type ordenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comprador?: boolean
    cod?: boolean
    fecha_hora?: boolean
    precio_unitario?: boolean
    cantidad?: boolean
    precio_total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FK_comprador?: boolean | compradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type ordenSelectScalar = {
    id_comprador?: boolean
    cod?: boolean
    fecha_hora?: boolean
    precio_unitario?: boolean
    cantidad?: boolean
    precio_total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ordenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | orden$ticketsArgs<ExtArgs>
    FK_comprador?: boolean | compradorDefaultArgs<ExtArgs>
    _count?: boolean | OrdenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FK_comprador?: boolean | compradorDefaultArgs<ExtArgs>
  }

  export type $ordenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orden"
    objects: {
      tickets: Prisma.$ticket_digitalPayload<ExtArgs>[]
      FK_comprador: Prisma.$compradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_comprador: number
      cod: number
      fecha_hora: Date
      precio_unitario: Prisma.Decimal
      cantidad: number
      precio_total: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orden"]>
    composites: {}
  }

  type ordenGetPayload<S extends boolean | null | undefined | ordenDefaultArgs> = $Result.GetResult<Prisma.$ordenPayload, S>

  type ordenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ordenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdenCountAggregateInputType | true
    }

  export interface ordenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orden'], meta: { name: 'orden' } }
    /**
     * Find zero or one Orden that matches the filter.
     * @param {ordenFindUniqueArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordenFindUniqueArgs>(args: SelectSubset<T, ordenFindUniqueArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Orden that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ordenFindUniqueOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordenFindUniqueOrThrowArgs>(args: SelectSubset<T, ordenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Orden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordenFindFirstArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordenFindFirstArgs>(args?: SelectSubset<T, ordenFindFirstArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Orden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordenFindFirstOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordenFindFirstOrThrowArgs>(args?: SelectSubset<T, ordenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ordens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ordens
     * const ordens = await prisma.orden.findMany()
     * 
     * // Get first 10 Ordens
     * const ordens = await prisma.orden.findMany({ take: 10 })
     * 
     * // Only select the `id_comprador`
     * const ordenWithId_compradorOnly = await prisma.orden.findMany({ select: { id_comprador: true } })
     * 
     */
    findMany<T extends ordenFindManyArgs>(args?: SelectSubset<T, ordenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Orden.
     * @param {ordenCreateArgs} args - Arguments to create a Orden.
     * @example
     * // Create one Orden
     * const Orden = await prisma.orden.create({
     *   data: {
     *     // ... data to create a Orden
     *   }
     * })
     * 
     */
    create<T extends ordenCreateArgs>(args: SelectSubset<T, ordenCreateArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ordens.
     * @param {ordenCreateManyArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordenCreateManyArgs>(args?: SelectSubset<T, ordenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ordens and returns the data saved in the database.
     * @param {ordenCreateManyAndReturnArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ordens and only return the `id_comprador`
     * const ordenWithId_compradorOnly = await prisma.orden.createManyAndReturn({ 
     *   select: { id_comprador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordenCreateManyAndReturnArgs>(args?: SelectSubset<T, ordenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Orden.
     * @param {ordenDeleteArgs} args - Arguments to delete one Orden.
     * @example
     * // Delete one Orden
     * const Orden = await prisma.orden.delete({
     *   where: {
     *     // ... filter to delete one Orden
     *   }
     * })
     * 
     */
    delete<T extends ordenDeleteArgs>(args: SelectSubset<T, ordenDeleteArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Orden.
     * @param {ordenUpdateArgs} args - Arguments to update one Orden.
     * @example
     * // Update one Orden
     * const orden = await prisma.orden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordenUpdateArgs>(args: SelectSubset<T, ordenUpdateArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ordens.
     * @param {ordenDeleteManyArgs} args - Arguments to filter Ordens to delete.
     * @example
     * // Delete a few Ordens
     * const { count } = await prisma.orden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordenDeleteManyArgs>(args?: SelectSubset<T, ordenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ordens
     * const orden = await prisma.orden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordenUpdateManyArgs>(args: SelectSubset<T, ordenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orden.
     * @param {ordenUpsertArgs} args - Arguments to update or create a Orden.
     * @example
     * // Update or create a Orden
     * const orden = await prisma.orden.upsert({
     *   create: {
     *     // ... data to create a Orden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orden we want to update
     *   }
     * })
     */
    upsert<T extends ordenUpsertArgs>(args: SelectSubset<T, ordenUpsertArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordenCountArgs} args - Arguments to filter Ordens to count.
     * @example
     * // Count the number of Ordens
     * const count = await prisma.orden.count({
     *   where: {
     *     // ... the filter for the Ordens we want to count
     *   }
     * })
    **/
    count<T extends ordenCountArgs>(
      args?: Subset<T, ordenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdenAggregateArgs>(args: Subset<T, OrdenAggregateArgs>): Prisma.PrismaPromise<GetOrdenAggregateType<T>>

    /**
     * Group by Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordenGroupByArgs['orderBy'] }
        : { orderBy?: ordenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orden model
   */
  readonly fields: ordenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends orden$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, orden$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "findMany"> | Null>
    FK_comprador<T extends compradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, compradorDefaultArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orden model
   */ 
  interface ordenFieldRefs {
    readonly id_comprador: FieldRef<"orden", 'Int'>
    readonly cod: FieldRef<"orden", 'Int'>
    readonly fecha_hora: FieldRef<"orden", 'DateTime'>
    readonly precio_unitario: FieldRef<"orden", 'Decimal'>
    readonly cantidad: FieldRef<"orden", 'Int'>
    readonly precio_total: FieldRef<"orden", 'Decimal'>
    readonly createdAt: FieldRef<"orden", 'DateTime'>
    readonly updatedAt: FieldRef<"orden", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orden findUnique
   */
  export type ordenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * Filter, which orden to fetch.
     */
    where: ordenWhereUniqueInput
  }

  /**
   * orden findUniqueOrThrow
   */
  export type ordenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * Filter, which orden to fetch.
     */
    where: ordenWhereUniqueInput
  }

  /**
   * orden findFirst
   */
  export type ordenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * Filter, which orden to fetch.
     */
    where?: ordenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ordens to fetch.
     */
    orderBy?: ordenOrderByWithRelationInput | ordenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ordens.
     */
    cursor?: ordenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * orden findFirstOrThrow
   */
  export type ordenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * Filter, which orden to fetch.
     */
    where?: ordenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ordens to fetch.
     */
    orderBy?: ordenOrderByWithRelationInput | ordenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ordens.
     */
    cursor?: ordenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * orden findMany
   */
  export type ordenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * Filter, which ordens to fetch.
     */
    where?: ordenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ordens to fetch.
     */
    orderBy?: ordenOrderByWithRelationInput | ordenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ordens.
     */
    cursor?: ordenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ordens.
     */
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * orden create
   */
  export type ordenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * The data needed to create a orden.
     */
    data: XOR<ordenCreateInput, ordenUncheckedCreateInput>
  }

  /**
   * orden createMany
   */
  export type ordenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ordens.
     */
    data: ordenCreateManyInput | ordenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orden createManyAndReturn
   */
  export type ordenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ordens.
     */
    data: ordenCreateManyInput | ordenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orden update
   */
  export type ordenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * The data needed to update a orden.
     */
    data: XOR<ordenUpdateInput, ordenUncheckedUpdateInput>
    /**
     * Choose, which orden to update.
     */
    where: ordenWhereUniqueInput
  }

  /**
   * orden updateMany
   */
  export type ordenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ordens.
     */
    data: XOR<ordenUpdateManyMutationInput, ordenUncheckedUpdateManyInput>
    /**
     * Filter which ordens to update
     */
    where?: ordenWhereInput
  }

  /**
   * orden upsert
   */
  export type ordenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * The filter to search for the orden to update in case it exists.
     */
    where: ordenWhereUniqueInput
    /**
     * In case the orden found by the `where` argument doesn't exist, create a new orden with this data.
     */
    create: XOR<ordenCreateInput, ordenUncheckedCreateInput>
    /**
     * In case the orden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordenUpdateInput, ordenUncheckedUpdateInput>
  }

  /**
   * orden delete
   */
  export type ordenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    /**
     * Filter which orden to delete.
     */
    where: ordenWhereUniqueInput
  }

  /**
   * orden deleteMany
   */
  export type ordenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ordens to delete
     */
    where?: ordenWhereInput
  }

  /**
   * orden.tickets
   */
  export type orden$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    where?: ticket_digitalWhereInput
    orderBy?: ticket_digitalOrderByWithRelationInput | ticket_digitalOrderByWithRelationInput[]
    cursor?: ticket_digitalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_digitalScalarFieldEnum | Ticket_digitalScalarFieldEnum[]
  }

  /**
   * orden without action
   */
  export type ordenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
  }


  /**
   * Model ticket_digital
   */

  export type AggregateTicket_digital = {
    _count: Ticket_digitalCountAggregateOutputType | null
    _avg: Ticket_digitalAvgAggregateOutputType | null
    _sum: Ticket_digitalSumAggregateOutputType | null
    _min: Ticket_digitalMinAggregateOutputType | null
    _max: Ticket_digitalMaxAggregateOutputType | null
  }

  export type Ticket_digitalAvgAggregateOutputType = {
    id_comprador: number | null
    cod_orden: number | null
    cod: number | null
  }

  export type Ticket_digitalSumAggregateOutputType = {
    id_comprador: number | null
    cod_orden: number | null
    cod: number | null
  }

  export type Ticket_digitalMinAggregateOutputType = {
    id_comprador: number | null
    cod_orden: number | null
    cod: number | null
    qr: string | null
    estado: $Enums.estado_ticket_digital | null
    fecha_hora_uso: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Ticket_digitalMaxAggregateOutputType = {
    id_comprador: number | null
    cod_orden: number | null
    cod: number | null
    qr: string | null
    estado: $Enums.estado_ticket_digital | null
    fecha_hora_uso: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Ticket_digitalCountAggregateOutputType = {
    id_comprador: number
    cod_orden: number
    cod: number
    qr: number
    estado: number
    fecha_hora_uso: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Ticket_digitalAvgAggregateInputType = {
    id_comprador?: true
    cod_orden?: true
    cod?: true
  }

  export type Ticket_digitalSumAggregateInputType = {
    id_comprador?: true
    cod_orden?: true
    cod?: true
  }

  export type Ticket_digitalMinAggregateInputType = {
    id_comprador?: true
    cod_orden?: true
    cod?: true
    qr?: true
    estado?: true
    fecha_hora_uso?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Ticket_digitalMaxAggregateInputType = {
    id_comprador?: true
    cod_orden?: true
    cod?: true
    qr?: true
    estado?: true
    fecha_hora_uso?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Ticket_digitalCountAggregateInputType = {
    id_comprador?: true
    cod_orden?: true
    cod?: true
    qr?: true
    estado?: true
    fecha_hora_uso?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Ticket_digitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_digital to aggregate.
     */
    where?: ticket_digitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_digitals to fetch.
     */
    orderBy?: ticket_digitalOrderByWithRelationInput | ticket_digitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_digitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_digitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_digitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_digitals
    **/
    _count?: true | Ticket_digitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_digitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_digitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_digitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_digitalMaxAggregateInputType
  }

  export type GetTicket_digitalAggregateType<T extends Ticket_digitalAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_digital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_digital[P]>
      : GetScalarType<T[P], AggregateTicket_digital[P]>
  }




  export type ticket_digitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_digitalWhereInput
    orderBy?: ticket_digitalOrderByWithAggregationInput | ticket_digitalOrderByWithAggregationInput[]
    by: Ticket_digitalScalarFieldEnum[] | Ticket_digitalScalarFieldEnum
    having?: ticket_digitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_digitalCountAggregateInputType | true
    _avg?: Ticket_digitalAvgAggregateInputType
    _sum?: Ticket_digitalSumAggregateInputType
    _min?: Ticket_digitalMinAggregateInputType
    _max?: Ticket_digitalMaxAggregateInputType
  }

  export type Ticket_digitalGroupByOutputType = {
    id_comprador: number
    cod_orden: number
    cod: number
    qr: string
    estado: $Enums.estado_ticket_digital
    fecha_hora_uso: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Ticket_digitalCountAggregateOutputType | null
    _avg: Ticket_digitalAvgAggregateOutputType | null
    _sum: Ticket_digitalSumAggregateOutputType | null
    _min: Ticket_digitalMinAggregateOutputType | null
    _max: Ticket_digitalMaxAggregateOutputType | null
  }

  type GetTicket_digitalGroupByPayload<T extends ticket_digitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_digitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_digitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_digitalGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_digitalGroupByOutputType[P]>
        }
      >
    >


  export type ticket_digitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comprador?: boolean
    cod_orden?: boolean
    cod?: boolean
    qr?: boolean
    estado?: boolean
    fecha_hora_uso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FK_orden?: boolean | ordenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_digital"]>

  export type ticket_digitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comprador?: boolean
    cod_orden?: boolean
    cod?: boolean
    qr?: boolean
    estado?: boolean
    fecha_hora_uso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FK_orden?: boolean | ordenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_digital"]>

  export type ticket_digitalSelectScalar = {
    id_comprador?: boolean
    cod_orden?: boolean
    cod?: boolean
    qr?: boolean
    estado?: boolean
    fecha_hora_uso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ticket_digitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FK_orden?: boolean | ordenDefaultArgs<ExtArgs>
  }
  export type ticket_digitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FK_orden?: boolean | ordenDefaultArgs<ExtArgs>
  }

  export type $ticket_digitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_digital"
    objects: {
      FK_orden: Prisma.$ordenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_comprador: number
      cod_orden: number
      cod: number
      qr: string
      estado: $Enums.estado_ticket_digital
      fecha_hora_uso: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket_digital"]>
    composites: {}
  }

  type ticket_digitalGetPayload<S extends boolean | null | undefined | ticket_digitalDefaultArgs> = $Result.GetResult<Prisma.$ticket_digitalPayload, S>

  type ticket_digitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticket_digitalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ticket_digitalCountAggregateInputType | true
    }

  export interface ticket_digitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_digital'], meta: { name: 'ticket_digital' } }
    /**
     * Find zero or one Ticket_digital that matches the filter.
     * @param {ticket_digitalFindUniqueArgs} args - Arguments to find a Ticket_digital
     * @example
     * // Get one Ticket_digital
     * const ticket_digital = await prisma.ticket_digital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_digitalFindUniqueArgs>(args: SelectSubset<T, ticket_digitalFindUniqueArgs<ExtArgs>>): Prisma__ticket_digitalClient<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket_digital that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticket_digitalFindUniqueOrThrowArgs} args - Arguments to find a Ticket_digital
     * @example
     * // Get one Ticket_digital
     * const ticket_digital = await prisma.ticket_digital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_digitalFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_digitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_digitalClient<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket_digital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_digitalFindFirstArgs} args - Arguments to find a Ticket_digital
     * @example
     * // Get one Ticket_digital
     * const ticket_digital = await prisma.ticket_digital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_digitalFindFirstArgs>(args?: SelectSubset<T, ticket_digitalFindFirstArgs<ExtArgs>>): Prisma__ticket_digitalClient<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket_digital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_digitalFindFirstOrThrowArgs} args - Arguments to find a Ticket_digital
     * @example
     * // Get one Ticket_digital
     * const ticket_digital = await prisma.ticket_digital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_digitalFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_digitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_digitalClient<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ticket_digitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_digitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_digitals
     * const ticket_digitals = await prisma.ticket_digital.findMany()
     * 
     * // Get first 10 Ticket_digitals
     * const ticket_digitals = await prisma.ticket_digital.findMany({ take: 10 })
     * 
     * // Only select the `id_comprador`
     * const ticket_digitalWithId_compradorOnly = await prisma.ticket_digital.findMany({ select: { id_comprador: true } })
     * 
     */
    findMany<T extends ticket_digitalFindManyArgs>(args?: SelectSubset<T, ticket_digitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket_digital.
     * @param {ticket_digitalCreateArgs} args - Arguments to create a Ticket_digital.
     * @example
     * // Create one Ticket_digital
     * const Ticket_digital = await prisma.ticket_digital.create({
     *   data: {
     *     // ... data to create a Ticket_digital
     *   }
     * })
     * 
     */
    create<T extends ticket_digitalCreateArgs>(args: SelectSubset<T, ticket_digitalCreateArgs<ExtArgs>>): Prisma__ticket_digitalClient<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ticket_digitals.
     * @param {ticket_digitalCreateManyArgs} args - Arguments to create many Ticket_digitals.
     * @example
     * // Create many Ticket_digitals
     * const ticket_digital = await prisma.ticket_digital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_digitalCreateManyArgs>(args?: SelectSubset<T, ticket_digitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ticket_digitals and returns the data saved in the database.
     * @param {ticket_digitalCreateManyAndReturnArgs} args - Arguments to create many Ticket_digitals.
     * @example
     * // Create many Ticket_digitals
     * const ticket_digital = await prisma.ticket_digital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ticket_digitals and only return the `id_comprador`
     * const ticket_digitalWithId_compradorOnly = await prisma.ticket_digital.createManyAndReturn({ 
     *   select: { id_comprador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticket_digitalCreateManyAndReturnArgs>(args?: SelectSubset<T, ticket_digitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket_digital.
     * @param {ticket_digitalDeleteArgs} args - Arguments to delete one Ticket_digital.
     * @example
     * // Delete one Ticket_digital
     * const Ticket_digital = await prisma.ticket_digital.delete({
     *   where: {
     *     // ... filter to delete one Ticket_digital
     *   }
     * })
     * 
     */
    delete<T extends ticket_digitalDeleteArgs>(args: SelectSubset<T, ticket_digitalDeleteArgs<ExtArgs>>): Prisma__ticket_digitalClient<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket_digital.
     * @param {ticket_digitalUpdateArgs} args - Arguments to update one Ticket_digital.
     * @example
     * // Update one Ticket_digital
     * const ticket_digital = await prisma.ticket_digital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_digitalUpdateArgs>(args: SelectSubset<T, ticket_digitalUpdateArgs<ExtArgs>>): Prisma__ticket_digitalClient<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ticket_digitals.
     * @param {ticket_digitalDeleteManyArgs} args - Arguments to filter Ticket_digitals to delete.
     * @example
     * // Delete a few Ticket_digitals
     * const { count } = await prisma.ticket_digital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_digitalDeleteManyArgs>(args?: SelectSubset<T, ticket_digitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_digitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_digitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_digitals
     * const ticket_digital = await prisma.ticket_digital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_digitalUpdateManyArgs>(args: SelectSubset<T, ticket_digitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_digital.
     * @param {ticket_digitalUpsertArgs} args - Arguments to update or create a Ticket_digital.
     * @example
     * // Update or create a Ticket_digital
     * const ticket_digital = await prisma.ticket_digital.upsert({
     *   create: {
     *     // ... data to create a Ticket_digital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_digital we want to update
     *   }
     * })
     */
    upsert<T extends ticket_digitalUpsertArgs>(args: SelectSubset<T, ticket_digitalUpsertArgs<ExtArgs>>): Prisma__ticket_digitalClient<$Result.GetResult<Prisma.$ticket_digitalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ticket_digitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_digitalCountArgs} args - Arguments to filter Ticket_digitals to count.
     * @example
     * // Count the number of Ticket_digitals
     * const count = await prisma.ticket_digital.count({
     *   where: {
     *     // ... the filter for the Ticket_digitals we want to count
     *   }
     * })
    **/
    count<T extends ticket_digitalCountArgs>(
      args?: Subset<T, ticket_digitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_digitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_digital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_digitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_digitalAggregateArgs>(args: Subset<T, Ticket_digitalAggregateArgs>): Prisma.PrismaPromise<GetTicket_digitalAggregateType<T>>

    /**
     * Group by Ticket_digital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_digitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticket_digitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_digitalGroupByArgs['orderBy'] }
        : { orderBy?: ticket_digitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticket_digitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_digitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_digital model
   */
  readonly fields: ticket_digitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_digital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_digitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FK_orden<T extends ordenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordenDefaultArgs<ExtArgs>>): Prisma__ordenClient<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket_digital model
   */ 
  interface ticket_digitalFieldRefs {
    readonly id_comprador: FieldRef<"ticket_digital", 'Int'>
    readonly cod_orden: FieldRef<"ticket_digital", 'Int'>
    readonly cod: FieldRef<"ticket_digital", 'Int'>
    readonly qr: FieldRef<"ticket_digital", 'String'>
    readonly estado: FieldRef<"ticket_digital", 'estado_ticket_digital'>
    readonly fecha_hora_uso: FieldRef<"ticket_digital", 'DateTime'>
    readonly createdAt: FieldRef<"ticket_digital", 'DateTime'>
    readonly updatedAt: FieldRef<"ticket_digital", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticket_digital findUnique
   */
  export type ticket_digitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * Filter, which ticket_digital to fetch.
     */
    where: ticket_digitalWhereUniqueInput
  }

  /**
   * ticket_digital findUniqueOrThrow
   */
  export type ticket_digitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * Filter, which ticket_digital to fetch.
     */
    where: ticket_digitalWhereUniqueInput
  }

  /**
   * ticket_digital findFirst
   */
  export type ticket_digitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * Filter, which ticket_digital to fetch.
     */
    where?: ticket_digitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_digitals to fetch.
     */
    orderBy?: ticket_digitalOrderByWithRelationInput | ticket_digitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_digitals.
     */
    cursor?: ticket_digitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_digitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_digitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_digitals.
     */
    distinct?: Ticket_digitalScalarFieldEnum | Ticket_digitalScalarFieldEnum[]
  }

  /**
   * ticket_digital findFirstOrThrow
   */
  export type ticket_digitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * Filter, which ticket_digital to fetch.
     */
    where?: ticket_digitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_digitals to fetch.
     */
    orderBy?: ticket_digitalOrderByWithRelationInput | ticket_digitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_digitals.
     */
    cursor?: ticket_digitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_digitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_digitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_digitals.
     */
    distinct?: Ticket_digitalScalarFieldEnum | Ticket_digitalScalarFieldEnum[]
  }

  /**
   * ticket_digital findMany
   */
  export type ticket_digitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * Filter, which ticket_digitals to fetch.
     */
    where?: ticket_digitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_digitals to fetch.
     */
    orderBy?: ticket_digitalOrderByWithRelationInput | ticket_digitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_digitals.
     */
    cursor?: ticket_digitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_digitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_digitals.
     */
    skip?: number
    distinct?: Ticket_digitalScalarFieldEnum | Ticket_digitalScalarFieldEnum[]
  }

  /**
   * ticket_digital create
   */
  export type ticket_digitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_digital.
     */
    data: XOR<ticket_digitalCreateInput, ticket_digitalUncheckedCreateInput>
  }

  /**
   * ticket_digital createMany
   */
  export type ticket_digitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_digitals.
     */
    data: ticket_digitalCreateManyInput | ticket_digitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_digital createManyAndReturn
   */
  export type ticket_digitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ticket_digitals.
     */
    data: ticket_digitalCreateManyInput | ticket_digitalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ticket_digital update
   */
  export type ticket_digitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_digital.
     */
    data: XOR<ticket_digitalUpdateInput, ticket_digitalUncheckedUpdateInput>
    /**
     * Choose, which ticket_digital to update.
     */
    where: ticket_digitalWhereUniqueInput
  }

  /**
   * ticket_digital updateMany
   */
  export type ticket_digitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_digitals.
     */
    data: XOR<ticket_digitalUpdateManyMutationInput, ticket_digitalUncheckedUpdateManyInput>
    /**
     * Filter which ticket_digitals to update
     */
    where?: ticket_digitalWhereInput
  }

  /**
   * ticket_digital upsert
   */
  export type ticket_digitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_digital to update in case it exists.
     */
    where: ticket_digitalWhereUniqueInput
    /**
     * In case the ticket_digital found by the `where` argument doesn't exist, create a new ticket_digital with this data.
     */
    create: XOR<ticket_digitalCreateInput, ticket_digitalUncheckedCreateInput>
    /**
     * In case the ticket_digital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_digitalUpdateInput, ticket_digitalUncheckedUpdateInput>
  }

  /**
   * ticket_digital delete
   */
  export type ticket_digitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
    /**
     * Filter which ticket_digital to delete.
     */
    where: ticket_digitalWhereUniqueInput
  }

  /**
   * ticket_digital deleteMany
   */
  export type ticket_digitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_digitals to delete
     */
    where?: ticket_digitalWhereInput
  }

  /**
   * ticket_digital without action
   */
  export type ticket_digitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_digital
     */
    select?: ticket_digitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_digitalInclude<ExtArgs> | null
  }


  /**
   * Model asistente
   */

  export type AggregateAsistente = {
    _count: AsistenteCountAggregateOutputType | null
    _avg: AsistenteAvgAggregateOutputType | null
    _sum: AsistenteSumAggregateOutputType | null
    _min: AsistenteMinAggregateOutputType | null
    _max: AsistenteMaxAggregateOutputType | null
  }

  export type AsistenteAvgAggregateOutputType = {
    id: number | null
  }

  export type AsistenteSumAggregateOutputType = {
    id: number | null
  }

  export type AsistenteMinAggregateOutputType = {
    id: number | null
    t_doc: string | null
    n_doc: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsistenteMaxAggregateOutputType = {
    id: number | null
    t_doc: string | null
    n_doc: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsistenteCountAggregateOutputType = {
    id: number
    t_doc: number
    n_doc: number
    nombre: number
    apellido: number
    email: number
    telefono: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsistenteAvgAggregateInputType = {
    id?: true
  }

  export type AsistenteSumAggregateInputType = {
    id?: true
  }

  export type AsistenteMinAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsistenteMaxAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsistenteCountAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsistenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistente to aggregate.
     */
    where?: asistenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistentes to fetch.
     */
    orderBy?: asistenteOrderByWithRelationInput | asistenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asistenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asistentes
    **/
    _count?: true | AsistenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenteMaxAggregateInputType
  }

  export type GetAsistenteAggregateType<T extends AsistenteAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistente[P]>
      : GetScalarType<T[P], AggregateAsistente[P]>
  }




  export type asistenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenteWhereInput
    orderBy?: asistenteOrderByWithAggregationInput | asistenteOrderByWithAggregationInput[]
    by: AsistenteScalarFieldEnum[] | AsistenteScalarFieldEnum
    having?: asistenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenteCountAggregateInputType | true
    _avg?: AsistenteAvgAggregateInputType
    _sum?: AsistenteSumAggregateInputType
    _min?: AsistenteMinAggregateInputType
    _max?: AsistenteMaxAggregateInputType
  }

  export type AsistenteGroupByOutputType = {
    id: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt: Date
    updatedAt: Date
    _count: AsistenteCountAggregateOutputType | null
    _avg: AsistenteAvgAggregateOutputType | null
    _sum: AsistenteSumAggregateOutputType | null
    _min: AsistenteMinAggregateOutputType | null
    _max: AsistenteMaxAggregateOutputType | null
  }

  type GetAsistenteGroupByPayload<T extends asistenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenteGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenteGroupByOutputType[P]>
        }
      >
    >


  export type asistenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asistencias?: boolean | asistente$asistenciasArgs<ExtArgs>
    _count?: boolean | AsistenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistente"]>

  export type asistenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["asistente"]>

  export type asistenteSelectScalar = {
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type asistenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | asistente$asistenciasArgs<ExtArgs>
    _count?: boolean | AsistenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type asistenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $asistentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asistente"
    objects: {
      asistencias: Prisma.$asistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      t_doc: string
      n_doc: string
      nombre: string
      apellido: string
      email: string
      telefono: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asistente"]>
    composites: {}
  }

  type asistenteGetPayload<S extends boolean | null | undefined | asistenteDefaultArgs> = $Result.GetResult<Prisma.$asistentePayload, S>

  type asistenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<asistenteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsistenteCountAggregateInputType | true
    }

  export interface asistenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asistente'], meta: { name: 'asistente' } }
    /**
     * Find zero or one Asistente that matches the filter.
     * @param {asistenteFindUniqueArgs} args - Arguments to find a Asistente
     * @example
     * // Get one Asistente
     * const asistente = await prisma.asistente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asistenteFindUniqueArgs>(args: SelectSubset<T, asistenteFindUniqueArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Asistente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {asistenteFindUniqueOrThrowArgs} args - Arguments to find a Asistente
     * @example
     * // Get one Asistente
     * const asistente = await prisma.asistente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asistenteFindUniqueOrThrowArgs>(args: SelectSubset<T, asistenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Asistente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenteFindFirstArgs} args - Arguments to find a Asistente
     * @example
     * // Get one Asistente
     * const asistente = await prisma.asistente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asistenteFindFirstArgs>(args?: SelectSubset<T, asistenteFindFirstArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Asistente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenteFindFirstOrThrowArgs} args - Arguments to find a Asistente
     * @example
     * // Get one Asistente
     * const asistente = await prisma.asistente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asistenteFindFirstOrThrowArgs>(args?: SelectSubset<T, asistenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Asistentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistentes
     * const asistentes = await prisma.asistente.findMany()
     * 
     * // Get first 10 Asistentes
     * const asistentes = await prisma.asistente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistenteWithIdOnly = await prisma.asistente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends asistenteFindManyArgs>(args?: SelectSubset<T, asistenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Asistente.
     * @param {asistenteCreateArgs} args - Arguments to create a Asistente.
     * @example
     * // Create one Asistente
     * const Asistente = await prisma.asistente.create({
     *   data: {
     *     // ... data to create a Asistente
     *   }
     * })
     * 
     */
    create<T extends asistenteCreateArgs>(args: SelectSubset<T, asistenteCreateArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Asistentes.
     * @param {asistenteCreateManyArgs} args - Arguments to create many Asistentes.
     * @example
     * // Create many Asistentes
     * const asistente = await prisma.asistente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends asistenteCreateManyArgs>(args?: SelectSubset<T, asistenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asistentes and returns the data saved in the database.
     * @param {asistenteCreateManyAndReturnArgs} args - Arguments to create many Asistentes.
     * @example
     * // Create many Asistentes
     * const asistente = await prisma.asistente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asistentes and only return the `id`
     * const asistenteWithIdOnly = await prisma.asistente.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends asistenteCreateManyAndReturnArgs>(args?: SelectSubset<T, asistenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Asistente.
     * @param {asistenteDeleteArgs} args - Arguments to delete one Asistente.
     * @example
     * // Delete one Asistente
     * const Asistente = await prisma.asistente.delete({
     *   where: {
     *     // ... filter to delete one Asistente
     *   }
     * })
     * 
     */
    delete<T extends asistenteDeleteArgs>(args: SelectSubset<T, asistenteDeleteArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Asistente.
     * @param {asistenteUpdateArgs} args - Arguments to update one Asistente.
     * @example
     * // Update one Asistente
     * const asistente = await prisma.asistente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends asistenteUpdateArgs>(args: SelectSubset<T, asistenteUpdateArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Asistentes.
     * @param {asistenteDeleteManyArgs} args - Arguments to filter Asistentes to delete.
     * @example
     * // Delete a few Asistentes
     * const { count } = await prisma.asistente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends asistenteDeleteManyArgs>(args?: SelectSubset<T, asistenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistentes
     * const asistente = await prisma.asistente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends asistenteUpdateManyArgs>(args: SelectSubset<T, asistenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asistente.
     * @param {asistenteUpsertArgs} args - Arguments to update or create a Asistente.
     * @example
     * // Update or create a Asistente
     * const asistente = await prisma.asistente.upsert({
     *   create: {
     *     // ... data to create a Asistente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistente we want to update
     *   }
     * })
     */
    upsert<T extends asistenteUpsertArgs>(args: SelectSubset<T, asistenteUpsertArgs<ExtArgs>>): Prisma__asistenteClient<$Result.GetResult<Prisma.$asistentePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Asistentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenteCountArgs} args - Arguments to filter Asistentes to count.
     * @example
     * // Count the number of Asistentes
     * const count = await prisma.asistente.count({
     *   where: {
     *     // ... the filter for the Asistentes we want to count
     *   }
     * })
    **/
    count<T extends asistenteCountArgs>(
      args?: Subset<T, asistenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsistenteAggregateArgs>(args: Subset<T, AsistenteAggregateArgs>): Prisma.PrismaPromise<GetAsistenteAggregateType<T>>

    /**
     * Group by Asistente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends asistenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asistenteGroupByArgs['orderBy'] }
        : { orderBy?: asistenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, asistenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asistente model
   */
  readonly fields: asistenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asistente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asistenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends asistente$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, asistente$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the asistente model
   */ 
  interface asistenteFieldRefs {
    readonly id: FieldRef<"asistente", 'Int'>
    readonly t_doc: FieldRef<"asistente", 'String'>
    readonly n_doc: FieldRef<"asistente", 'String'>
    readonly nombre: FieldRef<"asistente", 'String'>
    readonly apellido: FieldRef<"asistente", 'String'>
    readonly email: FieldRef<"asistente", 'String'>
    readonly telefono: FieldRef<"asistente", 'String'>
    readonly createdAt: FieldRef<"asistente", 'DateTime'>
    readonly updatedAt: FieldRef<"asistente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * asistente findUnique
   */
  export type asistenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * Filter, which asistente to fetch.
     */
    where: asistenteWhereUniqueInput
  }

  /**
   * asistente findUniqueOrThrow
   */
  export type asistenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * Filter, which asistente to fetch.
     */
    where: asistenteWhereUniqueInput
  }

  /**
   * asistente findFirst
   */
  export type asistenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * Filter, which asistente to fetch.
     */
    where?: asistenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistentes to fetch.
     */
    orderBy?: asistenteOrderByWithRelationInput | asistenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistentes.
     */
    cursor?: asistenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistentes.
     */
    distinct?: AsistenteScalarFieldEnum | AsistenteScalarFieldEnum[]
  }

  /**
   * asistente findFirstOrThrow
   */
  export type asistenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * Filter, which asistente to fetch.
     */
    where?: asistenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistentes to fetch.
     */
    orderBy?: asistenteOrderByWithRelationInput | asistenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistentes.
     */
    cursor?: asistenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistentes.
     */
    distinct?: AsistenteScalarFieldEnum | AsistenteScalarFieldEnum[]
  }

  /**
   * asistente findMany
   */
  export type asistenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * Filter, which asistentes to fetch.
     */
    where?: asistenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistentes to fetch.
     */
    orderBy?: asistenteOrderByWithRelationInput | asistenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asistentes.
     */
    cursor?: asistenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistentes.
     */
    skip?: number
    distinct?: AsistenteScalarFieldEnum | AsistenteScalarFieldEnum[]
  }

  /**
   * asistente create
   */
  export type asistenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * The data needed to create a asistente.
     */
    data: XOR<asistenteCreateInput, asistenteUncheckedCreateInput>
  }

  /**
   * asistente createMany
   */
  export type asistenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asistentes.
     */
    data: asistenteCreateManyInput | asistenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asistente createManyAndReturn
   */
  export type asistenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many asistentes.
     */
    data: asistenteCreateManyInput | asistenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asistente update
   */
  export type asistenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * The data needed to update a asistente.
     */
    data: XOR<asistenteUpdateInput, asistenteUncheckedUpdateInput>
    /**
     * Choose, which asistente to update.
     */
    where: asistenteWhereUniqueInput
  }

  /**
   * asistente updateMany
   */
  export type asistenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asistentes.
     */
    data: XOR<asistenteUpdateManyMutationInput, asistenteUncheckedUpdateManyInput>
    /**
     * Filter which asistentes to update
     */
    where?: asistenteWhereInput
  }

  /**
   * asistente upsert
   */
  export type asistenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * The filter to search for the asistente to update in case it exists.
     */
    where: asistenteWhereUniqueInput
    /**
     * In case the asistente found by the `where` argument doesn't exist, create a new asistente with this data.
     */
    create: XOR<asistenteCreateInput, asistenteUncheckedCreateInput>
    /**
     * In case the asistente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asistenteUpdateInput, asistenteUncheckedUpdateInput>
  }

  /**
   * asistente delete
   */
  export type asistenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
    /**
     * Filter which asistente to delete.
     */
    where: asistenteWhereUniqueInput
  }

  /**
   * asistente deleteMany
   */
  export type asistenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistentes to delete
     */
    where?: asistenteWhereInput
  }

  /**
   * asistente.asistencias
   */
  export type asistente$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    cursor?: asistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistente without action
   */
  export type asistenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistente
     */
    select?: asistenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenteInclude<ExtArgs> | null
  }


  /**
   * Model organizador
   */

  export type AggregateOrganizador = {
    _count: OrganizadorCountAggregateOutputType | null
    _avg: OrganizadorAvgAggregateOutputType | null
    _sum: OrganizadorSumAggregateOutputType | null
    _min: OrganizadorMinAggregateOutputType | null
    _max: OrganizadorMaxAggregateOutputType | null
  }

  export type OrganizadorAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizadorSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizadorMinAggregateOutputType = {
    id: number | null
    t_doc: string | null
    n_doc: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    cuit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizadorMaxAggregateOutputType = {
    id: number | null
    t_doc: string | null
    n_doc: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    cuit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizadorCountAggregateOutputType = {
    id: number
    t_doc: number
    n_doc: number
    nombre: number
    apellido: number
    email: number
    telefono: number
    cuit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizadorAvgAggregateInputType = {
    id?: true
  }

  export type OrganizadorSumAggregateInputType = {
    id?: true
  }

  export type OrganizadorMinAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    cuit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizadorMaxAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    cuit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizadorCountAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    cuit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizador to aggregate.
     */
    where?: organizadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizadors to fetch.
     */
    orderBy?: organizadorOrderByWithRelationInput | organizadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizadors
    **/
    _count?: true | OrganizadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizadorMaxAggregateInputType
  }

  export type GetOrganizadorAggregateType<T extends OrganizadorAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizador[P]>
      : GetScalarType<T[P], AggregateOrganizador[P]>
  }




  export type organizadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizadorWhereInput
    orderBy?: organizadorOrderByWithAggregationInput | organizadorOrderByWithAggregationInput[]
    by: OrganizadorScalarFieldEnum[] | OrganizadorScalarFieldEnum
    having?: organizadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizadorCountAggregateInputType | true
    _avg?: OrganizadorAvgAggregateInputType
    _sum?: OrganizadorSumAggregateInputType
    _min?: OrganizadorMinAggregateInputType
    _max?: OrganizadorMaxAggregateInputType
  }

  export type OrganizadorGroupByOutputType = {
    id: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    cuit: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizadorCountAggregateOutputType | null
    _avg: OrganizadorAvgAggregateOutputType | null
    _sum: OrganizadorSumAggregateOutputType | null
    _min: OrganizadorMinAggregateOutputType | null
    _max: OrganizadorMaxAggregateOutputType | null
  }

  type GetOrganizadorGroupByPayload<T extends organizadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizadorGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizadorGroupByOutputType[P]>
        }
      >
    >


  export type organizadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    cuit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventos?: boolean | organizador$eventosArgs<ExtArgs>
    _count?: boolean | OrganizadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizador"]>

  export type organizadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    cuit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organizador"]>

  export type organizadorSelectScalar = {
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    cuit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type organizadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | organizador$eventosArgs<ExtArgs>
    _count?: boolean | OrganizadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organizadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $organizadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizador"
    objects: {
      eventos: Prisma.$eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      t_doc: string
      n_doc: string
      nombre: string
      apellido: string
      email: string
      telefono: string
      cuit: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizador"]>
    composites: {}
  }

  type organizadorGetPayload<S extends boolean | null | undefined | organizadorDefaultArgs> = $Result.GetResult<Prisma.$organizadorPayload, S>

  type organizadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<organizadorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizadorCountAggregateInputType | true
    }

  export interface organizadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizador'], meta: { name: 'organizador' } }
    /**
     * Find zero or one Organizador that matches the filter.
     * @param {organizadorFindUniqueArgs} args - Arguments to find a Organizador
     * @example
     * // Get one Organizador
     * const organizador = await prisma.organizador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizadorFindUniqueArgs>(args: SelectSubset<T, organizadorFindUniqueArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organizador that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {organizadorFindUniqueOrThrowArgs} args - Arguments to find a Organizador
     * @example
     * // Get one Organizador
     * const organizador = await prisma.organizador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizadorFindUniqueOrThrowArgs>(args: SelectSubset<T, organizadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organizador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizadorFindFirstArgs} args - Arguments to find a Organizador
     * @example
     * // Get one Organizador
     * const organizador = await prisma.organizador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizadorFindFirstArgs>(args?: SelectSubset<T, organizadorFindFirstArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organizador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizadorFindFirstOrThrowArgs} args - Arguments to find a Organizador
     * @example
     * // Get one Organizador
     * const organizador = await prisma.organizador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizadorFindFirstOrThrowArgs>(args?: SelectSubset<T, organizadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizadors
     * const organizadors = await prisma.organizador.findMany()
     * 
     * // Get first 10 Organizadors
     * const organizadors = await prisma.organizador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizadorWithIdOnly = await prisma.organizador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizadorFindManyArgs>(args?: SelectSubset<T, organizadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organizador.
     * @param {organizadorCreateArgs} args - Arguments to create a Organizador.
     * @example
     * // Create one Organizador
     * const Organizador = await prisma.organizador.create({
     *   data: {
     *     // ... data to create a Organizador
     *   }
     * })
     * 
     */
    create<T extends organizadorCreateArgs>(args: SelectSubset<T, organizadorCreateArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizadors.
     * @param {organizadorCreateManyArgs} args - Arguments to create many Organizadors.
     * @example
     * // Create many Organizadors
     * const organizador = await prisma.organizador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizadorCreateManyArgs>(args?: SelectSubset<T, organizadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizadors and returns the data saved in the database.
     * @param {organizadorCreateManyAndReturnArgs} args - Arguments to create many Organizadors.
     * @example
     * // Create many Organizadors
     * const organizador = await prisma.organizador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizadors and only return the `id`
     * const organizadorWithIdOnly = await prisma.organizador.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizadorCreateManyAndReturnArgs>(args?: SelectSubset<T, organizadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organizador.
     * @param {organizadorDeleteArgs} args - Arguments to delete one Organizador.
     * @example
     * // Delete one Organizador
     * const Organizador = await prisma.organizador.delete({
     *   where: {
     *     // ... filter to delete one Organizador
     *   }
     * })
     * 
     */
    delete<T extends organizadorDeleteArgs>(args: SelectSubset<T, organizadorDeleteArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organizador.
     * @param {organizadorUpdateArgs} args - Arguments to update one Organizador.
     * @example
     * // Update one Organizador
     * const organizador = await prisma.organizador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizadorUpdateArgs>(args: SelectSubset<T, organizadorUpdateArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizadors.
     * @param {organizadorDeleteManyArgs} args - Arguments to filter Organizadors to delete.
     * @example
     * // Delete a few Organizadors
     * const { count } = await prisma.organizador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizadorDeleteManyArgs>(args?: SelectSubset<T, organizadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizadors
     * const organizador = await prisma.organizador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizadorUpdateManyArgs>(args: SelectSubset<T, organizadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organizador.
     * @param {organizadorUpsertArgs} args - Arguments to update or create a Organizador.
     * @example
     * // Update or create a Organizador
     * const organizador = await prisma.organizador.upsert({
     *   create: {
     *     // ... data to create a Organizador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizador we want to update
     *   }
     * })
     */
    upsert<T extends organizadorUpsertArgs>(args: SelectSubset<T, organizadorUpsertArgs<ExtArgs>>): Prisma__organizadorClient<$Result.GetResult<Prisma.$organizadorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizadorCountArgs} args - Arguments to filter Organizadors to count.
     * @example
     * // Count the number of Organizadors
     * const count = await prisma.organizador.count({
     *   where: {
     *     // ... the filter for the Organizadors we want to count
     *   }
     * })
    **/
    count<T extends organizadorCountArgs>(
      args?: Subset<T, organizadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizadorAggregateArgs>(args: Subset<T, OrganizadorAggregateArgs>): Prisma.PrismaPromise<GetOrganizadorAggregateType<T>>

    /**
     * Group by Organizador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizadorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends organizadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizadorGroupByArgs['orderBy'] }
        : { orderBy?: organizadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizador model
   */
  readonly fields: organizadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends organizador$eventosArgs<ExtArgs> = {}>(args?: Subset<T, organizador$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organizador model
   */ 
  interface organizadorFieldRefs {
    readonly id: FieldRef<"organizador", 'Int'>
    readonly t_doc: FieldRef<"organizador", 'String'>
    readonly n_doc: FieldRef<"organizador", 'String'>
    readonly nombre: FieldRef<"organizador", 'String'>
    readonly apellido: FieldRef<"organizador", 'String'>
    readonly email: FieldRef<"organizador", 'String'>
    readonly telefono: FieldRef<"organizador", 'String'>
    readonly cuit: FieldRef<"organizador", 'String'>
    readonly createdAt: FieldRef<"organizador", 'DateTime'>
    readonly updatedAt: FieldRef<"organizador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * organizador findUnique
   */
  export type organizadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * Filter, which organizador to fetch.
     */
    where: organizadorWhereUniqueInput
  }

  /**
   * organizador findUniqueOrThrow
   */
  export type organizadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * Filter, which organizador to fetch.
     */
    where: organizadorWhereUniqueInput
  }

  /**
   * organizador findFirst
   */
  export type organizadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * Filter, which organizador to fetch.
     */
    where?: organizadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizadors to fetch.
     */
    orderBy?: organizadorOrderByWithRelationInput | organizadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizadors.
     */
    cursor?: organizadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizadors.
     */
    distinct?: OrganizadorScalarFieldEnum | OrganizadorScalarFieldEnum[]
  }

  /**
   * organizador findFirstOrThrow
   */
  export type organizadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * Filter, which organizador to fetch.
     */
    where?: organizadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizadors to fetch.
     */
    orderBy?: organizadorOrderByWithRelationInput | organizadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizadors.
     */
    cursor?: organizadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizadors.
     */
    distinct?: OrganizadorScalarFieldEnum | OrganizadorScalarFieldEnum[]
  }

  /**
   * organizador findMany
   */
  export type organizadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * Filter, which organizadors to fetch.
     */
    where?: organizadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizadors to fetch.
     */
    orderBy?: organizadorOrderByWithRelationInput | organizadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizadors.
     */
    cursor?: organizadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizadors.
     */
    skip?: number
    distinct?: OrganizadorScalarFieldEnum | OrganizadorScalarFieldEnum[]
  }

  /**
   * organizador create
   */
  export type organizadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * The data needed to create a organizador.
     */
    data: XOR<organizadorCreateInput, organizadorUncheckedCreateInput>
  }

  /**
   * organizador createMany
   */
  export type organizadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizadors.
     */
    data: organizadorCreateManyInput | organizadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizador createManyAndReturn
   */
  export type organizadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many organizadors.
     */
    data: organizadorCreateManyInput | organizadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizador update
   */
  export type organizadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * The data needed to update a organizador.
     */
    data: XOR<organizadorUpdateInput, organizadorUncheckedUpdateInput>
    /**
     * Choose, which organizador to update.
     */
    where: organizadorWhereUniqueInput
  }

  /**
   * organizador updateMany
   */
  export type organizadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizadors.
     */
    data: XOR<organizadorUpdateManyMutationInput, organizadorUncheckedUpdateManyInput>
    /**
     * Filter which organizadors to update
     */
    where?: organizadorWhereInput
  }

  /**
   * organizador upsert
   */
  export type organizadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * The filter to search for the organizador to update in case it exists.
     */
    where: organizadorWhereUniqueInput
    /**
     * In case the organizador found by the `where` argument doesn't exist, create a new organizador with this data.
     */
    create: XOR<organizadorCreateInput, organizadorUncheckedCreateInput>
    /**
     * In case the organizador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizadorUpdateInput, organizadorUncheckedUpdateInput>
  }

  /**
   * organizador delete
   */
  export type organizadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
    /**
     * Filter which organizador to delete.
     */
    where: organizadorWhereUniqueInput
  }

  /**
   * organizador deleteMany
   */
  export type organizadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizadors to delete
     */
    where?: organizadorWhereInput
  }

  /**
   * organizador.eventos
   */
  export type organizador$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    where?: eventoWhereInput
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    cursor?: eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * organizador without action
   */
  export type organizadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizador
     */
    select?: organizadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizadorInclude<ExtArgs> | null
  }


  /**
   * Model comprador
   */

  export type AggregateComprador = {
    _count: CompradorCountAggregateOutputType | null
    _avg: CompradorAvgAggregateOutputType | null
    _sum: CompradorSumAggregateOutputType | null
    _min: CompradorMinAggregateOutputType | null
    _max: CompradorMaxAggregateOutputType | null
  }

  export type CompradorAvgAggregateOutputType = {
    id: number | null
  }

  export type CompradorSumAggregateOutputType = {
    id: number | null
  }

  export type CompradorMinAggregateOutputType = {
    id: number | null
    t_doc: string | null
    n_doc: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompradorMaxAggregateOutputType = {
    id: number | null
    t_doc: string | null
    n_doc: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompradorCountAggregateOutputType = {
    id: number
    t_doc: number
    n_doc: number
    nombre: number
    apellido: number
    email: number
    telefono: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompradorAvgAggregateInputType = {
    id?: true
  }

  export type CompradorSumAggregateInputType = {
    id?: true
  }

  export type CompradorMinAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompradorMaxAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompradorCountAggregateInputType = {
    id?: true
    t_doc?: true
    n_doc?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comprador to aggregate.
     */
    where?: compradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compradors to fetch.
     */
    orderBy?: compradorOrderByWithRelationInput | compradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: compradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned compradors
    **/
    _count?: true | CompradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompradorMaxAggregateInputType
  }

  export type GetCompradorAggregateType<T extends CompradorAggregateArgs> = {
        [P in keyof T & keyof AggregateComprador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprador[P]>
      : GetScalarType<T[P], AggregateComprador[P]>
  }




  export type compradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: compradorWhereInput
    orderBy?: compradorOrderByWithAggregationInput | compradorOrderByWithAggregationInput[]
    by: CompradorScalarFieldEnum[] | CompradorScalarFieldEnum
    having?: compradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompradorCountAggregateInputType | true
    _avg?: CompradorAvgAggregateInputType
    _sum?: CompradorSumAggregateInputType
    _min?: CompradorMinAggregateInputType
    _max?: CompradorMaxAggregateInputType
  }

  export type CompradorGroupByOutputType = {
    id: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt: Date
    updatedAt: Date
    _count: CompradorCountAggregateOutputType | null
    _avg: CompradorAvgAggregateOutputType | null
    _sum: CompradorSumAggregateOutputType | null
    _min: CompradorMinAggregateOutputType | null
    _max: CompradorMaxAggregateOutputType | null
  }

  type GetCompradorGroupByPayload<T extends compradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompradorGroupByOutputType[P]>
            : GetScalarType<T[P], CompradorGroupByOutputType[P]>
        }
      >
    >


  export type compradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ordenes?: boolean | comprador$ordenesArgs<ExtArgs>
    _count?: boolean | CompradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprador"]>

  export type compradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["comprador"]>

  export type compradorSelectScalar = {
    id?: boolean
    t_doc?: boolean
    n_doc?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type compradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | comprador$ordenesArgs<ExtArgs>
    _count?: boolean | CompradorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type compradorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $compradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comprador"
    objects: {
      ordenes: Prisma.$ordenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      t_doc: string
      n_doc: string
      nombre: string
      apellido: string
      email: string
      telefono: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comprador"]>
    composites: {}
  }

  type compradorGetPayload<S extends boolean | null | undefined | compradorDefaultArgs> = $Result.GetResult<Prisma.$compradorPayload, S>

  type compradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<compradorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompradorCountAggregateInputType | true
    }

  export interface compradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comprador'], meta: { name: 'comprador' } }
    /**
     * Find zero or one Comprador that matches the filter.
     * @param {compradorFindUniqueArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends compradorFindUniqueArgs>(args: SelectSubset<T, compradorFindUniqueArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comprador that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {compradorFindUniqueOrThrowArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends compradorFindUniqueOrThrowArgs>(args: SelectSubset<T, compradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comprador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradorFindFirstArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends compradorFindFirstArgs>(args?: SelectSubset<T, compradorFindFirstArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comprador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradorFindFirstOrThrowArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends compradorFindFirstOrThrowArgs>(args?: SelectSubset<T, compradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Compradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compradors
     * const compradors = await prisma.comprador.findMany()
     * 
     * // Get first 10 Compradors
     * const compradors = await prisma.comprador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compradorWithIdOnly = await prisma.comprador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends compradorFindManyArgs>(args?: SelectSubset<T, compradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comprador.
     * @param {compradorCreateArgs} args - Arguments to create a Comprador.
     * @example
     * // Create one Comprador
     * const Comprador = await prisma.comprador.create({
     *   data: {
     *     // ... data to create a Comprador
     *   }
     * })
     * 
     */
    create<T extends compradorCreateArgs>(args: SelectSubset<T, compradorCreateArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Compradors.
     * @param {compradorCreateManyArgs} args - Arguments to create many Compradors.
     * @example
     * // Create many Compradors
     * const comprador = await prisma.comprador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends compradorCreateManyArgs>(args?: SelectSubset<T, compradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compradors and returns the data saved in the database.
     * @param {compradorCreateManyAndReturnArgs} args - Arguments to create many Compradors.
     * @example
     * // Create many Compradors
     * const comprador = await prisma.comprador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compradors and only return the `id`
     * const compradorWithIdOnly = await prisma.comprador.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends compradorCreateManyAndReturnArgs>(args?: SelectSubset<T, compradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comprador.
     * @param {compradorDeleteArgs} args - Arguments to delete one Comprador.
     * @example
     * // Delete one Comprador
     * const Comprador = await prisma.comprador.delete({
     *   where: {
     *     // ... filter to delete one Comprador
     *   }
     * })
     * 
     */
    delete<T extends compradorDeleteArgs>(args: SelectSubset<T, compradorDeleteArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comprador.
     * @param {compradorUpdateArgs} args - Arguments to update one Comprador.
     * @example
     * // Update one Comprador
     * const comprador = await prisma.comprador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends compradorUpdateArgs>(args: SelectSubset<T, compradorUpdateArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Compradors.
     * @param {compradorDeleteManyArgs} args - Arguments to filter Compradors to delete.
     * @example
     * // Delete a few Compradors
     * const { count } = await prisma.comprador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends compradorDeleteManyArgs>(args?: SelectSubset<T, compradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compradors
     * const comprador = await prisma.comprador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends compradorUpdateManyArgs>(args: SelectSubset<T, compradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comprador.
     * @param {compradorUpsertArgs} args - Arguments to update or create a Comprador.
     * @example
     * // Update or create a Comprador
     * const comprador = await prisma.comprador.upsert({
     *   create: {
     *     // ... data to create a Comprador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comprador we want to update
     *   }
     * })
     */
    upsert<T extends compradorUpsertArgs>(args: SelectSubset<T, compradorUpsertArgs<ExtArgs>>): Prisma__compradorClient<$Result.GetResult<Prisma.$compradorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Compradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradorCountArgs} args - Arguments to filter Compradors to count.
     * @example
     * // Count the number of Compradors
     * const count = await prisma.comprador.count({
     *   where: {
     *     // ... the filter for the Compradors we want to count
     *   }
     * })
    **/
    count<T extends compradorCountArgs>(
      args?: Subset<T, compradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comprador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompradorAggregateArgs>(args: Subset<T, CompradorAggregateArgs>): Prisma.PrismaPromise<GetCompradorAggregateType<T>>

    /**
     * Group by Comprador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends compradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: compradorGroupByArgs['orderBy'] }
        : { orderBy?: compradorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, compradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comprador model
   */
  readonly fields: compradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comprador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__compradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordenes<T extends comprador$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, comprador$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comprador model
   */ 
  interface compradorFieldRefs {
    readonly id: FieldRef<"comprador", 'Int'>
    readonly t_doc: FieldRef<"comprador", 'String'>
    readonly n_doc: FieldRef<"comprador", 'String'>
    readonly nombre: FieldRef<"comprador", 'String'>
    readonly apellido: FieldRef<"comprador", 'String'>
    readonly email: FieldRef<"comprador", 'String'>
    readonly telefono: FieldRef<"comprador", 'String'>
    readonly createdAt: FieldRef<"comprador", 'DateTime'>
    readonly updatedAt: FieldRef<"comprador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comprador findUnique
   */
  export type compradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * Filter, which comprador to fetch.
     */
    where: compradorWhereUniqueInput
  }

  /**
   * comprador findUniqueOrThrow
   */
  export type compradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * Filter, which comprador to fetch.
     */
    where: compradorWhereUniqueInput
  }

  /**
   * comprador findFirst
   */
  export type compradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * Filter, which comprador to fetch.
     */
    where?: compradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compradors to fetch.
     */
    orderBy?: compradorOrderByWithRelationInput | compradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compradors.
     */
    cursor?: compradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compradors.
     */
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * comprador findFirstOrThrow
   */
  export type compradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * Filter, which comprador to fetch.
     */
    where?: compradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compradors to fetch.
     */
    orderBy?: compradorOrderByWithRelationInput | compradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compradors.
     */
    cursor?: compradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compradors.
     */
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * comprador findMany
   */
  export type compradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * Filter, which compradors to fetch.
     */
    where?: compradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compradors to fetch.
     */
    orderBy?: compradorOrderByWithRelationInput | compradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing compradors.
     */
    cursor?: compradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compradors.
     */
    skip?: number
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * comprador create
   */
  export type compradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * The data needed to create a comprador.
     */
    data: XOR<compradorCreateInput, compradorUncheckedCreateInput>
  }

  /**
   * comprador createMany
   */
  export type compradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many compradors.
     */
    data: compradorCreateManyInput | compradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comprador createManyAndReturn
   */
  export type compradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many compradors.
     */
    data: compradorCreateManyInput | compradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comprador update
   */
  export type compradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * The data needed to update a comprador.
     */
    data: XOR<compradorUpdateInput, compradorUncheckedUpdateInput>
    /**
     * Choose, which comprador to update.
     */
    where: compradorWhereUniqueInput
  }

  /**
   * comprador updateMany
   */
  export type compradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update compradors.
     */
    data: XOR<compradorUpdateManyMutationInput, compradorUncheckedUpdateManyInput>
    /**
     * Filter which compradors to update
     */
    where?: compradorWhereInput
  }

  /**
   * comprador upsert
   */
  export type compradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * The filter to search for the comprador to update in case it exists.
     */
    where: compradorWhereUniqueInput
    /**
     * In case the comprador found by the `where` argument doesn't exist, create a new comprador with this data.
     */
    create: XOR<compradorCreateInput, compradorUncheckedCreateInput>
    /**
     * In case the comprador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<compradorUpdateInput, compradorUncheckedUpdateInput>
  }

  /**
   * comprador delete
   */
  export type compradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
    /**
     * Filter which comprador to delete.
     */
    where: compradorWhereUniqueInput
  }

  /**
   * comprador deleteMany
   */
  export type compradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compradors to delete
     */
    where?: compradorWhereInput
  }

  /**
   * comprador.ordenes
   */
  export type comprador$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orden
     */
    select?: ordenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordenInclude<ExtArgs> | null
    where?: ordenWhereInput
    orderBy?: ordenOrderByWithRelationInput | ordenOrderByWithRelationInput[]
    cursor?: ordenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * comprador without action
   */
  export type compradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprador
     */
    select?: compradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AsistenciaScalarFieldEnum: {
    id_asistente: 'id_asistente',
    id_evento: 'id_evento',
    fecha_hora_asistencia: 'fecha_hora_asistencia',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


  export const EventoScalarFieldEnum: {
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

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const LugarScalarFieldEnum: {
    id: 'id',
    capacidad: 'capacidad',
    descripcion: 'descripcion',
    ciudad: 'ciudad',
    calle: 'calle',
    altura: 'altura',
    cp: 'cp',
    provincia: 'provincia'
  };

  export type LugarScalarFieldEnum = (typeof LugarScalarFieldEnum)[keyof typeof LugarScalarFieldEnum]


  export const EntradaScalarFieldEnum: {
    id_evento: 'id_evento',
    cod: 'cod',
    tipo_entrada: 'tipo_entrada',
    precio_unitario: 'precio_unitario',
    horario_inicio: 'horario_inicio',
    horario_fin: 'horario_fin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntradaScalarFieldEnum = (typeof EntradaScalarFieldEnum)[keyof typeof EntradaScalarFieldEnum]


  export const OrdenScalarFieldEnum: {
    id_comprador: 'id_comprador',
    cod: 'cod',
    fecha_hora: 'fecha_hora',
    precio_unitario: 'precio_unitario',
    cantidad: 'cantidad',
    precio_total: 'precio_total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdenScalarFieldEnum = (typeof OrdenScalarFieldEnum)[keyof typeof OrdenScalarFieldEnum]


  export const Ticket_digitalScalarFieldEnum: {
    id_comprador: 'id_comprador',
    cod_orden: 'cod_orden',
    cod: 'cod',
    qr: 'qr',
    estado: 'estado',
    fecha_hora_uso: 'fecha_hora_uso',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Ticket_digitalScalarFieldEnum = (typeof Ticket_digitalScalarFieldEnum)[keyof typeof Ticket_digitalScalarFieldEnum]


  export const AsistenteScalarFieldEnum: {
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

  export type AsistenteScalarFieldEnum = (typeof AsistenteScalarFieldEnum)[keyof typeof AsistenteScalarFieldEnum]


  export const OrganizadorScalarFieldEnum: {
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

  export type OrganizadorScalarFieldEnum = (typeof OrganizadorScalarFieldEnum)[keyof typeof OrganizadorScalarFieldEnum]


  export const CompradorScalarFieldEnum: {
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

  export type CompradorScalarFieldEnum = (typeof CompradorScalarFieldEnum)[keyof typeof CompradorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'estado_evento'
   */
  export type Enumestado_eventoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_evento'>
    


  /**
   * Reference to a field of type 'estado_evento[]'
   */
  export type ListEnumestado_eventoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_evento[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'estado_ticket_digital'
   */
  export type Enumestado_ticket_digitalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_ticket_digital'>
    


  /**
   * Reference to a field of type 'estado_ticket_digital[]'
   */
  export type ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_ticket_digital[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type asistenciaWhereInput = {
    AND?: asistenciaWhereInput | asistenciaWhereInput[]
    OR?: asistenciaWhereInput[]
    NOT?: asistenciaWhereInput | asistenciaWhereInput[]
    id_asistente?: IntFilter<"asistencia"> | number
    id_evento?: IntFilter<"asistencia"> | number
    fecha_hora_asistencia?: DateTimeNullableFilter<"asistencia"> | Date | string | null
    createdAt?: DateTimeFilter<"asistencia"> | Date | string
    updatedAt?: DateTimeFilter<"asistencia"> | Date | string
    FK_asistente?: XOR<AsistenteRelationFilter, asistenteWhereInput>
    FK_evento?: XOR<EventoRelationFilter, eventoWhereInput>
  }

  export type asistenciaOrderByWithRelationInput = {
    id_asistente?: SortOrder
    id_evento?: SortOrder
    fecha_hora_asistencia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FK_asistente?: asistenteOrderByWithRelationInput
    FK_evento?: eventoOrderByWithRelationInput
  }

  export type asistenciaWhereUniqueInput = Prisma.AtLeast<{
    id_asistente_id_evento?: asistenciaId_asistenteId_eventoCompoundUniqueInput
    AND?: asistenciaWhereInput | asistenciaWhereInput[]
    OR?: asistenciaWhereInput[]
    NOT?: asistenciaWhereInput | asistenciaWhereInput[]
    id_asistente?: IntFilter<"asistencia"> | number
    id_evento?: IntFilter<"asistencia"> | number
    fecha_hora_asistencia?: DateTimeNullableFilter<"asistencia"> | Date | string | null
    createdAt?: DateTimeFilter<"asistencia"> | Date | string
    updatedAt?: DateTimeFilter<"asistencia"> | Date | string
    FK_asistente?: XOR<AsistenteRelationFilter, asistenteWhereInput>
    FK_evento?: XOR<EventoRelationFilter, eventoWhereInput>
  }, "id_asistente_id_evento">

  export type asistenciaOrderByWithAggregationInput = {
    id_asistente?: SortOrder
    id_evento?: SortOrder
    fecha_hora_asistencia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: asistenciaCountOrderByAggregateInput
    _avg?: asistenciaAvgOrderByAggregateInput
    _max?: asistenciaMaxOrderByAggregateInput
    _min?: asistenciaMinOrderByAggregateInput
    _sum?: asistenciaSumOrderByAggregateInput
  }

  export type asistenciaScalarWhereWithAggregatesInput = {
    AND?: asistenciaScalarWhereWithAggregatesInput | asistenciaScalarWhereWithAggregatesInput[]
    OR?: asistenciaScalarWhereWithAggregatesInput[]
    NOT?: asistenciaScalarWhereWithAggregatesInput | asistenciaScalarWhereWithAggregatesInput[]
    id_asistente?: IntWithAggregatesFilter<"asistencia"> | number
    id_evento?: IntWithAggregatesFilter<"asistencia"> | number
    fecha_hora_asistencia?: DateTimeNullableWithAggregatesFilter<"asistencia"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"asistencia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"asistencia"> | Date | string
  }

  export type eventoWhereInput = {
    AND?: eventoWhereInput | eventoWhereInput[]
    OR?: eventoWhereInput[]
    NOT?: eventoWhereInput | eventoWhereInput[]
    id?: IntFilter<"evento"> | number
    titulo?: StringFilter<"evento"> | string
    categoria?: StringFilter<"evento"> | string
    fecha_hora_inicio?: DateTimeFilter<"evento"> | Date | string
    fecha_hora_fin?: DateTimeFilter<"evento"> | Date | string
    estado?: Enumestado_eventoFilter<"evento"> | $Enums.estado_evento
    stock?: IntFilter<"evento"> | number
    id_organizador?: IntFilter<"evento"> | number
    id_lugar?: IntFilter<"evento"> | number
    fecha_hora_creacion?: DateTimeFilter<"evento"> | Date | string
    fecha_hora_cancelacion?: DateTimeNullableFilter<"evento"> | Date | string | null
    createdAt?: DateTimeFilter<"evento"> | Date | string
    updatedAt?: DateTimeFilter<"evento"> | Date | string
    entradas?: EntradaListRelationFilter
    asistencias?: AsistenciaListRelationFilter
    FK_lugar?: XOR<LugarRelationFilter, lugarWhereInput>
    FK_organizador?: XOR<OrganizadorRelationFilter, organizadorWhereInput>
  }

  export type eventoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    categoria?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    id_organizador?: SortOrder
    id_lugar?: SortOrder
    fecha_hora_creacion?: SortOrder
    fecha_hora_cancelacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entradas?: entradaOrderByRelationAggregateInput
    asistencias?: asistenciaOrderByRelationAggregateInput
    FK_lugar?: lugarOrderByWithRelationInput
    FK_organizador?: organizadorOrderByWithRelationInput
  }

  export type eventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventoWhereInput | eventoWhereInput[]
    OR?: eventoWhereInput[]
    NOT?: eventoWhereInput | eventoWhereInput[]
    titulo?: StringFilter<"evento"> | string
    categoria?: StringFilter<"evento"> | string
    fecha_hora_inicio?: DateTimeFilter<"evento"> | Date | string
    fecha_hora_fin?: DateTimeFilter<"evento"> | Date | string
    estado?: Enumestado_eventoFilter<"evento"> | $Enums.estado_evento
    stock?: IntFilter<"evento"> | number
    id_organizador?: IntFilter<"evento"> | number
    id_lugar?: IntFilter<"evento"> | number
    fecha_hora_creacion?: DateTimeFilter<"evento"> | Date | string
    fecha_hora_cancelacion?: DateTimeNullableFilter<"evento"> | Date | string | null
    createdAt?: DateTimeFilter<"evento"> | Date | string
    updatedAt?: DateTimeFilter<"evento"> | Date | string
    entradas?: EntradaListRelationFilter
    asistencias?: AsistenciaListRelationFilter
    FK_lugar?: XOR<LugarRelationFilter, lugarWhereInput>
    FK_organizador?: XOR<OrganizadorRelationFilter, organizadorWhereInput>
  }, "id">

  export type eventoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    categoria?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    id_organizador?: SortOrder
    id_lugar?: SortOrder
    fecha_hora_creacion?: SortOrder
    fecha_hora_cancelacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: eventoCountOrderByAggregateInput
    _avg?: eventoAvgOrderByAggregateInput
    _max?: eventoMaxOrderByAggregateInput
    _min?: eventoMinOrderByAggregateInput
    _sum?: eventoSumOrderByAggregateInput
  }

  export type eventoScalarWhereWithAggregatesInput = {
    AND?: eventoScalarWhereWithAggregatesInput | eventoScalarWhereWithAggregatesInput[]
    OR?: eventoScalarWhereWithAggregatesInput[]
    NOT?: eventoScalarWhereWithAggregatesInput | eventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"evento"> | number
    titulo?: StringWithAggregatesFilter<"evento"> | string
    categoria?: StringWithAggregatesFilter<"evento"> | string
    fecha_hora_inicio?: DateTimeWithAggregatesFilter<"evento"> | Date | string
    fecha_hora_fin?: DateTimeWithAggregatesFilter<"evento"> | Date | string
    estado?: Enumestado_eventoWithAggregatesFilter<"evento"> | $Enums.estado_evento
    stock?: IntWithAggregatesFilter<"evento"> | number
    id_organizador?: IntWithAggregatesFilter<"evento"> | number
    id_lugar?: IntWithAggregatesFilter<"evento"> | number
    fecha_hora_creacion?: DateTimeWithAggregatesFilter<"evento"> | Date | string
    fecha_hora_cancelacion?: DateTimeNullableWithAggregatesFilter<"evento"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"evento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"evento"> | Date | string
  }

  export type lugarWhereInput = {
    AND?: lugarWhereInput | lugarWhereInput[]
    OR?: lugarWhereInput[]
    NOT?: lugarWhereInput | lugarWhereInput[]
    id?: IntFilter<"lugar"> | number
    capacidad?: IntFilter<"lugar"> | number
    descripcion?: StringNullableFilter<"lugar"> | string | null
    ciudad?: StringFilter<"lugar"> | string
    calle?: StringFilter<"lugar"> | string
    altura?: StringFilter<"lugar"> | string
    cp?: IntFilter<"lugar"> | number
    provincia?: StringFilter<"lugar"> | string
    eventos?: EventoListRelationFilter
  }

  export type lugarOrderByWithRelationInput = {
    id?: SortOrder
    capacidad?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    ciudad?: SortOrder
    calle?: SortOrder
    altura?: SortOrder
    cp?: SortOrder
    provincia?: SortOrder
    eventos?: eventoOrderByRelationAggregateInput
  }

  export type lugarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lugarWhereInput | lugarWhereInput[]
    OR?: lugarWhereInput[]
    NOT?: lugarWhereInput | lugarWhereInput[]
    capacidad?: IntFilter<"lugar"> | number
    descripcion?: StringNullableFilter<"lugar"> | string | null
    ciudad?: StringFilter<"lugar"> | string
    calle?: StringFilter<"lugar"> | string
    altura?: StringFilter<"lugar"> | string
    cp?: IntFilter<"lugar"> | number
    provincia?: StringFilter<"lugar"> | string
    eventos?: EventoListRelationFilter
  }, "id">

  export type lugarOrderByWithAggregationInput = {
    id?: SortOrder
    capacidad?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    ciudad?: SortOrder
    calle?: SortOrder
    altura?: SortOrder
    cp?: SortOrder
    provincia?: SortOrder
    _count?: lugarCountOrderByAggregateInput
    _avg?: lugarAvgOrderByAggregateInput
    _max?: lugarMaxOrderByAggregateInput
    _min?: lugarMinOrderByAggregateInput
    _sum?: lugarSumOrderByAggregateInput
  }

  export type lugarScalarWhereWithAggregatesInput = {
    AND?: lugarScalarWhereWithAggregatesInput | lugarScalarWhereWithAggregatesInput[]
    OR?: lugarScalarWhereWithAggregatesInput[]
    NOT?: lugarScalarWhereWithAggregatesInput | lugarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lugar"> | number
    capacidad?: IntWithAggregatesFilter<"lugar"> | number
    descripcion?: StringNullableWithAggregatesFilter<"lugar"> | string | null
    ciudad?: StringWithAggregatesFilter<"lugar"> | string
    calle?: StringWithAggregatesFilter<"lugar"> | string
    altura?: StringWithAggregatesFilter<"lugar"> | string
    cp?: IntWithAggregatesFilter<"lugar"> | number
    provincia?: StringWithAggregatesFilter<"lugar"> | string
  }

  export type entradaWhereInput = {
    AND?: entradaWhereInput | entradaWhereInput[]
    OR?: entradaWhereInput[]
    NOT?: entradaWhereInput | entradaWhereInput[]
    id_evento?: IntFilter<"entrada"> | number
    cod?: IntFilter<"entrada"> | number
    tipo_entrada?: StringFilter<"entrada"> | string
    precio_unitario?: DecimalFilter<"entrada"> | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFilter<"entrada"> | Date | string
    horario_fin?: DateTimeFilter<"entrada"> | Date | string
    createdAt?: DateTimeFilter<"entrada"> | Date | string
    updatedAt?: DateTimeFilter<"entrada"> | Date | string
    FK_evento?: XOR<EventoRelationFilter, eventoWhereInput>
  }

  export type entradaOrderByWithRelationInput = {
    id_evento?: SortOrder
    cod?: SortOrder
    tipo_entrada?: SortOrder
    precio_unitario?: SortOrder
    horario_inicio?: SortOrder
    horario_fin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FK_evento?: eventoOrderByWithRelationInput
  }

  export type entradaWhereUniqueInput = Prisma.AtLeast<{
    id_evento_cod?: entradaId_eventoCodCompoundUniqueInput
    AND?: entradaWhereInput | entradaWhereInput[]
    OR?: entradaWhereInput[]
    NOT?: entradaWhereInput | entradaWhereInput[]
    id_evento?: IntFilter<"entrada"> | number
    cod?: IntFilter<"entrada"> | number
    tipo_entrada?: StringFilter<"entrada"> | string
    precio_unitario?: DecimalFilter<"entrada"> | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFilter<"entrada"> | Date | string
    horario_fin?: DateTimeFilter<"entrada"> | Date | string
    createdAt?: DateTimeFilter<"entrada"> | Date | string
    updatedAt?: DateTimeFilter<"entrada"> | Date | string
    FK_evento?: XOR<EventoRelationFilter, eventoWhereInput>
  }, "id_evento_cod">

  export type entradaOrderByWithAggregationInput = {
    id_evento?: SortOrder
    cod?: SortOrder
    tipo_entrada?: SortOrder
    precio_unitario?: SortOrder
    horario_inicio?: SortOrder
    horario_fin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: entradaCountOrderByAggregateInput
    _avg?: entradaAvgOrderByAggregateInput
    _max?: entradaMaxOrderByAggregateInput
    _min?: entradaMinOrderByAggregateInput
    _sum?: entradaSumOrderByAggregateInput
  }

  export type entradaScalarWhereWithAggregatesInput = {
    AND?: entradaScalarWhereWithAggregatesInput | entradaScalarWhereWithAggregatesInput[]
    OR?: entradaScalarWhereWithAggregatesInput[]
    NOT?: entradaScalarWhereWithAggregatesInput | entradaScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"entrada"> | number
    cod?: IntWithAggregatesFilter<"entrada"> | number
    tipo_entrada?: StringWithAggregatesFilter<"entrada"> | string
    precio_unitario?: DecimalWithAggregatesFilter<"entrada"> | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeWithAggregatesFilter<"entrada"> | Date | string
    horario_fin?: DateTimeWithAggregatesFilter<"entrada"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"entrada"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"entrada"> | Date | string
  }

  export type ordenWhereInput = {
    AND?: ordenWhereInput | ordenWhereInput[]
    OR?: ordenWhereInput[]
    NOT?: ordenWhereInput | ordenWhereInput[]
    id_comprador?: IntFilter<"orden"> | number
    cod?: IntFilter<"orden"> | number
    fecha_hora?: DateTimeFilter<"orden"> | Date | string
    precio_unitario?: DecimalFilter<"orden"> | Decimal | DecimalJsLike | number | string
    cantidad?: IntFilter<"orden"> | number
    precio_total?: DecimalFilter<"orden"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"orden"> | Date | string
    updatedAt?: DateTimeFilter<"orden"> | Date | string
    tickets?: Ticket_digitalListRelationFilter
    FK_comprador?: XOR<CompradorRelationFilter, compradorWhereInput>
  }

  export type ordenOrderByWithRelationInput = {
    id_comprador?: SortOrder
    cod?: SortOrder
    fecha_hora?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    precio_total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickets?: ticket_digitalOrderByRelationAggregateInput
    FK_comprador?: compradorOrderByWithRelationInput
  }

  export type ordenWhereUniqueInput = Prisma.AtLeast<{
    id_comprador_cod?: ordenId_compradorCodCompoundUniqueInput
    AND?: ordenWhereInput | ordenWhereInput[]
    OR?: ordenWhereInput[]
    NOT?: ordenWhereInput | ordenWhereInput[]
    id_comprador?: IntFilter<"orden"> | number
    cod?: IntFilter<"orden"> | number
    fecha_hora?: DateTimeFilter<"orden"> | Date | string
    precio_unitario?: DecimalFilter<"orden"> | Decimal | DecimalJsLike | number | string
    cantidad?: IntFilter<"orden"> | number
    precio_total?: DecimalFilter<"orden"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"orden"> | Date | string
    updatedAt?: DateTimeFilter<"orden"> | Date | string
    tickets?: Ticket_digitalListRelationFilter
    FK_comprador?: XOR<CompradorRelationFilter, compradorWhereInput>
  }, "id_comprador_cod">

  export type ordenOrderByWithAggregationInput = {
    id_comprador?: SortOrder
    cod?: SortOrder
    fecha_hora?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    precio_total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ordenCountOrderByAggregateInput
    _avg?: ordenAvgOrderByAggregateInput
    _max?: ordenMaxOrderByAggregateInput
    _min?: ordenMinOrderByAggregateInput
    _sum?: ordenSumOrderByAggregateInput
  }

  export type ordenScalarWhereWithAggregatesInput = {
    AND?: ordenScalarWhereWithAggregatesInput | ordenScalarWhereWithAggregatesInput[]
    OR?: ordenScalarWhereWithAggregatesInput[]
    NOT?: ordenScalarWhereWithAggregatesInput | ordenScalarWhereWithAggregatesInput[]
    id_comprador?: IntWithAggregatesFilter<"orden"> | number
    cod?: IntWithAggregatesFilter<"orden"> | number
    fecha_hora?: DateTimeWithAggregatesFilter<"orden"> | Date | string
    precio_unitario?: DecimalWithAggregatesFilter<"orden"> | Decimal | DecimalJsLike | number | string
    cantidad?: IntWithAggregatesFilter<"orden"> | number
    precio_total?: DecimalWithAggregatesFilter<"orden"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"orden"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"orden"> | Date | string
  }

  export type ticket_digitalWhereInput = {
    AND?: ticket_digitalWhereInput | ticket_digitalWhereInput[]
    OR?: ticket_digitalWhereInput[]
    NOT?: ticket_digitalWhereInput | ticket_digitalWhereInput[]
    id_comprador?: IntFilter<"ticket_digital"> | number
    cod_orden?: IntFilter<"ticket_digital"> | number
    cod?: IntFilter<"ticket_digital"> | number
    qr?: StringFilter<"ticket_digital"> | string
    estado?: Enumestado_ticket_digitalFilter<"ticket_digital"> | $Enums.estado_ticket_digital
    fecha_hora_uso?: DateTimeNullableFilter<"ticket_digital"> | Date | string | null
    createdAt?: DateTimeFilter<"ticket_digital"> | Date | string
    updatedAt?: DateTimeFilter<"ticket_digital"> | Date | string
    FK_orden?: XOR<OrdenRelationFilter, ordenWhereInput>
  }

  export type ticket_digitalOrderByWithRelationInput = {
    id_comprador?: SortOrder
    cod_orden?: SortOrder
    cod?: SortOrder
    qr?: SortOrder
    estado?: SortOrder
    fecha_hora_uso?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FK_orden?: ordenOrderByWithRelationInput
  }

  export type ticket_digitalWhereUniqueInput = Prisma.AtLeast<{
    qr?: string
    id_comprador_cod_orden_cod?: ticket_digitalId_compradorCod_ordenCodCompoundUniqueInput
    AND?: ticket_digitalWhereInput | ticket_digitalWhereInput[]
    OR?: ticket_digitalWhereInput[]
    NOT?: ticket_digitalWhereInput | ticket_digitalWhereInput[]
    id_comprador?: IntFilter<"ticket_digital"> | number
    cod_orden?: IntFilter<"ticket_digital"> | number
    cod?: IntFilter<"ticket_digital"> | number
    estado?: Enumestado_ticket_digitalFilter<"ticket_digital"> | $Enums.estado_ticket_digital
    fecha_hora_uso?: DateTimeNullableFilter<"ticket_digital"> | Date | string | null
    createdAt?: DateTimeFilter<"ticket_digital"> | Date | string
    updatedAt?: DateTimeFilter<"ticket_digital"> | Date | string
    FK_orden?: XOR<OrdenRelationFilter, ordenWhereInput>
  }, "id_comprador_cod_orden_cod" | "qr">

  export type ticket_digitalOrderByWithAggregationInput = {
    id_comprador?: SortOrder
    cod_orden?: SortOrder
    cod?: SortOrder
    qr?: SortOrder
    estado?: SortOrder
    fecha_hora_uso?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ticket_digitalCountOrderByAggregateInput
    _avg?: ticket_digitalAvgOrderByAggregateInput
    _max?: ticket_digitalMaxOrderByAggregateInput
    _min?: ticket_digitalMinOrderByAggregateInput
    _sum?: ticket_digitalSumOrderByAggregateInput
  }

  export type ticket_digitalScalarWhereWithAggregatesInput = {
    AND?: ticket_digitalScalarWhereWithAggregatesInput | ticket_digitalScalarWhereWithAggregatesInput[]
    OR?: ticket_digitalScalarWhereWithAggregatesInput[]
    NOT?: ticket_digitalScalarWhereWithAggregatesInput | ticket_digitalScalarWhereWithAggregatesInput[]
    id_comprador?: IntWithAggregatesFilter<"ticket_digital"> | number
    cod_orden?: IntWithAggregatesFilter<"ticket_digital"> | number
    cod?: IntWithAggregatesFilter<"ticket_digital"> | number
    qr?: StringWithAggregatesFilter<"ticket_digital"> | string
    estado?: Enumestado_ticket_digitalWithAggregatesFilter<"ticket_digital"> | $Enums.estado_ticket_digital
    fecha_hora_uso?: DateTimeNullableWithAggregatesFilter<"ticket_digital"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ticket_digital"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ticket_digital"> | Date | string
  }

  export type asistenteWhereInput = {
    AND?: asistenteWhereInput | asistenteWhereInput[]
    OR?: asistenteWhereInput[]
    NOT?: asistenteWhereInput | asistenteWhereInput[]
    id?: IntFilter<"asistente"> | number
    t_doc?: StringFilter<"asistente"> | string
    n_doc?: StringFilter<"asistente"> | string
    nombre?: StringFilter<"asistente"> | string
    apellido?: StringFilter<"asistente"> | string
    email?: StringFilter<"asistente"> | string
    telefono?: StringFilter<"asistente"> | string
    createdAt?: DateTimeFilter<"asistente"> | Date | string
    updatedAt?: DateTimeFilter<"asistente"> | Date | string
    asistencias?: AsistenciaListRelationFilter
  }

  export type asistenteOrderByWithRelationInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asistencias?: asistenciaOrderByRelationAggregateInput
  }

  export type asistenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    telefono?: string
    AND?: asistenteWhereInput | asistenteWhereInput[]
    OR?: asistenteWhereInput[]
    NOT?: asistenteWhereInput | asistenteWhereInput[]
    t_doc?: StringFilter<"asistente"> | string
    n_doc?: StringFilter<"asistente"> | string
    nombre?: StringFilter<"asistente"> | string
    apellido?: StringFilter<"asistente"> | string
    createdAt?: DateTimeFilter<"asistente"> | Date | string
    updatedAt?: DateTimeFilter<"asistente"> | Date | string
    asistencias?: AsistenciaListRelationFilter
  }, "id" | "email" | "telefono">

  export type asistenteOrderByWithAggregationInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: asistenteCountOrderByAggregateInput
    _avg?: asistenteAvgOrderByAggregateInput
    _max?: asistenteMaxOrderByAggregateInput
    _min?: asistenteMinOrderByAggregateInput
    _sum?: asistenteSumOrderByAggregateInput
  }

  export type asistenteScalarWhereWithAggregatesInput = {
    AND?: asistenteScalarWhereWithAggregatesInput | asistenteScalarWhereWithAggregatesInput[]
    OR?: asistenteScalarWhereWithAggregatesInput[]
    NOT?: asistenteScalarWhereWithAggregatesInput | asistenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"asistente"> | number
    t_doc?: StringWithAggregatesFilter<"asistente"> | string
    n_doc?: StringWithAggregatesFilter<"asistente"> | string
    nombre?: StringWithAggregatesFilter<"asistente"> | string
    apellido?: StringWithAggregatesFilter<"asistente"> | string
    email?: StringWithAggregatesFilter<"asistente"> | string
    telefono?: StringWithAggregatesFilter<"asistente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"asistente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"asistente"> | Date | string
  }

  export type organizadorWhereInput = {
    AND?: organizadorWhereInput | organizadorWhereInput[]
    OR?: organizadorWhereInput[]
    NOT?: organizadorWhereInput | organizadorWhereInput[]
    id?: IntFilter<"organizador"> | number
    t_doc?: StringFilter<"organizador"> | string
    n_doc?: StringFilter<"organizador"> | string
    nombre?: StringFilter<"organizador"> | string
    apellido?: StringFilter<"organizador"> | string
    email?: StringFilter<"organizador"> | string
    telefono?: StringFilter<"organizador"> | string
    cuit?: StringNullableFilter<"organizador"> | string | null
    createdAt?: DateTimeFilter<"organizador"> | Date | string
    updatedAt?: DateTimeFilter<"organizador"> | Date | string
    eventos?: EventoListRelationFilter
  }

  export type organizadorOrderByWithRelationInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    cuit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventos?: eventoOrderByRelationAggregateInput
  }

  export type organizadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    telefono?: string
    AND?: organizadorWhereInput | organizadorWhereInput[]
    OR?: organizadorWhereInput[]
    NOT?: organizadorWhereInput | organizadorWhereInput[]
    t_doc?: StringFilter<"organizador"> | string
    n_doc?: StringFilter<"organizador"> | string
    nombre?: StringFilter<"organizador"> | string
    apellido?: StringFilter<"organizador"> | string
    cuit?: StringNullableFilter<"organizador"> | string | null
    createdAt?: DateTimeFilter<"organizador"> | Date | string
    updatedAt?: DateTimeFilter<"organizador"> | Date | string
    eventos?: EventoListRelationFilter
  }, "id" | "email" | "telefono">

  export type organizadorOrderByWithAggregationInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    cuit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: organizadorCountOrderByAggregateInput
    _avg?: organizadorAvgOrderByAggregateInput
    _max?: organizadorMaxOrderByAggregateInput
    _min?: organizadorMinOrderByAggregateInput
    _sum?: organizadorSumOrderByAggregateInput
  }

  export type organizadorScalarWhereWithAggregatesInput = {
    AND?: organizadorScalarWhereWithAggregatesInput | organizadorScalarWhereWithAggregatesInput[]
    OR?: organizadorScalarWhereWithAggregatesInput[]
    NOT?: organizadorScalarWhereWithAggregatesInput | organizadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organizador"> | number
    t_doc?: StringWithAggregatesFilter<"organizador"> | string
    n_doc?: StringWithAggregatesFilter<"organizador"> | string
    nombre?: StringWithAggregatesFilter<"organizador"> | string
    apellido?: StringWithAggregatesFilter<"organizador"> | string
    email?: StringWithAggregatesFilter<"organizador"> | string
    telefono?: StringWithAggregatesFilter<"organizador"> | string
    cuit?: StringNullableWithAggregatesFilter<"organizador"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"organizador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"organizador"> | Date | string
  }

  export type compradorWhereInput = {
    AND?: compradorWhereInput | compradorWhereInput[]
    OR?: compradorWhereInput[]
    NOT?: compradorWhereInput | compradorWhereInput[]
    id?: IntFilter<"comprador"> | number
    t_doc?: StringFilter<"comprador"> | string
    n_doc?: StringFilter<"comprador"> | string
    nombre?: StringFilter<"comprador"> | string
    apellido?: StringFilter<"comprador"> | string
    email?: StringFilter<"comprador"> | string
    telefono?: StringFilter<"comprador"> | string
    createdAt?: DateTimeFilter<"comprador"> | Date | string
    updatedAt?: DateTimeFilter<"comprador"> | Date | string
    ordenes?: OrdenListRelationFilter
  }

  export type compradorOrderByWithRelationInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ordenes?: ordenOrderByRelationAggregateInput
  }

  export type compradorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    telefono?: string
    AND?: compradorWhereInput | compradorWhereInput[]
    OR?: compradorWhereInput[]
    NOT?: compradorWhereInput | compradorWhereInput[]
    t_doc?: StringFilter<"comprador"> | string
    n_doc?: StringFilter<"comprador"> | string
    nombre?: StringFilter<"comprador"> | string
    apellido?: StringFilter<"comprador"> | string
    createdAt?: DateTimeFilter<"comprador"> | Date | string
    updatedAt?: DateTimeFilter<"comprador"> | Date | string
    ordenes?: OrdenListRelationFilter
  }, "id" | "email" | "telefono">

  export type compradorOrderByWithAggregationInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: compradorCountOrderByAggregateInput
    _avg?: compradorAvgOrderByAggregateInput
    _max?: compradorMaxOrderByAggregateInput
    _min?: compradorMinOrderByAggregateInput
    _sum?: compradorSumOrderByAggregateInput
  }

  export type compradorScalarWhereWithAggregatesInput = {
    AND?: compradorScalarWhereWithAggregatesInput | compradorScalarWhereWithAggregatesInput[]
    OR?: compradorScalarWhereWithAggregatesInput[]
    NOT?: compradorScalarWhereWithAggregatesInput | compradorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comprador"> | number
    t_doc?: StringWithAggregatesFilter<"comprador"> | string
    n_doc?: StringWithAggregatesFilter<"comprador"> | string
    nombre?: StringWithAggregatesFilter<"comprador"> | string
    apellido?: StringWithAggregatesFilter<"comprador"> | string
    email?: StringWithAggregatesFilter<"comprador"> | string
    telefono?: StringWithAggregatesFilter<"comprador"> | string
    createdAt?: DateTimeWithAggregatesFilter<"comprador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"comprador"> | Date | string
  }

  export type asistenciaCreateInput = {
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FK_asistente: asistenteCreateNestedOneWithoutAsistenciasInput
    FK_evento: eventoCreateNestedOneWithoutAsistenciasInput
  }

  export type asistenciaUncheckedCreateInput = {
    id_asistente: number
    id_evento: number
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenciaUpdateInput = {
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FK_asistente?: asistenteUpdateOneRequiredWithoutAsistenciasNestedInput
    FK_evento?: eventoUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type asistenciaUncheckedUpdateInput = {
    id_asistente?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaCreateManyInput = {
    id_asistente: number
    id_evento: number
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenciaUpdateManyMutationInput = {
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaUncheckedUpdateManyInput = {
    id_asistente?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoCreateInput = {
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: entradaCreateNestedManyWithoutFK_eventoInput
    asistencias?: asistenciaCreateNestedManyWithoutFK_eventoInput
    FK_lugar: lugarCreateNestedOneWithoutEventosInput
    FK_organizador: organizadorCreateNestedOneWithoutEventosInput
  }

  export type eventoUncheckedCreateInput = {
    id?: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    id_organizador: number
    id_lugar: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: entradaUncheckedCreateNestedManyWithoutFK_eventoInput
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutFK_eventoInput
  }

  export type eventoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: entradaUpdateManyWithoutFK_eventoNestedInput
    asistencias?: asistenciaUpdateManyWithoutFK_eventoNestedInput
    FK_lugar?: lugarUpdateOneRequiredWithoutEventosNestedInput
    FK_organizador?: organizadorUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    id_organizador?: IntFieldUpdateOperationsInput | number
    id_lugar?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: entradaUncheckedUpdateManyWithoutFK_eventoNestedInput
    asistencias?: asistenciaUncheckedUpdateManyWithoutFK_eventoNestedInput
  }

  export type eventoCreateManyInput = {
    id?: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    id_organizador: number
    id_lugar: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type eventoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    id_organizador?: IntFieldUpdateOperationsInput | number
    id_lugar?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lugarCreateInput = {
    capacidad: number
    descripcion?: string | null
    ciudad: string
    calle: string
    altura: string
    cp: number
    provincia: string
    eventos?: eventoCreateNestedManyWithoutFK_lugarInput
  }

  export type lugarUncheckedCreateInput = {
    id?: number
    capacidad: number
    descripcion?: string | null
    ciudad: string
    calle: string
    altura: string
    cp: number
    provincia: string
    eventos?: eventoUncheckedCreateNestedManyWithoutFK_lugarInput
  }

  export type lugarUpdateInput = {
    capacidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    altura?: StringFieldUpdateOperationsInput | string
    cp?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
    eventos?: eventoUpdateManyWithoutFK_lugarNestedInput
  }

  export type lugarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    altura?: StringFieldUpdateOperationsInput | string
    cp?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
    eventos?: eventoUncheckedUpdateManyWithoutFK_lugarNestedInput
  }

  export type lugarCreateManyInput = {
    id?: number
    capacidad: number
    descripcion?: string | null
    ciudad: string
    calle: string
    altura: string
    cp: number
    provincia: string
  }

  export type lugarUpdateManyMutationInput = {
    capacidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    altura?: StringFieldUpdateOperationsInput | string
    cp?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
  }

  export type lugarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    altura?: StringFieldUpdateOperationsInput | string
    cp?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
  }

  export type entradaCreateInput = {
    cod?: number
    tipo_entrada: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    horario_inicio: Date | string
    horario_fin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    FK_evento: eventoCreateNestedOneWithoutEntradasInput
  }

  export type entradaUncheckedCreateInput = {
    id_evento: number
    cod?: number
    tipo_entrada: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    horario_inicio: Date | string
    horario_fin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type entradaUpdateInput = {
    cod?: IntFieldUpdateOperationsInput | number
    tipo_entrada?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FK_evento?: eventoUpdateOneRequiredWithoutEntradasNestedInput
  }

  export type entradaUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    cod?: IntFieldUpdateOperationsInput | number
    tipo_entrada?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entradaCreateManyInput = {
    id_evento: number
    cod?: number
    tipo_entrada: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    horario_inicio: Date | string
    horario_fin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type entradaUpdateManyMutationInput = {
    cod?: IntFieldUpdateOperationsInput | number
    tipo_entrada?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entradaUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    cod?: IntFieldUpdateOperationsInput | number
    tipo_entrada?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordenCreateInput = {
    cod?: number
    fecha_hora?: Date | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: number
    precio_total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: ticket_digitalCreateNestedManyWithoutFK_ordenInput
    FK_comprador: compradorCreateNestedOneWithoutOrdenesInput
  }

  export type ordenUncheckedCreateInput = {
    id_comprador: number
    cod?: number
    fecha_hora?: Date | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: number
    precio_total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: ticket_digitalUncheckedCreateNestedManyWithoutFK_ordenInput
  }

  export type ordenUpdateInput = {
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: ticket_digitalUpdateManyWithoutFK_ordenNestedInput
    FK_comprador?: compradorUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type ordenUncheckedUpdateInput = {
    id_comprador?: IntFieldUpdateOperationsInput | number
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: ticket_digitalUncheckedUpdateManyWithoutFK_ordenNestedInput
  }

  export type ordenCreateManyInput = {
    id_comprador: number
    cod?: number
    fecha_hora?: Date | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: number
    precio_total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordenUpdateManyMutationInput = {
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordenUncheckedUpdateManyInput = {
    id_comprador?: IntFieldUpdateOperationsInput | number
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticket_digitalCreateInput = {
    cod?: number
    qr: string
    estado?: $Enums.estado_ticket_digital
    fecha_hora_uso?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FK_orden: ordenCreateNestedOneWithoutTicketsInput
  }

  export type ticket_digitalUncheckedCreateInput = {
    id_comprador: number
    cod_orden: number
    cod?: number
    qr: string
    estado?: $Enums.estado_ticket_digital
    fecha_hora_uso?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ticket_digitalUpdateInput = {
    cod?: IntFieldUpdateOperationsInput | number
    qr?: StringFieldUpdateOperationsInput | string
    estado?: Enumestado_ticket_digitalFieldUpdateOperationsInput | $Enums.estado_ticket_digital
    fecha_hora_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FK_orden?: ordenUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type ticket_digitalUncheckedUpdateInput = {
    id_comprador?: IntFieldUpdateOperationsInput | number
    cod_orden?: IntFieldUpdateOperationsInput | number
    cod?: IntFieldUpdateOperationsInput | number
    qr?: StringFieldUpdateOperationsInput | string
    estado?: Enumestado_ticket_digitalFieldUpdateOperationsInput | $Enums.estado_ticket_digital
    fecha_hora_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticket_digitalCreateManyInput = {
    id_comprador: number
    cod_orden: number
    cod?: number
    qr: string
    estado?: $Enums.estado_ticket_digital
    fecha_hora_uso?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ticket_digitalUpdateManyMutationInput = {
    cod?: IntFieldUpdateOperationsInput | number
    qr?: StringFieldUpdateOperationsInput | string
    estado?: Enumestado_ticket_digitalFieldUpdateOperationsInput | $Enums.estado_ticket_digital
    fecha_hora_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticket_digitalUncheckedUpdateManyInput = {
    id_comprador?: IntFieldUpdateOperationsInput | number
    cod_orden?: IntFieldUpdateOperationsInput | number
    cod?: IntFieldUpdateOperationsInput | number
    qr?: StringFieldUpdateOperationsInput | string
    estado?: Enumestado_ticket_digitalFieldUpdateOperationsInput | $Enums.estado_ticket_digital
    fecha_hora_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenteCreateInput = {
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    asistencias?: asistenciaCreateNestedManyWithoutFK_asistenteInput
  }

  export type asistenteUncheckedCreateInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutFK_asistenteInput
  }

  export type asistenteUpdateInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUpdateManyWithoutFK_asistenteNestedInput
  }

  export type asistenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutFK_asistenteNestedInput
  }

  export type asistenteCreateManyInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenteUpdateManyMutationInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizadorCreateInput = {
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    cuit?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventos?: eventoCreateNestedManyWithoutFK_organizadorInput
  }

  export type organizadorUncheckedCreateInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    cuit?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventos?: eventoUncheckedCreateNestedManyWithoutFK_organizadorInput
  }

  export type organizadorUpdateInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    cuit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventos?: eventoUpdateManyWithoutFK_organizadorNestedInput
  }

  export type organizadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    cuit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventos?: eventoUncheckedUpdateManyWithoutFK_organizadorNestedInput
  }

  export type organizadorCreateManyInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    cuit?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type organizadorUpdateManyMutationInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    cuit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    cuit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type compradorCreateInput = {
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordenes?: ordenCreateNestedManyWithoutFK_compradorInput
  }

  export type compradorUncheckedCreateInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordenes?: ordenUncheckedCreateNestedManyWithoutFK_compradorInput
  }

  export type compradorUpdateInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordenes?: ordenUpdateManyWithoutFK_compradorNestedInput
  }

  export type compradorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordenes?: ordenUncheckedUpdateManyWithoutFK_compradorNestedInput
  }

  export type compradorCreateManyInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type compradorUpdateManyMutationInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type compradorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AsistenteRelationFilter = {
    is?: asistenteWhereInput
    isNot?: asistenteWhereInput
  }

  export type EventoRelationFilter = {
    is?: eventoWhereInput
    isNot?: eventoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type asistenciaId_asistenteId_eventoCompoundUniqueInput = {
    id_asistente: number
    id_evento: number
  }

  export type asistenciaCountOrderByAggregateInput = {
    id_asistente?: SortOrder
    id_evento?: SortOrder
    fecha_hora_asistencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type asistenciaAvgOrderByAggregateInput = {
    id_asistente?: SortOrder
    id_evento?: SortOrder
  }

  export type asistenciaMaxOrderByAggregateInput = {
    id_asistente?: SortOrder
    id_evento?: SortOrder
    fecha_hora_asistencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type asistenciaMinOrderByAggregateInput = {
    id_asistente?: SortOrder
    id_evento?: SortOrder
    fecha_hora_asistencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type asistenciaSumOrderByAggregateInput = {
    id_asistente?: SortOrder
    id_evento?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumestado_eventoFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_evento | Enumestado_eventoFieldRefInput<$PrismaModel>
    in?: $Enums.estado_evento[] | ListEnumestado_eventoFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_evento[] | ListEnumestado_eventoFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_eventoFilter<$PrismaModel> | $Enums.estado_evento
  }

  export type EntradaListRelationFilter = {
    every?: entradaWhereInput
    some?: entradaWhereInput
    none?: entradaWhereInput
  }

  export type AsistenciaListRelationFilter = {
    every?: asistenciaWhereInput
    some?: asistenciaWhereInput
    none?: asistenciaWhereInput
  }

  export type LugarRelationFilter = {
    is?: lugarWhereInput
    isNot?: lugarWhereInput
  }

  export type OrganizadorRelationFilter = {
    is?: organizadorWhereInput
    isNot?: organizadorWhereInput
  }

  export type entradaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type asistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    categoria?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    id_organizador?: SortOrder
    id_lugar?: SortOrder
    fecha_hora_creacion?: SortOrder
    fecha_hora_cancelacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type eventoAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    id_organizador?: SortOrder
    id_lugar?: SortOrder
  }

  export type eventoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    categoria?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    id_organizador?: SortOrder
    id_lugar?: SortOrder
    fecha_hora_creacion?: SortOrder
    fecha_hora_cancelacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type eventoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    categoria?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    id_organizador?: SortOrder
    id_lugar?: SortOrder
    fecha_hora_creacion?: SortOrder
    fecha_hora_cancelacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type eventoSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    id_organizador?: SortOrder
    id_lugar?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumestado_eventoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_evento | Enumestado_eventoFieldRefInput<$PrismaModel>
    in?: $Enums.estado_evento[] | ListEnumestado_eventoFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_evento[] | ListEnumestado_eventoFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_eventoWithAggregatesFilter<$PrismaModel> | $Enums.estado_evento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestado_eventoFilter<$PrismaModel>
    _max?: NestedEnumestado_eventoFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventoListRelationFilter = {
    every?: eventoWhereInput
    some?: eventoWhereInput
    none?: eventoWhereInput
  }

  export type eventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lugarCountOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    descripcion?: SortOrder
    ciudad?: SortOrder
    calle?: SortOrder
    altura?: SortOrder
    cp?: SortOrder
    provincia?: SortOrder
  }

  export type lugarAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    cp?: SortOrder
  }

  export type lugarMaxOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    descripcion?: SortOrder
    ciudad?: SortOrder
    calle?: SortOrder
    altura?: SortOrder
    cp?: SortOrder
    provincia?: SortOrder
  }

  export type lugarMinOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    descripcion?: SortOrder
    ciudad?: SortOrder
    calle?: SortOrder
    altura?: SortOrder
    cp?: SortOrder
    provincia?: SortOrder
  }

  export type lugarSumOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    cp?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type entradaId_eventoCodCompoundUniqueInput = {
    id_evento: number
    cod: number
  }

  export type entradaCountOrderByAggregateInput = {
    id_evento?: SortOrder
    cod?: SortOrder
    tipo_entrada?: SortOrder
    precio_unitario?: SortOrder
    horario_inicio?: SortOrder
    horario_fin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type entradaAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    cod?: SortOrder
    precio_unitario?: SortOrder
  }

  export type entradaMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    cod?: SortOrder
    tipo_entrada?: SortOrder
    precio_unitario?: SortOrder
    horario_inicio?: SortOrder
    horario_fin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type entradaMinOrderByAggregateInput = {
    id_evento?: SortOrder
    cod?: SortOrder
    tipo_entrada?: SortOrder
    precio_unitario?: SortOrder
    horario_inicio?: SortOrder
    horario_fin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type entradaSumOrderByAggregateInput = {
    id_evento?: SortOrder
    cod?: SortOrder
    precio_unitario?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Ticket_digitalListRelationFilter = {
    every?: ticket_digitalWhereInput
    some?: ticket_digitalWhereInput
    none?: ticket_digitalWhereInput
  }

  export type CompradorRelationFilter = {
    is?: compradorWhereInput
    isNot?: compradorWhereInput
  }

  export type ticket_digitalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordenId_compradorCodCompoundUniqueInput = {
    id_comprador: number
    cod: number
  }

  export type ordenCountOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod?: SortOrder
    fecha_hora?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    precio_total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordenAvgOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    precio_total?: SortOrder
  }

  export type ordenMaxOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod?: SortOrder
    fecha_hora?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    precio_total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordenMinOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod?: SortOrder
    fecha_hora?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    precio_total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordenSumOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    precio_total?: SortOrder
  }

  export type Enumestado_ticket_digitalFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_ticket_digital | Enumestado_ticket_digitalFieldRefInput<$PrismaModel>
    in?: $Enums.estado_ticket_digital[] | ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_ticket_digital[] | ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_ticket_digitalFilter<$PrismaModel> | $Enums.estado_ticket_digital
  }

  export type OrdenRelationFilter = {
    is?: ordenWhereInput
    isNot?: ordenWhereInput
  }

  export type ticket_digitalId_compradorCod_ordenCodCompoundUniqueInput = {
    id_comprador: number
    cod_orden: number
    cod: number
  }

  export type ticket_digitalCountOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod_orden?: SortOrder
    cod?: SortOrder
    qr?: SortOrder
    estado?: SortOrder
    fecha_hora_uso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ticket_digitalAvgOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod_orden?: SortOrder
    cod?: SortOrder
  }

  export type ticket_digitalMaxOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod_orden?: SortOrder
    cod?: SortOrder
    qr?: SortOrder
    estado?: SortOrder
    fecha_hora_uso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ticket_digitalMinOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod_orden?: SortOrder
    cod?: SortOrder
    qr?: SortOrder
    estado?: SortOrder
    fecha_hora_uso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ticket_digitalSumOrderByAggregateInput = {
    id_comprador?: SortOrder
    cod_orden?: SortOrder
    cod?: SortOrder
  }

  export type Enumestado_ticket_digitalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_ticket_digital | Enumestado_ticket_digitalFieldRefInput<$PrismaModel>
    in?: $Enums.estado_ticket_digital[] | ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_ticket_digital[] | ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_ticket_digitalWithAggregatesFilter<$PrismaModel> | $Enums.estado_ticket_digital
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestado_ticket_digitalFilter<$PrismaModel>
    _max?: NestedEnumestado_ticket_digitalFilter<$PrismaModel>
  }

  export type asistenteCountOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type asistenteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type asistenteMaxOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type asistenteMinOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type asistenteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organizadorCountOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    cuit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type organizadorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organizadorMaxOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    cuit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type organizadorMinOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    cuit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type organizadorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrdenListRelationFilter = {
    every?: ordenWhereInput
    some?: ordenWhereInput
    none?: ordenWhereInput
  }

  export type ordenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type compradorCountOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type compradorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type compradorMaxOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type compradorMinOrderByAggregateInput = {
    id?: SortOrder
    t_doc?: SortOrder
    n_doc?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type compradorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type asistenteCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<asistenteCreateWithoutAsistenciasInput, asistenteUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: asistenteCreateOrConnectWithoutAsistenciasInput
    connect?: asistenteWhereUniqueInput
  }

  export type eventoCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<eventoCreateWithoutAsistenciasInput, eventoUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: eventoCreateOrConnectWithoutAsistenciasInput
    connect?: eventoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type asistenteUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<asistenteCreateWithoutAsistenciasInput, asistenteUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: asistenteCreateOrConnectWithoutAsistenciasInput
    upsert?: asistenteUpsertWithoutAsistenciasInput
    connect?: asistenteWhereUniqueInput
    update?: XOR<XOR<asistenteUpdateToOneWithWhereWithoutAsistenciasInput, asistenteUpdateWithoutAsistenciasInput>, asistenteUncheckedUpdateWithoutAsistenciasInput>
  }

  export type eventoUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<eventoCreateWithoutAsistenciasInput, eventoUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: eventoCreateOrConnectWithoutAsistenciasInput
    upsert?: eventoUpsertWithoutAsistenciasInput
    connect?: eventoWhereUniqueInput
    update?: XOR<XOR<eventoUpdateToOneWithWhereWithoutAsistenciasInput, eventoUpdateWithoutAsistenciasInput>, eventoUncheckedUpdateWithoutAsistenciasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type entradaCreateNestedManyWithoutFK_eventoInput = {
    create?: XOR<entradaCreateWithoutFK_eventoInput, entradaUncheckedCreateWithoutFK_eventoInput> | entradaCreateWithoutFK_eventoInput[] | entradaUncheckedCreateWithoutFK_eventoInput[]
    connectOrCreate?: entradaCreateOrConnectWithoutFK_eventoInput | entradaCreateOrConnectWithoutFK_eventoInput[]
    createMany?: entradaCreateManyFK_eventoInputEnvelope
    connect?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
  }

  export type asistenciaCreateNestedManyWithoutFK_eventoInput = {
    create?: XOR<asistenciaCreateWithoutFK_eventoInput, asistenciaUncheckedCreateWithoutFK_eventoInput> | asistenciaCreateWithoutFK_eventoInput[] | asistenciaUncheckedCreateWithoutFK_eventoInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutFK_eventoInput | asistenciaCreateOrConnectWithoutFK_eventoInput[]
    createMany?: asistenciaCreateManyFK_eventoInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type lugarCreateNestedOneWithoutEventosInput = {
    create?: XOR<lugarCreateWithoutEventosInput, lugarUncheckedCreateWithoutEventosInput>
    connectOrCreate?: lugarCreateOrConnectWithoutEventosInput
    connect?: lugarWhereUniqueInput
  }

  export type organizadorCreateNestedOneWithoutEventosInput = {
    create?: XOR<organizadorCreateWithoutEventosInput, organizadorUncheckedCreateWithoutEventosInput>
    connectOrCreate?: organizadorCreateOrConnectWithoutEventosInput
    connect?: organizadorWhereUniqueInput
  }

  export type entradaUncheckedCreateNestedManyWithoutFK_eventoInput = {
    create?: XOR<entradaCreateWithoutFK_eventoInput, entradaUncheckedCreateWithoutFK_eventoInput> | entradaCreateWithoutFK_eventoInput[] | entradaUncheckedCreateWithoutFK_eventoInput[]
    connectOrCreate?: entradaCreateOrConnectWithoutFK_eventoInput | entradaCreateOrConnectWithoutFK_eventoInput[]
    createMany?: entradaCreateManyFK_eventoInputEnvelope
    connect?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
  }

  export type asistenciaUncheckedCreateNestedManyWithoutFK_eventoInput = {
    create?: XOR<asistenciaCreateWithoutFK_eventoInput, asistenciaUncheckedCreateWithoutFK_eventoInput> | asistenciaCreateWithoutFK_eventoInput[] | asistenciaUncheckedCreateWithoutFK_eventoInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutFK_eventoInput | asistenciaCreateOrConnectWithoutFK_eventoInput[]
    createMany?: asistenciaCreateManyFK_eventoInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumestado_eventoFieldUpdateOperationsInput = {
    set?: $Enums.estado_evento
  }

  export type entradaUpdateManyWithoutFK_eventoNestedInput = {
    create?: XOR<entradaCreateWithoutFK_eventoInput, entradaUncheckedCreateWithoutFK_eventoInput> | entradaCreateWithoutFK_eventoInput[] | entradaUncheckedCreateWithoutFK_eventoInput[]
    connectOrCreate?: entradaCreateOrConnectWithoutFK_eventoInput | entradaCreateOrConnectWithoutFK_eventoInput[]
    upsert?: entradaUpsertWithWhereUniqueWithoutFK_eventoInput | entradaUpsertWithWhereUniqueWithoutFK_eventoInput[]
    createMany?: entradaCreateManyFK_eventoInputEnvelope
    set?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
    disconnect?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
    delete?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
    connect?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
    update?: entradaUpdateWithWhereUniqueWithoutFK_eventoInput | entradaUpdateWithWhereUniqueWithoutFK_eventoInput[]
    updateMany?: entradaUpdateManyWithWhereWithoutFK_eventoInput | entradaUpdateManyWithWhereWithoutFK_eventoInput[]
    deleteMany?: entradaScalarWhereInput | entradaScalarWhereInput[]
  }

  export type asistenciaUpdateManyWithoutFK_eventoNestedInput = {
    create?: XOR<asistenciaCreateWithoutFK_eventoInput, asistenciaUncheckedCreateWithoutFK_eventoInput> | asistenciaCreateWithoutFK_eventoInput[] | asistenciaUncheckedCreateWithoutFK_eventoInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutFK_eventoInput | asistenciaCreateOrConnectWithoutFK_eventoInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutFK_eventoInput | asistenciaUpsertWithWhereUniqueWithoutFK_eventoInput[]
    createMany?: asistenciaCreateManyFK_eventoInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutFK_eventoInput | asistenciaUpdateWithWhereUniqueWithoutFK_eventoInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutFK_eventoInput | asistenciaUpdateManyWithWhereWithoutFK_eventoInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type lugarUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<lugarCreateWithoutEventosInput, lugarUncheckedCreateWithoutEventosInput>
    connectOrCreate?: lugarCreateOrConnectWithoutEventosInput
    upsert?: lugarUpsertWithoutEventosInput
    connect?: lugarWhereUniqueInput
    update?: XOR<XOR<lugarUpdateToOneWithWhereWithoutEventosInput, lugarUpdateWithoutEventosInput>, lugarUncheckedUpdateWithoutEventosInput>
  }

  export type organizadorUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<organizadorCreateWithoutEventosInput, organizadorUncheckedCreateWithoutEventosInput>
    connectOrCreate?: organizadorCreateOrConnectWithoutEventosInput
    upsert?: organizadorUpsertWithoutEventosInput
    connect?: organizadorWhereUniqueInput
    update?: XOR<XOR<organizadorUpdateToOneWithWhereWithoutEventosInput, organizadorUpdateWithoutEventosInput>, organizadorUncheckedUpdateWithoutEventosInput>
  }

  export type entradaUncheckedUpdateManyWithoutFK_eventoNestedInput = {
    create?: XOR<entradaCreateWithoutFK_eventoInput, entradaUncheckedCreateWithoutFK_eventoInput> | entradaCreateWithoutFK_eventoInput[] | entradaUncheckedCreateWithoutFK_eventoInput[]
    connectOrCreate?: entradaCreateOrConnectWithoutFK_eventoInput | entradaCreateOrConnectWithoutFK_eventoInput[]
    upsert?: entradaUpsertWithWhereUniqueWithoutFK_eventoInput | entradaUpsertWithWhereUniqueWithoutFK_eventoInput[]
    createMany?: entradaCreateManyFK_eventoInputEnvelope
    set?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
    disconnect?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
    delete?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
    connect?: entradaWhereUniqueInput | entradaWhereUniqueInput[]
    update?: entradaUpdateWithWhereUniqueWithoutFK_eventoInput | entradaUpdateWithWhereUniqueWithoutFK_eventoInput[]
    updateMany?: entradaUpdateManyWithWhereWithoutFK_eventoInput | entradaUpdateManyWithWhereWithoutFK_eventoInput[]
    deleteMany?: entradaScalarWhereInput | entradaScalarWhereInput[]
  }

  export type asistenciaUncheckedUpdateManyWithoutFK_eventoNestedInput = {
    create?: XOR<asistenciaCreateWithoutFK_eventoInput, asistenciaUncheckedCreateWithoutFK_eventoInput> | asistenciaCreateWithoutFK_eventoInput[] | asistenciaUncheckedCreateWithoutFK_eventoInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutFK_eventoInput | asistenciaCreateOrConnectWithoutFK_eventoInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutFK_eventoInput | asistenciaUpsertWithWhereUniqueWithoutFK_eventoInput[]
    createMany?: asistenciaCreateManyFK_eventoInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutFK_eventoInput | asistenciaUpdateWithWhereUniqueWithoutFK_eventoInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutFK_eventoInput | asistenciaUpdateManyWithWhereWithoutFK_eventoInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type eventoCreateNestedManyWithoutFK_lugarInput = {
    create?: XOR<eventoCreateWithoutFK_lugarInput, eventoUncheckedCreateWithoutFK_lugarInput> | eventoCreateWithoutFK_lugarInput[] | eventoUncheckedCreateWithoutFK_lugarInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutFK_lugarInput | eventoCreateOrConnectWithoutFK_lugarInput[]
    createMany?: eventoCreateManyFK_lugarInputEnvelope
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
  }

  export type eventoUncheckedCreateNestedManyWithoutFK_lugarInput = {
    create?: XOR<eventoCreateWithoutFK_lugarInput, eventoUncheckedCreateWithoutFK_lugarInput> | eventoCreateWithoutFK_lugarInput[] | eventoUncheckedCreateWithoutFK_lugarInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutFK_lugarInput | eventoCreateOrConnectWithoutFK_lugarInput[]
    createMany?: eventoCreateManyFK_lugarInputEnvelope
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type eventoUpdateManyWithoutFK_lugarNestedInput = {
    create?: XOR<eventoCreateWithoutFK_lugarInput, eventoUncheckedCreateWithoutFK_lugarInput> | eventoCreateWithoutFK_lugarInput[] | eventoUncheckedCreateWithoutFK_lugarInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutFK_lugarInput | eventoCreateOrConnectWithoutFK_lugarInput[]
    upsert?: eventoUpsertWithWhereUniqueWithoutFK_lugarInput | eventoUpsertWithWhereUniqueWithoutFK_lugarInput[]
    createMany?: eventoCreateManyFK_lugarInputEnvelope
    set?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    disconnect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    delete?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    update?: eventoUpdateWithWhereUniqueWithoutFK_lugarInput | eventoUpdateWithWhereUniqueWithoutFK_lugarInput[]
    updateMany?: eventoUpdateManyWithWhereWithoutFK_lugarInput | eventoUpdateManyWithWhereWithoutFK_lugarInput[]
    deleteMany?: eventoScalarWhereInput | eventoScalarWhereInput[]
  }

  export type eventoUncheckedUpdateManyWithoutFK_lugarNestedInput = {
    create?: XOR<eventoCreateWithoutFK_lugarInput, eventoUncheckedCreateWithoutFK_lugarInput> | eventoCreateWithoutFK_lugarInput[] | eventoUncheckedCreateWithoutFK_lugarInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutFK_lugarInput | eventoCreateOrConnectWithoutFK_lugarInput[]
    upsert?: eventoUpsertWithWhereUniqueWithoutFK_lugarInput | eventoUpsertWithWhereUniqueWithoutFK_lugarInput[]
    createMany?: eventoCreateManyFK_lugarInputEnvelope
    set?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    disconnect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    delete?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    update?: eventoUpdateWithWhereUniqueWithoutFK_lugarInput | eventoUpdateWithWhereUniqueWithoutFK_lugarInput[]
    updateMany?: eventoUpdateManyWithWhereWithoutFK_lugarInput | eventoUpdateManyWithWhereWithoutFK_lugarInput[]
    deleteMany?: eventoScalarWhereInput | eventoScalarWhereInput[]
  }

  export type eventoCreateNestedOneWithoutEntradasInput = {
    create?: XOR<eventoCreateWithoutEntradasInput, eventoUncheckedCreateWithoutEntradasInput>
    connectOrCreate?: eventoCreateOrConnectWithoutEntradasInput
    connect?: eventoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type eventoUpdateOneRequiredWithoutEntradasNestedInput = {
    create?: XOR<eventoCreateWithoutEntradasInput, eventoUncheckedCreateWithoutEntradasInput>
    connectOrCreate?: eventoCreateOrConnectWithoutEntradasInput
    upsert?: eventoUpsertWithoutEntradasInput
    connect?: eventoWhereUniqueInput
    update?: XOR<XOR<eventoUpdateToOneWithWhereWithoutEntradasInput, eventoUpdateWithoutEntradasInput>, eventoUncheckedUpdateWithoutEntradasInput>
  }

  export type ticket_digitalCreateNestedManyWithoutFK_ordenInput = {
    create?: XOR<ticket_digitalCreateWithoutFK_ordenInput, ticket_digitalUncheckedCreateWithoutFK_ordenInput> | ticket_digitalCreateWithoutFK_ordenInput[] | ticket_digitalUncheckedCreateWithoutFK_ordenInput[]
    connectOrCreate?: ticket_digitalCreateOrConnectWithoutFK_ordenInput | ticket_digitalCreateOrConnectWithoutFK_ordenInput[]
    createMany?: ticket_digitalCreateManyFK_ordenInputEnvelope
    connect?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
  }

  export type compradorCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<compradorCreateWithoutOrdenesInput, compradorUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: compradorCreateOrConnectWithoutOrdenesInput
    connect?: compradorWhereUniqueInput
  }

  export type ticket_digitalUncheckedCreateNestedManyWithoutFK_ordenInput = {
    create?: XOR<ticket_digitalCreateWithoutFK_ordenInput, ticket_digitalUncheckedCreateWithoutFK_ordenInput> | ticket_digitalCreateWithoutFK_ordenInput[] | ticket_digitalUncheckedCreateWithoutFK_ordenInput[]
    connectOrCreate?: ticket_digitalCreateOrConnectWithoutFK_ordenInput | ticket_digitalCreateOrConnectWithoutFK_ordenInput[]
    createMany?: ticket_digitalCreateManyFK_ordenInputEnvelope
    connect?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
  }

  export type ticket_digitalUpdateManyWithoutFK_ordenNestedInput = {
    create?: XOR<ticket_digitalCreateWithoutFK_ordenInput, ticket_digitalUncheckedCreateWithoutFK_ordenInput> | ticket_digitalCreateWithoutFK_ordenInput[] | ticket_digitalUncheckedCreateWithoutFK_ordenInput[]
    connectOrCreate?: ticket_digitalCreateOrConnectWithoutFK_ordenInput | ticket_digitalCreateOrConnectWithoutFK_ordenInput[]
    upsert?: ticket_digitalUpsertWithWhereUniqueWithoutFK_ordenInput | ticket_digitalUpsertWithWhereUniqueWithoutFK_ordenInput[]
    createMany?: ticket_digitalCreateManyFK_ordenInputEnvelope
    set?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
    disconnect?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
    delete?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
    connect?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
    update?: ticket_digitalUpdateWithWhereUniqueWithoutFK_ordenInput | ticket_digitalUpdateWithWhereUniqueWithoutFK_ordenInput[]
    updateMany?: ticket_digitalUpdateManyWithWhereWithoutFK_ordenInput | ticket_digitalUpdateManyWithWhereWithoutFK_ordenInput[]
    deleteMany?: ticket_digitalScalarWhereInput | ticket_digitalScalarWhereInput[]
  }

  export type compradorUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<compradorCreateWithoutOrdenesInput, compradorUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: compradorCreateOrConnectWithoutOrdenesInput
    upsert?: compradorUpsertWithoutOrdenesInput
    connect?: compradorWhereUniqueInput
    update?: XOR<XOR<compradorUpdateToOneWithWhereWithoutOrdenesInput, compradorUpdateWithoutOrdenesInput>, compradorUncheckedUpdateWithoutOrdenesInput>
  }

  export type ticket_digitalUncheckedUpdateManyWithoutFK_ordenNestedInput = {
    create?: XOR<ticket_digitalCreateWithoutFK_ordenInput, ticket_digitalUncheckedCreateWithoutFK_ordenInput> | ticket_digitalCreateWithoutFK_ordenInput[] | ticket_digitalUncheckedCreateWithoutFK_ordenInput[]
    connectOrCreate?: ticket_digitalCreateOrConnectWithoutFK_ordenInput | ticket_digitalCreateOrConnectWithoutFK_ordenInput[]
    upsert?: ticket_digitalUpsertWithWhereUniqueWithoutFK_ordenInput | ticket_digitalUpsertWithWhereUniqueWithoutFK_ordenInput[]
    createMany?: ticket_digitalCreateManyFK_ordenInputEnvelope
    set?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
    disconnect?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
    delete?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
    connect?: ticket_digitalWhereUniqueInput | ticket_digitalWhereUniqueInput[]
    update?: ticket_digitalUpdateWithWhereUniqueWithoutFK_ordenInput | ticket_digitalUpdateWithWhereUniqueWithoutFK_ordenInput[]
    updateMany?: ticket_digitalUpdateManyWithWhereWithoutFK_ordenInput | ticket_digitalUpdateManyWithWhereWithoutFK_ordenInput[]
    deleteMany?: ticket_digitalScalarWhereInput | ticket_digitalScalarWhereInput[]
  }

  export type ordenCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ordenCreateWithoutTicketsInput, ordenUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ordenCreateOrConnectWithoutTicketsInput
    connect?: ordenWhereUniqueInput
  }

  export type Enumestado_ticket_digitalFieldUpdateOperationsInput = {
    set?: $Enums.estado_ticket_digital
  }

  export type ordenUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ordenCreateWithoutTicketsInput, ordenUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ordenCreateOrConnectWithoutTicketsInput
    upsert?: ordenUpsertWithoutTicketsInput
    connect?: ordenWhereUniqueInput
    update?: XOR<XOR<ordenUpdateToOneWithWhereWithoutTicketsInput, ordenUpdateWithoutTicketsInput>, ordenUncheckedUpdateWithoutTicketsInput>
  }

  export type asistenciaCreateNestedManyWithoutFK_asistenteInput = {
    create?: XOR<asistenciaCreateWithoutFK_asistenteInput, asistenciaUncheckedCreateWithoutFK_asistenteInput> | asistenciaCreateWithoutFK_asistenteInput[] | asistenciaUncheckedCreateWithoutFK_asistenteInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutFK_asistenteInput | asistenciaCreateOrConnectWithoutFK_asistenteInput[]
    createMany?: asistenciaCreateManyFK_asistenteInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type asistenciaUncheckedCreateNestedManyWithoutFK_asistenteInput = {
    create?: XOR<asistenciaCreateWithoutFK_asistenteInput, asistenciaUncheckedCreateWithoutFK_asistenteInput> | asistenciaCreateWithoutFK_asistenteInput[] | asistenciaUncheckedCreateWithoutFK_asistenteInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutFK_asistenteInput | asistenciaCreateOrConnectWithoutFK_asistenteInput[]
    createMany?: asistenciaCreateManyFK_asistenteInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type asistenciaUpdateManyWithoutFK_asistenteNestedInput = {
    create?: XOR<asistenciaCreateWithoutFK_asistenteInput, asistenciaUncheckedCreateWithoutFK_asistenteInput> | asistenciaCreateWithoutFK_asistenteInput[] | asistenciaUncheckedCreateWithoutFK_asistenteInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutFK_asistenteInput | asistenciaCreateOrConnectWithoutFK_asistenteInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutFK_asistenteInput | asistenciaUpsertWithWhereUniqueWithoutFK_asistenteInput[]
    createMany?: asistenciaCreateManyFK_asistenteInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutFK_asistenteInput | asistenciaUpdateWithWhereUniqueWithoutFK_asistenteInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutFK_asistenteInput | asistenciaUpdateManyWithWhereWithoutFK_asistenteInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type asistenciaUncheckedUpdateManyWithoutFK_asistenteNestedInput = {
    create?: XOR<asistenciaCreateWithoutFK_asistenteInput, asistenciaUncheckedCreateWithoutFK_asistenteInput> | asistenciaCreateWithoutFK_asistenteInput[] | asistenciaUncheckedCreateWithoutFK_asistenteInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutFK_asistenteInput | asistenciaCreateOrConnectWithoutFK_asistenteInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutFK_asistenteInput | asistenciaUpsertWithWhereUniqueWithoutFK_asistenteInput[]
    createMany?: asistenciaCreateManyFK_asistenteInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutFK_asistenteInput | asistenciaUpdateWithWhereUniqueWithoutFK_asistenteInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutFK_asistenteInput | asistenciaUpdateManyWithWhereWithoutFK_asistenteInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type eventoCreateNestedManyWithoutFK_organizadorInput = {
    create?: XOR<eventoCreateWithoutFK_organizadorInput, eventoUncheckedCreateWithoutFK_organizadorInput> | eventoCreateWithoutFK_organizadorInput[] | eventoUncheckedCreateWithoutFK_organizadorInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutFK_organizadorInput | eventoCreateOrConnectWithoutFK_organizadorInput[]
    createMany?: eventoCreateManyFK_organizadorInputEnvelope
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
  }

  export type eventoUncheckedCreateNestedManyWithoutFK_organizadorInput = {
    create?: XOR<eventoCreateWithoutFK_organizadorInput, eventoUncheckedCreateWithoutFK_organizadorInput> | eventoCreateWithoutFK_organizadorInput[] | eventoUncheckedCreateWithoutFK_organizadorInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutFK_organizadorInput | eventoCreateOrConnectWithoutFK_organizadorInput[]
    createMany?: eventoCreateManyFK_organizadorInputEnvelope
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
  }

  export type eventoUpdateManyWithoutFK_organizadorNestedInput = {
    create?: XOR<eventoCreateWithoutFK_organizadorInput, eventoUncheckedCreateWithoutFK_organizadorInput> | eventoCreateWithoutFK_organizadorInput[] | eventoUncheckedCreateWithoutFK_organizadorInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutFK_organizadorInput | eventoCreateOrConnectWithoutFK_organizadorInput[]
    upsert?: eventoUpsertWithWhereUniqueWithoutFK_organizadorInput | eventoUpsertWithWhereUniqueWithoutFK_organizadorInput[]
    createMany?: eventoCreateManyFK_organizadorInputEnvelope
    set?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    disconnect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    delete?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    update?: eventoUpdateWithWhereUniqueWithoutFK_organizadorInput | eventoUpdateWithWhereUniqueWithoutFK_organizadorInput[]
    updateMany?: eventoUpdateManyWithWhereWithoutFK_organizadorInput | eventoUpdateManyWithWhereWithoutFK_organizadorInput[]
    deleteMany?: eventoScalarWhereInput | eventoScalarWhereInput[]
  }

  export type eventoUncheckedUpdateManyWithoutFK_organizadorNestedInput = {
    create?: XOR<eventoCreateWithoutFK_organizadorInput, eventoUncheckedCreateWithoutFK_organizadorInput> | eventoCreateWithoutFK_organizadorInput[] | eventoUncheckedCreateWithoutFK_organizadorInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutFK_organizadorInput | eventoCreateOrConnectWithoutFK_organizadorInput[]
    upsert?: eventoUpsertWithWhereUniqueWithoutFK_organizadorInput | eventoUpsertWithWhereUniqueWithoutFK_organizadorInput[]
    createMany?: eventoCreateManyFK_organizadorInputEnvelope
    set?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    disconnect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    delete?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    update?: eventoUpdateWithWhereUniqueWithoutFK_organizadorInput | eventoUpdateWithWhereUniqueWithoutFK_organizadorInput[]
    updateMany?: eventoUpdateManyWithWhereWithoutFK_organizadorInput | eventoUpdateManyWithWhereWithoutFK_organizadorInput[]
    deleteMany?: eventoScalarWhereInput | eventoScalarWhereInput[]
  }

  export type ordenCreateNestedManyWithoutFK_compradorInput = {
    create?: XOR<ordenCreateWithoutFK_compradorInput, ordenUncheckedCreateWithoutFK_compradorInput> | ordenCreateWithoutFK_compradorInput[] | ordenUncheckedCreateWithoutFK_compradorInput[]
    connectOrCreate?: ordenCreateOrConnectWithoutFK_compradorInput | ordenCreateOrConnectWithoutFK_compradorInput[]
    createMany?: ordenCreateManyFK_compradorInputEnvelope
    connect?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
  }

  export type ordenUncheckedCreateNestedManyWithoutFK_compradorInput = {
    create?: XOR<ordenCreateWithoutFK_compradorInput, ordenUncheckedCreateWithoutFK_compradorInput> | ordenCreateWithoutFK_compradorInput[] | ordenUncheckedCreateWithoutFK_compradorInput[]
    connectOrCreate?: ordenCreateOrConnectWithoutFK_compradorInput | ordenCreateOrConnectWithoutFK_compradorInput[]
    createMany?: ordenCreateManyFK_compradorInputEnvelope
    connect?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
  }

  export type ordenUpdateManyWithoutFK_compradorNestedInput = {
    create?: XOR<ordenCreateWithoutFK_compradorInput, ordenUncheckedCreateWithoutFK_compradorInput> | ordenCreateWithoutFK_compradorInput[] | ordenUncheckedCreateWithoutFK_compradorInput[]
    connectOrCreate?: ordenCreateOrConnectWithoutFK_compradorInput | ordenCreateOrConnectWithoutFK_compradorInput[]
    upsert?: ordenUpsertWithWhereUniqueWithoutFK_compradorInput | ordenUpsertWithWhereUniqueWithoutFK_compradorInput[]
    createMany?: ordenCreateManyFK_compradorInputEnvelope
    set?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
    disconnect?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
    delete?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
    connect?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
    update?: ordenUpdateWithWhereUniqueWithoutFK_compradorInput | ordenUpdateWithWhereUniqueWithoutFK_compradorInput[]
    updateMany?: ordenUpdateManyWithWhereWithoutFK_compradorInput | ordenUpdateManyWithWhereWithoutFK_compradorInput[]
    deleteMany?: ordenScalarWhereInput | ordenScalarWhereInput[]
  }

  export type ordenUncheckedUpdateManyWithoutFK_compradorNestedInput = {
    create?: XOR<ordenCreateWithoutFK_compradorInput, ordenUncheckedCreateWithoutFK_compradorInput> | ordenCreateWithoutFK_compradorInput[] | ordenUncheckedCreateWithoutFK_compradorInput[]
    connectOrCreate?: ordenCreateOrConnectWithoutFK_compradorInput | ordenCreateOrConnectWithoutFK_compradorInput[]
    upsert?: ordenUpsertWithWhereUniqueWithoutFK_compradorInput | ordenUpsertWithWhereUniqueWithoutFK_compradorInput[]
    createMany?: ordenCreateManyFK_compradorInputEnvelope
    set?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
    disconnect?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
    delete?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
    connect?: ordenWhereUniqueInput | ordenWhereUniqueInput[]
    update?: ordenUpdateWithWhereUniqueWithoutFK_compradorInput | ordenUpdateWithWhereUniqueWithoutFK_compradorInput[]
    updateMany?: ordenUpdateManyWithWhereWithoutFK_compradorInput | ordenUpdateManyWithWhereWithoutFK_compradorInput[]
    deleteMany?: ordenScalarWhereInput | ordenScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumestado_eventoFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_evento | Enumestado_eventoFieldRefInput<$PrismaModel>
    in?: $Enums.estado_evento[] | ListEnumestado_eventoFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_evento[] | ListEnumestado_eventoFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_eventoFilter<$PrismaModel> | $Enums.estado_evento
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumestado_eventoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_evento | Enumestado_eventoFieldRefInput<$PrismaModel>
    in?: $Enums.estado_evento[] | ListEnumestado_eventoFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_evento[] | ListEnumestado_eventoFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_eventoWithAggregatesFilter<$PrismaModel> | $Enums.estado_evento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestado_eventoFilter<$PrismaModel>
    _max?: NestedEnumestado_eventoFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumestado_ticket_digitalFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_ticket_digital | Enumestado_ticket_digitalFieldRefInput<$PrismaModel>
    in?: $Enums.estado_ticket_digital[] | ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_ticket_digital[] | ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_ticket_digitalFilter<$PrismaModel> | $Enums.estado_ticket_digital
  }

  export type NestedEnumestado_ticket_digitalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_ticket_digital | Enumestado_ticket_digitalFieldRefInput<$PrismaModel>
    in?: $Enums.estado_ticket_digital[] | ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_ticket_digital[] | ListEnumestado_ticket_digitalFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_ticket_digitalWithAggregatesFilter<$PrismaModel> | $Enums.estado_ticket_digital
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestado_ticket_digitalFilter<$PrismaModel>
    _max?: NestedEnumestado_ticket_digitalFilter<$PrismaModel>
  }

  export type asistenteCreateWithoutAsistenciasInput = {
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenteUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenteCreateOrConnectWithoutAsistenciasInput = {
    where: asistenteWhereUniqueInput
    create: XOR<asistenteCreateWithoutAsistenciasInput, asistenteUncheckedCreateWithoutAsistenciasInput>
  }

  export type eventoCreateWithoutAsistenciasInput = {
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: entradaCreateNestedManyWithoutFK_eventoInput
    FK_lugar: lugarCreateNestedOneWithoutEventosInput
    FK_organizador: organizadorCreateNestedOneWithoutEventosInput
  }

  export type eventoUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    id_organizador: number
    id_lugar: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: entradaUncheckedCreateNestedManyWithoutFK_eventoInput
  }

  export type eventoCreateOrConnectWithoutAsistenciasInput = {
    where: eventoWhereUniqueInput
    create: XOR<eventoCreateWithoutAsistenciasInput, eventoUncheckedCreateWithoutAsistenciasInput>
  }

  export type asistenteUpsertWithoutAsistenciasInput = {
    update: XOR<asistenteUpdateWithoutAsistenciasInput, asistenteUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<asistenteCreateWithoutAsistenciasInput, asistenteUncheckedCreateWithoutAsistenciasInput>
    where?: asistenteWhereInput
  }

  export type asistenteUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: asistenteWhereInput
    data: XOR<asistenteUpdateWithoutAsistenciasInput, asistenteUncheckedUpdateWithoutAsistenciasInput>
  }

  export type asistenteUpdateWithoutAsistenciasInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenteUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoUpsertWithoutAsistenciasInput = {
    update: XOR<eventoUpdateWithoutAsistenciasInput, eventoUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<eventoCreateWithoutAsistenciasInput, eventoUncheckedCreateWithoutAsistenciasInput>
    where?: eventoWhereInput
  }

  export type eventoUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: eventoWhereInput
    data: XOR<eventoUpdateWithoutAsistenciasInput, eventoUncheckedUpdateWithoutAsistenciasInput>
  }

  export type eventoUpdateWithoutAsistenciasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: entradaUpdateManyWithoutFK_eventoNestedInput
    FK_lugar?: lugarUpdateOneRequiredWithoutEventosNestedInput
    FK_organizador?: organizadorUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventoUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    id_organizador?: IntFieldUpdateOperationsInput | number
    id_lugar?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: entradaUncheckedUpdateManyWithoutFK_eventoNestedInput
  }

  export type entradaCreateWithoutFK_eventoInput = {
    cod?: number
    tipo_entrada: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    horario_inicio: Date | string
    horario_fin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type entradaUncheckedCreateWithoutFK_eventoInput = {
    cod?: number
    tipo_entrada: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    horario_inicio: Date | string
    horario_fin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type entradaCreateOrConnectWithoutFK_eventoInput = {
    where: entradaWhereUniqueInput
    create: XOR<entradaCreateWithoutFK_eventoInput, entradaUncheckedCreateWithoutFK_eventoInput>
  }

  export type entradaCreateManyFK_eventoInputEnvelope = {
    data: entradaCreateManyFK_eventoInput | entradaCreateManyFK_eventoInput[]
    skipDuplicates?: boolean
  }

  export type asistenciaCreateWithoutFK_eventoInput = {
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FK_asistente: asistenteCreateNestedOneWithoutAsistenciasInput
  }

  export type asistenciaUncheckedCreateWithoutFK_eventoInput = {
    id_asistente: number
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenciaCreateOrConnectWithoutFK_eventoInput = {
    where: asistenciaWhereUniqueInput
    create: XOR<asistenciaCreateWithoutFK_eventoInput, asistenciaUncheckedCreateWithoutFK_eventoInput>
  }

  export type asistenciaCreateManyFK_eventoInputEnvelope = {
    data: asistenciaCreateManyFK_eventoInput | asistenciaCreateManyFK_eventoInput[]
    skipDuplicates?: boolean
  }

  export type lugarCreateWithoutEventosInput = {
    capacidad: number
    descripcion?: string | null
    ciudad: string
    calle: string
    altura: string
    cp: number
    provincia: string
  }

  export type lugarUncheckedCreateWithoutEventosInput = {
    id?: number
    capacidad: number
    descripcion?: string | null
    ciudad: string
    calle: string
    altura: string
    cp: number
    provincia: string
  }

  export type lugarCreateOrConnectWithoutEventosInput = {
    where: lugarWhereUniqueInput
    create: XOR<lugarCreateWithoutEventosInput, lugarUncheckedCreateWithoutEventosInput>
  }

  export type organizadorCreateWithoutEventosInput = {
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    cuit?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type organizadorUncheckedCreateWithoutEventosInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    cuit?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type organizadorCreateOrConnectWithoutEventosInput = {
    where: organizadorWhereUniqueInput
    create: XOR<organizadorCreateWithoutEventosInput, organizadorUncheckedCreateWithoutEventosInput>
  }

  export type entradaUpsertWithWhereUniqueWithoutFK_eventoInput = {
    where: entradaWhereUniqueInput
    update: XOR<entradaUpdateWithoutFK_eventoInput, entradaUncheckedUpdateWithoutFK_eventoInput>
    create: XOR<entradaCreateWithoutFK_eventoInput, entradaUncheckedCreateWithoutFK_eventoInput>
  }

  export type entradaUpdateWithWhereUniqueWithoutFK_eventoInput = {
    where: entradaWhereUniqueInput
    data: XOR<entradaUpdateWithoutFK_eventoInput, entradaUncheckedUpdateWithoutFK_eventoInput>
  }

  export type entradaUpdateManyWithWhereWithoutFK_eventoInput = {
    where: entradaScalarWhereInput
    data: XOR<entradaUpdateManyMutationInput, entradaUncheckedUpdateManyWithoutFK_eventoInput>
  }

  export type entradaScalarWhereInput = {
    AND?: entradaScalarWhereInput | entradaScalarWhereInput[]
    OR?: entradaScalarWhereInput[]
    NOT?: entradaScalarWhereInput | entradaScalarWhereInput[]
    id_evento?: IntFilter<"entrada"> | number
    cod?: IntFilter<"entrada"> | number
    tipo_entrada?: StringFilter<"entrada"> | string
    precio_unitario?: DecimalFilter<"entrada"> | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFilter<"entrada"> | Date | string
    horario_fin?: DateTimeFilter<"entrada"> | Date | string
    createdAt?: DateTimeFilter<"entrada"> | Date | string
    updatedAt?: DateTimeFilter<"entrada"> | Date | string
  }

  export type asistenciaUpsertWithWhereUniqueWithoutFK_eventoInput = {
    where: asistenciaWhereUniqueInput
    update: XOR<asistenciaUpdateWithoutFK_eventoInput, asistenciaUncheckedUpdateWithoutFK_eventoInput>
    create: XOR<asistenciaCreateWithoutFK_eventoInput, asistenciaUncheckedCreateWithoutFK_eventoInput>
  }

  export type asistenciaUpdateWithWhereUniqueWithoutFK_eventoInput = {
    where: asistenciaWhereUniqueInput
    data: XOR<asistenciaUpdateWithoutFK_eventoInput, asistenciaUncheckedUpdateWithoutFK_eventoInput>
  }

  export type asistenciaUpdateManyWithWhereWithoutFK_eventoInput = {
    where: asistenciaScalarWhereInput
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyWithoutFK_eventoInput>
  }

  export type asistenciaScalarWhereInput = {
    AND?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
    OR?: asistenciaScalarWhereInput[]
    NOT?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
    id_asistente?: IntFilter<"asistencia"> | number
    id_evento?: IntFilter<"asistencia"> | number
    fecha_hora_asistencia?: DateTimeNullableFilter<"asistencia"> | Date | string | null
    createdAt?: DateTimeFilter<"asistencia"> | Date | string
    updatedAt?: DateTimeFilter<"asistencia"> | Date | string
  }

  export type lugarUpsertWithoutEventosInput = {
    update: XOR<lugarUpdateWithoutEventosInput, lugarUncheckedUpdateWithoutEventosInput>
    create: XOR<lugarCreateWithoutEventosInput, lugarUncheckedCreateWithoutEventosInput>
    where?: lugarWhereInput
  }

  export type lugarUpdateToOneWithWhereWithoutEventosInput = {
    where?: lugarWhereInput
    data: XOR<lugarUpdateWithoutEventosInput, lugarUncheckedUpdateWithoutEventosInput>
  }

  export type lugarUpdateWithoutEventosInput = {
    capacidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    altura?: StringFieldUpdateOperationsInput | string
    cp?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
  }

  export type lugarUncheckedUpdateWithoutEventosInput = {
    id?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    altura?: StringFieldUpdateOperationsInput | string
    cp?: IntFieldUpdateOperationsInput | number
    provincia?: StringFieldUpdateOperationsInput | string
  }

  export type organizadorUpsertWithoutEventosInput = {
    update: XOR<organizadorUpdateWithoutEventosInput, organizadorUncheckedUpdateWithoutEventosInput>
    create: XOR<organizadorCreateWithoutEventosInput, organizadorUncheckedCreateWithoutEventosInput>
    where?: organizadorWhereInput
  }

  export type organizadorUpdateToOneWithWhereWithoutEventosInput = {
    where?: organizadorWhereInput
    data: XOR<organizadorUpdateWithoutEventosInput, organizadorUncheckedUpdateWithoutEventosInput>
  }

  export type organizadorUpdateWithoutEventosInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    cuit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizadorUncheckedUpdateWithoutEventosInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    cuit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoCreateWithoutFK_lugarInput = {
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: entradaCreateNestedManyWithoutFK_eventoInput
    asistencias?: asistenciaCreateNestedManyWithoutFK_eventoInput
    FK_organizador: organizadorCreateNestedOneWithoutEventosInput
  }

  export type eventoUncheckedCreateWithoutFK_lugarInput = {
    id?: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    id_organizador: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: entradaUncheckedCreateNestedManyWithoutFK_eventoInput
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutFK_eventoInput
  }

  export type eventoCreateOrConnectWithoutFK_lugarInput = {
    where: eventoWhereUniqueInput
    create: XOR<eventoCreateWithoutFK_lugarInput, eventoUncheckedCreateWithoutFK_lugarInput>
  }

  export type eventoCreateManyFK_lugarInputEnvelope = {
    data: eventoCreateManyFK_lugarInput | eventoCreateManyFK_lugarInput[]
    skipDuplicates?: boolean
  }

  export type eventoUpsertWithWhereUniqueWithoutFK_lugarInput = {
    where: eventoWhereUniqueInput
    update: XOR<eventoUpdateWithoutFK_lugarInput, eventoUncheckedUpdateWithoutFK_lugarInput>
    create: XOR<eventoCreateWithoutFK_lugarInput, eventoUncheckedCreateWithoutFK_lugarInput>
  }

  export type eventoUpdateWithWhereUniqueWithoutFK_lugarInput = {
    where: eventoWhereUniqueInput
    data: XOR<eventoUpdateWithoutFK_lugarInput, eventoUncheckedUpdateWithoutFK_lugarInput>
  }

  export type eventoUpdateManyWithWhereWithoutFK_lugarInput = {
    where: eventoScalarWhereInput
    data: XOR<eventoUpdateManyMutationInput, eventoUncheckedUpdateManyWithoutFK_lugarInput>
  }

  export type eventoScalarWhereInput = {
    AND?: eventoScalarWhereInput | eventoScalarWhereInput[]
    OR?: eventoScalarWhereInput[]
    NOT?: eventoScalarWhereInput | eventoScalarWhereInput[]
    id?: IntFilter<"evento"> | number
    titulo?: StringFilter<"evento"> | string
    categoria?: StringFilter<"evento"> | string
    fecha_hora_inicio?: DateTimeFilter<"evento"> | Date | string
    fecha_hora_fin?: DateTimeFilter<"evento"> | Date | string
    estado?: Enumestado_eventoFilter<"evento"> | $Enums.estado_evento
    stock?: IntFilter<"evento"> | number
    id_organizador?: IntFilter<"evento"> | number
    id_lugar?: IntFilter<"evento"> | number
    fecha_hora_creacion?: DateTimeFilter<"evento"> | Date | string
    fecha_hora_cancelacion?: DateTimeNullableFilter<"evento"> | Date | string | null
    createdAt?: DateTimeFilter<"evento"> | Date | string
    updatedAt?: DateTimeFilter<"evento"> | Date | string
  }

  export type eventoCreateWithoutEntradasInput = {
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    asistencias?: asistenciaCreateNestedManyWithoutFK_eventoInput
    FK_lugar: lugarCreateNestedOneWithoutEventosInput
    FK_organizador: organizadorCreateNestedOneWithoutEventosInput
  }

  export type eventoUncheckedCreateWithoutEntradasInput = {
    id?: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    id_organizador: number
    id_lugar: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutFK_eventoInput
  }

  export type eventoCreateOrConnectWithoutEntradasInput = {
    where: eventoWhereUniqueInput
    create: XOR<eventoCreateWithoutEntradasInput, eventoUncheckedCreateWithoutEntradasInput>
  }

  export type eventoUpsertWithoutEntradasInput = {
    update: XOR<eventoUpdateWithoutEntradasInput, eventoUncheckedUpdateWithoutEntradasInput>
    create: XOR<eventoCreateWithoutEntradasInput, eventoUncheckedCreateWithoutEntradasInput>
    where?: eventoWhereInput
  }

  export type eventoUpdateToOneWithWhereWithoutEntradasInput = {
    where?: eventoWhereInput
    data: XOR<eventoUpdateWithoutEntradasInput, eventoUncheckedUpdateWithoutEntradasInput>
  }

  export type eventoUpdateWithoutEntradasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUpdateManyWithoutFK_eventoNestedInput
    FK_lugar?: lugarUpdateOneRequiredWithoutEventosNestedInput
    FK_organizador?: organizadorUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventoUncheckedUpdateWithoutEntradasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    id_organizador?: IntFieldUpdateOperationsInput | number
    id_lugar?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutFK_eventoNestedInput
  }

  export type ticket_digitalCreateWithoutFK_ordenInput = {
    cod?: number
    qr: string
    estado?: $Enums.estado_ticket_digital
    fecha_hora_uso?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ticket_digitalUncheckedCreateWithoutFK_ordenInput = {
    cod?: number
    qr: string
    estado?: $Enums.estado_ticket_digital
    fecha_hora_uso?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ticket_digitalCreateOrConnectWithoutFK_ordenInput = {
    where: ticket_digitalWhereUniqueInput
    create: XOR<ticket_digitalCreateWithoutFK_ordenInput, ticket_digitalUncheckedCreateWithoutFK_ordenInput>
  }

  export type ticket_digitalCreateManyFK_ordenInputEnvelope = {
    data: ticket_digitalCreateManyFK_ordenInput | ticket_digitalCreateManyFK_ordenInput[]
    skipDuplicates?: boolean
  }

  export type compradorCreateWithoutOrdenesInput = {
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type compradorUncheckedCreateWithoutOrdenesInput = {
    id?: number
    t_doc: string
    n_doc: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type compradorCreateOrConnectWithoutOrdenesInput = {
    where: compradorWhereUniqueInput
    create: XOR<compradorCreateWithoutOrdenesInput, compradorUncheckedCreateWithoutOrdenesInput>
  }

  export type ticket_digitalUpsertWithWhereUniqueWithoutFK_ordenInput = {
    where: ticket_digitalWhereUniqueInput
    update: XOR<ticket_digitalUpdateWithoutFK_ordenInput, ticket_digitalUncheckedUpdateWithoutFK_ordenInput>
    create: XOR<ticket_digitalCreateWithoutFK_ordenInput, ticket_digitalUncheckedCreateWithoutFK_ordenInput>
  }

  export type ticket_digitalUpdateWithWhereUniqueWithoutFK_ordenInput = {
    where: ticket_digitalWhereUniqueInput
    data: XOR<ticket_digitalUpdateWithoutFK_ordenInput, ticket_digitalUncheckedUpdateWithoutFK_ordenInput>
  }

  export type ticket_digitalUpdateManyWithWhereWithoutFK_ordenInput = {
    where: ticket_digitalScalarWhereInput
    data: XOR<ticket_digitalUpdateManyMutationInput, ticket_digitalUncheckedUpdateManyWithoutFK_ordenInput>
  }

  export type ticket_digitalScalarWhereInput = {
    AND?: ticket_digitalScalarWhereInput | ticket_digitalScalarWhereInput[]
    OR?: ticket_digitalScalarWhereInput[]
    NOT?: ticket_digitalScalarWhereInput | ticket_digitalScalarWhereInput[]
    id_comprador?: IntFilter<"ticket_digital"> | number
    cod_orden?: IntFilter<"ticket_digital"> | number
    cod?: IntFilter<"ticket_digital"> | number
    qr?: StringFilter<"ticket_digital"> | string
    estado?: Enumestado_ticket_digitalFilter<"ticket_digital"> | $Enums.estado_ticket_digital
    fecha_hora_uso?: DateTimeNullableFilter<"ticket_digital"> | Date | string | null
    createdAt?: DateTimeFilter<"ticket_digital"> | Date | string
    updatedAt?: DateTimeFilter<"ticket_digital"> | Date | string
  }

  export type compradorUpsertWithoutOrdenesInput = {
    update: XOR<compradorUpdateWithoutOrdenesInput, compradorUncheckedUpdateWithoutOrdenesInput>
    create: XOR<compradorCreateWithoutOrdenesInput, compradorUncheckedCreateWithoutOrdenesInput>
    where?: compradorWhereInput
  }

  export type compradorUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: compradorWhereInput
    data: XOR<compradorUpdateWithoutOrdenesInput, compradorUncheckedUpdateWithoutOrdenesInput>
  }

  export type compradorUpdateWithoutOrdenesInput = {
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type compradorUncheckedUpdateWithoutOrdenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    t_doc?: StringFieldUpdateOperationsInput | string
    n_doc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordenCreateWithoutTicketsInput = {
    cod?: number
    fecha_hora?: Date | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: number
    precio_total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    FK_comprador: compradorCreateNestedOneWithoutOrdenesInput
  }

  export type ordenUncheckedCreateWithoutTicketsInput = {
    id_comprador: number
    cod?: number
    fecha_hora?: Date | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: number
    precio_total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordenCreateOrConnectWithoutTicketsInput = {
    where: ordenWhereUniqueInput
    create: XOR<ordenCreateWithoutTicketsInput, ordenUncheckedCreateWithoutTicketsInput>
  }

  export type ordenUpsertWithoutTicketsInput = {
    update: XOR<ordenUpdateWithoutTicketsInput, ordenUncheckedUpdateWithoutTicketsInput>
    create: XOR<ordenCreateWithoutTicketsInput, ordenUncheckedCreateWithoutTicketsInput>
    where?: ordenWhereInput
  }

  export type ordenUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ordenWhereInput
    data: XOR<ordenUpdateWithoutTicketsInput, ordenUncheckedUpdateWithoutTicketsInput>
  }

  export type ordenUpdateWithoutTicketsInput = {
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FK_comprador?: compradorUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type ordenUncheckedUpdateWithoutTicketsInput = {
    id_comprador?: IntFieldUpdateOperationsInput | number
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaCreateWithoutFK_asistenteInput = {
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FK_evento: eventoCreateNestedOneWithoutAsistenciasInput
  }

  export type asistenciaUncheckedCreateWithoutFK_asistenteInput = {
    id_evento: number
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenciaCreateOrConnectWithoutFK_asistenteInput = {
    where: asistenciaWhereUniqueInput
    create: XOR<asistenciaCreateWithoutFK_asistenteInput, asistenciaUncheckedCreateWithoutFK_asistenteInput>
  }

  export type asistenciaCreateManyFK_asistenteInputEnvelope = {
    data: asistenciaCreateManyFK_asistenteInput | asistenciaCreateManyFK_asistenteInput[]
    skipDuplicates?: boolean
  }

  export type asistenciaUpsertWithWhereUniqueWithoutFK_asistenteInput = {
    where: asistenciaWhereUniqueInput
    update: XOR<asistenciaUpdateWithoutFK_asistenteInput, asistenciaUncheckedUpdateWithoutFK_asistenteInput>
    create: XOR<asistenciaCreateWithoutFK_asistenteInput, asistenciaUncheckedCreateWithoutFK_asistenteInput>
  }

  export type asistenciaUpdateWithWhereUniqueWithoutFK_asistenteInput = {
    where: asistenciaWhereUniqueInput
    data: XOR<asistenciaUpdateWithoutFK_asistenteInput, asistenciaUncheckedUpdateWithoutFK_asistenteInput>
  }

  export type asistenciaUpdateManyWithWhereWithoutFK_asistenteInput = {
    where: asistenciaScalarWhereInput
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyWithoutFK_asistenteInput>
  }

  export type eventoCreateWithoutFK_organizadorInput = {
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: entradaCreateNestedManyWithoutFK_eventoInput
    asistencias?: asistenciaCreateNestedManyWithoutFK_eventoInput
    FK_lugar: lugarCreateNestedOneWithoutEventosInput
  }

  export type eventoUncheckedCreateWithoutFK_organizadorInput = {
    id?: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    id_lugar: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: entradaUncheckedCreateNestedManyWithoutFK_eventoInput
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutFK_eventoInput
  }

  export type eventoCreateOrConnectWithoutFK_organizadorInput = {
    where: eventoWhereUniqueInput
    create: XOR<eventoCreateWithoutFK_organizadorInput, eventoUncheckedCreateWithoutFK_organizadorInput>
  }

  export type eventoCreateManyFK_organizadorInputEnvelope = {
    data: eventoCreateManyFK_organizadorInput | eventoCreateManyFK_organizadorInput[]
    skipDuplicates?: boolean
  }

  export type eventoUpsertWithWhereUniqueWithoutFK_organizadorInput = {
    where: eventoWhereUniqueInput
    update: XOR<eventoUpdateWithoutFK_organizadorInput, eventoUncheckedUpdateWithoutFK_organizadorInput>
    create: XOR<eventoCreateWithoutFK_organizadorInput, eventoUncheckedCreateWithoutFK_organizadorInput>
  }

  export type eventoUpdateWithWhereUniqueWithoutFK_organizadorInput = {
    where: eventoWhereUniqueInput
    data: XOR<eventoUpdateWithoutFK_organizadorInput, eventoUncheckedUpdateWithoutFK_organizadorInput>
  }

  export type eventoUpdateManyWithWhereWithoutFK_organizadorInput = {
    where: eventoScalarWhereInput
    data: XOR<eventoUpdateManyMutationInput, eventoUncheckedUpdateManyWithoutFK_organizadorInput>
  }

  export type ordenCreateWithoutFK_compradorInput = {
    cod?: number
    fecha_hora?: Date | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: number
    precio_total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: ticket_digitalCreateNestedManyWithoutFK_ordenInput
  }

  export type ordenUncheckedCreateWithoutFK_compradorInput = {
    cod?: number
    fecha_hora?: Date | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: number
    precio_total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: ticket_digitalUncheckedCreateNestedManyWithoutFK_ordenInput
  }

  export type ordenCreateOrConnectWithoutFK_compradorInput = {
    where: ordenWhereUniqueInput
    create: XOR<ordenCreateWithoutFK_compradorInput, ordenUncheckedCreateWithoutFK_compradorInput>
  }

  export type ordenCreateManyFK_compradorInputEnvelope = {
    data: ordenCreateManyFK_compradorInput | ordenCreateManyFK_compradorInput[]
    skipDuplicates?: boolean
  }

  export type ordenUpsertWithWhereUniqueWithoutFK_compradorInput = {
    where: ordenWhereUniqueInput
    update: XOR<ordenUpdateWithoutFK_compradorInput, ordenUncheckedUpdateWithoutFK_compradorInput>
    create: XOR<ordenCreateWithoutFK_compradorInput, ordenUncheckedCreateWithoutFK_compradorInput>
  }

  export type ordenUpdateWithWhereUniqueWithoutFK_compradorInput = {
    where: ordenWhereUniqueInput
    data: XOR<ordenUpdateWithoutFK_compradorInput, ordenUncheckedUpdateWithoutFK_compradorInput>
  }

  export type ordenUpdateManyWithWhereWithoutFK_compradorInput = {
    where: ordenScalarWhereInput
    data: XOR<ordenUpdateManyMutationInput, ordenUncheckedUpdateManyWithoutFK_compradorInput>
  }

  export type ordenScalarWhereInput = {
    AND?: ordenScalarWhereInput | ordenScalarWhereInput[]
    OR?: ordenScalarWhereInput[]
    NOT?: ordenScalarWhereInput | ordenScalarWhereInput[]
    id_comprador?: IntFilter<"orden"> | number
    cod?: IntFilter<"orden"> | number
    fecha_hora?: DateTimeFilter<"orden"> | Date | string
    precio_unitario?: DecimalFilter<"orden"> | Decimal | DecimalJsLike | number | string
    cantidad?: IntFilter<"orden"> | number
    precio_total?: DecimalFilter<"orden"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"orden"> | Date | string
    updatedAt?: DateTimeFilter<"orden"> | Date | string
  }

  export type entradaCreateManyFK_eventoInput = {
    cod?: number
    tipo_entrada: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    horario_inicio: Date | string
    horario_fin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenciaCreateManyFK_eventoInput = {
    id_asistente: number
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type entradaUpdateWithoutFK_eventoInput = {
    cod?: IntFieldUpdateOperationsInput | number
    tipo_entrada?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entradaUncheckedUpdateWithoutFK_eventoInput = {
    cod?: IntFieldUpdateOperationsInput | number
    tipo_entrada?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entradaUncheckedUpdateManyWithoutFK_eventoInput = {
    cod?: IntFieldUpdateOperationsInput | number
    tipo_entrada?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaUpdateWithoutFK_eventoInput = {
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FK_asistente?: asistenteUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type asistenciaUncheckedUpdateWithoutFK_eventoInput = {
    id_asistente?: IntFieldUpdateOperationsInput | number
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaUncheckedUpdateManyWithoutFK_eventoInput = {
    id_asistente?: IntFieldUpdateOperationsInput | number
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoCreateManyFK_lugarInput = {
    id?: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    id_organizador: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type eventoUpdateWithoutFK_lugarInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: entradaUpdateManyWithoutFK_eventoNestedInput
    asistencias?: asistenciaUpdateManyWithoutFK_eventoNestedInput
    FK_organizador?: organizadorUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventoUncheckedUpdateWithoutFK_lugarInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    id_organizador?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: entradaUncheckedUpdateManyWithoutFK_eventoNestedInput
    asistencias?: asistenciaUncheckedUpdateManyWithoutFK_eventoNestedInput
  }

  export type eventoUncheckedUpdateManyWithoutFK_lugarInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    id_organizador?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticket_digitalCreateManyFK_ordenInput = {
    cod?: number
    qr: string
    estado?: $Enums.estado_ticket_digital
    fecha_hora_uso?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ticket_digitalUpdateWithoutFK_ordenInput = {
    cod?: IntFieldUpdateOperationsInput | number
    qr?: StringFieldUpdateOperationsInput | string
    estado?: Enumestado_ticket_digitalFieldUpdateOperationsInput | $Enums.estado_ticket_digital
    fecha_hora_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticket_digitalUncheckedUpdateWithoutFK_ordenInput = {
    cod?: IntFieldUpdateOperationsInput | number
    qr?: StringFieldUpdateOperationsInput | string
    estado?: Enumestado_ticket_digitalFieldUpdateOperationsInput | $Enums.estado_ticket_digital
    fecha_hora_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticket_digitalUncheckedUpdateManyWithoutFK_ordenInput = {
    cod?: IntFieldUpdateOperationsInput | number
    qr?: StringFieldUpdateOperationsInput | string
    estado?: Enumestado_ticket_digitalFieldUpdateOperationsInput | $Enums.estado_ticket_digital
    fecha_hora_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaCreateManyFK_asistenteInput = {
    id_evento: number
    fecha_hora_asistencia?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type asistenciaUpdateWithoutFK_asistenteInput = {
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FK_evento?: eventoUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type asistenciaUncheckedUpdateWithoutFK_asistenteInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaUncheckedUpdateManyWithoutFK_asistenteInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_hora_asistencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoCreateManyFK_organizadorInput = {
    id?: number
    titulo: string
    categoria: string
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    estado?: $Enums.estado_evento
    stock: number
    id_lugar: number
    fecha_hora_creacion?: Date | string
    fecha_hora_cancelacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type eventoUpdateWithoutFK_organizadorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: entradaUpdateManyWithoutFK_eventoNestedInput
    asistencias?: asistenciaUpdateManyWithoutFK_eventoNestedInput
    FK_lugar?: lugarUpdateOneRequiredWithoutEventosNestedInput
  }

  export type eventoUncheckedUpdateWithoutFK_organizadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    id_lugar?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: entradaUncheckedUpdateManyWithoutFK_eventoNestedInput
    asistencias?: asistenciaUncheckedUpdateManyWithoutFK_eventoNestedInput
  }

  export type eventoUncheckedUpdateManyWithoutFK_organizadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: Enumestado_eventoFieldUpdateOperationsInput | $Enums.estado_evento
    stock?: IntFieldUpdateOperationsInput | number
    id_lugar?: IntFieldUpdateOperationsInput | number
    fecha_hora_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_cancelacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordenCreateManyFK_compradorInput = {
    cod?: number
    fecha_hora?: Date | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: number
    precio_total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordenUpdateWithoutFK_compradorInput = {
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: ticket_digitalUpdateManyWithoutFK_ordenNestedInput
  }

  export type ordenUncheckedUpdateWithoutFK_compradorInput = {
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: ticket_digitalUncheckedUpdateManyWithoutFK_ordenNestedInput
  }

  export type ordenUncheckedUpdateManyWithoutFK_compradorInput = {
    cod?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EventoCountOutputTypeDefaultArgs instead
     */
    export type EventoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LugarCountOutputTypeDefaultArgs instead
     */
    export type LugarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LugarCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdenCountOutputTypeDefaultArgs instead
     */
    export type OrdenCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdenCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AsistenteCountOutputTypeDefaultArgs instead
     */
    export type AsistenteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AsistenteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizadorCountOutputTypeDefaultArgs instead
     */
    export type OrganizadorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizadorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompradorCountOutputTypeDefaultArgs instead
     */
    export type CompradorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompradorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use asistenciaDefaultArgs instead
     */
    export type asistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = asistenciaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use eventoDefaultArgs instead
     */
    export type eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = eventoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use lugarDefaultArgs instead
     */
    export type lugarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = lugarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use entradaDefaultArgs instead
     */
    export type entradaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = entradaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ordenDefaultArgs instead
     */
    export type ordenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ordenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticket_digitalDefaultArgs instead
     */
    export type ticket_digitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticket_digitalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use asistenteDefaultArgs instead
     */
    export type asistenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = asistenteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use organizadorDefaultArgs instead
     */
    export type organizadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = organizadorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use compradorDefaultArgs instead
     */
    export type compradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = compradorDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}