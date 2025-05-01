import { status } from "@/configs";
import { NextFunction, Request, Response } from "express";

export const globalNotFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
};
