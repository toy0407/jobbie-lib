/**
 * @description Standardized response structure
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  requestId: string;
}

/**
 * @description Standard API status codes
 */
export enum ApiStatusCodes {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
