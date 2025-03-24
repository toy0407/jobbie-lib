"use strict";
// import { PrismaClient } from "./client/default";
// import { logger } from "../utils/logger.util";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbClient = void 0;
// interface DatabaseConfig {
//   url?: string;
//   poolSize?: number;
//   timeout?: number;
// }
// class PrismaSingleton {
//   private static instance: PrismaClient | null = null;
//   constructor(config: DatabaseConfig = {}) {
//     if (!PrismaSingleton.instance) {
//       const url = new URL(config.url || process.env.DATABASE_URL!);
//       if (config.poolSize)
//         url.searchParams.set("pool_max", config.poolSize.toString());
//       if (config.timeout)
//         url.searchParams.set("pool_idle_timeout", config.timeout.toString());
//       PrismaSingleton.instance = new PrismaClient({
//         datasources: {
//           db: {
//             url: url.toString(),
//           },
//         },
//         log: ["query", "info", "warn", "error"], // Optional logging
//         errorFormat: "pretty",
//       });
//     }
//   }
//   static getClient() {
//     if (!PrismaSingleton.instance) {
//       throw new Error("PrismaSingleton has not been initialized.");
//     }
//     return PrismaSingleton.instance;
//   }
// }
// export const DbClient = (config?: DatabaseConfig) => {
//   new PrismaSingleton(config);
//   return PrismaSingleton.getClient();
// };
const client_1 = require("../../prisma/generated/client");
const DbClient = new client_1.PrismaClient();
exports.DbClient = DbClient;
