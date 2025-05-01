import { status } from "@/configs";
import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);
  res.status(status.INTERNAL_ERROR).send({ message: "Internal Server Error" });
};
