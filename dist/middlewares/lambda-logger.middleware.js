"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaLogger = void 0;
const logger_util_1 = require("../utils/logger.util");
/**
/**
 * @description Middleware to set logger context and log request
 */
const lambdaLogger = () => ({
    before: async (request) => {
        const event = request.event;
        const context = request.context;
        (0, logger_util_1.getLoggerWithContext)(event, context);
        logger_util_1.logger.info("Request received");
    },
    after: async () => {
        logger_util_1.logger.info("Request completed");
    },
    onError: async (request) => {
        logger_util_1.logger.error("Request failed:", request.error);
    },
});
exports.lambdaLogger = lambdaLogger;
