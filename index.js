import express, { json } from "express";
import dotenv from "dotenv";
import articleRouter from "./routes/articleRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();

// Use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/articles", articleRouter);

export default app;
