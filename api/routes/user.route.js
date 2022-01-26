const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user.controller");
const { authJwt } = require("../middlewares/index");

router.get("/all", userCtrl.allAccess);
router.get("/user", [authJwt.verifyToken], userCtrl.userBoard);
router.get("/mod", [authJwt.verifyToken, authJwt.isModerator], userCtrl.moderatorBoard);
router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.adminBoard);

router.get("/:id", [authJwt.verifyToken], userCtrl.getOne);

module.exports = router;
