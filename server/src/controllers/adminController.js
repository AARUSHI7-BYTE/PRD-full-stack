import supabase from "../config/supabaseClient.js";

export const getStats = async (req, res) => {
  const { count: users } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true });

  const { count: scores } = await supabase
    .from("scores")
    .select("*", { count: "exact", head: true });

  const { data: winnings } = await supabase
    .from("winnings")
    .select("amount");

  const total = winnings.reduce((sum, w) => sum + w.amount, 0);

  res.json({ users, scores, winnings: total });
};

export const getUsers = async (req, res) => {
  const { data } = await supabase.from("users").select("*");
  res.json(data);
};

export const getWinnings = async (req, res) => {
  const { data } = await supabase.from("winnings").select("*");
  res.json(data);
};