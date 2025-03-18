"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = lambdaHandler;
const core_1 = __importDefault(require("@middy/core"));
const api_interface_1 = require("../interfaces/api.interface");
const lambda_log_middleware_1 = __importDefault(require("../middlewares/lambda-log.middleware"));
const timing_middleware_1 = __importDefault(require("../middlewares/timing.middleware"));
const errors_1 = require("../core/errors");
function lambdaHandler(handlerFn) {
    const middyHandler = (0, core_1.default)((event, context) => __awaiter(this, void 0, void 0, function* () {
        const result = yield handlerFn(event, context);
        const response = {
            success: true,
            data: result,
            requestId: context.awsRequestId,
        };
        return {
            statusCode: api_interface_1.ApiStatusCodes.SUCCESS,
            body: JSON.stringify(response),
        };
    }));
    middyHandler
        .use((0, lambda_log_middleware_1.default)())
        .use((0, timing_middleware_1.default)())
        .onError((request) => __awaiter(this, void 0, void 0, function* () {
        const error = request.error instanceof Error
            ? request.error
            : new Error("Unknown error");
        let statusCode;
        // Map error types to status codes
        switch (true) {
            case error instanceof errors_1.UnauthenticatedError:
                statusCode = api_interface_1.ApiStatusCodes.UNAUTHORIZED;
                break;
            case error instanceof errors_1.ForbiddenError:
                statusCode = api_interface_1.ApiStatusCodes.FORBIDDEN;
                break;
            case error instanceof errors_1.NotFoundError:
                statusCode = api_interface_1.ApiStatusCodes.NOT_FOUND;
                break;
            case error instanceof errors_1.BadRequestError:
                statusCode = api_interface_1.ApiStatusCodes.BAD_REQUEST;
                break;
            default:
                statusCode = api_interface_1.ApiStatusCodes.INTERNAL_SERVER_ERROR;
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
    }));
    return middyHandler;
}
