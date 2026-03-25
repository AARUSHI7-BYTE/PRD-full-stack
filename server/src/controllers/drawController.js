import  supabase  from "../config/supabaseClient.js";
import { generateDrawNumbers, countMatches } from "../utils/drawLogic.js";

export const runDraw = async (req, res) => {
  const numbers = generateDrawNumbers();

  const { data: draw } = await supabase
    .from("draws")
    .insert([{ numbers, month: "March" }])
    .select()
    .single();

  const { data: users } = await supabase.from("users").select("*");

  for (let user of users) {
    const { data: scores } = await supabase
      .from("scores")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(5);

    if (!scores || scores.length < 5) continue;

    const matches = countMatches(scores, numbers);

    let prize = 0;
    if (matches === 5) prize = 10000;
    else if (matches === 4) prize = 5000;
    else if (matches === 3) prize = 2000;

    if (prize > 0) {
      await supabase.from("draw_results").insert([
        {
          user_id: user.id,
          draw_id: draw.id,
          matches,
          prize
        }
      ]);
    }
  }

  res.json({ numbers });
};