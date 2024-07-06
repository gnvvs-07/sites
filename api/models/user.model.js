import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://imgs.search.brave.com/LgP92WXvIhkIAD6MNo5Pjff4Phh6tuwvHSmjuu3d5b0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy82MjQ5ODQt/dGVuZ2VuLWp1anV0/c3Uta2Fpc2VuLTRr/LWhkLWFuaW1lLTRr/LXdhbGxwYXBlci1p/bWFnZS1iYWNrZ3Jv/dW5kLXBob3RvLWFu/ZC1waWN0dXJlLmpw/Zw",
    },
  },
  {
    timestamps: true,
  }
);

// model
const User = mongoose.model("User", userSchema);
export default User;
