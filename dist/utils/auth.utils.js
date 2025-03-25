"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUtils = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const node_crypto_1 = require("node:crypto");
const generateAccessToken = (userId) => {
    const options = {
        expiresIn: "15m",
    };
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET_KEY, options);
    return token;
};
const generateRefreshToken = async (userId) => {
    const token = (0, node_crypto_1.randomBytes)(32).toString("hex");
    return token;
};
exports.AuthUtils = {
    generateAccessToken,
    generateRefreshToken,
};
