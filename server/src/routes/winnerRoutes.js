import express from "express";
import { calculateWinners } from "../controllers/winnerController.js";

const router = express.Router();

router.post("/calculate", calculateWinners);

export default router;