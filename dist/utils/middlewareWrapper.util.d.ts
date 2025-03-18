import middy from "@middy/core";
type MiddlewareFn = (request: middy.Request) => void | Promise<void>;
type ErrorMiddlewareFn = (request: middy.Request) => void | Promise<void>;
interface MiddlewareOptions {
    before?: MiddlewareFn;
    after?: MiddlewareFn;
    onError?: ErrorMiddlewareFn;
}
export declare function createMiddleware(options: MiddlewareOptions): () => {
    before: ((request: middy.Request) => Promise<void>) | undefined;
    after: ((request: middy.Request) => Promise<void>) | undefined;
    onError: ((request: middy.Request) => Promise<void>) | undefined;
};
export {};
