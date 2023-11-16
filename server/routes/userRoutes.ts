import { Router } from "express";
import { loginUser, signupUser, getUsers } from "../controllers/userController";

const userRoutes = Router();

userRoutes.post("/api/signup", signupUser);
userRoutes.post("/api/login", loginUser);
userRoutes.get("/api/users", getUsers);

export default userRoutes;
