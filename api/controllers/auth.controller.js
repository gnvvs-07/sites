import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res,next) => {
  // req.body is the info from the front end
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  //   save to DB
  try {
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error)
  }
};
