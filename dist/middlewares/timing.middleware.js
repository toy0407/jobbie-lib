"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_util_1 = require("../utils/logger.util");
const middlewareWrapper_util_1 = require("../utils/middlewareWrapper.util");
/**
 * @description Middleware to time the handler execution
 */
const timingMiddleware = (0, middlewareWrapper_util_1.createMiddleware)({
    before: () => {
        globalThis.__startTime = Date.now();
    },
    after: () => {
        const duration = Date.now() - (globalThis.__startTime || 0);
        logger_util_1.logger.addContext("duration", duration);
    },
    onError: () => {
        const duration = Date.now() - (globalThis.__startTime || 0);
        logger_util_1.logger.addContext("duration", duration);
    },
});
exports.default = timingMiddleware;
