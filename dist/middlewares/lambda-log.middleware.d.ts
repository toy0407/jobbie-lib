import middy from "@middy/core";
/**
 * @description Middleware to set logger context and log request
 */
export declare const loggingMiddleware: () => {
    before: ((request: middy.Request) => Promise<void>) | undefined;
    after: ((request: middy.Request) => Promise<void>) | undefined;
    onError: ((request: middy.Request) => Promise<void>) | undefined;
};
/**
 * @description Middleware to time the handler execution
 */
export declare const timingMiddleware: () => {
    before: ((request: middy.Request) => Promise<void>) | undefined;
    after: ((request: middy.Request) => Promise<void>) | undefined;
    onError: ((request: middy.Request) => Promise<void>) | undefined;
};
