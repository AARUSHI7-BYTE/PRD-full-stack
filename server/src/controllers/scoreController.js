import  supabase  from "../config/supabaseClient.js";

export const addScore = async (req, res) => {
  const { value } = req.body;

  if (value < 1 || value > 45)
    return res.status(400).send("Invalid score");

  await supabase.from("scores").insert([
    {
      user_id: req.userId,
      value,
      date: new Date()
    }
  ]);

  res.send("Score added");
};