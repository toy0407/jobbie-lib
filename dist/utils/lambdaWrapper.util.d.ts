import middy from "@middy/core";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
type HandlerFn<T> = (event: APIGatewayProxyEvent, context: Context) => Promise<T>;
export declare function lambdaHandler<T>(handlerFn: HandlerFn<T>): middy.MiddyfiedHandler<APIGatewayProxyEvent, APIGatewayProxyResult, Error, Context, {}>;
export {};
