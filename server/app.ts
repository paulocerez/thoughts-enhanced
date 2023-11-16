// file that contains the routes

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);
app.use(postRoutes);

app.get("/", (req, res) => {
  res.send("Hello, this server is hosted successfully :)");
});

export default app;
