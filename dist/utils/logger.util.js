"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.getLoggerWithContext = getLoggerWithContext;
const pino_1 = __importDefault(require("pino"));
const baseLogger = (0, pino_1.default)({
    level: process.env.LOG_LEVEL || "info",
    formatters: {
        level: (label) => ({ level: label }),
    },
    timestamp: pino_1.default.stdTimeFunctions.isoTime,
    redact: ["password", "*.password", "secret", "*.secret"],
    base: {
        service: process.env.SERVICE_NAME || "unknown-service",
        env: process.env.NODE_ENV || "development",
    },
});
let loggerInstance = baseLogger;
function setLambdaContext(event, context) {
    loggerInstance = baseLogger.child({
        requestId: context.awsRequestId,
        coldStart: context.functionName.includes("coldstart"),
        path: event.path,
        method: event.httpMethod,
    });
}
exports.logger = {
    info(msg, data) {
        loggerInstance.info(data || {}, msg);
    },
    warn(msg, data) {
        loggerInstance.warn(data || {}, msg);
    },
    error(msg, error, data) {
        loggerInstance.error(Object.assign(Object.assign({}, (data || {})), { error }), msg);
    },
    debug(msg, data) {
        loggerInstance.debug(data || {}, msg);
    },
    time(label, fn, additionalData) {
        return __awaiter(this, void 0, void 0, function* () {
            const start = Date.now();
            loggerInstance.debug(`Starting ${label}`, additionalData);
            try {
                const result = yield fn();
                const duration = Date.now() - start;
                loggerInstance.info(`Completed ${label}`, Object.assign({ duration }, (additionalData || {})));
                return result;
            }
            catch (error) {
                const duration = Date.now() - start;
                loggerInstance.error(`Failed ${label}`, error, Object.assign({ duration }, (additionalData || {})));
                throw error;
            }
        });
    },
    addContext(key, value) {
        loggerInstance = loggerInstance.child({ [key]: value });
    },
};
function getLoggerWithContext(event, context) {
    setLambdaContext(event, context);
    return exports.logger;
}
