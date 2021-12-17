const express = require("express");
const router = express.Router();

const ctrl = require("./controller");

router.get("/", ctrl.getPosts);

router.post("/", ctrl.createPost);

module.exports = router;
