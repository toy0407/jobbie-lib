"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthenticatedError = void 0;
const api_types_1 = require("../types/api.types");
// Custom error classes with status codes
class UnauthenticatedError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = api_types_1.ApiStatusCodes.UNAUTHORIZED;
        this.name = "UnauthenticatedError";
    }
}
exports.UnauthenticatedError = UnauthenticatedError;
class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = api_types_1.ApiStatusCodes.FORBIDDEN;
        this.name = "ForbiddenError";
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = api_types_1.ApiStatusCodes.NOT_FOUND;
        this.name = "NotFoundError";
    }
}
exports.NotFoundError = NotFoundError;
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = api_types_1.ApiStatusCodes.BAD_REQUEST;
        this.name = "BadRequestError";
    }
}
exports.BadRequestError = BadRequestError;
