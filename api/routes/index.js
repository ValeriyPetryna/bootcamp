const express = require("express");
const router = express.Router();

const postsRouter = require("./post.route");
const commentRouter = require("./comment.route");
const tagsRouter = require("./tag.route");
const likesRouter = require("./like.route");
const usersRouter = require("./user.route");
const authRouter = require("./auth.route");

router.use("/posts", postsRouter);
router.use("/comments", commentRouter);
router.use("/likes", likesRouter);
router.use("/tags", tagsRouter);
router.use("/users", usersRouter);

router.use("/auth", authRouter);

module.exports = router;
