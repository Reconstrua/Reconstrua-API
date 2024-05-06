import "express-async-errors";
import express from "express";
import { connectToDatabase } from "./database/connection.js";
import { router } from "./routes/index.routes.js";
import { errorHandler } from "./middlewares/error/error.middleware.js";
import { logRoutes } from "./middlewares/utils/log.middleware.js";
import corsMiddleware from "./middlewares/utils/cors.middleware.js";

export const app = express();
const port = 4000;

app.use(express.json());
app.use(corsMiddleware);
app.use(logRoutes);
app.use(router);
app.use(errorHandler);

app.listen(port, async () => {
  connectToDatabase();
  console.log(`Server run on port: ${port}`);
});
