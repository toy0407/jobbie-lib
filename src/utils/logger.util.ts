import pino, { Logger } from "pino";
import { Context, APIGatewayProxyEvent } from "aws-lambda";

const baseLogger = pino({
  level: process.env.NODE_ENV == "production" ? "info" : "debug",
  formatters: {
    level: (label) => ({ level: label }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  redact: ["password", "*.password", "secret", "*.secret"],
  base: {
    service: process.env.SERVICE_NAME || "unknown-service",
    env: process.env.NODE_ENV || "development",
  },
});

let loggerInstance: Logger = baseLogger;

function setLambdaContext(event: APIGatewayProxyEvent, context: Context) {
  loggerInstance = baseLogger.child({
    requestId: context.awsRequestId,
    coldStart: context.functionName.includes("coldstart"),
    path: event.path,
    method: event.httpMethod,
  });
}

export const logger = {
  info(msg: string, data?: Record<string, any>) {
    loggerInstance.info(data || {}, msg);
  },
  warn(msg: string, data?: Record<string, any>) {
    loggerInstance.warn(data || {}, msg);
  },
  error(msg: string, error?: Error | unknown, data?: Record<string, any>) {
    loggerInstance.error({ ...(data || {}), error }, msg);
  },
  debug(msg: string, data?: Record<string, any>) {
    loggerInstance.debug(data || {}, msg);
  },
  async time<T>(
    label: string,
    fn: () => Promise<T>,
    additionalData?: Record<string, any>
  ): Promise<T> {
    const start = Date.now();
    loggerInstance.debug(`Starting ${label}`, additionalData);
    try {
      const result = await fn();
      const duration = Date.now() - start;
      loggerInstance.info(`Completed ${label}`, {
        duration,
        ...(additionalData || {}),
      });
      return result;
    } catch (error) {
      const duration = Date.now() - start;
      loggerInstance.error(`Failed ${label}`, error, {
        duration,
        ...(additionalData || {}),
      });
      throw error;
    }
  },
  addContext(key: string, value: any) {
    loggerInstance = loggerInstance.child({ [key]: value });
  },
};

export function getLoggerWithContext(
  event: APIGatewayProxyEvent,
  context: Context
) {
  setLambdaContext(event, context);
  return logger;
}
