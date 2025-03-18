import { ApiStatusCodes } from "../interfaces/api.interface";

// Custom error classes with status codes
export class UnauthenticatedError extends Error {
  statusCode = ApiStatusCodes.UNAUTHORIZED;
  constructor(message: string) {
    super(message);
    this.name = "UnauthenticatedError";
  }
}

export class ForbiddenError extends Error {
  statusCode = ApiStatusCodes.FORBIDDEN;
  constructor(message: string) {
    super(message);
    this.name = "ForbiddenError";
  }
}

export class NotFoundError extends Error {
  statusCode = ApiStatusCodes.NOT_FOUND;
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export class BadRequestError extends Error {
  statusCode = ApiStatusCodes.BAD_REQUEST;
  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
  }
}
