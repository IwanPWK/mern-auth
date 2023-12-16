import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

// router.route("/auth").post(authUser); // alternatif
router.post("/auth", authUser);

export default router;
