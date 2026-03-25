import  supabase  from "../config/supabaseClient.js";

export const getDashboard = async (req, res) => {
  const userId = req.userId;

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  const { data: scores } = await supabase
    .from("scores")
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: false })
    .limit(5);

  const { data: winnings } = await supabase
    .from("winnings")
    .select("*")
    .eq("user_id", userId);

  res.json({ user, scores, winnings });
};