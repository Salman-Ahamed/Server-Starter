import { configs } from "@/configs";
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
  res.status(200).json({ data: `Hello, world! - ${configs.port}` });
});

app.use(globalNotFoundHandler);
app.use(globalErrorHandler);

app.listen(configs.port, () => {
  const serverUrl = `http://localhost:${configs.port}`;
  console.info(
    `\x1b[35m%s\x1b[0m`, // Magenta
    `⏰ Started at: ${new Date().toLocaleString()}`,
  );
  console.info(
    `\x1b[32m%s\x1b[0m`, // Green
    `🚀 Server is running on port ${configs.port} 🫀✅🫀`,
  );
  console.info(
    `\x1b[31m%s\x1b[0m`, // Red
    `🌐 Environment: ${configs.env}`,
  );
  console.info(
    `\x1b[33m%s\x1b[0m`, // Yellow
    `🔗 Server URL: ${serverUrl}`,
  );
  console.info(
    `\x1b[36m%s\x1b[0m`, // Cyan
    `📚 Swagger docs available at http://localhost:${configs.port}/api-docs`,
  );
  console.info(
    `\x1b[34m%s\x1b[0m`, // Blue
    `✨ Happy coding! ✨`,
  );
});

export { app };
