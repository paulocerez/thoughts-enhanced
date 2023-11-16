import { Request, Response } from "express";
import { prisma } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  console.log(username, password, email);

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
};

export const loginUser = async (req: Request, res: Response) => {
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
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  console.log(users);
};
