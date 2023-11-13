// Imports

import express from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Token } from "typescript";

dotenv.config();

const app = express();
app.use(cors());
// middleware -> Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.json());
const prisma = new PrismaClient();

// middleware for cross-origin resource sharing -> allows restricted resources on a web page to be requested from another domain outside the original domain

interface PostBody {
  title: string;
  category: string;
  thought: string;
  //   user: string;
}

// Routes

app.get("/", (req, res) => {
  res.send("Hello, this server is hosted successfully :)");
});

// User-related routes
app.post("/api/signup", async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    });
    res.status(201).send({ userId: newUser.id });
  } catch (error) {
    res.status(500).send("Registration Error");
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { username } });

    console.log("User found:", user); // Check if user is found

    // check if the provided password matches the hashedPassword stored in the database
    if (user && (await bcrypt.compare(password, user.hashedPassword))) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
        expiresIn: "24h",
      });
      res.json({ token });
    } else {
      console.log("Authentication failed for username:", username);
      res.status(401).send("Authentication failed, invalid credentials");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Error logging in");
  }
});

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  console.log(users);
});

// Post-related routes

app.get("/api/posts/all", async (req, res) => {
  try {
    const thoughts = await prisma.post.findMany();
    res.json(thoughts);
  } catch (error) {
    console.error("Error retrieving entries:", error);
    res.status(500).json({ error: "Failed to retrieve entries" });
  }
});

app.get("/api/posts/:id", (req, res) => {
  const thoughtId = req.params.id;
});

app.post("/api/posts", async (req, res) => {
  try {
    // destructuring the request body -> extract properties
    const { title, category, thought }: PostBody = req.body;
    const post = await prisma.post.create({
      data: {
        // userId: currentUser.id,
        title,
        category,
        thought,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create post" });
  }
});

// delete a post
app.delete("/api/posts/:id", async (req, res) => {
  // id as the unique identifier in the database for the post to be deleted
  const { id } = req.params;
  await prisma.post.delete({ where: { id: Number(id) } });
  res.sendStatus(204);
});

// Update a post
app.put("/api/posts/:postId", async (req, res) => {
  const { title, category, thought } = req.body;
  const { postId } = req.params;

  try {
    // Update the post in the database
    const updatedPost = await prisma.post.update({
      // postId as the unique identifier of the updated post (URL parameter -> matches the parameter name in the route definition)
      where: { id: Number(postId) },
      data: { title, category, thought },
    });

    // Send the updated post as a response
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating post" });
  }
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
