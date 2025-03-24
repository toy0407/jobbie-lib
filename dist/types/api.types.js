"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiStatusCodes = void 0;
/**
 * @description Standard API status codes
 */
var ApiStatusCodes;
(function (ApiStatusCodes) {
    ApiStatusCodes[ApiStatusCodes["SUCCESS"] = 200] = "SUCCESS";
    ApiStatusCodes[ApiStatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ApiStatusCodes[ApiStatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ApiStatusCodes[ApiStatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    ApiStatusCodes[ApiStatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    ApiStatusCodes[ApiStatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(ApiStatusCodes || (exports.ApiStatusCodes = ApiStatusCodes = {}));
