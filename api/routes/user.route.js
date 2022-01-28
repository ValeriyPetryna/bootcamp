import express from "express";
import { allAccess, getOne, userBoard, moderatorBoard, adminBoard } from "../controllers/user.controller.js";
import { verifyToken, isModerator, isAdmin } from "../middlewares/index.js";

const router = express.Router();

router.get("/all", allAccess);
router.get("/user", [verifyToken], userBoard);
router.get("/mod", [verifyToken, isModerator], moderatorBoard);
router.get("/admin", [verifyToken, isAdmin], adminBoard);

router.get("/:id", [verifyToken], getOne);

export default router;
