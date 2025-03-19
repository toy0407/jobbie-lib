
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    resumes: ResumePayload<ExtArgs>[]
    applications: ApplicationPayload<ExtArgs>[]
    savedJobs: SavedJobPayload<ExtArgs>[]
    searchHistory: SearchHistoryPayload<ExtArgs>[]
    matchingCriteria: MatchingCriteriaPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type ResumePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Resume"
  objects: {
    user: UserPayload<ExtArgs>
    parentResume: ResumePayload<ExtArgs> | null
    versions: ResumePayload<ExtArgs>[]
    template: TemplatePayload<ExtArgs> | null
    applications: ApplicationPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    filePathUrl: string
    content: Prisma.JsonValue
    isBaseline: boolean
    parentResumeId: string | null
    templateId: string | null
    fileType: FileType
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["resume"]>
  composites: {}
}

/**
 * Model Resume
 * 
 */
export type Resume = runtime.Types.DefaultSelection<ResumePayload>
export type TemplatePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Template"
  objects: {
    resumes: ResumePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    type: TemplateType
    templatePath: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["template"]>
  composites: {}
}

/**
 * Model Template
 * 
 */
export type Template = runtime.Types.DefaultSelection<TemplatePayload>
export type JobPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Job"
  objects: {
    source: JobSourcePayload<ExtArgs>
    applications: ApplicationPayload<ExtArgs>[]
    SavedJob: SavedJobPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    title: string
    company: string
    location: string | null
    description: string
    salaryMin: number | null
    salaryMax: number | null
    experienceMin: number | null
    experienceMax: number | null
    postedAt: Date
    applyUrl: string
    sourceId: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["job"]>
  composites: {}
}

/**
 * Model Job
 * 
 */
export type Job = runtime.Types.DefaultSelection<JobPayload>
export type JobSourcePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "JobSource"
  objects: {
    jobs: JobPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    baseUrl: string
  }, ExtArgs["result"]["jobSource"]>
  composites: {}
}

/**
 * Model JobSource
 * 
 */
export type JobSource = runtime.Types.DefaultSelection<JobSourcePayload>
export type ApplicationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Application"
  objects: {
    user: UserPayload<ExtArgs>
    job: JobPayload<ExtArgs>
    resume: ResumePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    jobId: string
    resumeId: string
    status: string
    appliedAt: Date
  }, ExtArgs["result"]["application"]>
  composites: {}
}

/**
 * Model Application
 * 
 */
export type Application = runtime.Types.DefaultSelection<ApplicationPayload>
export type SavedJobPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SavedJob"
  objects: {
    user: UserPayload<ExtArgs>
    job: JobPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    jobId: string
    createdAt: Date
  }, ExtArgs["result"]["savedJob"]>
  composites: {}
}

/**
 * Model SavedJob
 * 
 */
export type SavedJob = runtime.Types.DefaultSelection<SavedJobPayload>
export type SearchHistoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SearchHistory"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    searchQuery: string
    filters: Prisma.JsonValue
    createdAt: Date
  }, ExtArgs["result"]["searchHistory"]>
  composites: {}
}

/**
 * Model SearchHistory
 * 
 */
export type SearchHistory = runtime.Types.DefaultSelection<SearchHistoryPayload>
export type MatchingCriteriaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "MatchingCriteria"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    role: string | null
    minSalary: number | null
    maxExperience: number | null
    locations: string[]
    skills: string[]
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["matchingCriteria"]>
  composites: {}
}

/**
 * Model MatchingCriteria
 * 
 */
export type MatchingCriteria = runtime.Types.DefaultSelection<MatchingCriteriaPayload>
export type CompanyPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Company"
  objects: {
    employees: CompanyEmployeePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    linkedInUrl: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["company"]>
  composites: {}
}

/**
 * Model Company
 * 
 */
export type Company = runtime.Types.DefaultSelection<CompanyPayload>
export type CompanyEmployeePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "CompanyEmployee"
  objects: {
    company: CompanyPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    companyId: string
    fullName: string
    linkedInProfile: string
    contactInfo: Prisma.JsonValue
    position: string | null
    lastVerified: Date | null
    createdAt: Date
  }, ExtArgs["result"]["companyEmployee"]>
  composites: {}
}

/**
 * Model CompanyEmployee
 * 
 */
export type CompanyEmployee = runtime.Types.DefaultSelection<CompanyEmployeePayload>

/**
 * Enums
 */

export const FileType: {
  PDF: 'PDF',
  LATEX: 'LATEX'
};

export type FileType = (typeof FileType)[keyof typeof FileType]


export const TemplateType: {
  MODERNCV: 'MODERNCV',
  AWESOMECV: 'AWESOMECV',
  SIMPLE: 'SIMPLE',
  TECHNICAL: 'TECHNICAL',
  CUSTOM: 'CUSTOM'
};

