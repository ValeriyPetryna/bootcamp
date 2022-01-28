import express from "express";
import { getAll, changeOne, getOne, deleteOne } from "../controllers/like.controller.js";

const router = express.Router();

router.get("/", getAll);
router.patch("/", changeOne);
router.get("/:id", getOne);
router.delete("/:id", deleteOne);

export default router;
