import express from "express";
import { connectToDatabase } from "./database/connection.js";
import { router } from "./routes/index.routes.js";

export const app = express();
const port = 4000;

app.use(express.json());
app.use(router)

app.listen(port, async () => {
    connectToDatabase();
    console.log(`Server run on port: ${port}`)
});