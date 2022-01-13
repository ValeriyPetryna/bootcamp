const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/comment.controller");

router.get("/", commentCtrl.getAll);
router.post("/", commentCtrl.createOne);
router.get("/:id", commentCtrl.getOne);
router.patch("/:id", commentCtrl.updateOne);
router.delete("/:id", commentCtrl.deleteOne);

module.exports = router;
