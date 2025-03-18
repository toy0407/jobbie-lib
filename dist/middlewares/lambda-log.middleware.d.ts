import middy from "@middy/core";
/**
 * @description Middleware to set logger context and log request
 */
declare const loggingMiddleware: () => {
    before: ((request: middy.Request) => Promise<void>) | undefined;
    after: ((request: middy.Request) => Promise<void>) | undefined;
    onError: ((request: middy.Request) => Promise<void>) | undefined;
};
export default loggingMiddleware;
