import { Router } from "express";
import {
  updatePost,
  deletePost,
  createPost,
  getAllPosts,
  getAllPostsPerUser,
} from "../controllers/postController";

const postRoutes = Router();

postRoutes.put("/api/posts/:postId", updatePost);
postRoutes.delete("/api/posts/:id", deletePost);
postRoutes.post("/api/posts", createPost);
postRoutes.get("/api/posts/user", getAllPostsPerUser);
postRoutes.get("/api/posts/all", getAllPosts);

export default postRoutes;
