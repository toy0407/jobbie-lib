import middy from "@middy/core";
import { getLoggerWithContext, logger } from "../utils/logger.util";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

/**
/**
 * @description Middleware to set logger context and log request
 */
export const lambdaLogger = (): middy.MiddlewareObj => ({
  before: async (request) => {
    const event: APIGatewayProxyEvent = request.event as APIGatewayProxyEvent;
    const context: Context = request.context;
    getLoggerWithContext(event as APIGatewayProxyEvent, context as Context);
    logger.info("Request received");
  },
  after: async () => {
    logger.info("Request completed");
  },
  onError: async (request) => {
    logger.error("Request failed:", request.error);
  },
});
