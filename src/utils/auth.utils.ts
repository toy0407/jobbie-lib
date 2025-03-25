import { DbClient } from "@db/client";
import jwt, { SignOptions } from "jsonwebtoken";
import { randomBytes } from "node:crypto";

const generateAccessToken = (userId: string): string => {
  const options: SignOptions = {
    expiresIn: "15m",
  };
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY!, options);
  return token;
};

const generateRefreshToken = async (userId: string): Promise<string> => {
  const token = randomBytes(32).toString("hex");
  return token;
};

export const AuthUtils = {
  generateAccessToken,
  generateRefreshToken,
};
