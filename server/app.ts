// Imports

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { prisma } from "./db";
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

// Start the server

async function main() {
  // Connect to the database
  await prisma.$connect();

  // Start the server
  //   check for PORT env variable -> global object in Node.js providing access to environment varibales (process.env)
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main().catch((error) => {
  console.error("Error connecting to database:", error);
});
