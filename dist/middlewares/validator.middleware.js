"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorMiddleware = void 0;
const zod_1 = require("zod");
const errors_1 = require("../core/errors");
/**
 * @description Middleware to validate request using Zod schemas
 */
const validatorMiddleware = (schema) => ({
    before: async (request) => {
        try {
            // Validate body
            if (schema.body) {
                request.event.body = schema.body.parse(request.event.body);
            }
            // Validate query parameters with fallback
            if (schema.queryStringParameters) {
                request.event.queryStringParameters =
                    schema.queryStringParameters.parse(request.event.queryStringParameters || {});
            }
            // Validate path parameters with fallback
            if (schema.pathParameters) {
                request.event.pathParameters = schema.pathParameters.parse(request.event.pathParameters || {});
            }
            // Validate headers with fallback
            if (schema.headers) {
                request.event.headers = schema.headers.parse(request.event.headers || {});
            }
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                const errorDetails = error.errors.map((err) => ({
                    path: err.path.join("."),
                    message: err.message,
                }));
                throw new errors_1.BadRequestError(`Validation failed: ${JSON.stringify(errorDetails)}`);
            }
            throw new Error(`Unexpected validation error: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
    },
});
exports.validatorMiddleware = validatorMiddleware;
