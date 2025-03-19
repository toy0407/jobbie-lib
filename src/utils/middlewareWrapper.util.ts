import middy from "@middy/core";

// Define types for middleware functions
type MiddlewareFn = (request: middy.Request) => void | Promise<void>;
type ErrorMiddlewareFn = (request: middy.Request) => void | Promise<void>;

// Interface for middleware options
interface MiddlewareOptions {
  before?: MiddlewareFn;
  after?: MiddlewareFn;
  onError?: ErrorMiddlewareFn;
}

/**
 * @description Generic middleware wrapper
 * @param options Middleware options before, after, onError
 * @returns Middy middleware object
 */
export function createMiddleware(options: MiddlewareOptions) {
  return () => ({
    before:
      options.before &&
      (async (request: middy.Request) => options.before!(request)),
    after:
      options.after &&
      (async (request: middy.Request) => options.after!(request)),
    onError:
      options.onError &&
      (async (request: middy.Request) => options.onError!(request)),
  });
}
