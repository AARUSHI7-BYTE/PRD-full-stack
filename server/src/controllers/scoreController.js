
import { supabase } from "../config/supabaseClient.js";

export const addScore = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { score } = req.body;

    if (!score || score < 1 || score > 45) {
      return res.status(400).json({ error: "Invalid score" });
    }

    const { data, error } = await supabase
      .from("scores")
      .select("*")
      .eq("user_id", req.user.id)
      .order("created_at", { ascending: true });

    if (error) return res.status(400).json({ error: error.message });

    if (data.length >= 5) {
      await supabase.from("scores").delete().eq("id", data[0].id);
    }

    await supabase.from("scores").insert([
      { user_id: req.user.id, score }
    ]);

    res.json({ message: "Score added" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

export const getScores = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { data, error } = await supabase
      .from("scores")
      .select("*")
      .eq("user_id", req.user.id)
      .order("created_at", { ascending: false });

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};