import { Request, Response } from "express";
import { prisma } from "../db";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const thoughts = await prisma.post.findMany();
    res.json(thoughts);
  } catch (error) {
    console.error("Error retrieving entries:", error);
    res.status(500).json({ error: "Failed to retrieve entries" });
  }
};

export const getAllPostsPerUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Assuming the token is sent as 'Bearer <token>'
    if (!token) {
      return res.status(401).send("No token provided");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    const userId = decoded.userId;

    const userPosts = await prisma.post.findMany({
      where: {
        userId: userId,
      },
    });
    res.json(userPosts);
  } catch (error) {
    console.error("Error retrieving user-specific entries:", error);
    res.status(500).json({ error: "Failed to retrieve entries" });
  }
};
export const createPost = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).send("No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    const userId = decoded.userId;
    console.log(userId);

    const { title, category, thought } = req.body;
    const post = await prisma.post.create({
      data: {
        userId, // Extracted from JWT token
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
};
export const deletePost = async (req: Request, res: Response) => {
  // id as the unique identifier in the database for the post to be deleted
  const { id } = req.params;
  await prisma.post.delete({ where: { id: Number(id) } });
  res.sendStatus(204);
};
export const updatePost = async (req: Request, res: Response) => {
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
};
