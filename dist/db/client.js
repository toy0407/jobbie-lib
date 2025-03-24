"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbClient = void 0;
const client_1 = require("../../prisma/generated/client");
const DbClient = new client_1.PrismaClient();
exports.DbClient = DbClient;
