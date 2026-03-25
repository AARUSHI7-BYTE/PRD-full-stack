import express from "express";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
import{
    getAllWinners,
    updateWinnerStatus,
} from "../controllers/winnerController.js";

import {
  getStats,
  getUsers,
  getWinnings,
} from "../controllers/adminController.js";

const router = express.Router();
router.get("/winners",auth,admin,getAllWinners)
router.get("/stats", auth, admin, getStats);
router.get("/users", auth, admin, getUsers);
router.get("/winnings", auth, admin, getWinnings);
router.post("/update-winner",auth,admin,updateWinnerStatus)

export default router;