import "express-async-errors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { connectToDatabase } from "./database/connection.js";
import { router } from "./routes/index.routes.js";
import { errorHandler } from "./middlewares/error/error.middleware.js";
import { logRoutes } from "./middlewares/utils/log.middleware.js";
import corsMiddleware from "./middlewares/utils/cors.middleware.js";
import { resolvePath } from "./helpers/pathResolver.js";
import fs from "fs";
import yaml from "js-yaml";

export const app = express();
const port = process.env.PORT;

app.use(express.json());

const swaggerFilePath = resolvePath("../../swagger.yaml");
const swaggerDocument = yaml.load(fs.readFileSync(swaggerFilePath, "utf8"));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(corsMiddleware);
app.use(logRoutes);
app.use(router);
app.use(errorHandler);

app.listen(port, async () => {
  connectToDatabase();
  console.log(`Server run on port: ${port}`);
});
