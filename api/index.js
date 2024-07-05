import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "../api/routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

// connect to database
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("connection failed"));
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// api routing
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
// middle wares
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({ success: false, statusCode, message });
});
