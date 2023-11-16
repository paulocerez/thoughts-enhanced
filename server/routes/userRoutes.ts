import { Router } from "express";
import {
  loginUser,
  registerUser,
  getUsers,
} from "../controllers/userController";

const router = Router();

router.post("/api/signup", registerUser);
router.post("/api/login", loginUser);
router.get("/api/users", getUsers);

export default router;
