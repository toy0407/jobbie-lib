import middy from "@middy/core";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { ApiResponse, ApiStatusCodes } from "../types/api.types";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  UnauthenticatedError,
} from "../core/errors";
import { lambdaLogger } from "../middlewares/lambda-logger.middleware";
import { lambdaTimer } from "../middlewares/lambda-timer.middleware";
import jsonBodyParser from "@middy/http-json-body-parser";

type HandlerFn<T> = (
  event: APIGatewayProxyEvent,
  context: Context
) => Promise<T>;

export function lambdaHandler<T>(handlerFn: HandlerFn<T>) {
  const middyHandler = middy(
    async (
      event: APIGatewayProxyEvent,
      context: Context
    ): Promise<APIGatewayProxyResult> => {
      const result = await handlerFn(event, context);

      const response: ApiResponse<T> = {
        success: true,
        data: result,
        requestId: context.awsRequestId,
      };

      return {
        statusCode: ApiStatusCodes.SUCCESS,
        body: JSON.stringify(response),
      };
    }
  );

  middyHandler
    .use(lambdaLogger())
    .use(lambdaTimer())
    .use(jsonBodyParser())
    .onError(async (request: middy.Request): Promise<APIGatewayProxyResult> => {
      const error =
        request.error instanceof Error
          ? request.error
          : new Error("Unknown error");
      let statusCode: ApiStatusCodes;

      // Map error types to status codes
      switch (true) {
        case error instanceof UnauthenticatedError:
          statusCode = ApiStatusCodes.UNAUTHORIZED;
          break;
        case error instanceof ForbiddenError:
          statusCode = ApiStatusCodes.FORBIDDEN;
          break;
        case error instanceof NotFoundError:
          statusCode = ApiStatusCodes.NOT_FOUND;
          break;
        case error instanceof BadRequestError:
          statusCode = ApiStatusCodes.BAD_REQUEST;
          break;
        default:
          statusCode = ApiStatusCodes.INTERNAL_SERVER_ERROR;
      }

      const response: ApiResponse<null> = {
        success: false,
        error: error.message,
        requestId: (request.context as Context).awsRequestId,
      };

      return {
        statusCode,
        body: JSON.stringify(response),
      };
    });

  return middyHandler;
}
