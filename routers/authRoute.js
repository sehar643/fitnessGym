import express from "express";
import {
  getinfo,
  loginController,
  registerController,
} from "../controllers/authController.js";
import upload from "../multer/imageAuth.js";
import User from "../models/userModel.js";
import { authenticate } from "../middlewares/auth.js";

let router = express.Router();

router.post("/signup", upload.single("photo"), registerController);
router.post("/login", loginController);

router.get("/protectectedroute", authenticate, getinfo);

router.get("/userslist", async (req, resp) => {
  let result = await User.find();
  resp.send(result);
});

export default router;

router.get("/main", registerController);
