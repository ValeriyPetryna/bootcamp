const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post.controller");

router.get("/", postCtrl.getAll);
router.post("/", postCtrl.createOne);
router.get("/:id", postCtrl.getOne);
router.patch("/:id", postCtrl.updateOne);
router.delete("/:id", postCtrl.deleteOne);

module.exports = router;
