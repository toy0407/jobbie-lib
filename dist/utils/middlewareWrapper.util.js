"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddleware = createMiddleware;
/**
 * @description Generic middleware wrapper
 * @param options Middleware options before, after, onError
 * @returns Middy middleware object
 */
function createMiddleware(options) {
    return () => ({
        before: options.before &&
            (async (request) => options.before(request)),
        after: options.after &&
            (async (request) => options.after(request)),
        onError: options.onError &&
            (async (request) => options.onError(request)),
    });
}
