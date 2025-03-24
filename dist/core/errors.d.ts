import { ApiStatusCodes } from "../types/api.types";
export declare class UnauthenticatedError extends Error {
    statusCode: ApiStatusCodes;
    constructor(message: string);
}
export declare class ForbiddenError extends Error {
    statusCode: ApiStatusCodes;
    constructor(message: string);
}
export declare class NotFoundError extends Error {
    statusCode: ApiStatusCodes;
    constructor(message: string);
}
export declare class BadRequestError extends Error {
    statusCode: ApiStatusCodes;
    constructor(message: string);
}
