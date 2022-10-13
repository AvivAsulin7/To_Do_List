import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  list: [{ todo: String, priority: { type: String, default: "none" } }],
});

const User = mongoose.model("User", UserSchema);

export default User;
