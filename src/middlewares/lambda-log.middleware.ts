import middy from "@middy/core";
import { getLoggerWithContext, logger } from "../utils/logger.util";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { createMiddleware } from "../utils/middlewareWrapper.util";

/**
 * @description Middleware to set logger context and log request
 */
export const loggingMiddleware = createMiddleware({
  before: (request) => {
    const { event, context } = request;
    getLoggerWithContext(event as APIGatewayProxyEvent, context as Context);
    logger.debug("Request received", { event });
  },
  after: () => {
    logger.debug("Request completed");
  },
  onError: (request) => {
    logger.error("Request failed", request.error);
  },
});

/**
 * @description Middleware to time the handler execution
 */
export const timingMiddleware = createMiddleware({
  before: () => {
    (globalThis as any).__startTime = Date.now();
  },
  after: () => {
    const duration = Date.now() - ((globalThis as any).__startTime || 0);
    logger.addContext("lambda_duration", duration);
  },
  onError: () => {
    const duration = Date.now() - ((globalThis as any).__startTime || 0);
    logger.addContext("lambda_duration", duration);
  },
});
