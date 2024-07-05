import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// connect to database
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("connection failed"));
const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
