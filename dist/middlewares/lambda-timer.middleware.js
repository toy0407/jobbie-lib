"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaTimer = void 0;
const logger_util_1 = require("../utils/logger.util");
/**
 * @description Middleware to time the handler execution
 */
const lambdaTimer = () => {
    let startTime;
    return {
        before: async () => {
            startTime = Date.now();
        },
        after: async () => {
            const duration = Date.now() - startTime;
            logger_util_1.logger.addContext("lambda_duration", duration);
        },
        onError: async () => {
            const duration = Date.now() - startTime;
            logger_util_1.logger.addContext("lambda_duration", duration);
        },
    };
};
exports.lambdaTimer = lambdaTimer;
