import express from "express";
import { getposts, createPost } from "../controllers/posts.js";

// import {
//   getPosts,
//   getPost,
//   createPost,
//   updatePost,
//   likePost,
//   deletePost,
// } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getposts);

// router.get("/", getPosts);
router.post("/", createPost);
// router.get("/:id", getPost);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

export default router;
