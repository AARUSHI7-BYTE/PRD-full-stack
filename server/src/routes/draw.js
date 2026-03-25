import express from "express";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
import { runDraw } from "../controllers/drawController.js";

const router = express.Router();

router.post("/run-draw", auth, admin, runDraw);

export default router;