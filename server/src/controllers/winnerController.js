
import { supabase } from "../config/supabaseClient.js";

export const calculateWinners = async (req, res) => {
  try {
    const { draw_id } = req.body;

    const { data: draw } = await supabase
      .from("draws")
      .select("*")
      .eq("id", draw_id)
      .single();

    if (!draw) return res.status(404).json({ error: "Draw not found" });

    const { data: scores } = await supabase.from("scores").select("*");

    let winners = [];

    scores.forEach((s) => {
      if (draw.numbers.includes(s.score)) {
        winners.push({
          user_id: s.user_id,
          draw_id,
          match_count: 1,
          amount: 1000,
        });
      }
    });

    if (winners.length > 0) {
      await supabase.from("winners").insert(winners);
    }

    res.json({ message: "Winners calculated" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};