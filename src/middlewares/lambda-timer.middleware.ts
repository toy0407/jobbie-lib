import middy from "@middy/core";
import { logger } from "../utils/logger.util";

/**
 * @description Middleware to time the handler execution
 */
export const lambdaTimer = (): middy.MiddlewareObj => {
  let startTime: number;

  return {
    before: async () => {
      startTime = Date.now();
    },
    after: async () => {
      const duration = Date.now() - startTime;
      logger.addContext("lambda_duration", duration);
    },
    onError: async () => {
      const duration = Date.now() - startTime;
      logger.addContext("lambda_duration", duration);
    },
  };
};
