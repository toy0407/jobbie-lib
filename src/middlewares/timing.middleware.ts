import middy from "@middy/core";
import { logger } from "../utils/logger.util";
import { createMiddleware } from "../utils/middlewareWrapper.util";

/**
 * @description Middleware to time the handler execution
 */
const timingMiddleware = createMiddleware({
  before: () => {
    (globalThis as any).__startTime = Date.now();
  },
  after: () => {
    const duration = Date.now() - ((globalThis as any).__startTime || 0);
    logger.addContext("duration", duration);
  },
  onError: () => {
    const duration = Date.now() - ((globalThis as any).__startTime || 0);
    logger.addContext("duration", duration);
  },
});

export default timingMiddleware;
