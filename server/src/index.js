// src/index.js
import express from "express";
import cors from "cors";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import drawRoutes from "./routes/drawRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/draws", drawRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.listen(2980, () => {
  console.log("Server running on port 2980");
});