import { supabase } from "../config/supabaseClient.js";

export const getDashboard = async (req, res) => {
  try {
    const user_id = req.user.id;

    // user scores
    const { data: scores } = await supabase
      .from("scores")
      .select("*")
      .eq("user_id", user_id)
      .order("created_at", { ascending: false });

    // latest draw
    const { data: draw } = await supabase
      .from("draws")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    // winners for this user
    const { data: winners } = await supabase
      .from("winners")
      .select("*")
      .eq("user_id", user_id);

    res.json({
      scores: scores || [],
      latestDraw: draw || null,
      winners: winners || []
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Dashboard failed" });
  }
};