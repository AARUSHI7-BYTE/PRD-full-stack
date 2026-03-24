
import { supabase } from "../config/supabaseClient.js";
import { generateDrawNumbers } from "../utils/drawGenerator.js";

export const createDraw = async (req, res) => {
  try {
    const numbers = generateDrawNumbers();

    const { data, error } = await supabase
      .from("draws")
      .insert([{ numbers, status: "published", prize_pool: 10000 }])
      .select();

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

export const getDraws = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("draws")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};