import express from "express";
import supabase from "../config/supabaseClient.js";

const router = express.Router();

// ✅ GET all charities
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("charities")
    .select("*");

  if (error) {
    console.log("Error fetching charities:", error);
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
});

// ✅ SAVE USER CHARITY
router.post("/select", async (req, res) => {
  const { user_id, charity_name, charity_percentage } = req.body;

  const { data, error } = await supabase
    .from("users")
    .update({
      charity_name,
      charity_percentage,
    })
    .eq("id", user_id);

  if (error) {
    console.log("Error saving charity:", error);
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: "Charity saved successfully" });
});

export default router;