const express = require("express");
const router = express.Router();

const likeCtrl = require("../controllers/like.controller");

router.get("/", likeCtrl.getAll);
router.patch("/", likeCtrl.changeOne);
router.get("/:id", likeCtrl.getOne);
router.delete("/:id", likeCtrl.deleteOne);

module.exports = router;