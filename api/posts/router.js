const express = require("express");
const router = express.Router();

const ctrl = require("./controller");

router.get("/", ctrl.getPosts);
router.post("/", ctrl.createPost);
router.get("/:id", ctrl.getSinglePost);
router.patch("/:id", ctrl.updatePost);
router.delete("/:id", ctrl.deletePost);

module.exports = router;
