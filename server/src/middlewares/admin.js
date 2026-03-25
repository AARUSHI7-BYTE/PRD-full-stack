import supabase from "../config/supabaseClient.js";

export default async function admin(req, res, next) {
  const { data } = await supabase
    .from("users")
    .select("is_admin")
    .eq("id", req.userId)
    .single();

  if (!data?.is_admin) return res.status(403).send("Not admin");

  next();
}