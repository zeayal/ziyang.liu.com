import express from "express";
import { getPostList, createPost } from "../controller/post.controller.js";
const router = express.Router();

router.get("/", getPostList);
router.post("/", createPost);

export default router;
