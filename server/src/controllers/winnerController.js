import  supabase  from "../config/supabaseClient.js";

// 📊 Get all winners (admin)
export const getAllWinners = async (req, res) => {
  const { data, error } = await supabase
    .from("draw_results")
    .select("*");

  if (error) return res.status(400).send(error.message);

  res.json(data);
};

// 👤 Get current user's winnings
export const getMyResults = async (req, res) => {
  const { data, error } = await supabase
    .from("draw_results")
    .select("*")
    .eq("user_id", req.userId);

  if (error) return res.status(400).send(error.message);

  res.json(data);
};

// 💰 Update winner status (admin action)
export const updateWinnerStatus = async (req, res) => {
  const { id, status } = req.body;

  const { data, error } = await supabase
    .from("draw_results")
    .update({ status })
    .eq("id", id);

  if (error) return res.status(400).send(error.message);

  res.send("Status updated");
};