export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.jobSource`: Exposes CRUD operations for the **JobSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobSources
    * const jobSources = await prisma.jobSource.findMany()
    * ```
    */
  get jobSource(): Prisma.JobSourceDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.savedJob`: Exposes CRUD operations for the **SavedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedJobs
    * const savedJobs = await prisma.savedJob.findMany()
    * ```
    */
  get savedJob(): Prisma.SavedJobDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.searchHistory`: Exposes CRUD operations for the **SearchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchHistories
    * const searchHistories = await prisma.searchHistory.findMany()
    * ```
    */
  get searchHistory(): Prisma.SearchHistoryDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.matchingCriteria`: Exposes CRUD operations for the **MatchingCriteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchingCriteria
    * const matchingCriteria = await prisma.matchingCriteria.findMany()
    * ```
    */
  get matchingCriteria(): Prisma.MatchingCriteriaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.companyEmployee`: Exposes CRUD operations for the **CompanyEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyEmployees
    * const companyEmployees = await prisma.companyEmployee.findMany()
    * ```
    */
  get companyEmployee(): Prisma.CompanyEmployeeDelegate<GlobalReject, ExtArgs>;
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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resume: 'Resume',
    Template: 'Template',
    Job: 'Job',
    JobSource: 'JobSource',
    Application: 'Application',
    SavedJob: 'SavedJob',
    SearchHistory: 'SearchHistory',
    MatchingCriteria: 'MatchingCriteria',
    Company: 'Company',
    CompanyEmployee: 'CompanyEmployee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'resume' | 'template' | 'job' | 'jobSource' | 'application' | 'savedJob' | 'searchHistory' | 'matchingCriteria' | 'company' | 'companyEmployee'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: ResumePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>,
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: TemplatePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>,
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: JobPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>,
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      JobSource: {
        payload: JobSourcePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.JobSourceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobSourceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload>
          }
          findFirst: {
            args: Prisma.JobSourceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobSourceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload>
          }
          findMany: {
            args: Prisma.JobSourceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload>[]
          }
          create: {
            args: Prisma.JobSourceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload>
          }
          createMany: {
            args: Prisma.JobSourceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobSourceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload>
          }
          update: {
            args: Prisma.JobSourceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload>
          }
          deleteMany: {
            args: Prisma.JobSourceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobSourceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobSourceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<JobSourcePayload>
          }
          aggregate: {
            args: Prisma.JobSourceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJobSource>
          }
          groupBy: {
            args: Prisma.JobSourceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobSourceCountArgs<ExtArgs>,
            result: $Utils.Optional<JobSourceCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: ApplicationPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      SavedJob: {
        payload: SavedJobPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SavedJobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedJobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload>
          }
          findFirst: {
            args: Prisma.SavedJobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedJobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload>
          }
          findMany: {
            args: Prisma.SavedJobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload>[]
          }
          create: {
            args: Prisma.SavedJobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload>
          }
          createMany: {
            args: Prisma.SavedJobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SavedJobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload>
          }
          update: {
            args: Prisma.SavedJobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload>
          }
          deleteMany: {
            args: Prisma.SavedJobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SavedJobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SavedJobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SavedJobPayload>
          }
          aggregate: {
            args: Prisma.SavedJobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSavedJob>
          }
          groupBy: {
            args: Prisma.SavedJobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SavedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedJobCountArgs<ExtArgs>,
            result: $Utils.Optional<SavedJobCountAggregateOutputType> | number
          }
        }
      }
      SearchHistory: {
        payload: SearchHistoryPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SearchHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload>
          }
          findFirst: {
            args: Prisma.SearchHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload>
          }
          findMany: {
            args: Prisma.SearchHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload>[]
          }
          create: {
            args: Prisma.SearchHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload>
          }
          createMany: {
            args: Prisma.SearchHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SearchHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload>
          }
          update: {
            args: Prisma.SearchHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SearchHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SearchHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SearchHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SearchHistoryPayload>
          }
          aggregate: {
            args: Prisma.SearchHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSearchHistory>
          }
          groupBy: {
            args: Prisma.SearchHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SearchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<SearchHistoryCountAggregateOutputType> | number
          }
        }
      }
      MatchingCriteria: {
        payload: MatchingCriteriaPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.MatchingCriteriaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchingCriteriaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload>
          }
          findFirst: {
            args: Prisma.MatchingCriteriaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchingCriteriaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload>
          }
          findMany: {
            args: Prisma.MatchingCriteriaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload>[]
          }
          create: {
            args: Prisma.MatchingCriteriaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload>
          }
          createMany: {
            args: Prisma.MatchingCriteriaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MatchingCriteriaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload>
          }
          update: {
            args: Prisma.MatchingCriteriaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload>
          }
          deleteMany: {
            args: Prisma.MatchingCriteriaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MatchingCriteriaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MatchingCriteriaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MatchingCriteriaPayload>
          }
          aggregate: {
            args: Prisma.MatchingCriteriaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMatchingCriteria>
          }
          groupBy: {
            args: Prisma.MatchingCriteriaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MatchingCriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchingCriteriaCountArgs<ExtArgs>,
            result: $Utils.Optional<MatchingCriteriaCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: CompanyPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      CompanyEmployee: {
        payload: CompanyEmployeePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CompanyEmployeeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyEmployeeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload>
          }
          findFirst: {
            args: Prisma.CompanyEmployeeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyEmployeeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload>
          }
          findMany: {
            args: Prisma.CompanyEmployeeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload>[]
          }
          create: {
            args: Prisma.CompanyEmployeeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload>
          }
          createMany: {
            args: Prisma.CompanyEmployeeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyEmployeeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload>
          }
          update: {
            args: Prisma.CompanyEmployeeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload>
          }
          deleteMany: {
            args: Prisma.CompanyEmployeeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyEmployeeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyEmployeeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CompanyEmployeePayload>
          }
          aggregate: {
            args: Prisma.CompanyEmployeeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompanyEmployee>
          }
          groupBy: {
            args: Prisma.CompanyEmployeeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyEmployeeCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyEmployeeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    resumes: number
    applications: number
    savedJobs: number
    searchHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    savedJobs?: boolean | UserCountOutputTypeCountSavedJobsArgs
    searchHistory?: boolean | UserCountOutputTypeCountSearchHistoryArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedJobsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SavedJobWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSearchHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SearchHistoryWhereInput
  }



  /**
   * Count Type ResumeCountOutputType
   */


  export type ResumeCountOutputType = {
    versions: number
    applications: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    versions?: boolean | ResumeCountOutputTypeCountVersionsArgs
    applications?: boolean | ResumeCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }


  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }



  /**
   * Count Type TemplateCountOutputType
   */


  export type TemplateCountOutputType = {
    resumes: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    resumes?: boolean | TemplateCountOutputTypeCountResumesArgs
  }

  // Custom InputTypes

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }



  /**
   * Count Type JobCountOutputType
   */


  export type JobCountOutputType = {
    applications: number
    SavedJob: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
    SavedJob?: boolean | JobCountOutputTypeCountSavedJobArgs
  }

  // Custom InputTypes

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountSavedJobArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SavedJobWhereInput
  }



  /**
   * Count Type JobSourceCountOutputType
   */


  export type JobSourceCountOutputType = {
    jobs: number
  }

  export type JobSourceCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    jobs?: boolean | JobSourceCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes

  /**
   * JobSourceCountOutputType without action
   */
  export type JobSourceCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSourceCountOutputType
     */
    select?: JobSourceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobSourceCountOutputType without action
   */
  export type JobSourceCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }



  /**
   * Count Type CompanyCountOutputType
   */


  export type CompanyCountOutputType = {
    employees: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    employees?: boolean | CompanyCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CompanyEmployeeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resumes?: boolean | User$resumesArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    savedJobs?: boolean | User$savedJobsArgs<ExtArgs>
    searchHistory?: boolean | User$searchHistoryArgs<ExtArgs>
    matchingCriteria?: boolean | User$matchingCriteriaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    resumes?: boolean | User$resumesArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    savedJobs?: boolean | User$savedJobsArgs<ExtArgs>
    searchHistory?: boolean | User$searchHistoryArgs<ExtArgs>
    matchingCriteria?: boolean | User$matchingCriteriaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findMany', never>| Null>;

    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findMany', never>| Null>;

    savedJobs<T extends User$savedJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findMany', never>| Null>;

    searchHistory<T extends User$searchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$searchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'findMany', never>| Null>;

    matchingCriteria<T extends User$matchingCriteriaArgs<ExtArgs> = {}>(args?: Subset<T, User$matchingCriteriaArgs<ExtArgs>>): Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.resumes
   */
  export type User$resumesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: Enumerable<ResumeOrderByWithRelationInput>
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResumeScalarFieldEnum>
  }


  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * User.savedJobs
   */
  export type User$savedJobsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    where?: SavedJobWhereInput
    orderBy?: Enumerable<SavedJobOrderByWithRelationInput>
    cursor?: SavedJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SavedJobScalarFieldEnum>
  }


  /**
   * User.searchHistory
   */
  export type User$searchHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    where?: SearchHistoryWhereInput
    orderBy?: Enumerable<SearchHistoryOrderByWithRelationInput>
    cursor?: SearchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SearchHistoryScalarFieldEnum>
  }


  /**
   * User.matchingCriteria
   */
  export type User$matchingCriteriaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    where?: MatchingCriteriaWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Resume
   */


  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    filePathUrl: string | null
    isBaseline: boolean | null
    parentResumeId: string | null
    templateId: string | null
    fileType: FileType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    filePathUrl: string | null
    isBaseline: boolean | null
    parentResumeId: string | null
    templateId: string | null
    fileType: FileType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    filePathUrl: number
    content: number
    isBaseline: number
    parentResumeId: number
    templateId: number
    fileType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    filePathUrl?: true
    isBaseline?: true
    parentResumeId?: true
    templateId?: true
    fileType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    filePathUrl?: true
    isBaseline?: true
    parentResumeId?: true
    templateId?: true
    fileType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    filePathUrl?: true
    content?: true
    isBaseline?: true
    parentResumeId?: true
    templateId?: true
    fileType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: Enumerable<ResumeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: Enumerable<ResumeOrderByWithAggregationInput>
    by: ResumeScalarFieldEnum[]
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }


  export type ResumeGroupByOutputType = {
    id: string
    userId: string
    filePathUrl: string
    content: JsonValue
    isBaseline: boolean
    parentResumeId: string | null
    templateId: string | null
    fileType: FileType
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    filePathUrl?: boolean
    content?: boolean
    isBaseline?: boolean
    parentResumeId?: boolean
    templateId?: boolean
    fileType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs<ExtArgs>
    parentResume?: boolean | Resume$parentResumeArgs<ExtArgs>
    versions?: boolean | Resume$versionsArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
    applications?: boolean | Resume$applicationsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    filePathUrl?: boolean
    content?: boolean
    isBaseline?: boolean
    parentResumeId?: boolean
    templateId?: boolean
    fileType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    parentResume?: boolean | Resume$parentResumeArgs<ExtArgs>
    versions?: boolean | Resume$versionsArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
    applications?: boolean | Resume$applicationsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeArgs<ExtArgs>
  }


  type ResumeGetPayload<S extends boolean | null | undefined | ResumeArgs> = $Types.GetResult<ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ResumeFindManyArgs, 'select' | 'include'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResumeFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Resume'> extends True ? Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Resume that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResumeFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Resume'> extends True ? Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Resume that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResumeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
    **/
    create<T extends ResumeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>
    ): Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Resumes.
     *     @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     *     @example
     *     // Create many Resumes
     *     const resume = await prisma.resume.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResumeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
    **/
    delete<T extends ResumeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>
    ): Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResumeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>
    ): Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResumeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResumeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
    **/
    upsert<T extends ResumeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>
    ): Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
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
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    parentResume<T extends Resume$parentResumeArgs<ExtArgs> = {}>(args?: Subset<T, Resume$parentResumeArgs<ExtArgs>>): Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    versions<T extends Resume$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findMany', never>| Null>;

    template<T extends Resume$templateArgs<ExtArgs> = {}>(args?: Subset<T, Resume$templateArgs<ExtArgs>>): Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    applications<T extends Resume$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Resume base type for findUnique actions
   */
  export type ResumeFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUnique
   */
  export interface ResumeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ResumeFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }


  /**
   * Resume base type for findFirst actions
   */
  export type ResumeFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: Enumerable<ResumeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: Enumerable<ResumeScalarFieldEnum>
  }

  /**
   * Resume findFirst
   */
  export interface ResumeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ResumeFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: Enumerable<ResumeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: Enumerable<ResumeScalarFieldEnum>
  }


  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: Enumerable<ResumeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: Enumerable<ResumeScalarFieldEnum>
  }


  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }


  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: Enumerable<ResumeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }


  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
  }


  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }


  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }


  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
  }


  /**
   * Resume.parentResume
   */
  export type Resume$parentResumeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }


  /**
   * Resume.versions
   */
  export type Resume$versionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: Enumerable<ResumeOrderByWithRelationInput>
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResumeScalarFieldEnum>
  }


  /**
   * Resume.template
   */
  export type Resume$templateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }


  /**
   * Resume.applications
   */
  export type Resume$applicationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * Resume without action
   */
  export type ResumeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
  }



  /**
   * Model Template
   */


  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: TemplateType | null
    templatePath: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: TemplateType | null
    templatePath: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    type: number
    templatePath: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    templatePath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    templatePath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    templatePath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: Enumerable<TemplateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: Enumerable<TemplateOrderByWithAggregationInput>
    by: TemplateScalarFieldEnum[]
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }


  export type TemplateGroupByOutputType = {
    id: string
    name: string
    type: TemplateType
    templatePath: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    templatePath?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resumes?: boolean | Template$resumesArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    templatePath?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    resumes?: boolean | Template$resumesArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeArgs<ExtArgs>
  }


  type TemplateGetPayload<S extends boolean | null | undefined | TemplateArgs> = $Types.GetResult<TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TemplateFindManyArgs, 'select' | 'include'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TemplateFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Template'> extends True ? Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Template that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TemplateFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Template'> extends True ? Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Template that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TemplateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
    **/
    create<T extends TemplateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Templates.
     *     @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     *     @example
     *     // Create many Templates
     *     const template = await prisma.template.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TemplateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
    **/
    delete<T extends TemplateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TemplateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TemplateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TemplateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
    **/
    upsert<T extends TemplateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Types.GetResult<TemplatePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    resumes<T extends Template$resumesArgs<ExtArgs> = {}>(args?: Subset<T, Template$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Template base type for findUnique actions
   */
  export type TemplateFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUnique
   */
  export interface TemplateFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TemplateFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }


  /**
   * Template base type for findFirst actions
   */
  export type TemplateFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: Enumerable<TemplateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: Enumerable<TemplateScalarFieldEnum>
  }

  /**
   * Template findFirst
   */
  export interface TemplateFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TemplateFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: Enumerable<TemplateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: Enumerable<TemplateScalarFieldEnum>
  }


  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: Enumerable<TemplateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: Enumerable<TemplateScalarFieldEnum>
  }


  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }


  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: Enumerable<TemplateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }


  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
  }


  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }


  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }


  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
  }


  /**
   * Template.resumes
   */
  export type Template$resumesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: Enumerable<ResumeOrderByWithRelationInput>
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResumeScalarFieldEnum>
  }


  /**
   * Template without action
   */
  export type TemplateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude<ExtArgs> | null
  }



  /**
   * Model Job
   */


  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    experienceMin: number | null
    experienceMax: number | null
  }

  export type JobSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    experienceMin: number | null
    experienceMax: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    location: string | null
    description: string | null
    salaryMin: number | null
    salaryMax: number | null
    experienceMin: number | null
    experienceMax: number | null
    postedAt: Date | null
    applyUrl: string | null
    sourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    location: string | null
    description: string | null
    salaryMin: number | null
    salaryMax: number | null
    experienceMin: number | null
    experienceMax: number | null
    postedAt: Date | null
    applyUrl: string | null
    sourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    company: number
    location: number
    description: number
    salaryMin: number
    salaryMax: number
    experienceMin: number
    experienceMax: number
    postedAt: number
    applyUrl: number
    sourceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    experienceMin?: true
    experienceMax?: true
  }

  export type JobSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    experienceMin?: true
    experienceMax?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    description?: true
    salaryMin?: true
    salaryMax?: true
    experienceMin?: true
    experienceMax?: true
    postedAt?: true
    applyUrl?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    description?: true
    salaryMin?: true
    salaryMax?: true
    experienceMin?: true
    experienceMax?: true
    postedAt?: true
    applyUrl?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    description?: true
    salaryMin?: true
    salaryMax?: true
    experienceMin?: true
    experienceMax?: true
    postedAt?: true
    applyUrl?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: Enumerable<JobOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: Enumerable<JobOrderByWithAggregationInput>
    by: JobScalarFieldEnum[]
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }


  export type JobGroupByOutputType = {
    id: string
    title: string
    company: string
    location: string | null
    description: string
    salaryMin: number | null
    salaryMax: number | null
    experienceMin: number | null
    experienceMax: number | null
    postedAt: Date
    applyUrl: string
    sourceId: string
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    description?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    experienceMin?: boolean
    experienceMax?: boolean
    postedAt?: boolean
    applyUrl?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    source?: boolean | JobSourceArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    SavedJob?: boolean | Job$SavedJobArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    description?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    experienceMin?: boolean
    experienceMax?: boolean
    postedAt?: boolean
    applyUrl?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    source?: boolean | JobSourceArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    SavedJob?: boolean | Job$SavedJobArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeArgs<ExtArgs>
  }


  type JobGetPayload<S extends boolean | null | undefined | JobArgs> = $Types.GetResult<JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Job'> extends True ? Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Job'> extends True ? Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<JobPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
    **/
    create<T extends JobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobCreateArgs<ExtArgs>>
    ): Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Jobs.
     *     @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
    **/
    delete<T extends JobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobDeleteArgs<ExtArgs>>
    ): Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpdateArgs<ExtArgs>>
    ): Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
    **/
    upsert<T extends JobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpsertArgs<ExtArgs>>
    ): Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    source<T extends JobSourceArgs<ExtArgs> = {}>(args?: Subset<T, JobSourceArgs<ExtArgs>>): Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findMany', never>| Null>;

    SavedJob<T extends Job$SavedJobArgs<ExtArgs> = {}>(args?: Subset<T, Job$SavedJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Job base type for findUnique actions
   */
  export type JobFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUnique
   */
  export interface JobFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends JobFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job base type for findFirst actions
   */
  export type JobFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: Enumerable<JobOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: Enumerable<JobScalarFieldEnum>
  }

  /**
   * Job findFirst
   */
  export interface JobFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends JobFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: Enumerable<JobOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: Enumerable<JobScalarFieldEnum>
  }


  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: Enumerable<JobOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: Enumerable<JobScalarFieldEnum>
  }


  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }


  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: Enumerable<JobCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }


  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }


  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }


  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * Job.SavedJob
   */
  export type Job$SavedJobArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    where?: SavedJobWhereInput
    orderBy?: Enumerable<SavedJobOrderByWithRelationInput>
    cursor?: SavedJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SavedJobScalarFieldEnum>
  }


  /**
   * Job without action
   */
  export type JobArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
  }



  /**
   * Model JobSource
   */


  export type AggregateJobSource = {
    _count: JobSourceCountAggregateOutputType | null
    _min: JobSourceMinAggregateOutputType | null
    _max: JobSourceMaxAggregateOutputType | null
  }

  export type JobSourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    baseUrl: string | null
  }

  export type JobSourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    baseUrl: string | null
  }

  export type JobSourceCountAggregateOutputType = {
    id: number
    name: number
    baseUrl: number
    _all: number
  }


  export type JobSourceMinAggregateInputType = {
    id?: true
    name?: true
    baseUrl?: true
  }

  export type JobSourceMaxAggregateInputType = {
    id?: true
    name?: true
    baseUrl?: true
  }

  export type JobSourceCountAggregateInputType = {
    id?: true
    name?: true
    baseUrl?: true
    _all?: true
  }

  export type JobSourceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSource to aggregate.
     */
    where?: JobSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSources to fetch.
     */
    orderBy?: Enumerable<JobSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobSources
    **/
    _count?: true | JobSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobSourceMaxAggregateInputType
  }

  export type GetJobSourceAggregateType<T extends JobSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateJobSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSource[P]>
      : GetScalarType<T[P], AggregateJobSource[P]>
  }




  export type JobSourceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: JobSourceWhereInput
    orderBy?: Enumerable<JobSourceOrderByWithAggregationInput>
    by: JobSourceScalarFieldEnum[]
    having?: JobSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobSourceCountAggregateInputType | true
    _min?: JobSourceMinAggregateInputType
    _max?: JobSourceMaxAggregateInputType
  }


  export type JobSourceGroupByOutputType = {
    id: string
    name: string
    baseUrl: string
    _count: JobSourceCountAggregateOutputType | null
    _min: JobSourceMinAggregateOutputType | null
    _max: JobSourceMaxAggregateOutputType | null
  }

  type GetJobSourceGroupByPayload<T extends JobSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<JobSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSourceGroupByOutputType[P]>
            : GetScalarType<T[P], JobSourceGroupByOutputType[P]>
        }
      >
    >


  export type JobSourceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseUrl?: boolean
    jobs?: boolean | JobSource$jobsArgs<ExtArgs>
    _count?: boolean | JobSourceCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["jobSource"]>

  export type JobSourceSelectScalar = {
    id?: boolean
    name?: boolean
    baseUrl?: boolean
  }

  export type JobSourceInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    jobs?: boolean | JobSource$jobsArgs<ExtArgs>
    _count?: boolean | JobSourceCountOutputTypeArgs<ExtArgs>
  }


  type JobSourceGetPayload<S extends boolean | null | undefined | JobSourceArgs> = $Types.GetResult<JobSourcePayload, S>

  type JobSourceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<JobSourceFindManyArgs, 'select' | 'include'> & {
      select?: JobSourceCountAggregateInputType | true
    }

  export interface JobSourceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobSource'], meta: { name: 'JobSource' } }
    /**
     * Find zero or one JobSource that matches the filter.
     * @param {JobSourceFindUniqueArgs} args - Arguments to find a JobSource
     * @example
     * // Get one JobSource
     * const jobSource = await prisma.jobSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobSourceFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JobSourceFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'JobSource'> extends True ? Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one JobSource that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobSourceFindUniqueOrThrowArgs} args - Arguments to find a JobSource
     * @example
     * // Get one JobSource
     * const jobSource = await prisma.jobSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobSourceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobSourceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first JobSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSourceFindFirstArgs} args - Arguments to find a JobSource
     * @example
     * // Get one JobSource
     * const jobSource = await prisma.jobSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobSourceFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JobSourceFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'JobSource'> extends True ? Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first JobSource that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSourceFindFirstOrThrowArgs} args - Arguments to find a JobSource
     * @example
     * // Get one JobSource
     * const jobSource = await prisma.jobSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobSourceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobSourceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more JobSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSources
     * const jobSources = await prisma.jobSource.findMany()
     * 
     * // Get first 10 JobSources
     * const jobSources = await prisma.jobSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobSourceWithIdOnly = await prisma.jobSource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobSourceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobSourceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a JobSource.
     * @param {JobSourceCreateArgs} args - Arguments to create a JobSource.
     * @example
     * // Create one JobSource
     * const JobSource = await prisma.jobSource.create({
     *   data: {
     *     // ... data to create a JobSource
     *   }
     * })
     * 
    **/
    create<T extends JobSourceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobSourceCreateArgs<ExtArgs>>
    ): Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many JobSources.
     *     @param {JobSourceCreateManyArgs} args - Arguments to create many JobSources.
     *     @example
     *     // Create many JobSources
     *     const jobSource = await prisma.jobSource.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobSourceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobSourceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobSource.
     * @param {JobSourceDeleteArgs} args - Arguments to delete one JobSource.
     * @example
     * // Delete one JobSource
     * const JobSource = await prisma.jobSource.delete({
     *   where: {
     *     // ... filter to delete one JobSource
     *   }
     * })
     * 
    **/
    delete<T extends JobSourceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobSourceDeleteArgs<ExtArgs>>
    ): Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one JobSource.
     * @param {JobSourceUpdateArgs} args - Arguments to update one JobSource.
     * @example
     * // Update one JobSource
     * const jobSource = await prisma.jobSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobSourceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobSourceUpdateArgs<ExtArgs>>
    ): Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more JobSources.
     * @param {JobSourceDeleteManyArgs} args - Arguments to filter JobSources to delete.
     * @example
     * // Delete a few JobSources
     * const { count } = await prisma.jobSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobSourceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobSourceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSources
     * const jobSource = await prisma.jobSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobSourceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobSourceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobSource.
     * @param {JobSourceUpsertArgs} args - Arguments to update or create a JobSource.
     * @example
     * // Update or create a JobSource
     * const jobSource = await prisma.jobSource.upsert({
     *   create: {
     *     // ... data to create a JobSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSource we want to update
     *   }
     * })
    **/
    upsert<T extends JobSourceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobSourceUpsertArgs<ExtArgs>>
    ): Prisma__JobSourceClient<$Types.GetResult<JobSourcePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of JobSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSourceCountArgs} args - Arguments to filter JobSources to count.
     * @example
     * // Count the number of JobSources
     * const count = await prisma.jobSource.count({
     *   where: {
     *     // ... the filter for the JobSources we want to count
     *   }
     * })
    **/
    count<T extends JobSourceCountArgs>(
      args?: Subset<T, JobSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobSourceAggregateArgs>(args: Subset<T, JobSourceAggregateArgs>): Prisma.PrismaPromise<GetJobSourceAggregateType<T>>

    /**
     * Group by JobSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSourceGroupByArgs} args - Group by arguments.
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
      T extends JobSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSourceGroupByArgs['orderBy'] }
        : { orderBy?: JobSourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, JobSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JobSourceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    jobs<T extends JobSource$jobsArgs<ExtArgs> = {}>(args?: Subset<T, JobSource$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<JobPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * JobSource base type for findUnique actions
   */
  export type JobSourceFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * Filter, which JobSource to fetch.
     */
    where: JobSourceWhereUniqueInput
  }

  /**
   * JobSource findUnique
   */
  export interface JobSourceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends JobSourceFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JobSource findUniqueOrThrow
   */
  export type JobSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * Filter, which JobSource to fetch.
     */
    where: JobSourceWhereUniqueInput
  }


  /**
   * JobSource base type for findFirst actions
   */
  export type JobSourceFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * Filter, which JobSource to fetch.
     */
    where?: JobSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSources to fetch.
     */
    orderBy?: Enumerable<JobSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSources.
     */
    cursor?: JobSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSources.
     */
    distinct?: Enumerable<JobSourceScalarFieldEnum>
  }

  /**
   * JobSource findFirst
   */
  export interface JobSourceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends JobSourceFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JobSource findFirstOrThrow
   */
  export type JobSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * Filter, which JobSource to fetch.
     */
    where?: JobSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSources to fetch.
     */
    orderBy?: Enumerable<JobSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSources.
     */
    cursor?: JobSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSources.
     */
    distinct?: Enumerable<JobSourceScalarFieldEnum>
  }


  /**
   * JobSource findMany
   */
  export type JobSourceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * Filter, which JobSources to fetch.
     */
    where?: JobSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSources to fetch.
     */
    orderBy?: Enumerable<JobSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobSources.
     */
    cursor?: JobSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSources.
     */
    skip?: number
    distinct?: Enumerable<JobSourceScalarFieldEnum>
  }


  /**
   * JobSource create
   */
  export type JobSourceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a JobSource.
     */
    data: XOR<JobSourceCreateInput, JobSourceUncheckedCreateInput>
  }


  /**
   * JobSource createMany
   */
  export type JobSourceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobSources.
     */
    data: Enumerable<JobSourceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * JobSource update
   */
  export type JobSourceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a JobSource.
     */
    data: XOR<JobSourceUpdateInput, JobSourceUncheckedUpdateInput>
    /**
     * Choose, which JobSource to update.
     */
    where: JobSourceWhereUniqueInput
  }


  /**
   * JobSource updateMany
   */
  export type JobSourceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobSources.
     */
    data: XOR<JobSourceUpdateManyMutationInput, JobSourceUncheckedUpdateManyInput>
    /**
     * Filter which JobSources to update
     */
    where?: JobSourceWhereInput
  }


  /**
   * JobSource upsert
   */
  export type JobSourceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the JobSource to update in case it exists.
     */
    where: JobSourceWhereUniqueInput
    /**
     * In case the JobSource found by the `where` argument doesn't exist, create a new JobSource with this data.
     */
    create: XOR<JobSourceCreateInput, JobSourceUncheckedCreateInput>
    /**
     * In case the JobSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSourceUpdateInput, JobSourceUncheckedUpdateInput>
  }


  /**
   * JobSource delete
   */
  export type JobSourceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
    /**
     * Filter which JobSource to delete.
     */
    where: JobSourceWhereUniqueInput
  }


  /**
   * JobSource deleteMany
   */
  export type JobSourceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSources to delete
     */
    where?: JobSourceWhereInput
  }


  /**
   * JobSource.jobs
   */
  export type JobSource$jobsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: Enumerable<JobOrderByWithRelationInput>
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JobScalarFieldEnum>
  }


  /**
   * JobSource without action
   */
  export type JobSourceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSource
     */
    select?: JobSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobSourceInclude<ExtArgs> | null
  }



  /**
   * Model Application
   */


  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    resumeId: string | null
    status: string | null
    appliedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    resumeId: string | null
    status: string | null
    appliedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    userId: number
    jobId: number
    resumeId: number
    status: number
    appliedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    resumeId?: true
    status?: true
    appliedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    resumeId?: true
    status?: true
    appliedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    resumeId?: true
    status?: true
    appliedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: Enumerable<ApplicationOrderByWithAggregationInput>
    by: ApplicationScalarFieldEnum[]
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }


  export type ApplicationGroupByOutputType = {
    id: string
    userId: string
    jobId: string
    resumeId: string
    status: string
    appliedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    resumeId?: boolean
    status?: boolean
    appliedAt?: boolean
    user?: boolean | UserArgs<ExtArgs>
    job?: boolean | JobArgs<ExtArgs>
    resume?: boolean | ResumeArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    jobId?: boolean
    resumeId?: boolean
    status?: boolean
    appliedAt?: boolean
  }

  export type ApplicationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    job?: boolean | JobArgs<ExtArgs>
    resume?: boolean | ResumeArgs<ExtArgs>
  }


  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationArgs> = $Types.GetResult<ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ApplicationFindManyArgs, 'select' | 'include'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Application'> extends True ? Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Application that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Application'> extends True ? Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Application that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
    **/
    create<T extends ApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Applications.
     *     @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const application = await prisma.application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Types.GetResult<ApplicationPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    job<T extends JobArgs<ExtArgs> = {}>(args?: Subset<T, JobArgs<ExtArgs>>): Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    resume<T extends ResumeArgs<ExtArgs> = {}>(args?: Subset<T, ResumeArgs<ExtArgs>>): Prisma__ResumeClient<$Types.GetResult<ResumePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Application base type for findUnique actions
   */
  export type ApplicationFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUnique
   */
  export interface ApplicationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ApplicationFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application base type for findFirst actions
   */
  export type ApplicationFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }

  /**
   * Application findFirst
   */
  export interface ApplicationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ApplicationFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }


  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: Enumerable<ApplicationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
  }


  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }


  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
  }


  /**
   * Application without action
   */
  export type ApplicationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
  }



  /**
   * Model SavedJob
   */


  export type AggregateSavedJob = {
    _count: SavedJobCountAggregateOutputType | null
    _min: SavedJobMinAggregateOutputType | null
    _max: SavedJobMaxAggregateOutputType | null
  }

  export type SavedJobMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    createdAt: Date | null
  }

  export type SavedJobMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    createdAt: Date | null
  }

  export type SavedJobCountAggregateOutputType = {
    id: number
    userId: number
    jobId: number
    createdAt: number
    _all: number
  }


  export type SavedJobMinAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    createdAt?: true
  }

  export type SavedJobMaxAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    createdAt?: true
  }

  export type SavedJobCountAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedJobAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedJob to aggregate.
     */
    where?: SavedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedJobs to fetch.
     */
    orderBy?: Enumerable<SavedJobOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedJobs
    **/
    _count?: true | SavedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedJobMaxAggregateInputType
  }

  export type GetSavedJobAggregateType<T extends SavedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedJob[P]>
      : GetScalarType<T[P], AggregateSavedJob[P]>
  }




  export type SavedJobGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SavedJobWhereInput
    orderBy?: Enumerable<SavedJobOrderByWithAggregationInput>
    by: SavedJobScalarFieldEnum[]
    having?: SavedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedJobCountAggregateInputType | true
    _min?: SavedJobMinAggregateInputType
    _max?: SavedJobMaxAggregateInputType
  }


  export type SavedJobGroupByOutputType = {
    id: string
    userId: string
    jobId: string
    createdAt: Date
    _count: SavedJobCountAggregateOutputType | null
    _min: SavedJobMinAggregateOutputType | null
    _max: SavedJobMaxAggregateOutputType | null
  }

  type GetSavedJobGroupByPayload<T extends SavedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SavedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedJobGroupByOutputType[P]>
            : GetScalarType<T[P], SavedJobGroupByOutputType[P]>
        }
      >
    >


  export type SavedJobSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    createdAt?: boolean
    user?: boolean | UserArgs<ExtArgs>
    job?: boolean | JobArgs<ExtArgs>
  }, ExtArgs["result"]["savedJob"]>

  export type SavedJobSelectScalar = {
    id?: boolean
    userId?: boolean
    jobId?: boolean
    createdAt?: boolean
  }

  export type SavedJobInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    job?: boolean | JobArgs<ExtArgs>
  }


  type SavedJobGetPayload<S extends boolean | null | undefined | SavedJobArgs> = $Types.GetResult<SavedJobPayload, S>

  type SavedJobCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SavedJobFindManyArgs, 'select' | 'include'> & {
      select?: SavedJobCountAggregateInputType | true
    }

  export interface SavedJobDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedJob'], meta: { name: 'SavedJob' } }
    /**
     * Find zero or one SavedJob that matches the filter.
     * @param {SavedJobFindUniqueArgs} args - Arguments to find a SavedJob
     * @example
     * // Get one SavedJob
     * const savedJob = await prisma.savedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SavedJobFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SavedJobFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SavedJob'> extends True ? Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SavedJob that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SavedJobFindUniqueOrThrowArgs} args - Arguments to find a SavedJob
     * @example
     * // Get one SavedJob
     * const savedJob = await prisma.savedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SavedJobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SavedJobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SavedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobFindFirstArgs} args - Arguments to find a SavedJob
     * @example
     * // Get one SavedJob
     * const savedJob = await prisma.savedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SavedJobFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SavedJobFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SavedJob'> extends True ? Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SavedJob that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobFindFirstOrThrowArgs} args - Arguments to find a SavedJob
     * @example
     * // Get one SavedJob
     * const savedJob = await prisma.savedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SavedJobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SavedJobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SavedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedJobs
     * const savedJobs = await prisma.savedJob.findMany()
     * 
     * // Get first 10 SavedJobs
     * const savedJobs = await prisma.savedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedJobWithIdOnly = await prisma.savedJob.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SavedJobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SavedJobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SavedJob.
     * @param {SavedJobCreateArgs} args - Arguments to create a SavedJob.
     * @example
     * // Create one SavedJob
     * const SavedJob = await prisma.savedJob.create({
     *   data: {
     *     // ... data to create a SavedJob
     *   }
     * })
     * 
    **/
    create<T extends SavedJobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SavedJobCreateArgs<ExtArgs>>
    ): Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SavedJobs.
     *     @param {SavedJobCreateManyArgs} args - Arguments to create many SavedJobs.
     *     @example
     *     // Create many SavedJobs
     *     const savedJob = await prisma.savedJob.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SavedJobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SavedJobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavedJob.
     * @param {SavedJobDeleteArgs} args - Arguments to delete one SavedJob.
     * @example
     * // Delete one SavedJob
     * const SavedJob = await prisma.savedJob.delete({
     *   where: {
     *     // ... filter to delete one SavedJob
     *   }
     * })
     * 
    **/
    delete<T extends SavedJobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SavedJobDeleteArgs<ExtArgs>>
    ): Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SavedJob.
     * @param {SavedJobUpdateArgs} args - Arguments to update one SavedJob.
     * @example
     * // Update one SavedJob
     * const savedJob = await prisma.savedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SavedJobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SavedJobUpdateArgs<ExtArgs>>
    ): Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SavedJobs.
     * @param {SavedJobDeleteManyArgs} args - Arguments to filter SavedJobs to delete.
     * @example
     * // Delete a few SavedJobs
     * const { count } = await prisma.savedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SavedJobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SavedJobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedJobs
     * const savedJob = await prisma.savedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SavedJobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SavedJobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedJob.
     * @param {SavedJobUpsertArgs} args - Arguments to update or create a SavedJob.
     * @example
     * // Update or create a SavedJob
     * const savedJob = await prisma.savedJob.upsert({
     *   create: {
     *     // ... data to create a SavedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedJob we want to update
     *   }
     * })
    **/
    upsert<T extends SavedJobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SavedJobUpsertArgs<ExtArgs>>
    ): Prisma__SavedJobClient<$Types.GetResult<SavedJobPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SavedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobCountArgs} args - Arguments to filter SavedJobs to count.
     * @example
     * // Count the number of SavedJobs
     * const count = await prisma.savedJob.count({
     *   where: {
     *     // ... the filter for the SavedJobs we want to count
     *   }
     * })
    **/
    count<T extends SavedJobCountArgs>(
      args?: Subset<T, SavedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedJobAggregateArgs>(args: Subset<T, SavedJobAggregateArgs>): Prisma.PrismaPromise<GetSavedJobAggregateType<T>>

    /**
     * Group by SavedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobGroupByArgs} args - Group by arguments.
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
      T extends SavedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedJobGroupByArgs['orderBy'] }
        : { orderBy?: SavedJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SavedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SavedJobClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    job<T extends JobArgs<ExtArgs> = {}>(args?: Subset<T, JobArgs<ExtArgs>>): Prisma__JobClient<$Types.GetResult<JobPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SavedJob base type for findUnique actions
   */
  export type SavedJobFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJob to fetch.
     */
    where: SavedJobWhereUniqueInput
  }

  /**
   * SavedJob findUnique
   */
  export interface SavedJobFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SavedJobFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SavedJob findUniqueOrThrow
   */
  export type SavedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJob to fetch.
     */
    where: SavedJobWhereUniqueInput
  }


  /**
   * SavedJob base type for findFirst actions
   */
  export type SavedJobFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJob to fetch.
     */
    where?: SavedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedJobs to fetch.
     */
    orderBy?: Enumerable<SavedJobOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedJobs.
     */
    cursor?: SavedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedJobs.
     */
    distinct?: Enumerable<SavedJobScalarFieldEnum>
  }

  /**
   * SavedJob findFirst
   */
  export interface SavedJobFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SavedJobFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SavedJob findFirstOrThrow
   */
  export type SavedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJob to fetch.
     */
    where?: SavedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedJobs to fetch.
     */
    orderBy?: Enumerable<SavedJobOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedJobs.
     */
    cursor?: SavedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedJobs.
     */
    distinct?: Enumerable<SavedJobScalarFieldEnum>
  }


  /**
   * SavedJob findMany
   */
  export type SavedJobFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJobs to fetch.
     */
    where?: SavedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedJobs to fetch.
     */
    orderBy?: Enumerable<SavedJobOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedJobs.
     */
    cursor?: SavedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedJobs.
     */
    skip?: number
    distinct?: Enumerable<SavedJobScalarFieldEnum>
  }


  /**
   * SavedJob create
   */
  export type SavedJobCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedJob.
     */
    data: XOR<SavedJobCreateInput, SavedJobUncheckedCreateInput>
  }


  /**
   * SavedJob createMany
   */
  export type SavedJobCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedJobs.
     */
    data: Enumerable<SavedJobCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SavedJob update
   */
  export type SavedJobUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedJob.
     */
    data: XOR<SavedJobUpdateInput, SavedJobUncheckedUpdateInput>
    /**
     * Choose, which SavedJob to update.
     */
    where: SavedJobWhereUniqueInput
  }


  /**
   * SavedJob updateMany
   */
  export type SavedJobUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedJobs.
     */
    data: XOR<SavedJobUpdateManyMutationInput, SavedJobUncheckedUpdateManyInput>
    /**
     * Filter which SavedJobs to update
     */
    where?: SavedJobWhereInput
  }


  /**
   * SavedJob upsert
   */
  export type SavedJobUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedJob to update in case it exists.
     */
    where: SavedJobWhereUniqueInput
    /**
     * In case the SavedJob found by the `where` argument doesn't exist, create a new SavedJob with this data.
     */
    create: XOR<SavedJobCreateInput, SavedJobUncheckedCreateInput>
    /**
     * In case the SavedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedJobUpdateInput, SavedJobUncheckedUpdateInput>
  }


  /**
   * SavedJob delete
   */
  export type SavedJobDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter which SavedJob to delete.
     */
    where: SavedJobWhereUniqueInput
  }


  /**
   * SavedJob deleteMany
   */
  export type SavedJobDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedJobs to delete
     */
    where?: SavedJobWhereInput
  }


  /**
   * SavedJob without action
   */
  export type SavedJobArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedJobInclude<ExtArgs> | null
  }



  /**
   * Model SearchHistory
   */


  export type AggregateSearchHistory = {
    _count: SearchHistoryCountAggregateOutputType | null
    _min: SearchHistoryMinAggregateOutputType | null
    _max: SearchHistoryMaxAggregateOutputType | null
  }

  export type SearchHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    searchQuery: string | null
    createdAt: Date | null
  }

  export type SearchHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    searchQuery: string | null
    createdAt: Date | null
  }

  export type SearchHistoryCountAggregateOutputType = {
    id: number
    userId: number
    searchQuery: number
    filters: number
    createdAt: number
    _all: number
  }


  export type SearchHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    searchQuery?: true
    createdAt?: true
  }

  export type SearchHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    searchQuery?: true
    createdAt?: true
  }

  export type SearchHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    searchQuery?: true
    filters?: true
    createdAt?: true
    _all?: true
  }

  export type SearchHistoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchHistory to aggregate.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: Enumerable<SearchHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchHistories
    **/
    _count?: true | SearchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchHistoryMaxAggregateInputType
  }

  export type GetSearchHistoryAggregateType<T extends SearchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchHistory[P]>
      : GetScalarType<T[P], AggregateSearchHistory[P]>
  }




  export type SearchHistoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SearchHistoryWhereInput
    orderBy?: Enumerable<SearchHistoryOrderByWithAggregationInput>
    by: SearchHistoryScalarFieldEnum[]
    having?: SearchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchHistoryCountAggregateInputType | true
    _min?: SearchHistoryMinAggregateInputType
    _max?: SearchHistoryMaxAggregateInputType
  }


  export type SearchHistoryGroupByOutputType = {
    id: string
    userId: string
    searchQuery: string
    filters: JsonValue
    createdAt: Date
    _count: SearchHistoryCountAggregateOutputType | null
    _min: SearchHistoryMinAggregateOutputType | null
    _max: SearchHistoryMaxAggregateOutputType | null
  }

  type GetSearchHistoryGroupByPayload<T extends SearchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SearchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SearchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SearchHistorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    searchQuery?: boolean
    filters?: boolean
    createdAt?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    searchQuery?: boolean
    filters?: boolean
    createdAt?: boolean
  }

  export type SearchHistoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type SearchHistoryGetPayload<S extends boolean | null | undefined | SearchHistoryArgs> = $Types.GetResult<SearchHistoryPayload, S>

  type SearchHistoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SearchHistoryFindManyArgs, 'select' | 'include'> & {
      select?: SearchHistoryCountAggregateInputType | true
    }

  export interface SearchHistoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchHistory'], meta: { name: 'SearchHistory' } }
    /**
     * Find zero or one SearchHistory that matches the filter.
     * @param {SearchHistoryFindUniqueArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SearchHistoryFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SearchHistoryFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SearchHistory'> extends True ? Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SearchHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SearchHistoryFindUniqueOrThrowArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SearchHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SearchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindFirstArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SearchHistoryFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SearchHistoryFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SearchHistory'> extends True ? Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SearchHistory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindFirstOrThrowArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SearchHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SearchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchHistories
     * const searchHistories = await prisma.searchHistory.findMany()
     * 
     * // Get first 10 SearchHistories
     * const searchHistories = await prisma.searchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SearchHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SearchHistory.
     * @param {SearchHistoryCreateArgs} args - Arguments to create a SearchHistory.
     * @example
     * // Create one SearchHistory
     * const SearchHistory = await prisma.searchHistory.create({
     *   data: {
     *     // ... data to create a SearchHistory
     *   }
     * })
     * 
    **/
    create<T extends SearchHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SearchHistoryCreateArgs<ExtArgs>>
    ): Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SearchHistories.
     *     @param {SearchHistoryCreateManyArgs} args - Arguments to create many SearchHistories.
     *     @example
     *     // Create many SearchHistories
     *     const searchHistory = await prisma.searchHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SearchHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SearchHistory.
     * @param {SearchHistoryDeleteArgs} args - Arguments to delete one SearchHistory.
     * @example
     * // Delete one SearchHistory
     * const SearchHistory = await prisma.searchHistory.delete({
     *   where: {
     *     // ... filter to delete one SearchHistory
     *   }
     * })
     * 
    **/
    delete<T extends SearchHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SearchHistoryDeleteArgs<ExtArgs>>
    ): Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SearchHistory.
     * @param {SearchHistoryUpdateArgs} args - Arguments to update one SearchHistory.
     * @example
     * // Update one SearchHistory
     * const searchHistory = await prisma.searchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SearchHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SearchHistoryUpdateArgs<ExtArgs>>
    ): Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SearchHistories.
     * @param {SearchHistoryDeleteManyArgs} args - Arguments to filter SearchHistories to delete.
     * @example
     * // Delete a few SearchHistories
     * const { count } = await prisma.searchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SearchHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchHistories
     * const searchHistory = await prisma.searchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SearchHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SearchHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SearchHistory.
     * @param {SearchHistoryUpsertArgs} args - Arguments to update or create a SearchHistory.
     * @example
     * // Update or create a SearchHistory
     * const searchHistory = await prisma.searchHistory.upsert({
     *   create: {
     *     // ... data to create a SearchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchHistory we want to update
     *   }
     * })
    **/
    upsert<T extends SearchHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SearchHistoryUpsertArgs<ExtArgs>>
    ): Prisma__SearchHistoryClient<$Types.GetResult<SearchHistoryPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryCountArgs} args - Arguments to filter SearchHistories to count.
     * @example
     * // Count the number of SearchHistories
     * const count = await prisma.searchHistory.count({
     *   where: {
     *     // ... the filter for the SearchHistories we want to count
     *   }
     * })
    **/
    count<T extends SearchHistoryCountArgs>(
      args?: Subset<T, SearchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchHistoryAggregateArgs>(args: Subset<T, SearchHistoryAggregateArgs>): Prisma.PrismaPromise<GetSearchHistoryAggregateType<T>>

    /**
     * Group by SearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryGroupByArgs} args - Group by arguments.
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
      T extends SearchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SearchHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SearchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SearchHistoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SearchHistory base type for findUnique actions
   */
  export type SearchHistoryFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory findUnique
   */
  export interface SearchHistoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SearchHistoryFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SearchHistory findUniqueOrThrow
   */
  export type SearchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where: SearchHistoryWhereUniqueInput
  }


  /**
   * SearchHistory base type for findFirst actions
   */
  export type SearchHistoryFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: Enumerable<SearchHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: Enumerable<SearchHistoryScalarFieldEnum>
  }

  /**
   * SearchHistory findFirst
   */
  export interface SearchHistoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SearchHistoryFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SearchHistory findFirstOrThrow
   */
  export type SearchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: Enumerable<SearchHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: Enumerable<SearchHistoryScalarFieldEnum>
  }


  /**
   * SearchHistory findMany
   */
  export type SearchHistoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistories to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: Enumerable<SearchHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    distinct?: Enumerable<SearchHistoryScalarFieldEnum>
  }


  /**
   * SearchHistory create
   */
  export type SearchHistoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchHistory.
     */
    data: XOR<SearchHistoryCreateInput, SearchHistoryUncheckedCreateInput>
  }


  /**
   * SearchHistory createMany
   */
  export type SearchHistoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchHistories.
     */
    data: Enumerable<SearchHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SearchHistory update
   */
  export type SearchHistoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchHistory.
     */
    data: XOR<SearchHistoryUpdateInput, SearchHistoryUncheckedUpdateInput>
    /**
     * Choose, which SearchHistory to update.
     */
    where: SearchHistoryWhereUniqueInput
  }


  /**
   * SearchHistory updateMany
   */
  export type SearchHistoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchHistories.
     */
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SearchHistories to update
     */
    where?: SearchHistoryWhereInput
  }


  /**
   * SearchHistory upsert
   */
  export type SearchHistoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchHistory to update in case it exists.
     */
    where: SearchHistoryWhereUniqueInput
    /**
     * In case the SearchHistory found by the `where` argument doesn't exist, create a new SearchHistory with this data.
     */
    create: XOR<SearchHistoryCreateInput, SearchHistoryUncheckedCreateInput>
    /**
     * In case the SearchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchHistoryUpdateInput, SearchHistoryUncheckedUpdateInput>
  }


  /**
   * SearchHistory delete
   */
  export type SearchHistoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter which SearchHistory to delete.
     */
    where: SearchHistoryWhereUniqueInput
  }


  /**
   * SearchHistory deleteMany
   */
  export type SearchHistoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchHistories to delete
     */
    where?: SearchHistoryWhereInput
  }


  /**
   * SearchHistory without action
   */
  export type SearchHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SearchHistoryInclude<ExtArgs> | null
  }



  /**
   * Model MatchingCriteria
   */


  export type AggregateMatchingCriteria = {
    _count: MatchingCriteriaCountAggregateOutputType | null
    _avg: MatchingCriteriaAvgAggregateOutputType | null
    _sum: MatchingCriteriaSumAggregateOutputType | null
    _min: MatchingCriteriaMinAggregateOutputType | null
    _max: MatchingCriteriaMaxAggregateOutputType | null
  }

  export type MatchingCriteriaAvgAggregateOutputType = {
    minSalary: number | null
    maxExperience: number | null
  }

  export type MatchingCriteriaSumAggregateOutputType = {
    minSalary: number | null
    maxExperience: number | null
  }

  export type MatchingCriteriaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    minSalary: number | null
    maxExperience: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchingCriteriaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    minSalary: number | null
    maxExperience: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchingCriteriaCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    minSalary: number
    maxExperience: number
    locations: number
    skills: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchingCriteriaAvgAggregateInputType = {
    minSalary?: true
    maxExperience?: true
  }

  export type MatchingCriteriaSumAggregateInputType = {
    minSalary?: true
    maxExperience?: true
  }

  export type MatchingCriteriaMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    minSalary?: true
    maxExperience?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchingCriteriaMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    minSalary?: true
    maxExperience?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchingCriteriaCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    minSalary?: true
    maxExperience?: true
    locations?: true
    skills?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchingCriteriaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchingCriteria to aggregate.
     */
    where?: MatchingCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingCriteria to fetch.
     */
    orderBy?: Enumerable<MatchingCriteriaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchingCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchingCriteria
    **/
    _count?: true | MatchingCriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchingCriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchingCriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchingCriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchingCriteriaMaxAggregateInputType
  }

  export type GetMatchingCriteriaAggregateType<T extends MatchingCriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchingCriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchingCriteria[P]>
      : GetScalarType<T[P], AggregateMatchingCriteria[P]>
  }




  export type MatchingCriteriaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MatchingCriteriaWhereInput
    orderBy?: Enumerable<MatchingCriteriaOrderByWithAggregationInput>
    by: MatchingCriteriaScalarFieldEnum[]
    having?: MatchingCriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchingCriteriaCountAggregateInputType | true
    _avg?: MatchingCriteriaAvgAggregateInputType
    _sum?: MatchingCriteriaSumAggregateInputType
    _min?: MatchingCriteriaMinAggregateInputType
    _max?: MatchingCriteriaMaxAggregateInputType
  }


  export type MatchingCriteriaGroupByOutputType = {
    id: string
    userId: string
    role: string | null
    minSalary: number | null
    maxExperience: number | null
    locations: string[]
    skills: string[]
    createdAt: Date
    updatedAt: Date
    _count: MatchingCriteriaCountAggregateOutputType | null
    _avg: MatchingCriteriaAvgAggregateOutputType | null
    _sum: MatchingCriteriaSumAggregateOutputType | null
    _min: MatchingCriteriaMinAggregateOutputType | null
    _max: MatchingCriteriaMaxAggregateOutputType | null
  }

  type GetMatchingCriteriaGroupByPayload<T extends MatchingCriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MatchingCriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchingCriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchingCriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], MatchingCriteriaGroupByOutputType[P]>
        }
      >
    >


  export type MatchingCriteriaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    minSalary?: boolean
    maxExperience?: boolean
    locations?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["matchingCriteria"]>

  export type MatchingCriteriaSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    minSalary?: boolean
    maxExperience?: boolean
    locations?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchingCriteriaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type MatchingCriteriaGetPayload<S extends boolean | null | undefined | MatchingCriteriaArgs> = $Types.GetResult<MatchingCriteriaPayload, S>

  type MatchingCriteriaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MatchingCriteriaFindManyArgs, 'select' | 'include'> & {
      select?: MatchingCriteriaCountAggregateInputType | true
    }

  export interface MatchingCriteriaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchingCriteria'], meta: { name: 'MatchingCriteria' } }
    /**
     * Find zero or one MatchingCriteria that matches the filter.
     * @param {MatchingCriteriaFindUniqueArgs} args - Arguments to find a MatchingCriteria
     * @example
     * // Get one MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchingCriteriaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MatchingCriteriaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MatchingCriteria'> extends True ? Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one MatchingCriteria that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchingCriteriaFindUniqueOrThrowArgs} args - Arguments to find a MatchingCriteria
     * @example
     * // Get one MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchingCriteriaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchingCriteriaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first MatchingCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingCriteriaFindFirstArgs} args - Arguments to find a MatchingCriteria
     * @example
     * // Get one MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchingCriteriaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MatchingCriteriaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MatchingCriteria'> extends True ? Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first MatchingCriteria that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingCriteriaFindFirstOrThrowArgs} args - Arguments to find a MatchingCriteria
     * @example
     * // Get one MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchingCriteriaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchingCriteriaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more MatchingCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingCriteriaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.findMany()
     * 
     * // Get first 10 MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchingCriteriaWithIdOnly = await prisma.matchingCriteria.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MatchingCriteriaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchingCriteriaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a MatchingCriteria.
     * @param {MatchingCriteriaCreateArgs} args - Arguments to create a MatchingCriteria.
     * @example
     * // Create one MatchingCriteria
     * const MatchingCriteria = await prisma.matchingCriteria.create({
     *   data: {
     *     // ... data to create a MatchingCriteria
     *   }
     * })
     * 
    **/
    create<T extends MatchingCriteriaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchingCriteriaCreateArgs<ExtArgs>>
    ): Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many MatchingCriteria.
     *     @param {MatchingCriteriaCreateManyArgs} args - Arguments to create many MatchingCriteria.
     *     @example
     *     // Create many MatchingCriteria
     *     const matchingCriteria = await prisma.matchingCriteria.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchingCriteriaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchingCriteriaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatchingCriteria.
     * @param {MatchingCriteriaDeleteArgs} args - Arguments to delete one MatchingCriteria.
     * @example
     * // Delete one MatchingCriteria
     * const MatchingCriteria = await prisma.matchingCriteria.delete({
     *   where: {
     *     // ... filter to delete one MatchingCriteria
     *   }
     * })
     * 
    **/
    delete<T extends MatchingCriteriaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MatchingCriteriaDeleteArgs<ExtArgs>>
    ): Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one MatchingCriteria.
     * @param {MatchingCriteriaUpdateArgs} args - Arguments to update one MatchingCriteria.
     * @example
     * // Update one MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchingCriteriaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchingCriteriaUpdateArgs<ExtArgs>>
    ): Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more MatchingCriteria.
     * @param {MatchingCriteriaDeleteManyArgs} args - Arguments to filter MatchingCriteria to delete.
     * @example
     * // Delete a few MatchingCriteria
     * const { count } = await prisma.matchingCriteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchingCriteriaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchingCriteriaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchingCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingCriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchingCriteriaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MatchingCriteriaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchingCriteria.
     * @param {MatchingCriteriaUpsertArgs} args - Arguments to update or create a MatchingCriteria.
     * @example
     * // Update or create a MatchingCriteria
     * const matchingCriteria = await prisma.matchingCriteria.upsert({
     *   create: {
     *     // ... data to create a MatchingCriteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchingCriteria we want to update
     *   }
     * })
    **/
    upsert<T extends MatchingCriteriaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MatchingCriteriaUpsertArgs<ExtArgs>>
    ): Prisma__MatchingCriteriaClient<$Types.GetResult<MatchingCriteriaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of MatchingCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingCriteriaCountArgs} args - Arguments to filter MatchingCriteria to count.
     * @example
     * // Count the number of MatchingCriteria
     * const count = await prisma.matchingCriteria.count({
     *   where: {
     *     // ... the filter for the MatchingCriteria we want to count
     *   }
     * })
    **/
    count<T extends MatchingCriteriaCountArgs>(
      args?: Subset<T, MatchingCriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchingCriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchingCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingCriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchingCriteriaAggregateArgs>(args: Subset<T, MatchingCriteriaAggregateArgs>): Prisma.PrismaPromise<GetMatchingCriteriaAggregateType<T>>

    /**
     * Group by MatchingCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingCriteriaGroupByArgs} args - Group by arguments.
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
      T extends MatchingCriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchingCriteriaGroupByArgs['orderBy'] }
        : { orderBy?: MatchingCriteriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MatchingCriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchingCriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchingCriteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MatchingCriteriaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MatchingCriteria base type for findUnique actions
   */
  export type MatchingCriteriaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which MatchingCriteria to fetch.
     */
    where: MatchingCriteriaWhereUniqueInput
  }

  /**
   * MatchingCriteria findUnique
   */
  export interface MatchingCriteriaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MatchingCriteriaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MatchingCriteria findUniqueOrThrow
   */
  export type MatchingCriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which MatchingCriteria to fetch.
     */
    where: MatchingCriteriaWhereUniqueInput
  }


  /**
   * MatchingCriteria base type for findFirst actions
   */
  export type MatchingCriteriaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which MatchingCriteria to fetch.
     */
    where?: MatchingCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingCriteria to fetch.
     */
    orderBy?: Enumerable<MatchingCriteriaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchingCriteria.
     */
    cursor?: MatchingCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchingCriteria.
     */
    distinct?: Enumerable<MatchingCriteriaScalarFieldEnum>
  }

  /**
   * MatchingCriteria findFirst
   */
  export interface MatchingCriteriaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MatchingCriteriaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MatchingCriteria findFirstOrThrow
   */
  export type MatchingCriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which MatchingCriteria to fetch.
     */
    where?: MatchingCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingCriteria to fetch.
     */
    orderBy?: Enumerable<MatchingCriteriaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchingCriteria.
     */
    cursor?: MatchingCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchingCriteria.
     */
    distinct?: Enumerable<MatchingCriteriaScalarFieldEnum>
  }


  /**
   * MatchingCriteria findMany
   */
  export type MatchingCriteriaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which MatchingCriteria to fetch.
     */
    where?: MatchingCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingCriteria to fetch.
     */
    orderBy?: Enumerable<MatchingCriteriaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchingCriteria.
     */
    cursor?: MatchingCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingCriteria.
     */
    skip?: number
    distinct?: Enumerable<MatchingCriteriaScalarFieldEnum>
  }


  /**
   * MatchingCriteria create
   */
  export type MatchingCriteriaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchingCriteria.
     */
    data: XOR<MatchingCriteriaCreateInput, MatchingCriteriaUncheckedCreateInput>
  }


  /**
   * MatchingCriteria createMany
   */
  export type MatchingCriteriaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchingCriteria.
     */
    data: Enumerable<MatchingCriteriaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MatchingCriteria update
   */
  export type MatchingCriteriaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchingCriteria.
     */
    data: XOR<MatchingCriteriaUpdateInput, MatchingCriteriaUncheckedUpdateInput>
    /**
     * Choose, which MatchingCriteria to update.
     */
    where: MatchingCriteriaWhereUniqueInput
  }


  /**
   * MatchingCriteria updateMany
   */
  export type MatchingCriteriaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchingCriteria.
     */
    data: XOR<MatchingCriteriaUpdateManyMutationInput, MatchingCriteriaUncheckedUpdateManyInput>
    /**
     * Filter which MatchingCriteria to update
     */
    where?: MatchingCriteriaWhereInput
  }


  /**
   * MatchingCriteria upsert
   */
  export type MatchingCriteriaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchingCriteria to update in case it exists.
     */
    where: MatchingCriteriaWhereUniqueInput
    /**
     * In case the MatchingCriteria found by the `where` argument doesn't exist, create a new MatchingCriteria with this data.
     */
    create: XOR<MatchingCriteriaCreateInput, MatchingCriteriaUncheckedCreateInput>
    /**
     * In case the MatchingCriteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchingCriteriaUpdateInput, MatchingCriteriaUncheckedUpdateInput>
  }


  /**
   * MatchingCriteria delete
   */
  export type MatchingCriteriaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
    /**
     * Filter which MatchingCriteria to delete.
     */
    where: MatchingCriteriaWhereUniqueInput
  }


  /**
   * MatchingCriteria deleteMany
   */
  export type MatchingCriteriaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchingCriteria to delete
     */
    where?: MatchingCriteriaWhereInput
  }


  /**
   * MatchingCriteria without action
   */
  export type MatchingCriteriaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingCriteria
     */
    select?: MatchingCriteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchingCriteriaInclude<ExtArgs> | null
  }



  /**
   * Model Company
   */


  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    linkedInUrl: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    linkedInUrl: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    linkedInUrl: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    linkedInUrl?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    linkedInUrl?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    linkedInUrl?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: Enumerable<CompanyOrderByWithAggregationInput>
    by: CompanyScalarFieldEnum[]
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }


  export type CompanyGroupByOutputType = {
    id: string
    name: string
    linkedInUrl: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkedInUrl?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Company$employeesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    linkedInUrl?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    employees?: boolean | Company$employeesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeArgs<ExtArgs>
  }


  type CompanyGetPayload<S extends boolean | null | undefined | CompanyArgs> = $Types.GetResult<CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Company'> extends True ? Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Company'> extends True ? Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    employees<T extends Company$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Company$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Company base type for findUnique actions
   */
  export type CompanyFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUnique
   */
  export interface CompanyFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CompanyFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company base type for findFirst actions
   */
  export type CompanyFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }

  /**
   * Company findFirst
   */
  export interface CompanyFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CompanyFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: Enumerable<CompanyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company.employees
   */
  export type Company$employeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    where?: CompanyEmployeeWhereInput
    orderBy?: Enumerable<CompanyEmployeeOrderByWithRelationInput>
    cursor?: CompanyEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CompanyEmployeeScalarFieldEnum>
  }


  /**
   * Company without action
   */
  export type CompanyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
  }



  /**
   * Model CompanyEmployee
   */


  export type AggregateCompanyEmployee = {
    _count: CompanyEmployeeCountAggregateOutputType | null
    _min: CompanyEmployeeMinAggregateOutputType | null
    _max: CompanyEmployeeMaxAggregateOutputType | null
  }

  export type CompanyEmployeeMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    fullName: string | null
    linkedInProfile: string | null
    position: string | null
    lastVerified: Date | null
    createdAt: Date | null
  }

  export type CompanyEmployeeMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    fullName: string | null
    linkedInProfile: string | null
    position: string | null
    lastVerified: Date | null
    createdAt: Date | null
  }

  export type CompanyEmployeeCountAggregateOutputType = {
    id: number
    companyId: number
    fullName: number
    linkedInProfile: number
    contactInfo: number
    position: number
    lastVerified: number
    createdAt: number
    _all: number
  }


  export type CompanyEmployeeMinAggregateInputType = {
    id?: true
    companyId?: true
    fullName?: true
    linkedInProfile?: true
    position?: true
    lastVerified?: true
    createdAt?: true
  }

  export type CompanyEmployeeMaxAggregateInputType = {
    id?: true
    companyId?: true
    fullName?: true
    linkedInProfile?: true
    position?: true
    lastVerified?: true
    createdAt?: true
  }

  export type CompanyEmployeeCountAggregateInputType = {
    id?: true
    companyId?: true
    fullName?: true
    linkedInProfile?: true
    contactInfo?: true
    position?: true
    lastVerified?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyEmployeeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyEmployee to aggregate.
     */
    where?: CompanyEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyEmployees to fetch.
     */
    orderBy?: Enumerable<CompanyEmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyEmployees
    **/
    _count?: true | CompanyEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyEmployeeMaxAggregateInputType
  }

  export type GetCompanyEmployeeAggregateType<T extends CompanyEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyEmployee[P]>
      : GetScalarType<T[P], AggregateCompanyEmployee[P]>
  }




  export type CompanyEmployeeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CompanyEmployeeWhereInput
    orderBy?: Enumerable<CompanyEmployeeOrderByWithAggregationInput>
    by: CompanyEmployeeScalarFieldEnum[]
    having?: CompanyEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyEmployeeCountAggregateInputType | true
    _min?: CompanyEmployeeMinAggregateInputType
    _max?: CompanyEmployeeMaxAggregateInputType
  }


  export type CompanyEmployeeGroupByOutputType = {
    id: string
    companyId: string
    fullName: string
    linkedInProfile: string
    contactInfo: JsonValue
    position: string | null
    lastVerified: Date | null
    createdAt: Date
    _count: CompanyEmployeeCountAggregateOutputType | null
    _min: CompanyEmployeeMinAggregateOutputType | null
    _max: CompanyEmployeeMaxAggregateOutputType | null
  }

  type GetCompanyEmployeeGroupByPayload<T extends CompanyEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CompanyEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type CompanyEmployeeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    fullName?: boolean
    linkedInProfile?: boolean
    contactInfo?: boolean
    position?: boolean
    lastVerified?: boolean
    createdAt?: boolean
    company?: boolean | CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["companyEmployee"]>

  export type CompanyEmployeeSelectScalar = {
    id?: boolean
    companyId?: boolean
    fullName?: boolean
    linkedInProfile?: boolean
    contactInfo?: boolean
    position?: boolean
    lastVerified?: boolean
    createdAt?: boolean
  }

  export type CompanyEmployeeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyArgs<ExtArgs>
  }


  type CompanyEmployeeGetPayload<S extends boolean | null | undefined | CompanyEmployeeArgs> = $Types.GetResult<CompanyEmployeePayload, S>

  type CompanyEmployeeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CompanyEmployeeFindManyArgs, 'select' | 'include'> & {
      select?: CompanyEmployeeCountAggregateInputType | true
    }

  export interface CompanyEmployeeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyEmployee'], meta: { name: 'CompanyEmployee' } }
    /**
     * Find zero or one CompanyEmployee that matches the filter.
     * @param {CompanyEmployeeFindUniqueArgs} args - Arguments to find a CompanyEmployee
     * @example
     * // Get one CompanyEmployee
     * const companyEmployee = await prisma.companyEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyEmployeeFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompanyEmployeeFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CompanyEmployee'> extends True ? Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one CompanyEmployee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyEmployeeFindUniqueOrThrowArgs} args - Arguments to find a CompanyEmployee
     * @example
     * // Get one CompanyEmployee
     * const companyEmployee = await prisma.companyEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyEmployeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyEmployeeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first CompanyEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyEmployeeFindFirstArgs} args - Arguments to find a CompanyEmployee
     * @example
     * // Get one CompanyEmployee
     * const companyEmployee = await prisma.companyEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyEmployeeFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompanyEmployeeFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CompanyEmployee'> extends True ? Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first CompanyEmployee that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyEmployeeFindFirstOrThrowArgs} args - Arguments to find a CompanyEmployee
     * @example
     * // Get one CompanyEmployee
     * const companyEmployee = await prisma.companyEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyEmployeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyEmployeeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more CompanyEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyEmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyEmployees
     * const companyEmployees = await prisma.companyEmployee.findMany()
     * 
     * // Get first 10 CompanyEmployees
     * const companyEmployees = await prisma.companyEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyEmployeeWithIdOnly = await prisma.companyEmployee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyEmployeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyEmployeeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a CompanyEmployee.
     * @param {CompanyEmployeeCreateArgs} args - Arguments to create a CompanyEmployee.
     * @example
     * // Create one CompanyEmployee
     * const CompanyEmployee = await prisma.companyEmployee.create({
     *   data: {
     *     // ... data to create a CompanyEmployee
     *   }
     * })
     * 
    **/
    create<T extends CompanyEmployeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyEmployeeCreateArgs<ExtArgs>>
    ): Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many CompanyEmployees.
     *     @param {CompanyEmployeeCreateManyArgs} args - Arguments to create many CompanyEmployees.
     *     @example
     *     // Create many CompanyEmployees
     *     const companyEmployee = await prisma.companyEmployee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyEmployeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyEmployeeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompanyEmployee.
     * @param {CompanyEmployeeDeleteArgs} args - Arguments to delete one CompanyEmployee.
     * @example
     * // Delete one CompanyEmployee
     * const CompanyEmployee = await prisma.companyEmployee.delete({
     *   where: {
     *     // ... filter to delete one CompanyEmployee
     *   }
     * })
     * 
    **/
    delete<T extends CompanyEmployeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyEmployeeDeleteArgs<ExtArgs>>
    ): Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one CompanyEmployee.
     * @param {CompanyEmployeeUpdateArgs} args - Arguments to update one CompanyEmployee.
     * @example
     * // Update one CompanyEmployee
     * const companyEmployee = await prisma.companyEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyEmployeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyEmployeeUpdateArgs<ExtArgs>>
    ): Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more CompanyEmployees.
     * @param {CompanyEmployeeDeleteManyArgs} args - Arguments to filter CompanyEmployees to delete.
     * @example
     * // Delete a few CompanyEmployees
     * const { count } = await prisma.companyEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyEmployeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyEmployeeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyEmployees
     * const companyEmployee = await prisma.companyEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyEmployeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyEmployeeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyEmployee.
     * @param {CompanyEmployeeUpsertArgs} args - Arguments to update or create a CompanyEmployee.
     * @example
     * // Update or create a CompanyEmployee
     * const companyEmployee = await prisma.companyEmployee.upsert({
     *   create: {
     *     // ... data to create a CompanyEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyEmployee we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyEmployeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyEmployeeUpsertArgs<ExtArgs>>
    ): Prisma__CompanyEmployeeClient<$Types.GetResult<CompanyEmployeePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of CompanyEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyEmployeeCountArgs} args - Arguments to filter CompanyEmployees to count.
     * @example
     * // Count the number of CompanyEmployees
     * const count = await prisma.companyEmployee.count({
     *   where: {
     *     // ... the filter for the CompanyEmployees we want to count
     *   }
     * })
    **/
    count<T extends CompanyEmployeeCountArgs>(
      args?: Subset<T, CompanyEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyEmployeeAggregateArgs>(args: Subset<T, CompanyEmployeeAggregateArgs>): Prisma.PrismaPromise<GetCompanyEmployeeAggregateType<T>>

    /**
     * Group by CompanyEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyEmployeeGroupByArgs} args - Group by arguments.
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
      T extends CompanyEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: CompanyEmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CompanyEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompanyEmployeeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    company<T extends CompanyArgs<ExtArgs> = {}>(args?: Subset<T, CompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Types.GetResult<CompanyPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CompanyEmployee base type for findUnique actions
   */
  export type CompanyEmployeeFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyEmployee to fetch.
     */
    where: CompanyEmployeeWhereUniqueInput
  }

  /**
   * CompanyEmployee findUnique
   */
  export interface CompanyEmployeeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CompanyEmployeeFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CompanyEmployee findUniqueOrThrow
   */
  export type CompanyEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyEmployee to fetch.
     */
    where: CompanyEmployeeWhereUniqueInput
  }


  /**
   * CompanyEmployee base type for findFirst actions
   */
  export type CompanyEmployeeFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyEmployee to fetch.
     */
    where?: CompanyEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyEmployees to fetch.
     */
    orderBy?: Enumerable<CompanyEmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyEmployees.
     */
    cursor?: CompanyEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyEmployees.
     */
    distinct?: Enumerable<CompanyEmployeeScalarFieldEnum>
  }

  /**
   * CompanyEmployee findFirst
   */
  export interface CompanyEmployeeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CompanyEmployeeFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CompanyEmployee findFirstOrThrow
   */
  export type CompanyEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyEmployee to fetch.
     */
    where?: CompanyEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyEmployees to fetch.
     */
    orderBy?: Enumerable<CompanyEmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyEmployees.
     */
    cursor?: CompanyEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyEmployees.
     */
    distinct?: Enumerable<CompanyEmployeeScalarFieldEnum>
  }


  /**
   * CompanyEmployee findMany
   */
  export type CompanyEmployeeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyEmployees to fetch.
     */
    where?: CompanyEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyEmployees to fetch.
     */
    orderBy?: Enumerable<CompanyEmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyEmployees.
     */
    cursor?: CompanyEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyEmployees.
     */
    skip?: number
    distinct?: Enumerable<CompanyEmployeeScalarFieldEnum>
  }


  /**
   * CompanyEmployee create
   */
  export type CompanyEmployeeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyEmployee.
     */
    data: XOR<CompanyEmployeeCreateInput, CompanyEmployeeUncheckedCreateInput>
  }


  /**
   * CompanyEmployee createMany
   */
  export type CompanyEmployeeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyEmployees.
     */
    data: Enumerable<CompanyEmployeeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CompanyEmployee update
   */
  export type CompanyEmployeeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyEmployee.
     */
    data: XOR<CompanyEmployeeUpdateInput, CompanyEmployeeUncheckedUpdateInput>
    /**
     * Choose, which CompanyEmployee to update.
     */
    where: CompanyEmployeeWhereUniqueInput
  }


  /**
   * CompanyEmployee updateMany
   */
  export type CompanyEmployeeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyEmployees.
     */
    data: XOR<CompanyEmployeeUpdateManyMutationInput, CompanyEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which CompanyEmployees to update
     */
    where?: CompanyEmployeeWhereInput
  }


  /**
   * CompanyEmployee upsert
   */
  export type CompanyEmployeeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyEmployee to update in case it exists.
     */
    where: CompanyEmployeeWhereUniqueInput
    /**
     * In case the CompanyEmployee found by the `where` argument doesn't exist, create a new CompanyEmployee with this data.
     */
    create: XOR<CompanyEmployeeCreateInput, CompanyEmployeeUncheckedCreateInput>
    /**
     * In case the CompanyEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyEmployeeUpdateInput, CompanyEmployeeUncheckedUpdateInput>
  }


  /**
   * CompanyEmployee delete
   */
  export type CompanyEmployeeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
    /**
     * Filter which CompanyEmployee to delete.
     */
    where: CompanyEmployeeWhereUniqueInput
  }


  /**
   * CompanyEmployee deleteMany
   */
  export type CompanyEmployeeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyEmployees to delete
     */
    where?: CompanyEmployeeWhereInput
  }


  /**
   * CompanyEmployee without action
   */
  export type CompanyEmployeeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyEmployee
     */
    select?: CompanyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyEmployeeInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    filePathUrl: 'filePathUrl',
    content: 'content',
    isBaseline: 'isBaseline',
    parentResumeId: 'parentResumeId',
    templateId: 'templateId',
    fileType: 'fileType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    templatePath: 'templatePath',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    location: 'location',
    description: 'description',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    experienceMin: 'experienceMin',
    experienceMax: 'experienceMax',
    postedAt: 'postedAt',
    applyUrl: 'applyUrl',
    sourceId: 'sourceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const JobSourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    baseUrl: 'baseUrl'
  };

  export type JobSourceScalarFieldEnum = (typeof JobSourceScalarFieldEnum)[keyof typeof JobSourceScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobId: 'jobId',
    resumeId: 'resumeId',
    status: 'status',
    appliedAt: 'appliedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const SavedJobScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobId: 'jobId',
    createdAt: 'createdAt'
  };

  export type SavedJobScalarFieldEnum = (typeof SavedJobScalarFieldEnum)[keyof typeof SavedJobScalarFieldEnum]


  export const SearchHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    searchQuery: 'searchQuery',
    filters: 'filters',
    createdAt: 'createdAt'
  };

  export type SearchHistoryScalarFieldEnum = (typeof SearchHistoryScalarFieldEnum)[keyof typeof SearchHistoryScalarFieldEnum]


  export const MatchingCriteriaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    minSalary: 'minSalary',
    maxExperience: 'maxExperience',
    locations: 'locations',
    skills: 'skills',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchingCriteriaScalarFieldEnum = (typeof MatchingCriteriaScalarFieldEnum)[keyof typeof MatchingCriteriaScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    linkedInUrl: 'linkedInUrl',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompanyEmployeeScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    fullName: 'fullName',
    linkedInProfile: 'linkedInProfile',
    contactInfo: 'contactInfo',
    position: 'position',
    lastVerified: 'lastVerified',
    createdAt: 'createdAt'
  };

  export type CompanyEmployeeScalarFieldEnum = (typeof CompanyEmployeeScalarFieldEnum)[keyof typeof CompanyEmployeeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


  /**
   * Reference to a field of type 'TemplateType'
   */
  export type EnumTemplateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateType'>
    


  /**
   * Reference to a field of type 'TemplateType[]'
   */
  export type ListEnumTemplateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resumes?: ResumeListRelationFilter
    applications?: ApplicationListRelationFilter
    savedJobs?: SavedJobListRelationFilter
    searchHistory?: SearchHistoryListRelationFilter
    matchingCriteria?: XOR<MatchingCriteriaNullableRelationFilter, MatchingCriteriaWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumes?: ResumeOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    savedJobs?: SavedJobOrderByRelationAggregateInput
    searchHistory?: SearchHistoryOrderByRelationAggregateInput
    matchingCriteria?: MatchingCriteriaOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resumes?: ResumeListRelationFilter
    applications?: ApplicationListRelationFilter
    savedJobs?: SavedJobListRelationFilter
    searchHistory?: SearchHistoryListRelationFilter
    matchingCriteria?: XOR<MatchingCriteriaNullableRelationFilter, MatchingCriteriaWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: Enumerable<ResumeWhereInput>
    OR?: Enumerable<ResumeWhereInput>
    NOT?: Enumerable<ResumeWhereInput>
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    filePathUrl?: StringFilter<"Resume"> | string
    content?: JsonFilter<"Resume">
    isBaseline?: BoolFilter<"Resume"> | boolean
    parentResumeId?: StringNullableFilter<"Resume"> | string | null
    templateId?: StringNullableFilter<"Resume"> | string | null
    fileType?: EnumFileTypeFilter<"Resume"> | FileType
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    parentResume?: XOR<ResumeNullableRelationFilter, ResumeWhereInput> | null
    versions?: ResumeListRelationFilter
    template?: XOR<TemplateNullableRelationFilter, TemplateWhereInput> | null
    applications?: ApplicationListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    filePathUrl?: SortOrder
    content?: SortOrder
    isBaseline?: SortOrder
    parentResumeId?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    fileType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    parentResume?: ResumeOrderByWithRelationInput
    versions?: ResumeOrderByRelationAggregateInput
    template?: TemplateOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<ResumeWhereInput>
    OR?: Enumerable<ResumeWhereInput>
    NOT?: Enumerable<ResumeWhereInput>
    userId?: StringFilter<"Resume"> | string
    filePathUrl?: StringFilter<"Resume"> | string
    content?: JsonFilter<"Resume">
    isBaseline?: BoolFilter<"Resume"> | boolean
    parentResumeId?: StringNullableFilter<"Resume"> | string | null
    templateId?: StringNullableFilter<"Resume"> | string | null
    fileType?: EnumFileTypeFilter<"Resume"> | FileType
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    parentResume?: XOR<ResumeNullableRelationFilter, ResumeWhereInput> | null
    versions?: ResumeListRelationFilter
    template?: XOR<TemplateNullableRelationFilter, TemplateWhereInput> | null
    applications?: ApplicationListRelationFilter
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    filePathUrl?: SortOrder
    content?: SortOrder
    isBaseline?: SortOrder
    parentResumeId?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    fileType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ResumeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ResumeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ResumeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringWithAggregatesFilter<"Resume"> | string
    filePathUrl?: StringWithAggregatesFilter<"Resume"> | string
    content?: JsonWithAggregatesFilter<"Resume">
    isBaseline?: BoolWithAggregatesFilter<"Resume"> | boolean
    parentResumeId?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    templateId?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    fileType?: EnumFileTypeWithAggregatesFilter<"Resume"> | FileType
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: Enumerable<TemplateWhereInput>
    OR?: Enumerable<TemplateWhereInput>
    NOT?: Enumerable<TemplateWhereInput>
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    type?: EnumTemplateTypeFilter<"Template"> | TemplateType
    templatePath?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    resumes?: ResumeListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    templatePath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumes?: ResumeOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<TemplateWhereInput>
    OR?: Enumerable<TemplateWhereInput>
    NOT?: Enumerable<TemplateWhereInput>
    name?: StringFilter<"Template"> | string
    type?: EnumTemplateTypeFilter<"Template"> | TemplateType
    templatePath?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    resumes?: ResumeListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    templatePath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TemplateScalarWhereWithAggregatesInput>
    OR?: Enumerable<TemplateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TemplateScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    type?: EnumTemplateTypeWithAggregatesFilter<"Template"> | TemplateType
    templatePath?: StringWithAggregatesFilter<"Template"> | string
    isActive?: BoolWithAggregatesFilter<"Template"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type JobWhereInput = {
    AND?: Enumerable<JobWhereInput>
    OR?: Enumerable<JobWhereInput>
    NOT?: Enumerable<JobWhereInput>
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    description?: StringFilter<"Job"> | string
    salaryMin?: IntNullableFilter<"Job"> | number | null
    salaryMax?: IntNullableFilter<"Job"> | number | null
    experienceMin?: IntNullableFilter<"Job"> | number | null
    experienceMax?: IntNullableFilter<"Job"> | number | null
    postedAt?: DateTimeFilter<"Job"> | Date | string
    applyUrl?: StringFilter<"Job"> | string
    sourceId?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    source?: XOR<JobSourceRelationFilter, JobSourceWhereInput>
    applications?: ApplicationListRelationFilter
    SavedJob?: SavedJobListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    experienceMin?: SortOrderInput | SortOrder
    experienceMax?: SortOrderInput | SortOrder
    postedAt?: SortOrder
    applyUrl?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    source?: JobSourceOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    SavedJob?: SavedJobOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<JobWhereInput>
    OR?: Enumerable<JobWhereInput>
    NOT?: Enumerable<JobWhereInput>
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    description?: StringFilter<"Job"> | string
    salaryMin?: IntNullableFilter<"Job"> | number | null
    salaryMax?: IntNullableFilter<"Job"> | number | null
    experienceMin?: IntNullableFilter<"Job"> | number | null
    experienceMax?: IntNullableFilter<"Job"> | number | null
    postedAt?: DateTimeFilter<"Job"> | Date | string
    applyUrl?: StringFilter<"Job"> | string
    sourceId?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    source?: XOR<JobSourceRelationFilter, JobSourceWhereInput>
    applications?: ApplicationListRelationFilter
    SavedJob?: SavedJobListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    experienceMin?: SortOrderInput | SortOrder
    experienceMax?: SortOrderInput | SortOrder
    postedAt?: SortOrder
    applyUrl?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JobScalarWhereWithAggregatesInput>
    OR?: Enumerable<JobScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JobScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    company?: StringWithAggregatesFilter<"Job"> | string
    location?: StringNullableWithAggregatesFilter<"Job"> | string | null
    description?: StringWithAggregatesFilter<"Job"> | string
    salaryMin?: IntNullableWithAggregatesFilter<"Job"> | number | null
    salaryMax?: IntNullableWithAggregatesFilter<"Job"> | number | null
    experienceMin?: IntNullableWithAggregatesFilter<"Job"> | number | null
    experienceMax?: IntNullableWithAggregatesFilter<"Job"> | number | null
    postedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    applyUrl?: StringWithAggregatesFilter<"Job"> | string
    sourceId?: StringWithAggregatesFilter<"Job"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type JobSourceWhereInput = {
    AND?: Enumerable<JobSourceWhereInput>
    OR?: Enumerable<JobSourceWhereInput>
    NOT?: Enumerable<JobSourceWhereInput>
    id?: StringFilter<"JobSource"> | string
    name?: StringFilter<"JobSource"> | string
    baseUrl?: StringFilter<"JobSource"> | string
    jobs?: JobListRelationFilter
  }

  export type JobSourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    jobs?: JobOrderByRelationAggregateInput
  }

  export type JobSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: Enumerable<JobSourceWhereInput>
    OR?: Enumerable<JobSourceWhereInput>
    NOT?: Enumerable<JobSourceWhereInput>
    baseUrl?: StringFilter<"JobSource"> | string
    jobs?: JobListRelationFilter
  }, "id" | "name">

  export type JobSourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    _count?: JobSourceCountOrderByAggregateInput
    _max?: JobSourceMaxOrderByAggregateInput
    _min?: JobSourceMinOrderByAggregateInput
  }

  export type JobSourceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JobSourceScalarWhereWithAggregatesInput>
    OR?: Enumerable<JobSourceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JobSourceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"JobSource"> | string
    name?: StringWithAggregatesFilter<"JobSource"> | string
    baseUrl?: StringWithAggregatesFilter<"JobSource"> | string
  }

  export type ApplicationWhereInput = {
    AND?: Enumerable<ApplicationWhereInput>
    OR?: Enumerable<ApplicationWhereInput>
    NOT?: Enumerable<ApplicationWhereInput>
    id?: StringFilter<"Application"> | string
    userId?: StringFilter<"Application"> | string
    jobId?: StringFilter<"Application"> | string
    resumeId?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    appliedAt?: DateTimeFilter<"Application"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<ApplicationWhereInput>
    OR?: Enumerable<ApplicationWhereInput>
    NOT?: Enumerable<ApplicationWhereInput>
    userId?: StringFilter<"Application"> | string
    jobId?: StringFilter<"Application"> | string
    resumeId?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    appliedAt?: DateTimeFilter<"Application"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    OR?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Application"> | string
    userId?: StringWithAggregatesFilter<"Application"> | string
    jobId?: StringWithAggregatesFilter<"Application"> | string
    resumeId?: StringWithAggregatesFilter<"Application"> | string
    status?: StringWithAggregatesFilter<"Application"> | string
    appliedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type SavedJobWhereInput = {
    AND?: Enumerable<SavedJobWhereInput>
    OR?: Enumerable<SavedJobWhereInput>
    NOT?: Enumerable<SavedJobWhereInput>
    id?: StringFilter<"SavedJob"> | string
    userId?: StringFilter<"SavedJob"> | string
    jobId?: StringFilter<"SavedJob"> | string
    createdAt?: DateTimeFilter<"SavedJob"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
  }

  export type SavedJobOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type SavedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<SavedJobWhereInput>
    OR?: Enumerable<SavedJobWhereInput>
    NOT?: Enumerable<SavedJobWhereInput>
    userId?: StringFilter<"SavedJob"> | string
    jobId?: StringFilter<"SavedJob"> | string
    createdAt?: DateTimeFilter<"SavedJob"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
  }, "id">

  export type SavedJobOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedJobCountOrderByAggregateInput
    _max?: SavedJobMaxOrderByAggregateInput
    _min?: SavedJobMinOrderByAggregateInput
  }

  export type SavedJobScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SavedJobScalarWhereWithAggregatesInput>
    OR?: Enumerable<SavedJobScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SavedJobScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"SavedJob"> | string
    userId?: StringWithAggregatesFilter<"SavedJob"> | string
    jobId?: StringWithAggregatesFilter<"SavedJob"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedJob"> | Date | string
  }

  export type SearchHistoryWhereInput = {
    AND?: Enumerable<SearchHistoryWhereInput>
    OR?: Enumerable<SearchHistoryWhereInput>
    NOT?: Enumerable<SearchHistoryWhereInput>
    id?: StringFilter<"SearchHistory"> | string
    userId?: StringFilter<"SearchHistory"> | string
    searchQuery?: StringFilter<"SearchHistory"> | string
    filters?: JsonFilter<"SearchHistory">
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SearchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    searchQuery?: SortOrder
    filters?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SearchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<SearchHistoryWhereInput>
    OR?: Enumerable<SearchHistoryWhereInput>
    NOT?: Enumerable<SearchHistoryWhereInput>
    userId?: StringFilter<"SearchHistory"> | string
    searchQuery?: StringFilter<"SearchHistory"> | string
    filters?: JsonFilter<"SearchHistory">
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SearchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    searchQuery?: SortOrder
    filters?: SortOrder
    createdAt?: SortOrder
    _count?: SearchHistoryCountOrderByAggregateInput
    _max?: SearchHistoryMaxOrderByAggregateInput
    _min?: SearchHistoryMinOrderByAggregateInput
  }

  export type SearchHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SearchHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<SearchHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SearchHistoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"SearchHistory"> | string
    userId?: StringWithAggregatesFilter<"SearchHistory"> | string
    searchQuery?: StringWithAggregatesFilter<"SearchHistory"> | string
    filters?: JsonWithAggregatesFilter<"SearchHistory">
    createdAt?: DateTimeWithAggregatesFilter<"SearchHistory"> | Date | string
  }

  export type MatchingCriteriaWhereInput = {
    AND?: Enumerable<MatchingCriteriaWhereInput>
    OR?: Enumerable<MatchingCriteriaWhereInput>
    NOT?: Enumerable<MatchingCriteriaWhereInput>
    id?: StringFilter<"MatchingCriteria"> | string
    userId?: StringFilter<"MatchingCriteria"> | string
    role?: StringNullableFilter<"MatchingCriteria"> | string | null
    minSalary?: IntNullableFilter<"MatchingCriteria"> | number | null
    maxExperience?: IntNullableFilter<"MatchingCriteria"> | number | null
    locations?: StringNullableListFilter<"MatchingCriteria">
    skills?: StringNullableListFilter<"MatchingCriteria">
    createdAt?: DateTimeFilter<"MatchingCriteria"> | Date | string
    updatedAt?: DateTimeFilter<"MatchingCriteria"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MatchingCriteriaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrderInput | SortOrder
    minSalary?: SortOrderInput | SortOrder
    maxExperience?: SortOrderInput | SortOrder
    locations?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MatchingCriteriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: Enumerable<MatchingCriteriaWhereInput>
    OR?: Enumerable<MatchingCriteriaWhereInput>
    NOT?: Enumerable<MatchingCriteriaWhereInput>
    role?: StringNullableFilter<"MatchingCriteria"> | string | null
    minSalary?: IntNullableFilter<"MatchingCriteria"> | number | null
    maxExperience?: IntNullableFilter<"MatchingCriteria"> | number | null
    locations?: StringNullableListFilter<"MatchingCriteria">
    skills?: StringNullableListFilter<"MatchingCriteria">
    createdAt?: DateTimeFilter<"MatchingCriteria"> | Date | string
    updatedAt?: DateTimeFilter<"MatchingCriteria"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MatchingCriteriaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrderInput | SortOrder
    minSalary?: SortOrderInput | SortOrder
    maxExperience?: SortOrderInput | SortOrder
    locations?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchingCriteriaCountOrderByAggregateInput
    _avg?: MatchingCriteriaAvgOrderByAggregateInput
    _max?: MatchingCriteriaMaxOrderByAggregateInput
    _min?: MatchingCriteriaMinOrderByAggregateInput
    _sum?: MatchingCriteriaSumOrderByAggregateInput
  }

  export type MatchingCriteriaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MatchingCriteriaScalarWhereWithAggregatesInput>
    OR?: Enumerable<MatchingCriteriaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MatchingCriteriaScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"MatchingCriteria"> | string
    userId?: StringWithAggregatesFilter<"MatchingCriteria"> | string
    role?: StringNullableWithAggregatesFilter<"MatchingCriteria"> | string | null
    minSalary?: IntNullableWithAggregatesFilter<"MatchingCriteria"> | number | null
    maxExperience?: IntNullableWithAggregatesFilter<"MatchingCriteria"> | number | null
    locations?: StringNullableListFilter<"MatchingCriteria">
    skills?: StringNullableListFilter<"MatchingCriteria">
    createdAt?: DateTimeWithAggregatesFilter<"MatchingCriteria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchingCriteria"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: Enumerable<CompanyWhereInput>
    OR?: Enumerable<CompanyWhereInput>
    NOT?: Enumerable<CompanyWhereInput>
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    linkedInUrl?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    employees?: CompanyEmployeeListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    linkedInUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: CompanyEmployeeOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: Enumerable<CompanyWhereInput>
    OR?: Enumerable<CompanyWhereInput>
    NOT?: Enumerable<CompanyWhereInput>
    linkedInUrl?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    employees?: CompanyEmployeeListRelationFilter
  }, "id" | "name">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    linkedInUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    linkedInUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    website?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type CompanyEmployeeWhereInput = {
    AND?: Enumerable<CompanyEmployeeWhereInput>
    OR?: Enumerable<CompanyEmployeeWhereInput>
    NOT?: Enumerable<CompanyEmployeeWhereInput>
    id?: StringFilter<"CompanyEmployee"> | string
    companyId?: StringFilter<"CompanyEmployee"> | string
    fullName?: StringFilter<"CompanyEmployee"> | string
    linkedInProfile?: StringFilter<"CompanyEmployee"> | string
    contactInfo?: JsonFilter<"CompanyEmployee">
    position?: StringNullableFilter<"CompanyEmployee"> | string | null
    lastVerified?: DateTimeNullableFilter<"CompanyEmployee"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanyEmployee"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type CompanyEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    fullName?: SortOrder
    linkedInProfile?: SortOrder
    contactInfo?: SortOrder
    position?: SortOrderInput | SortOrder
    lastVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    linkedInProfile?: string
    AND?: Enumerable<CompanyEmployeeWhereInput>
    OR?: Enumerable<CompanyEmployeeWhereInput>
    NOT?: Enumerable<CompanyEmployeeWhereInput>
    companyId?: StringFilter<"CompanyEmployee"> | string
    fullName?: StringFilter<"CompanyEmployee"> | string
    contactInfo?: JsonFilter<"CompanyEmployee">
    position?: StringNullableFilter<"CompanyEmployee"> | string | null
    lastVerified?: DateTimeNullableFilter<"CompanyEmployee"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanyEmployee"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id" | "linkedInProfile">

  export type CompanyEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    fullName?: SortOrder
    linkedInProfile?: SortOrder
    contactInfo?: SortOrder
    position?: SortOrderInput | SortOrder
    lastVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompanyEmployeeCountOrderByAggregateInput
    _max?: CompanyEmployeeMaxOrderByAggregateInput
    _min?: CompanyEmployeeMinOrderByAggregateInput
  }

  export type CompanyEmployeeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyEmployeeScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyEmployeeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyEmployeeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"CompanyEmployee"> | string
    companyId?: StringWithAggregatesFilter<"CompanyEmployee"> | string
    fullName?: StringWithAggregatesFilter<"CompanyEmployee"> | string
    linkedInProfile?: StringWithAggregatesFilter<"CompanyEmployee"> | string
    contactInfo?: JsonWithAggregatesFilter<"CompanyEmployee">
    position?: StringNullableWithAggregatesFilter<"CompanyEmployee"> | string | null
    lastVerified?: DateTimeNullableWithAggregatesFilter<"CompanyEmployee"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompanyEmployee"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    parentResume?: ResumeCreateNestedOneWithoutVersionsInput
    versions?: ResumeCreateNestedManyWithoutParentResumeInput
    template?: TemplateCreateNestedOneWithoutResumesInput
    applications?: ApplicationCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    parentResumeId?: string | null
    templateId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeUncheckedCreateNestedManyWithoutParentResumeInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    parentResume?: ResumeUpdateOneWithoutVersionsNestedInput
    versions?: ResumeUpdateManyWithoutParentResumeNestedInput
    template?: TemplateUpdateOneWithoutResumesNestedInput
    applications?: ApplicationUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    parentResumeId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeUncheckedUpdateManyWithoutParentResumeNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    parentResumeId?: string | null
    templateId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    parentResumeId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    type: TemplateType
    templatePath: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    type: TemplateType
    templatePath: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | TemplateType
    templatePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | TemplateType
    templatePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    type: TemplateType
    templatePath: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | TemplateType
    templatePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | TemplateType
    templatePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    source: JobSourceCreateNestedOneWithoutJobsInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
    SavedJob?: SavedJobCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    sourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
    SavedJob?: SavedJobUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: JobSourceUpdateOneRequiredWithoutJobsNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
    SavedJob?: SavedJobUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
    SavedJob?: SavedJobUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    sourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSourceCreateInput = {
    id?: string
    name: string
    baseUrl: string
    jobs?: JobCreateNestedManyWithoutSourceInput
  }

  export type JobSourceUncheckedCreateInput = {
    id?: string
    name: string
    baseUrl: string
    jobs?: JobUncheckedCreateNestedManyWithoutSourceInput
  }

  export type JobSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    jobs?: JobUpdateManyWithoutSourceNestedInput
  }

  export type JobSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    jobs?: JobUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type JobSourceCreateManyInput = {
    id?: string
    name: string
    baseUrl: string
  }

  export type JobSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
  }

  export type JobSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateInput = {
    id?: string
    status?: string
    appliedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    job: JobCreateNestedOneWithoutApplicationsInput
    resume: ResumeCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    userId: string
    jobId: string
    resumeId: string
    status?: string
    appliedAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: string
    userId: string
    jobId: string
    resumeId: string
    status?: string
    appliedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedJobsInput
    job: JobCreateNestedOneWithoutSavedJobInput
  }

  export type SavedJobUncheckedCreateInput = {
    id?: string
    userId: string
    jobId: string
    createdAt?: Date | string
  }

  export type SavedJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedJobsNestedInput
    job?: JobUpdateOneRequiredWithoutSavedJobNestedInput
  }

  export type SavedJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobCreateManyInput = {
    id?: string
    userId: string
    jobId: string
    createdAt?: Date | string
  }

  export type SavedJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryCreateInput = {
    id?: string
    searchQuery: string
    filters: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSearchHistoryInput
  }

  export type SearchHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    searchQuery: string
    filters: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SearchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSearchHistoryNestedInput
  }

  export type SearchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryCreateManyInput = {
    id?: string
    userId: string
    searchQuery: string
    filters: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SearchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingCriteriaCreateInput = {
    id?: string
    role?: string | null
    minSalary?: number | null
    maxExperience?: number | null
    locations?: MatchingCriteriaCreatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaCreateskillsInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatchingCriteriaInput
  }

  export type MatchingCriteriaUncheckedCreateInput = {
    id?: string
    userId: string
    role?: string | null
    minSalary?: number | null
    maxExperience?: number | null
    locations?: MatchingCriteriaCreatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaCreateskillsInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingCriteriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxExperience?: NullableIntFieldUpdateOperationsInput | number | null
    locations?: MatchingCriteriaUpdatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaUpdateskillsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchingCriteriaNestedInput
  }

  export type MatchingCriteriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxExperience?: NullableIntFieldUpdateOperationsInput | number | null
    locations?: MatchingCriteriaUpdatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaUpdateskillsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingCriteriaCreateManyInput = {
    id?: string
    userId: string
    role?: string | null
    minSalary?: number | null
    maxExperience?: number | null
    locations?: MatchingCriteriaCreatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaCreateskillsInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingCriteriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxExperience?: NullableIntFieldUpdateOperationsInput | number | null
    locations?: MatchingCriteriaUpdatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaUpdateskillsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingCriteriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxExperience?: NullableIntFieldUpdateOperationsInput | number | null
    locations?: MatchingCriteriaUpdatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaUpdateskillsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    linkedInUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: CompanyEmployeeCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    linkedInUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: CompanyEmployeeUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: CompanyEmployeeUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: CompanyEmployeeUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    linkedInUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyEmployeeCreateInput = {
    id?: string
    fullName: string
    linkedInProfile: string
    contactInfo: JsonNullValueInput | InputJsonValue
    position?: string | null
    lastVerified?: Date | string | null
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
  }

  export type CompanyEmployeeUncheckedCreateInput = {
    id?: string
    companyId: string
    fullName: string
    linkedInProfile: string
    contactInfo: JsonNullValueInput | InputJsonValue
    position?: string | null
    lastVerified?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyEmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    linkedInProfile?: StringFieldUpdateOperationsInput | string
    contactInfo?: JsonNullValueInput | InputJsonValue
    position?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type CompanyEmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    linkedInProfile?: StringFieldUpdateOperationsInput | string
    contactInfo?: JsonNullValueInput | InputJsonValue
    position?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyEmployeeCreateManyInput = {
    id?: string
    companyId: string
    fullName: string
    linkedInProfile: string
    contactInfo: JsonNullValueInput | InputJsonValue
    position?: string | null
    lastVerified?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyEmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    linkedInProfile?: StringFieldUpdateOperationsInput | string
    contactInfo?: JsonNullValueInput | InputJsonValue
    position?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyEmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    linkedInProfile?: StringFieldUpdateOperationsInput | string
    contactInfo?: JsonNullValueInput | InputJsonValue
    position?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type SavedJobListRelationFilter = {
    every?: SavedJobWhereInput
    some?: SavedJobWhereInput
    none?: SavedJobWhereInput
  }

  export type SearchHistoryListRelationFilter = {
    every?: SearchHistoryWhereInput
    some?: SearchHistoryWhereInput
    none?: SearchHistoryWhereInput
  }

  export type MatchingCriteriaNullableRelationFilter = {
    is?: MatchingCriteriaWhereInput | null
    isNot?: MatchingCriteriaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SearchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumFileTypeFilter<$PrismaModel = never> = {
    equals?: FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<FileType> | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<FileType> | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | FileType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResumeNullableRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type TemplateNullableRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    filePathUrl?: SortOrder
    content?: SortOrder
    isBaseline?: SortOrder
    parentResumeId?: SortOrder
    templateId?: SortOrder
    fileType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    filePathUrl?: SortOrder
    isBaseline?: SortOrder
    parentResumeId?: SortOrder
    templateId?: SortOrder
    fileType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    filePathUrl?: SortOrder
    isBaseline?: SortOrder
    parentResumeId?: SortOrder
    templateId?: SortOrder
    fileType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<FileType> | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<FileType> | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type EnumTemplateTypeFilter<$PrismaModel = never> = {
    equals?: TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<TemplateType> | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<TemplateType> | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeFilter<$PrismaModel> | TemplateType
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    templatePath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    templatePath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    templatePath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTemplateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<TemplateType> | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<TemplateType> | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel> | TemplateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateTypeFilter<$PrismaModel>
    _max?: NestedEnumTemplateTypeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type JobSourceRelationFilter = {
    is?: JobSourceWhereInput
    isNot?: JobSourceWhereInput
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    description?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
    postedAt?: SortOrder
    applyUrl?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    description?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
    postedAt?: SortOrder
    applyUrl?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    description?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
    postedAt?: SortOrder
    applyUrl?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobSourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
  }

  export type JobSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
  }

  export type JobSourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
  }

  export type JobRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type ResumeRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type SavedJobCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedJobMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedJobMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    searchQuery?: SortOrder
    filters?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    searchQuery?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    searchQuery?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    hasSome?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MatchingCriteriaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    minSalary?: SortOrder
    maxExperience?: SortOrder
    locations?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchingCriteriaAvgOrderByAggregateInput = {
    minSalary?: SortOrder
    maxExperience?: SortOrder
  }

  export type MatchingCriteriaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    minSalary?: SortOrder
    maxExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchingCriteriaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    minSalary?: SortOrder
    maxExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchingCriteriaSumOrderByAggregateInput = {
    minSalary?: SortOrder
    maxExperience?: SortOrder
  }

  export type CompanyEmployeeListRelationFilter = {
    every?: CompanyEmployeeWhereInput
    some?: CompanyEmployeeWhereInput
    none?: CompanyEmployeeWhereInput
  }

  export type CompanyEmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedInUrl?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedInUrl?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedInUrl?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CompanyEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    fullName?: SortOrder
    linkedInProfile?: SortOrder
    contactInfo?: SortOrder
    position?: SortOrder
    lastVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    fullName?: SortOrder
    linkedInProfile?: SortOrder
    position?: SortOrder
    lastVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    fullName?: SortOrder
    linkedInProfile?: SortOrder
    position?: SortOrder
    lastVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutUserInput>, Enumerable<ResumeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutUserInput>
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: Enumerable<ResumeWhereUniqueInput>
  }

  export type ApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutUserInput>, Enumerable<ApplicationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutUserInput>
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type SavedJobCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SavedJobCreateWithoutUserInput>, Enumerable<SavedJobUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedJobCreateOrConnectWithoutUserInput>
    createMany?: SavedJobCreateManyUserInputEnvelope
    connect?: Enumerable<SavedJobWhereUniqueInput>
  }

  export type SearchHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SearchHistoryCreateWithoutUserInput>, Enumerable<SearchHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SearchHistoryCreateOrConnectWithoutUserInput>
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<SearchHistoryWhereUniqueInput>
  }

  export type MatchingCriteriaCreateNestedOneWithoutUserInput = {
    create?: XOR<MatchingCriteriaCreateWithoutUserInput, MatchingCriteriaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MatchingCriteriaCreateOrConnectWithoutUserInput
    connect?: MatchingCriteriaWhereUniqueInput
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutUserInput>, Enumerable<ResumeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutUserInput>
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: Enumerable<ResumeWhereUniqueInput>
  }

  export type ApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutUserInput>, Enumerable<ApplicationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutUserInput>
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type SavedJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SavedJobCreateWithoutUserInput>, Enumerable<SavedJobUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedJobCreateOrConnectWithoutUserInput>
    createMany?: SavedJobCreateManyUserInputEnvelope
    connect?: Enumerable<SavedJobWhereUniqueInput>
  }

  export type SearchHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SearchHistoryCreateWithoutUserInput>, Enumerable<SearchHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SearchHistoryCreateOrConnectWithoutUserInput>
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<SearchHistoryWhereUniqueInput>
  }

  export type MatchingCriteriaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MatchingCriteriaCreateWithoutUserInput, MatchingCriteriaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MatchingCriteriaCreateOrConnectWithoutUserInput
    connect?: MatchingCriteriaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutUserInput>, Enumerable<ResumeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ResumeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: Enumerable<ResumeWhereUniqueInput>
    disconnect?: Enumerable<ResumeWhereUniqueInput>
    delete?: Enumerable<ResumeWhereUniqueInput>
    connect?: Enumerable<ResumeWhereUniqueInput>
    update?: Enumerable<ResumeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ResumeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ResumeScalarWhereInput>
  }

  export type ApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutUserInput>, Enumerable<ApplicationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type SavedJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SavedJobCreateWithoutUserInput>, Enumerable<SavedJobUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedJobCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SavedJobUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SavedJobCreateManyUserInputEnvelope
    set?: Enumerable<SavedJobWhereUniqueInput>
    disconnect?: Enumerable<SavedJobWhereUniqueInput>
    delete?: Enumerable<SavedJobWhereUniqueInput>
    connect?: Enumerable<SavedJobWhereUniqueInput>
    update?: Enumerable<SavedJobUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SavedJobUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SavedJobScalarWhereInput>
  }

  export type SearchHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SearchHistoryCreateWithoutUserInput>, Enumerable<SearchHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SearchHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SearchHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    set?: Enumerable<SearchHistoryWhereUniqueInput>
    disconnect?: Enumerable<SearchHistoryWhereUniqueInput>
    delete?: Enumerable<SearchHistoryWhereUniqueInput>
    connect?: Enumerable<SearchHistoryWhereUniqueInput>
    update?: Enumerable<SearchHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SearchHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SearchHistoryScalarWhereInput>
  }

  export type MatchingCriteriaUpdateOneWithoutUserNestedInput = {
    create?: XOR<MatchingCriteriaCreateWithoutUserInput, MatchingCriteriaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MatchingCriteriaCreateOrConnectWithoutUserInput
    upsert?: MatchingCriteriaUpsertWithoutUserInput
    disconnect?: MatchingCriteriaWhereInput | boolean
    delete?: MatchingCriteriaWhereInput | boolean
    connect?: MatchingCriteriaWhereUniqueInput
    update?: XOR<XOR<MatchingCriteriaUpdateToOneWithWhereWithoutUserInput, MatchingCriteriaUpdateWithoutUserInput>, MatchingCriteriaUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutUserInput>, Enumerable<ResumeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ResumeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: Enumerable<ResumeWhereUniqueInput>
    disconnect?: Enumerable<ResumeWhereUniqueInput>
    delete?: Enumerable<ResumeWhereUniqueInput>
    connect?: Enumerable<ResumeWhereUniqueInput>
    update?: Enumerable<ResumeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ResumeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ResumeScalarWhereInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutUserInput>, Enumerable<ApplicationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type SavedJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SavedJobCreateWithoutUserInput>, Enumerable<SavedJobUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedJobCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SavedJobUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SavedJobCreateManyUserInputEnvelope
    set?: Enumerable<SavedJobWhereUniqueInput>
    disconnect?: Enumerable<SavedJobWhereUniqueInput>
    delete?: Enumerable<SavedJobWhereUniqueInput>
    connect?: Enumerable<SavedJobWhereUniqueInput>
    update?: Enumerable<SavedJobUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SavedJobUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SavedJobScalarWhereInput>
  }

  export type SearchHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SearchHistoryCreateWithoutUserInput>, Enumerable<SearchHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SearchHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SearchHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    set?: Enumerable<SearchHistoryWhereUniqueInput>
    disconnect?: Enumerable<SearchHistoryWhereUniqueInput>
    delete?: Enumerable<SearchHistoryWhereUniqueInput>
    connect?: Enumerable<SearchHistoryWhereUniqueInput>
    update?: Enumerable<SearchHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SearchHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SearchHistoryScalarWhereInput>
  }

  export type MatchingCriteriaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MatchingCriteriaCreateWithoutUserInput, MatchingCriteriaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MatchingCriteriaCreateOrConnectWithoutUserInput
    upsert?: MatchingCriteriaUpsertWithoutUserInput
    disconnect?: MatchingCriteriaWhereInput | boolean
    delete?: MatchingCriteriaWhereInput | boolean
    connect?: MatchingCriteriaWhereUniqueInput
    update?: XOR<XOR<MatchingCriteriaUpdateToOneWithWhereWithoutUserInput, MatchingCriteriaUpdateWithoutUserInput>, MatchingCriteriaUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutVersionsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeCreateNestedManyWithoutParentResumeInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutParentResumeInput>, Enumerable<ResumeUncheckedCreateWithoutParentResumeInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutParentResumeInput>
    createMany?: ResumeCreateManyParentResumeInputEnvelope
    connect?: Enumerable<ResumeWhereUniqueInput>
  }

  export type TemplateCreateNestedOneWithoutResumesInput = {
    create?: XOR<TemplateCreateWithoutResumesInput, TemplateUncheckedCreateWithoutResumesInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutResumesInput
    connect?: TemplateWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutResumeInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutResumeInput>, Enumerable<ApplicationUncheckedCreateWithoutResumeInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutResumeInput>
    createMany?: ApplicationCreateManyResumeInputEnvelope
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type ResumeUncheckedCreateNestedManyWithoutParentResumeInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutParentResumeInput>, Enumerable<ResumeUncheckedCreateWithoutParentResumeInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutParentResumeInput>
    createMany?: ResumeCreateManyParentResumeInputEnvelope
    connect?: Enumerable<ResumeWhereUniqueInput>
  }

  export type ApplicationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutResumeInput>, Enumerable<ApplicationUncheckedCreateWithoutResumeInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutResumeInput>
    createMany?: ApplicationCreateManyResumeInputEnvelope
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: FileType
  }

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
  }

  export type ResumeUpdateOneWithoutVersionsNestedInput = {
    create?: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutVersionsInput
    upsert?: ResumeUpsertWithoutVersionsInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutVersionsInput, ResumeUpdateWithoutVersionsInput>, ResumeUncheckedUpdateWithoutVersionsInput>
  }

  export type ResumeUpdateManyWithoutParentResumeNestedInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutParentResumeInput>, Enumerable<ResumeUncheckedCreateWithoutParentResumeInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutParentResumeInput>
    upsert?: Enumerable<ResumeUpsertWithWhereUniqueWithoutParentResumeInput>
    createMany?: ResumeCreateManyParentResumeInputEnvelope
    set?: Enumerable<ResumeWhereUniqueInput>
    disconnect?: Enumerable<ResumeWhereUniqueInput>
    delete?: Enumerable<ResumeWhereUniqueInput>
    connect?: Enumerable<ResumeWhereUniqueInput>
    update?: Enumerable<ResumeUpdateWithWhereUniqueWithoutParentResumeInput>
    updateMany?: Enumerable<ResumeUpdateManyWithWhereWithoutParentResumeInput>
    deleteMany?: Enumerable<ResumeScalarWhereInput>
  }

  export type TemplateUpdateOneWithoutResumesNestedInput = {
    create?: XOR<TemplateCreateWithoutResumesInput, TemplateUncheckedCreateWithoutResumesInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutResumesInput
    upsert?: TemplateUpsertWithoutResumesInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutResumesInput, TemplateUpdateWithoutResumesInput>, TemplateUncheckedUpdateWithoutResumesInput>
  }

  export type ApplicationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutResumeInput>, Enumerable<ApplicationUncheckedCreateWithoutResumeInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutResumeInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutResumeInput>
    createMany?: ApplicationCreateManyResumeInputEnvelope
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutResumeInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutResumeInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type ResumeUncheckedUpdateManyWithoutParentResumeNestedInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutParentResumeInput>, Enumerable<ResumeUncheckedCreateWithoutParentResumeInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutParentResumeInput>
    upsert?: Enumerable<ResumeUpsertWithWhereUniqueWithoutParentResumeInput>
    createMany?: ResumeCreateManyParentResumeInputEnvelope
    set?: Enumerable<ResumeWhereUniqueInput>
    disconnect?: Enumerable<ResumeWhereUniqueInput>
    delete?: Enumerable<ResumeWhereUniqueInput>
    connect?: Enumerable<ResumeWhereUniqueInput>
    update?: Enumerable<ResumeUpdateWithWhereUniqueWithoutParentResumeInput>
    updateMany?: Enumerable<ResumeUpdateManyWithWhereWithoutParentResumeInput>
    deleteMany?: Enumerable<ResumeScalarWhereInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutResumeInput>, Enumerable<ApplicationUncheckedCreateWithoutResumeInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutResumeInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutResumeInput>
    createMany?: ApplicationCreateManyResumeInputEnvelope
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutResumeInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutResumeInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type ResumeCreateNestedManyWithoutTemplateInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutTemplateInput>, Enumerable<ResumeUncheckedCreateWithoutTemplateInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutTemplateInput>
    createMany?: ResumeCreateManyTemplateInputEnvelope
    connect?: Enumerable<ResumeWhereUniqueInput>
  }

  export type ResumeUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutTemplateInput>, Enumerable<ResumeUncheckedCreateWithoutTemplateInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutTemplateInput>
    createMany?: ResumeCreateManyTemplateInputEnvelope
    connect?: Enumerable<ResumeWhereUniqueInput>
  }

  export type EnumTemplateTypeFieldUpdateOperationsInput = {
    set?: TemplateType
  }

  export type ResumeUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutTemplateInput>, Enumerable<ResumeUncheckedCreateWithoutTemplateInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutTemplateInput>
    upsert?: Enumerable<ResumeUpsertWithWhereUniqueWithoutTemplateInput>
    createMany?: ResumeCreateManyTemplateInputEnvelope
    set?: Enumerable<ResumeWhereUniqueInput>
    disconnect?: Enumerable<ResumeWhereUniqueInput>
    delete?: Enumerable<ResumeWhereUniqueInput>
    connect?: Enumerable<ResumeWhereUniqueInput>
    update?: Enumerable<ResumeUpdateWithWhereUniqueWithoutTemplateInput>
    updateMany?: Enumerable<ResumeUpdateManyWithWhereWithoutTemplateInput>
    deleteMany?: Enumerable<ResumeScalarWhereInput>
  }

  export type ResumeUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<Enumerable<ResumeCreateWithoutTemplateInput>, Enumerable<ResumeUncheckedCreateWithoutTemplateInput>>
    connectOrCreate?: Enumerable<ResumeCreateOrConnectWithoutTemplateInput>
    upsert?: Enumerable<ResumeUpsertWithWhereUniqueWithoutTemplateInput>
    createMany?: ResumeCreateManyTemplateInputEnvelope
    set?: Enumerable<ResumeWhereUniqueInput>
    disconnect?: Enumerable<ResumeWhereUniqueInput>
    delete?: Enumerable<ResumeWhereUniqueInput>
    connect?: Enumerable<ResumeWhereUniqueInput>
    update?: Enumerable<ResumeUpdateWithWhereUniqueWithoutTemplateInput>
    updateMany?: Enumerable<ResumeUpdateManyWithWhereWithoutTemplateInput>
    deleteMany?: Enumerable<ResumeScalarWhereInput>
  }

  export type JobSourceCreateNestedOneWithoutJobsInput = {
    create?: XOR<JobSourceCreateWithoutJobsInput, JobSourceUncheckedCreateWithoutJobsInput>
    connectOrCreate?: JobSourceCreateOrConnectWithoutJobsInput
    connect?: JobSourceWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutJobInput>, Enumerable<ApplicationUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutJobInput>
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type SavedJobCreateNestedManyWithoutJobInput = {
    create?: XOR<Enumerable<SavedJobCreateWithoutJobInput>, Enumerable<SavedJobUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<SavedJobCreateOrConnectWithoutJobInput>
    createMany?: SavedJobCreateManyJobInputEnvelope
    connect?: Enumerable<SavedJobWhereUniqueInput>
  }

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutJobInput>, Enumerable<ApplicationUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutJobInput>
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type SavedJobUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<Enumerable<SavedJobCreateWithoutJobInput>, Enumerable<SavedJobUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<SavedJobCreateOrConnectWithoutJobInput>
    createMany?: SavedJobCreateManyJobInputEnvelope
    connect?: Enumerable<SavedJobWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobSourceUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<JobSourceCreateWithoutJobsInput, JobSourceUncheckedCreateWithoutJobsInput>
    connectOrCreate?: JobSourceCreateOrConnectWithoutJobsInput
    upsert?: JobSourceUpsertWithoutJobsInput
    connect?: JobSourceWhereUniqueInput
    update?: XOR<XOR<JobSourceUpdateToOneWithWhereWithoutJobsInput, JobSourceUpdateWithoutJobsInput>, JobSourceUncheckedUpdateWithoutJobsInput>
  }

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutJobInput>, Enumerable<ApplicationUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutJobInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutJobInput>
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutJobInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutJobInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type SavedJobUpdateManyWithoutJobNestedInput = {
    create?: XOR<Enumerable<SavedJobCreateWithoutJobInput>, Enumerable<SavedJobUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<SavedJobCreateOrConnectWithoutJobInput>
    upsert?: Enumerable<SavedJobUpsertWithWhereUniqueWithoutJobInput>
    createMany?: SavedJobCreateManyJobInputEnvelope
    set?: Enumerable<SavedJobWhereUniqueInput>
    disconnect?: Enumerable<SavedJobWhereUniqueInput>
    delete?: Enumerable<SavedJobWhereUniqueInput>
    connect?: Enumerable<SavedJobWhereUniqueInput>
    update?: Enumerable<SavedJobUpdateWithWhereUniqueWithoutJobInput>
    updateMany?: Enumerable<SavedJobUpdateManyWithWhereWithoutJobInput>
    deleteMany?: Enumerable<SavedJobScalarWhereInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutJobInput>, Enumerable<ApplicationUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutJobInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutJobInput>
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutJobInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutJobInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type SavedJobUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<Enumerable<SavedJobCreateWithoutJobInput>, Enumerable<SavedJobUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<SavedJobCreateOrConnectWithoutJobInput>
    upsert?: Enumerable<SavedJobUpsertWithWhereUniqueWithoutJobInput>
    createMany?: SavedJobCreateManyJobInputEnvelope
    set?: Enumerable<SavedJobWhereUniqueInput>
    disconnect?: Enumerable<SavedJobWhereUniqueInput>
    delete?: Enumerable<SavedJobWhereUniqueInput>
    connect?: Enumerable<SavedJobWhereUniqueInput>
    update?: Enumerable<SavedJobUpdateWithWhereUniqueWithoutJobInput>
    updateMany?: Enumerable<SavedJobUpdateManyWithWhereWithoutJobInput>
    deleteMany?: Enumerable<SavedJobScalarWhereInput>
  }

  export type JobCreateNestedManyWithoutSourceInput = {
    create?: XOR<Enumerable<JobCreateWithoutSourceInput>, Enumerable<JobUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<JobCreateOrConnectWithoutSourceInput>
    createMany?: JobCreateManySourceInputEnvelope
    connect?: Enumerable<JobWhereUniqueInput>
  }

  export type JobUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<Enumerable<JobCreateWithoutSourceInput>, Enumerable<JobUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<JobCreateOrConnectWithoutSourceInput>
    createMany?: JobCreateManySourceInputEnvelope
    connect?: Enumerable<JobWhereUniqueInput>
  }

  export type JobUpdateManyWithoutSourceNestedInput = {
    create?: XOR<Enumerable<JobCreateWithoutSourceInput>, Enumerable<JobUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<JobCreateOrConnectWithoutSourceInput>
    upsert?: Enumerable<JobUpsertWithWhereUniqueWithoutSourceInput>
    createMany?: JobCreateManySourceInputEnvelope
    set?: Enumerable<JobWhereUniqueInput>
    disconnect?: Enumerable<JobWhereUniqueInput>
    delete?: Enumerable<JobWhereUniqueInput>
    connect?: Enumerable<JobWhereUniqueInput>
    update?: Enumerable<JobUpdateWithWhereUniqueWithoutSourceInput>
    updateMany?: Enumerable<JobUpdateManyWithWhereWithoutSourceInput>
    deleteMany?: Enumerable<JobScalarWhereInput>
  }

  export type JobUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<Enumerable<JobCreateWithoutSourceInput>, Enumerable<JobUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<JobCreateOrConnectWithoutSourceInput>
    upsert?: Enumerable<JobUpsertWithWhereUniqueWithoutSourceInput>
    createMany?: JobCreateManySourceInputEnvelope
    set?: Enumerable<JobWhereUniqueInput>
    disconnect?: Enumerable<JobWhereUniqueInput>
    delete?: Enumerable<JobWhereUniqueInput>
    connect?: Enumerable<JobWhereUniqueInput>
    update?: Enumerable<JobUpdateWithWhereUniqueWithoutSourceInput>
    updateMany?: Enumerable<JobUpdateManyWithWhereWithoutSourceInput>
    deleteMany?: Enumerable<JobScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ResumeCreateWithoutApplicationsInput, ResumeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutApplicationsInput
    connect?: ResumeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type ResumeUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ResumeCreateWithoutApplicationsInput, ResumeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutApplicationsInput
    upsert?: ResumeUpsertWithoutApplicationsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutApplicationsInput, ResumeUpdateWithoutApplicationsInput>, ResumeUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserCreateNestedOneWithoutSavedJobsInput = {
    create?: XOR<UserCreateWithoutSavedJobsInput, UserUncheckedCreateWithoutSavedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedJobsInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutSavedJobInput = {
    create?: XOR<JobCreateWithoutSavedJobInput, JobUncheckedCreateWithoutSavedJobInput>
    connectOrCreate?: JobCreateOrConnectWithoutSavedJobInput
    connect?: JobWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedJobsNestedInput = {
    create?: XOR<UserCreateWithoutSavedJobsInput, UserUncheckedCreateWithoutSavedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedJobsInput
    upsert?: UserUpsertWithoutSavedJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedJobsInput, UserUpdateWithoutSavedJobsInput>, UserUncheckedUpdateWithoutSavedJobsInput>
  }

  export type JobUpdateOneRequiredWithoutSavedJobNestedInput = {
    create?: XOR<JobCreateWithoutSavedJobInput, JobUncheckedCreateWithoutSavedJobInput>
    connectOrCreate?: JobCreateOrConnectWithoutSavedJobInput
    upsert?: JobUpsertWithoutSavedJobInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutSavedJobInput, JobUpdateWithoutSavedJobInput>, JobUncheckedUpdateWithoutSavedJobInput>
  }

  export type UserCreateNestedOneWithoutSearchHistoryInput = {
    create?: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSearchHistoryNestedInput = {
    create?: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchHistoryInput
    upsert?: UserUpsertWithoutSearchHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSearchHistoryInput, UserUpdateWithoutSearchHistoryInput>, UserUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type MatchingCriteriaCreatelocationsInput = {
    set: Enumerable<string>
  }

  export type MatchingCriteriaCreateskillsInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutMatchingCriteriaInput = {
    create?: XOR<UserCreateWithoutMatchingCriteriaInput, UserUncheckedCreateWithoutMatchingCriteriaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchingCriteriaInput
    connect?: UserWhereUniqueInput
  }

  export type MatchingCriteriaUpdatelocationsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type MatchingCriteriaUpdateskillsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutMatchingCriteriaNestedInput = {
    create?: XOR<UserCreateWithoutMatchingCriteriaInput, UserUncheckedCreateWithoutMatchingCriteriaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchingCriteriaInput
    upsert?: UserUpsertWithoutMatchingCriteriaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchingCriteriaInput, UserUpdateWithoutMatchingCriteriaInput>, UserUncheckedUpdateWithoutMatchingCriteriaInput>
  }

  export type CompanyEmployeeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyEmployeeCreateWithoutCompanyInput>, Enumerable<CompanyEmployeeUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyEmployeeCreateOrConnectWithoutCompanyInput>
    createMany?: CompanyEmployeeCreateManyCompanyInputEnvelope
    connect?: Enumerable<CompanyEmployeeWhereUniqueInput>
  }

  export type CompanyEmployeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyEmployeeCreateWithoutCompanyInput>, Enumerable<CompanyEmployeeUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyEmployeeCreateOrConnectWithoutCompanyInput>
    createMany?: CompanyEmployeeCreateManyCompanyInputEnvelope
    connect?: Enumerable<CompanyEmployeeWhereUniqueInput>
  }

  export type CompanyEmployeeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<CompanyEmployeeCreateWithoutCompanyInput>, Enumerable<CompanyEmployeeUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyEmployeeCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<CompanyEmployeeUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: CompanyEmployeeCreateManyCompanyInputEnvelope
    set?: Enumerable<CompanyEmployeeWhereUniqueInput>
    disconnect?: Enumerable<CompanyEmployeeWhereUniqueInput>
    delete?: Enumerable<CompanyEmployeeWhereUniqueInput>
    connect?: Enumerable<CompanyEmployeeWhereUniqueInput>
    update?: Enumerable<CompanyEmployeeUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<CompanyEmployeeUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<CompanyEmployeeScalarWhereInput>
  }

  export type CompanyEmployeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<CompanyEmployeeCreateWithoutCompanyInput>, Enumerable<CompanyEmployeeUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyEmployeeCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<CompanyEmployeeUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: CompanyEmployeeCreateManyCompanyInputEnvelope
    set?: Enumerable<CompanyEmployeeWhereUniqueInput>
    disconnect?: Enumerable<CompanyEmployeeWhereUniqueInput>
    delete?: Enumerable<CompanyEmployeeWhereUniqueInput>
    connect?: Enumerable<CompanyEmployeeWhereUniqueInput>
    update?: Enumerable<CompanyEmployeeUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<CompanyEmployeeUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<CompanyEmployeeScalarWhereInput>
  }

  export type CompanyCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    upsert?: CompanyUpsertWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEmployeesInput, CompanyUpdateWithoutEmployeesInput>, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumFileTypeFilter<$PrismaModel = never> = {
    equals?: FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<FileType> | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<FileType> | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | FileType
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<FileType> | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<FileType> | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type NestedEnumTemplateTypeFilter<$PrismaModel = never> = {
    equals?: TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<TemplateType> | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<TemplateType> | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeFilter<$PrismaModel> | TemplateType
  }

  export type NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<TemplateType> | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<TemplateType> | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel> | TemplateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateTypeFilter<$PrismaModel>
    _max?: NestedEnumTemplateTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    parentResume?: ResumeCreateNestedOneWithoutVersionsInput
    versions?: ResumeCreateNestedManyWithoutParentResumeInput
    template?: TemplateCreateNestedOneWithoutResumesInput
    applications?: ApplicationCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    parentResumeId?: string | null
    templateId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeUncheckedCreateNestedManyWithoutParentResumeInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: Enumerable<ResumeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutUserInput = {
    id?: string
    status?: string
    appliedAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
    resume: ResumeCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    jobId: string
    resumeId: string
    status?: string
    appliedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationCreateManyUserInputEnvelope = {
    data: Enumerable<ApplicationCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SavedJobCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutSavedJobInput
  }

  export type SavedJobUncheckedCreateWithoutUserInput = {
    id?: string
    jobId: string
    createdAt?: Date | string
  }

  export type SavedJobCreateOrConnectWithoutUserInput = {
    where: SavedJobWhereUniqueInput
    create: XOR<SavedJobCreateWithoutUserInput, SavedJobUncheckedCreateWithoutUserInput>
  }

  export type SavedJobCreateManyUserInputEnvelope = {
    data: Enumerable<SavedJobCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SearchHistoryCreateWithoutUserInput = {
    id?: string
    searchQuery: string
    filters: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SearchHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    searchQuery: string
    filters: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SearchHistoryCreateOrConnectWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    create: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput>
  }

  export type SearchHistoryCreateManyUserInputEnvelope = {
    data: Enumerable<SearchHistoryCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type MatchingCriteriaCreateWithoutUserInput = {
    id?: string
    role?: string | null
    minSalary?: number | null
    maxExperience?: number | null
    locations?: MatchingCriteriaCreatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaCreateskillsInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingCriteriaUncheckedCreateWithoutUserInput = {
    id?: string
    role?: string | null
    minSalary?: number | null
    maxExperience?: number | null
    locations?: MatchingCriteriaCreatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaCreateskillsInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingCriteriaCreateOrConnectWithoutUserInput = {
    where: MatchingCriteriaWhereUniqueInput
    create: XOR<MatchingCriteriaCreateWithoutUserInput, MatchingCriteriaUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: Enumerable<ResumeScalarWhereInput>
    OR?: Enumerable<ResumeScalarWhereInput>
    NOT?: Enumerable<ResumeScalarWhereInput>
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    filePathUrl?: StringFilter<"Resume"> | string
    content?: JsonFilter<"Resume">
    isBaseline?: BoolFilter<"Resume"> | boolean
    parentResumeId?: StringNullableFilter<"Resume"> | string | null
    templateId?: StringNullableFilter<"Resume"> | string | null
    fileType?: EnumFileTypeFilter<"Resume"> | FileType
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: Enumerable<ApplicationScalarWhereInput>
    OR?: Enumerable<ApplicationScalarWhereInput>
    NOT?: Enumerable<ApplicationScalarWhereInput>
    id?: StringFilter<"Application"> | string
    userId?: StringFilter<"Application"> | string
    jobId?: StringFilter<"Application"> | string
    resumeId?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    appliedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type SavedJobUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedJobWhereUniqueInput
    update: XOR<SavedJobUpdateWithoutUserInput, SavedJobUncheckedUpdateWithoutUserInput>
    create: XOR<SavedJobCreateWithoutUserInput, SavedJobUncheckedCreateWithoutUserInput>
  }

  export type SavedJobUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedJobWhereUniqueInput
    data: XOR<SavedJobUpdateWithoutUserInput, SavedJobUncheckedUpdateWithoutUserInput>
  }

  export type SavedJobUpdateManyWithWhereWithoutUserInput = {
    where: SavedJobScalarWhereInput
    data: XOR<SavedJobUpdateManyMutationInput, SavedJobUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedJobScalarWhereInput = {
    AND?: Enumerable<SavedJobScalarWhereInput>
    OR?: Enumerable<SavedJobScalarWhereInput>
    NOT?: Enumerable<SavedJobScalarWhereInput>
    id?: StringFilter<"SavedJob"> | string
    userId?: StringFilter<"SavedJob"> | string
    jobId?: StringFilter<"SavedJob"> | string
    createdAt?: DateTimeFilter<"SavedJob"> | Date | string
  }

  export type SearchHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    update: XOR<SearchHistoryUpdateWithoutUserInput, SearchHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput>
  }

  export type SearchHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    data: XOR<SearchHistoryUpdateWithoutUserInput, SearchHistoryUncheckedUpdateWithoutUserInput>
  }

  export type SearchHistoryUpdateManyWithWhereWithoutUserInput = {
    where: SearchHistoryScalarWhereInput
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type SearchHistoryScalarWhereInput = {
    AND?: Enumerable<SearchHistoryScalarWhereInput>
    OR?: Enumerable<SearchHistoryScalarWhereInput>
    NOT?: Enumerable<SearchHistoryScalarWhereInput>
    id?: StringFilter<"SearchHistory"> | string
    userId?: StringFilter<"SearchHistory"> | string
    searchQuery?: StringFilter<"SearchHistory"> | string
    filters?: JsonFilter<"SearchHistory">
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
  }

  export type MatchingCriteriaUpsertWithoutUserInput = {
    update: XOR<MatchingCriteriaUpdateWithoutUserInput, MatchingCriteriaUncheckedUpdateWithoutUserInput>
    create: XOR<MatchingCriteriaCreateWithoutUserInput, MatchingCriteriaUncheckedCreateWithoutUserInput>
    where?: MatchingCriteriaWhereInput
  }

  export type MatchingCriteriaUpdateToOneWithWhereWithoutUserInput = {
    where?: MatchingCriteriaWhereInput
    data: XOR<MatchingCriteriaUpdateWithoutUserInput, MatchingCriteriaUncheckedUpdateWithoutUserInput>
  }

  export type MatchingCriteriaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxExperience?: NullableIntFieldUpdateOperationsInput | number | null
    locations?: MatchingCriteriaUpdatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaUpdateskillsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingCriteriaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxExperience?: NullableIntFieldUpdateOperationsInput | number | null
    locations?: MatchingCriteriaUpdatelocationsInput | Enumerable<string>
    skills?: MatchingCriteriaUpdateskillsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutResumesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
  }

  export type ResumeCreateWithoutVersionsInput = {
    id?: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    parentResume?: ResumeCreateNestedOneWithoutVersionsInput
    template?: TemplateCreateNestedOneWithoutResumesInput
    applications?: ApplicationCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutVersionsInput = {
    id?: string
    userId: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    parentResumeId?: string | null
    templateId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutVersionsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
  }

  export type ResumeCreateWithoutParentResumeInput = {
    id?: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeCreateNestedManyWithoutParentResumeInput
    template?: TemplateCreateNestedOneWithoutResumesInput
    applications?: ApplicationCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutParentResumeInput = {
    id?: string
    userId: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    templateId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeUncheckedCreateNestedManyWithoutParentResumeInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutParentResumeInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutParentResumeInput, ResumeUncheckedCreateWithoutParentResumeInput>
  }

  export type ResumeCreateManyParentResumeInputEnvelope = {
    data: Enumerable<ResumeCreateManyParentResumeInput>
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutResumesInput = {
    id?: string
    name: string
    type: TemplateType
    templatePath: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUncheckedCreateWithoutResumesInput = {
    id?: string
    name: string
    type: TemplateType
    templatePath: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateOrConnectWithoutResumesInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutResumesInput, TemplateUncheckedCreateWithoutResumesInput>
  }

  export type ApplicationCreateWithoutResumeInput = {
    id?: string
    status?: string
    appliedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutResumeInput = {
    id?: string
    userId: string
    jobId: string
    status?: string
    appliedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutResumeInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutResumeInput, ApplicationUncheckedCreateWithoutResumeInput>
  }

  export type ApplicationCreateManyResumeInputEnvelope = {
    data: Enumerable<ApplicationCreateManyResumeInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutResumesInput = {
    update: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutVersionsInput = {
    update: XOR<ResumeUpdateWithoutVersionsInput, ResumeUncheckedUpdateWithoutVersionsInput>
    create: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutVersionsInput, ResumeUncheckedUpdateWithoutVersionsInput>
  }

  export type ResumeUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    parentResume?: ResumeUpdateOneWithoutVersionsNestedInput
    template?: TemplateUpdateOneWithoutResumesNestedInput
    applications?: ApplicationUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    parentResumeId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUpsertWithWhereUniqueWithoutParentResumeInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutParentResumeInput, ResumeUncheckedUpdateWithoutParentResumeInput>
    create: XOR<ResumeCreateWithoutParentResumeInput, ResumeUncheckedCreateWithoutParentResumeInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutParentResumeInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutParentResumeInput, ResumeUncheckedUpdateWithoutParentResumeInput>
  }

  export type ResumeUpdateManyWithWhereWithoutParentResumeInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutParentResumeInput>
  }

  export type TemplateUpsertWithoutResumesInput = {
    update: XOR<TemplateUpdateWithoutResumesInput, TemplateUncheckedUpdateWithoutResumesInput>
    create: XOR<TemplateCreateWithoutResumesInput, TemplateUncheckedCreateWithoutResumesInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutResumesInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutResumesInput, TemplateUncheckedUpdateWithoutResumesInput>
  }

  export type TemplateUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | TemplateType
    templatePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | TemplateType
    templatePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutResumeInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutResumeInput, ApplicationUncheckedUpdateWithoutResumeInput>
    create: XOR<ApplicationCreateWithoutResumeInput, ApplicationUncheckedCreateWithoutResumeInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutResumeInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutResumeInput, ApplicationUncheckedUpdateWithoutResumeInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutResumeInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutResumeInput>
  }

  export type ResumeCreateWithoutTemplateInput = {
    id?: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    parentResume?: ResumeCreateNestedOneWithoutVersionsInput
    versions?: ResumeCreateNestedManyWithoutParentResumeInput
    applications?: ApplicationCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutTemplateInput = {
    id?: string
    userId: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    parentResumeId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeUncheckedCreateNestedManyWithoutParentResumeInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput>
  }

  export type ResumeCreateManyTemplateInputEnvelope = {
    data: Enumerable<ResumeCreateManyTemplateInput>
    skipDuplicates?: boolean
  }

  export type ResumeUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutTemplateInput, ResumeUncheckedUpdateWithoutTemplateInput>
    create: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutTemplateInput, ResumeUncheckedUpdateWithoutTemplateInput>
  }

  export type ResumeUpdateManyWithWhereWithoutTemplateInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutTemplateInput>
  }

  export type JobSourceCreateWithoutJobsInput = {
    id?: string
    name: string
    baseUrl: string
  }

  export type JobSourceUncheckedCreateWithoutJobsInput = {
    id?: string
    name: string
    baseUrl: string
  }

  export type JobSourceCreateOrConnectWithoutJobsInput = {
    where: JobSourceWhereUniqueInput
    create: XOR<JobSourceCreateWithoutJobsInput, JobSourceUncheckedCreateWithoutJobsInput>
  }

  export type ApplicationCreateWithoutJobInput = {
    id?: string
    status?: string
    appliedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    resume: ResumeCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: string
    userId: string
    resumeId: string
    status?: string
    appliedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationCreateManyJobInputEnvelope = {
    data: Enumerable<ApplicationCreateManyJobInput>
    skipDuplicates?: boolean
  }

  export type SavedJobCreateWithoutJobInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedJobsInput
  }

  export type SavedJobUncheckedCreateWithoutJobInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedJobCreateOrConnectWithoutJobInput = {
    where: SavedJobWhereUniqueInput
    create: XOR<SavedJobCreateWithoutJobInput, SavedJobUncheckedCreateWithoutJobInput>
  }

  export type SavedJobCreateManyJobInputEnvelope = {
    data: Enumerable<SavedJobCreateManyJobInput>
    skipDuplicates?: boolean
  }

  export type JobSourceUpsertWithoutJobsInput = {
    update: XOR<JobSourceUpdateWithoutJobsInput, JobSourceUncheckedUpdateWithoutJobsInput>
    create: XOR<JobSourceCreateWithoutJobsInput, JobSourceUncheckedCreateWithoutJobsInput>
    where?: JobSourceWhereInput
  }

  export type JobSourceUpdateToOneWithWhereWithoutJobsInput = {
    where?: JobSourceWhereInput
    data: XOR<JobSourceUpdateWithoutJobsInput, JobSourceUncheckedUpdateWithoutJobsInput>
  }

  export type JobSourceUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
  }

  export type JobSourceUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type SavedJobUpsertWithWhereUniqueWithoutJobInput = {
    where: SavedJobWhereUniqueInput
    update: XOR<SavedJobUpdateWithoutJobInput, SavedJobUncheckedUpdateWithoutJobInput>
    create: XOR<SavedJobCreateWithoutJobInput, SavedJobUncheckedCreateWithoutJobInput>
  }

  export type SavedJobUpdateWithWhereUniqueWithoutJobInput = {
    where: SavedJobWhereUniqueInput
    data: XOR<SavedJobUpdateWithoutJobInput, SavedJobUncheckedUpdateWithoutJobInput>
  }

  export type SavedJobUpdateManyWithWhereWithoutJobInput = {
    where: SavedJobScalarWhereInput
    data: XOR<SavedJobUpdateManyMutationInput, SavedJobUncheckedUpdateManyWithoutJobInput>
  }

  export type JobCreateWithoutSourceInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutJobInput
    SavedJob?: SavedJobCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutSourceInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
    SavedJob?: SavedJobUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutSourceInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutSourceInput, JobUncheckedCreateWithoutSourceInput>
  }

  export type JobCreateManySourceInputEnvelope = {
    data: Enumerable<JobCreateManySourceInput>
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutSourceInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutSourceInput, JobUncheckedUpdateWithoutSourceInput>
    create: XOR<JobCreateWithoutSourceInput, JobUncheckedCreateWithoutSourceInput>
  }

  export type JobUpdateWithWhereUniqueWithoutSourceInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutSourceInput, JobUncheckedUpdateWithoutSourceInput>
  }

  export type JobUpdateManyWithWhereWithoutSourceInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutSourceInput>
  }

  export type JobScalarWhereInput = {
    AND?: Enumerable<JobScalarWhereInput>
    OR?: Enumerable<JobScalarWhereInput>
    NOT?: Enumerable<JobScalarWhereInput>
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    description?: StringFilter<"Job"> | string
    salaryMin?: IntNullableFilter<"Job"> | number | null
    salaryMax?: IntNullableFilter<"Job"> | number | null
    experienceMin?: IntNullableFilter<"Job"> | number | null
    experienceMax?: IntNullableFilter<"Job"> | number | null
    postedAt?: DateTimeFilter<"Job"> | Date | string
    applyUrl?: StringFilter<"Job"> | string
    sourceId?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type JobCreateWithoutApplicationsInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    source: JobSourceCreateNestedOneWithoutJobsInput
    SavedJob?: SavedJobCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    sourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SavedJob?: SavedJobUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type ResumeCreateWithoutApplicationsInput = {
    id?: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    parentResume?: ResumeCreateNestedOneWithoutVersionsInput
    versions?: ResumeCreateNestedManyWithoutParentResumeInput
    template?: TemplateCreateNestedOneWithoutResumesInput
  }

  export type ResumeUncheckedCreateWithoutApplicationsInput = {
    id?: string
    userId: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    parentResumeId?: string | null
    templateId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeUncheckedCreateNestedManyWithoutParentResumeInput
  }

  export type ResumeCreateOrConnectWithoutApplicationsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutApplicationsInput, ResumeUncheckedCreateWithoutApplicationsInput>
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: JobSourceUpdateOneRequiredWithoutJobsNestedInput
    SavedJob?: SavedJobUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SavedJob?: SavedJobUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ResumeUpsertWithoutApplicationsInput = {
    update: XOR<ResumeUpdateWithoutApplicationsInput, ResumeUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ResumeCreateWithoutApplicationsInput, ResumeUncheckedCreateWithoutApplicationsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutApplicationsInput, ResumeUncheckedUpdateWithoutApplicationsInput>
  }

  export type ResumeUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    parentResume?: ResumeUpdateOneWithoutVersionsNestedInput
    versions?: ResumeUpdateManyWithoutParentResumeNestedInput
    template?: TemplateUpdateOneWithoutResumesNestedInput
  }

  export type ResumeUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    parentResumeId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeUncheckedUpdateManyWithoutParentResumeNestedInput
  }

  export type UserCreateWithoutSavedJobsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedJobsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedJobsInput, UserUncheckedCreateWithoutSavedJobsInput>
  }

  export type JobCreateWithoutSavedJobInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    source: JobSourceCreateNestedOneWithoutJobsInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutSavedJobInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    sourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutSavedJobInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutSavedJobInput, JobUncheckedCreateWithoutSavedJobInput>
  }

  export type UserUpsertWithoutSavedJobsInput = {
    update: XOR<UserUpdateWithoutSavedJobsInput, UserUncheckedUpdateWithoutSavedJobsInput>
    create: XOR<UserCreateWithoutSavedJobsInput, UserUncheckedCreateWithoutSavedJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedJobsInput, UserUncheckedUpdateWithoutSavedJobsInput>
  }

  export type UserUpdateWithoutSavedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type JobUpsertWithoutSavedJobInput = {
    update: XOR<JobUpdateWithoutSavedJobInput, JobUncheckedUpdateWithoutSavedJobInput>
    create: XOR<JobCreateWithoutSavedJobInput, JobUncheckedCreateWithoutSavedJobInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutSavedJobInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutSavedJobInput, JobUncheckedUpdateWithoutSavedJobInput>
  }

  export type JobUpdateWithoutSavedJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: JobSourceUpdateOneRequiredWithoutJobsNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutSavedJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type UserCreateWithoutSearchHistoryInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSearchHistoryInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
    matchingCriteria?: MatchingCriteriaUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSearchHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
  }

  export type UserUpsertWithoutSearchHistoryInput = {
    update: XOR<UserUpdateWithoutSearchHistoryInput, UserUncheckedUpdateWithoutSearchHistoryInput>
    create: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSearchHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSearchHistoryInput, UserUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type UserUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
    matchingCriteria?: MatchingCriteriaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutMatchingCriteriaInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchingCriteriaInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchingCriteriaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchingCriteriaInput, UserUncheckedCreateWithoutMatchingCriteriaInput>
  }

  export type UserUpsertWithoutMatchingCriteriaInput = {
    update: XOR<UserUpdateWithoutMatchingCriteriaInput, UserUncheckedUpdateWithoutMatchingCriteriaInput>
    create: XOR<UserCreateWithoutMatchingCriteriaInput, UserUncheckedCreateWithoutMatchingCriteriaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchingCriteriaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchingCriteriaInput, UserUncheckedUpdateWithoutMatchingCriteriaInput>
  }

  export type UserUpdateWithoutMatchingCriteriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchingCriteriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyEmployeeCreateWithoutCompanyInput = {
    id?: string
    fullName: string
    linkedInProfile: string
    contactInfo: JsonNullValueInput | InputJsonValue
    position?: string | null
    lastVerified?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyEmployeeUncheckedCreateWithoutCompanyInput = {
    id?: string
    fullName: string
    linkedInProfile: string
    contactInfo: JsonNullValueInput | InputJsonValue
    position?: string | null
    lastVerified?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyEmployeeCreateOrConnectWithoutCompanyInput = {
    where: CompanyEmployeeWhereUniqueInput
    create: XOR<CompanyEmployeeCreateWithoutCompanyInput, CompanyEmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyEmployeeCreateManyCompanyInputEnvelope = {
    data: Enumerable<CompanyEmployeeCreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type CompanyEmployeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyEmployeeWhereUniqueInput
    update: XOR<CompanyEmployeeUpdateWithoutCompanyInput, CompanyEmployeeUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyEmployeeCreateWithoutCompanyInput, CompanyEmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyEmployeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyEmployeeWhereUniqueInput
    data: XOR<CompanyEmployeeUpdateWithoutCompanyInput, CompanyEmployeeUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyEmployeeUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyEmployeeScalarWhereInput
    data: XOR<CompanyEmployeeUpdateManyMutationInput, CompanyEmployeeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyEmployeeScalarWhereInput = {
    AND?: Enumerable<CompanyEmployeeScalarWhereInput>
    OR?: Enumerable<CompanyEmployeeScalarWhereInput>
    NOT?: Enumerable<CompanyEmployeeScalarWhereInput>
    id?: StringFilter<"CompanyEmployee"> | string
    companyId?: StringFilter<"CompanyEmployee"> | string
    fullName?: StringFilter<"CompanyEmployee"> | string
    linkedInProfile?: StringFilter<"CompanyEmployee"> | string
    contactInfo?: JsonFilter<"CompanyEmployee">
    position?: StringNullableFilter<"CompanyEmployee"> | string | null
    lastVerified?: DateTimeNullableFilter<"CompanyEmployee"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanyEmployee"> | Date | string
  }

  export type CompanyCreateWithoutEmployeesInput = {
    id?: string
    name: string
    linkedInUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    linkedInUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutEmployeesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
  }

  export type CompanyUpsertWithoutEmployeesInput = {
    update: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type CompanyUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    parentResumeId?: string | null
    templateId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyUserInput = {
    id?: string
    jobId: string
    resumeId: string
    status?: string
    appliedAt?: Date | string
  }

  export type SavedJobCreateManyUserInput = {
    id?: string
    jobId: string
    createdAt?: Date | string
  }

  export type SearchHistoryCreateManyUserInput = {
    id?: string
    searchQuery: string
    filters: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentResume?: ResumeUpdateOneWithoutVersionsNestedInput
    versions?: ResumeUpdateManyWithoutParentResumeNestedInput
    template?: TemplateUpdateOneWithoutResumesNestedInput
    applications?: ApplicationUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    parentResumeId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeUncheckedUpdateManyWithoutParentResumeNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    parentResumeId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutSavedJobNestedInput
  }

  export type SavedJobUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyParentResumeInput = {
    id?: string
    userId: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    templateId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyResumeInput = {
    id?: string
    userId: string
    jobId: string
    status?: string
    appliedAt?: Date | string
  }

  export type ResumeUpdateWithoutParentResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeUpdateManyWithoutParentResumeNestedInput
    template?: TemplateUpdateOneWithoutResumesNestedInput
    applications?: ApplicationUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutParentResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeUncheckedUpdateManyWithoutParentResumeNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutParentResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyTemplateInput = {
    id?: string
    userId: string
    filePathUrl: string
    content: JsonNullValueInput | InputJsonValue
    isBaseline?: boolean
    parentResumeId?: string | null
    fileType?: FileType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    parentResume?: ResumeUpdateOneWithoutVersionsNestedInput
    versions?: ResumeUpdateManyWithoutParentResumeNestedInput
    applications?: ApplicationUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    parentResumeId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeUncheckedUpdateManyWithoutParentResumeNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePathUrl?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isBaseline?: BoolFieldUpdateOperationsInput | boolean
    parentResumeId?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: EnumFileTypeFieldUpdateOperationsInput | FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyJobInput = {
    id?: string
    userId: string
    resumeId: string
    status?: string
    appliedAt?: Date | string
  }

  export type SavedJobCreateManyJobInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ApplicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedJobsNestedInput
  }

  export type SavedJobUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManySourceInput = {
    id?: string
    title: string
    company: string
    location?: string | null
    description: string
    salaryMin?: number | null
    salaryMax?: number | null
    experienceMin?: number | null
    experienceMax?: number | null
    postedAt: Date | string
    applyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutJobNestedInput
    SavedJob?: SavedJobUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
    SavedJob?: SavedJobUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMin?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMax?: NullableIntFieldUpdateOperationsInput | number | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyEmployeeCreateManyCompanyInput = {
    id?: string
    fullName: string
    linkedInProfile: string
    contactInfo: JsonNullValueInput | InputJsonValue
    position?: string | null
    lastVerified?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyEmployeeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    linkedInProfile?: StringFieldUpdateOperationsInput | string
    contactInfo?: JsonNullValueInput | InputJsonValue
    position?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyEmployeeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    linkedInProfile?: StringFieldUpdateOperationsInput | string
    contactInfo?: JsonNullValueInput | InputJsonValue
    position?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyEmployeeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    linkedInProfile?: StringFieldUpdateOperationsInput | string
    contactInfo?: JsonNullValueInput | InputJsonValue
    position?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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