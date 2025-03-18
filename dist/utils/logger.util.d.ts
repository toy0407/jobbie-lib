import { Context, APIGatewayProxyEvent } from "aws-lambda";
export declare const logger: {
    info(msg: string, data?: Record<string, any>): void;
    warn(msg: string, data?: Record<string, any>): void;
    error(msg: string, error?: Error | unknown, data?: Record<string, any>): void;
    debug(msg: string, data?: Record<string, any>): void;
    time<T>(label: string, fn: () => Promise<T>, additionalData?: Record<string, any>): Promise<T>;
    addContext(key: string, value: any): void;
};
export declare function getLoggerWithContext(event: APIGatewayProxyEvent, context: Context): {
    info(msg: string, data?: Record<string, any>): void;
    warn(msg: string, data?: Record<string, any>): void;
    error(msg: string, error?: Error | unknown, data?: Record<string, any>): void;
    debug(msg: string, data?: Record<string, any>): void;
    time<T>(label: string, fn: () => Promise<T>, additionalData?: Record<string, any>): Promise<T>;
    addContext(key: string, value: any): void;
};
