import { supabase } from "../config/supabaseClient.js";

export const signup = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    email = email.trim().toLowerCase();
    password = password.trim();

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({
      message: "Signup successful",
      user: data.user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};


export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    email = email.trim().toLowerCase();
    password = password.trim();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({
      session: data.session,
      user: data.user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};