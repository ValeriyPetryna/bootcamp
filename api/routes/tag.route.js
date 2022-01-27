const express = require("express");
const router = express.Router();

const tagCtrl = require("../controllers/tag.controller");

router.get("/", tagCtrl.getAll);
router.get("/:id", tagCtrl.getOne);
router.post("/:tag", tagCtrl.createOne);
router.patch("/:id", tagCtrl.updateOne);
router.delete("/:id", tagCtrl.deleteOne);

router.patch("/set/:id", tagCtrl.changeOne);

module.exports = router;
