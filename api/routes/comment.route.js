const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares/index");

const commentCtrl = require("../controllers/comment.controller");

router.get("/", commentCtrl.getAll);
router.post("/", [authJwt.verifyToken], commentCtrl.createOne);
router.get("/:id", commentCtrl.getOne);
router.patch("/:id", [authJwt.verifyToken], commentCtrl.updateOne);
router.delete("/:id", [authJwt.verifyToken], commentCtrl.deleteOne);

module.exports = router;
