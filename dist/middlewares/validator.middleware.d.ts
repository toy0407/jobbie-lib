import { z } from "zod";
import middy from "@middy/core";
type ValidatorSchema = {
    body?: z.ZodSchema;
    queryStringParameters?: z.ZodSchema;
    pathParameters?: z.ZodSchema;
    headers?: z.ZodSchema;
};
/**
 * @description Middleware to validate request using Zod schemas
 */
export declare const validatorMiddleware: (schema: ValidatorSchema) => middy.MiddlewareObj;
export {};
