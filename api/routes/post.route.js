import express from "express";
import { verifyToken } from "../middlewares/index.js";
import { getAll, createOne, getOne, updateOne, deleteOne } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", [verifyToken], createOne);
router.get("/:id", getOne);
router.patch("/:id", [verifyToken], updateOne);
router.delete("/:id", [verifyToken], deleteOne);

export default router;
