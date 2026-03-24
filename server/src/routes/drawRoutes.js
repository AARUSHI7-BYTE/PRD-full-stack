import express from "express";
import { createDraw, getDraws } from "../controllers/drawController.js";

const router = express.Router();

router.post("/", createDraw);
router.get("/", getDraws);

export default router;