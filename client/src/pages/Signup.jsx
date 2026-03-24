import { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const cleanData = {
        email: email.trim().toLowerCase(),
        password: password.trim()
      };

      await signup(cleanData);

      alert("Signup successful");
      navigate("/");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-black to-[#020617] text-white">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl w-80 shadow-xl">

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Account
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-white/10 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 transition"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-white/10 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 transition"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 py-3 rounded-xl font-semibold hover:scale-[1.03] transition"
        >
          Sign Up
        </button>

        {/* Login redirect */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}