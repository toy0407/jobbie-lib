import { PrismaClient } from "../../prisma/generated/client";

// TODO: Implement database configuration for better fexibility and scalability
interface DatabaseConfig {
  url?: string;
  poolSize?: number;
  timeout?: number;
}

const DbClient = new PrismaClient();

export { DbClient };
