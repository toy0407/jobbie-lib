"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = lambdaHandler;
const core_1 = __importDefault(require("@middy/core"));
const api_types_1 = require("../types/api.types");
const errors_1 = require("../core/errors");
const lambda_logger_middleware_1 = require("../middlewares/lambda-logger.middleware");
const lambda_timer_middleware_1 = require("../middlewares/lambda-timer.middleware");
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
function lambdaHandler(handlerFn) {
    const middyHandler = (0, core_1.default)(async (event, context) => {
        const result = await handlerFn(event, context);
        const response = {
            success: true,
            data: result,
            requestId: context.awsRequestId,
        };
        return {
            statusCode: api_types_1.ApiStatusCodes.SUCCESS,
            body: JSON.stringify(response),
        };
    });
    middyHandler
        .use((0, lambda_logger_middleware_1.lambdaLogger)())
        .use((0, lambda_timer_middleware_1.lambdaTimer)())
        .use((0, http_json_body_parser_1.default)())
        .onError(async (request) => {
        const error = request.error instanceof Error
            ? request.error
            : new Error("Unknown error");
        let statusCode;
        // Map error types to status codes
        switch (true) {
            case error instanceof errors_1.UnauthenticatedError:
                statusCode = api_types_1.ApiStatusCodes.UNAUTHORIZED;
                break;
            case error instanceof errors_1.ForbiddenError:
                statusCode = api_types_1.ApiStatusCodes.FORBIDDEN;
                break;
            case error instanceof errors_1.NotFoundError:
                statusCode = api_types_1.ApiStatusCodes.NOT_FOUND;
                break;
            case error instanceof errors_1.BadRequestError:
                statusCode = api_types_1.ApiStatusCodes.BAD_REQUEST;
                break;
            default:
                statusCode = api_types_1.ApiStatusCodes.INTERNAL_SERVER_ERROR;
        }
        const response = {
            success: false,
            error: error.message,
            requestId: request.context.awsRequestId,
        };
        return {
            statusCode,
            body: JSON.stringify(response),
        };
    });
    return middyHandler;
}
