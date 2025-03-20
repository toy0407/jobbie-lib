"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const edge_1 = require("./client/edge");
const logger_util_1 = require("../utils/logger.util");
class PrismaClientFactory {
    static create(config) {
        const connectionKey = `${config.url}_${config.poolSize || 10}`;
        if (!this.instances.has(connectionKey)) {
            const client = new edge_1.PrismaClient({
                datasources: { db: { url: config.url } },
                log: [
                    { level: "warn", emit: "event" },
                    { level: "error", emit: "event" },
                ],
            });
            client.$on("warn", (e) => logger_util_1.logger.warn(e.message));
            client.$on("error", (e) => logger_util_1.logger.error(e.message));
            this.instances.set(connectionKey, client);
        }
        return this.instances.get(connectionKey);
    }
}
PrismaClientFactory.instances = new Map();
// Export singleton instance
exports.prisma = PrismaClientFactory.create({
    url: process.env.DATABASE_URL,
    poolSize: 10, // Connections per service instance
    timeout: 5, // Connection timeout in seconds
});
