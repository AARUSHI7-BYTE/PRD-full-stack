import supabase from "../config/supabaseClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from("users").insert([
      { name, email, password: hashed }
    ]);

    if (error) return res.status(400).send(error.message);

    res.send("User created");

  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    res.status(500).send("Server error");
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    // ✅ check user exists
    if (error || !user) {
      return res.status(400).json({ error: "User not found" });
    }

    // ✅ compare password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).send("Wrong password");
    }

    // ✅ create token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        is_admin: user.is_admin
      },
      process.env.JWT_SECRET
    );

    // ✅ send response
    res.json({ token, user });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).send("Server error");
  }
};