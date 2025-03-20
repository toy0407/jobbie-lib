import { PrismaClient } from "./client/edge";
import { logger } from "../utils/logger.util";

interface DatabaseConfig {
  url?: string;
  poolSize?: number;
  timeout?: number;
}

class PrismaClientFactory {
  private static instances: Map<string, PrismaClient> = new Map();

  static create(config: DatabaseConfig): PrismaClient {
    const connectionKey = `${config.url}_${config.poolSize || 10}`;

    if (!this.instances.has(connectionKey)) {
      const client = new PrismaClient({
        datasources: { db: { url: config.url } },
        log: [
          { level: "warn", emit: "event" },
          { level: "error", emit: "event" },
        ],
      });

      client.$on("warn" as never, (e: { message: string }) =>
        logger.warn(e.message)
      );
      client.$on("error" as never, (e: { message: string }) =>
        logger.error(e.message)
      );

      this.instances.set(connectionKey, client);
    }

    return this.instances.get(connectionKey)!;
  }
}

// Export singleton instance
export const prisma = PrismaClientFactory.create({
  url: process.env.DATABASE_URL!,
  poolSize: 10, // Connections per service instance
  timeout: 5, // Connection timeout in seconds
});
