import express from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from "../middlewares/index.js";

const router = express.Router();

router.post("/signup", [checkDuplicateUsernameOrEmail, checkRolesExisted], signUp);
router.post("/signin", signIn);

export default router;
