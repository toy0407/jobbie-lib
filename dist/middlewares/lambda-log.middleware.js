"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timingMiddleware = exports.loggingMiddleware = void 0;
const logger_util_1 = require("../utils/logger.util");
const middlewareWrapper_util_1 = require("../utils/middlewareWrapper.util");
/**
 * @description Middleware to set logger context and log request
 */
exports.loggingMiddleware = (0, middlewareWrapper_util_1.createMiddleware)({
    before: (request) => {
        const { event, context } = request;
        (0, logger_util_1.getLoggerWithContext)(event, context);
        logger_util_1.logger.debug("Request received", { event });
    },
    after: () => {
        logger_util_1.logger.debug("Request completed");
    },
    onError: (request) => {
        logger_util_1.logger.error("Request failed", request.error);
    },
});
/**
 * @description Middleware to time the handler execution
 */
exports.timingMiddleware = (0, middlewareWrapper_util_1.createMiddleware)({
    before: () => {
        globalThis.__startTime = Date.now();
    },
    after: () => {
        const duration = Date.now() - (globalThis.__startTime || 0);
        logger_util_1.logger.addContext("lambda_duration", duration);
    },
    onError: () => {
        const duration = Date.now() - (globalThis.__startTime || 0);
        logger_util_1.logger.addContext("lambda_duration", duration);
    },
});
