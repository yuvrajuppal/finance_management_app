import { Router } from "express";
import {
  signup,
  login,
  checkislogin,
  logout,
} from "../controller/user.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/checkislogin", checkislogin);
router.post("/logout", logout);

export default router;
