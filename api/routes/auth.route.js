const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth.controller");
const { verifySignUp } = require("../middlewares/index");

router.post("/signup", [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], authCtrl.signUp);
router.post("/signin", authCtrl.signIn);

module.exports = router;
