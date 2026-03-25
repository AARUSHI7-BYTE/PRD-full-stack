import  supabase  from "../config/supabaseClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const { data, error } = await supabase.from("users").insert([
    { name, email, password: hashed }
  ]);

  if (error) return res.status(400).send(error.message);

  res.send("User created");
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  const match = await bcrypt.compare(password, data.password);

  if (!match) return res.status(400).send("Wrong password");

  const token = jwt.sign({ id: data.id }, "secret");

  res.json({ 
    token,
  user:{
    id:data.id,
    email:data.email,
    is_admin:data.is_admin
  }
 });
};