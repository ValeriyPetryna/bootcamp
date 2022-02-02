import express from "express";
import { getAll, getOne, createOne, updateOne, deleteOne, changeOne } from "../controllers/tag.controller.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/:tag", createOne);
router.patch("/:id", updateOne);
router.delete("/:id", deleteOne);

router.patch("/set/:id", changeOne);

export default router;
