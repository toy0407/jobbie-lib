import { z } from "zod";
import middy from "@middy/core";
import { BadRequestError } from "../core/errors";

type ValidatorSchema = {
  body?: z.ZodSchema;
  queryStringParameters?: z.ZodSchema;
  pathParameters?: z.ZodSchema;
  headers?: z.ZodSchema;
};

/**
 * @description Middleware to validate request using Zod schemas
 */
export const validatorMiddleware = (
  schema: ValidatorSchema
): middy.MiddlewareObj => ({
  before: async (request: middy.Request) => {
    try {
      // Validate body
      if (schema.body) {
        request.event.body = schema.body.parse(request.event.body);
      }

      // Validate query parameters with fallback
      if (schema.queryStringParameters) {
        request.event.queryStringParameters =
          schema.queryStringParameters.parse(
            request.event.queryStringParameters || {}
          );
      }

      // Validate path parameters with fallback
      if (schema.pathParameters) {
        request.event.pathParameters = schema.pathParameters.parse(
          request.event.pathParameters || {}
        );
      }

      // Validate headers with fallback
      if (schema.headers) {
        request.event.headers = schema.headers.parse(
          request.event.headers || {}
        );
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorDetails = error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        }));

        throw new BadRequestError(
          `Validation failed: ${JSON.stringify(errorDetails)}`
        );
      }

      throw new Error(
        `Unexpected validation error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  },
});
