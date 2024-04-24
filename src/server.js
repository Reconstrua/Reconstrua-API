import express from "express";
import { connectToDatabase } from "./database/connection.js";
import { UserRouter } from "./routes/User.routes.js";

export const app = express();
const port = 4000;

app.use(express.json());
app.use(UserRouter)

app.listen(port, async () => {
    connectToDatabase();
    console.log(`Server run on port: ${port}`)
});