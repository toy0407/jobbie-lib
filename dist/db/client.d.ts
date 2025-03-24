import { PrismaClient } from "./client/default";
interface DatabaseConfig {
    url?: string;
    poolSize?: number;
    timeout?: number;
}
export declare const getPrismaClient: (config?: DatabaseConfig) => PrismaClient<import("./client").Prisma.PrismaClientOptions, never, import("./client/runtime/library").DefaultArgs>;
export {};
