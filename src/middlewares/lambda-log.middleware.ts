import middy from "@middy/core";
import { getLoggerWithContext, logger } from "../utils/logger.util";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { createMiddleware } from "../utils/middlewareWrapper.util";

/**
 * @description Middleware to set logger context and log request
 */
const loggingMiddleware = createMiddleware({
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

export default loggingMiddleware;
