import express from "express";
import { verifyToken } from "../middlewares/index.js";
import { getAll, getOne, createOne, updateOne, deleteOne } from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/", [verifyToken], getAll);
router.post("/", [verifyToken], createOne);
router.get("/:id", getOne);
router.patch("/:id", [verifyToken], updateOne);
router.delete("/:id", [verifyToken], deleteOne);

export default router;
