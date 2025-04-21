import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;

export const configs = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
};
