"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_util_1 = require("../utils/logger.util");
const middlewareWrapper_util_1 = require("../utils/middlewareWrapper.util");
/**
 * @description Middleware to set logger context and log request
 */
const loggingMiddleware = (0, middlewareWrapper_util_1.createMiddleware)({
    before: (request) => {
        const { event, context } = request;
        (0, logger_util_1.getLoggerWithContext)(event, context);
        logger_util_1.logger.info("Request received", { event });
    },
    after: () => {
        logger_util_1.logger.info("Request completed");
    },
    onError: (request) => {
        logger_util_1.logger.error("Request failed", request.error);
    },
});
exports.default = loggingMiddleware;
