"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClient = void 0;
const default_1 = require("./client/default");
class PrismaSingleton {
    constructor(config = {}) {
        if (!PrismaSingleton.instance) {
            const url = new URL(config.url || process.env.DATABASE_URL);
            if (config.poolSize)
                url.searchParams.set("pool_max", config.poolSize.toString());
            if (config.timeout)
                url.searchParams.set("pool_idle_timeout", config.timeout.toString());
            PrismaSingleton.instance = new default_1.PrismaClient({
                datasources: {
                    db: {
                        url: url.toString(),
                    },
                },
                log: ["query", "info", "warn", "error"], // Optional logging
                errorFormat: "pretty",
            });
        }
    }
    static getClient() {
        if (!PrismaSingleton.instance) {
            throw new Error("PrismaSingleton has not been initialized.");
        }
        return PrismaSingleton.instance;
    }
}
PrismaSingleton.instance = null;
const getPrismaClient = (config) => {
    new PrismaSingleton(config);
    return PrismaSingleton.getClient();
};
exports.getPrismaClient = getPrismaClient;
