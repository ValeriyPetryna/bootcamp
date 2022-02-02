import express from "express";

import postsRouter from "./post.route.js";
import commentRouter from "./comment.route.js";
import tagsRouter from "./tag.route.js";
import likesRouter from "./like.route.js";
import usersRouter from "./user.route.js";
import authRouter from "./auth.route.js";

const router = express.Router();

router.use("/posts", postsRouter);
router.use("/comments", commentRouter);
router.use("/likes", likesRouter);
router.use("/tags", tagsRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

export default router;
