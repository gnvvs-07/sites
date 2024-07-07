import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
export const test = (req, res) => {
  res.json({
    message: "Hello World2",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You are not the owner of the account"));
  }
  // update the user
  try {
    if (req.body.password) {
      req.user.password = bcryptjs.hashSync(req.body.password, 10);
    }
    // find and update the user
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          // options for a user which fields he/she can update
          // username,avatar,email,password
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      // saving new user
      { new: true }
    );
    // remove the password and send the remaining data
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
