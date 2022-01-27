const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post.controller");
const { authJwt } = require("../middlewares/index");

router.get("/", postCtrl.getAll);
router.post("/", [authJwt.verifyToken], postCtrl.createOne);
router.get("/:id", postCtrl.getOne);
router.patch("/:id", [authJwt.verifyToken], postCtrl.updateOne);
router.delete("/:id", [authJwt.verifyToken], postCtrl.deleteOne);

module.exports = router;
