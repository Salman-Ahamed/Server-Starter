import { PORT } from "@/config";
import { globalErrorHandler, globalNotFoundHandler } from "@/middlewares";
import { app } from "@/server";
import type { Request, Response } from "express";

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of users
 *     responses:
 *       200:
 *         description: Successfully retrieved list
 */
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ data: `Hello, world! - ${PORT}` });
});

app.use(globalNotFoundHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

export { app };
