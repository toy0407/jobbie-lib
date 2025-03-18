import middy from "@middy/core";
/**
 * @description Middleware to time the handler execution
 */
declare const timingMiddleware: () => {
    before: ((request: middy.Request) => Promise<void>) | undefined;
    after: ((request: middy.Request) => Promise<void>) | undefined;
    onError: ((request: middy.Request) => Promise<void>) | undefined;
};
export default timingMiddleware;
