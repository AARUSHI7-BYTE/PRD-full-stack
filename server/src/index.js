import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";
import drawRoutes from "./routes/draw.js";
import charityRoutes from "./routes/charity.js"

dotenv.config();
const PORT = process.env.PORT || 7080

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", authRoutes);
app.use("/charities",charityRoutes)
app.use("/", userRoutes);
app.use("/admin", adminRoutes);
app.use("/admin", drawRoutes);

app.listen(PORT, () => console.log(`server running on ${PORT}`));