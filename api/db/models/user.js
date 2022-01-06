const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = Schema(
  {
    username: {
      required: true,
      lowercase: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    profile: {
      firstName: String,
      lastName: String,
      avatar: String,
      bio: String,
      posts: {
        ref: "Post",
        type: Schema.Types.ObjectId,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", user);

module.exports = {
  User,
};
