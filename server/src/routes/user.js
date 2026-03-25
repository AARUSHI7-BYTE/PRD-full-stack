import express from "express";
import auth from "../middlewares/auth.js";
import { getDashboard } from "../controllers/dashboardController.js";
import { addScore } from "../controllers/scoreController.js";
import { getMyResults } from "../controllers/winnerController.js";

const router = express.Router();
router.get("/dashboard", auth, getDashboard);
router.post("/add-score", auth, addScore);
router.get("/my-results",auth,getMyResults);

export default router;