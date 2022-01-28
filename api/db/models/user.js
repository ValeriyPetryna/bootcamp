import mongoose from "mongoose";

const { Schema } = mongoose;

const Role = mongoose.model(
  "Role",
  new Schema({
    name: String,
    enum: ["user", "moderator", "admin"],
  })
);

const user = Schema(
  {
    username: {
      required: [true, "username not provided"],
      lowercase: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    email: {
      required: [true, "email not provided"],
      unique: [true, "email already exists in database!"],
      type: String,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "{VALUE} is not a valid email!",
      },
    },
    profile: {
      firstName: String,
      lastName: String,
      avatar: String,
      bio: String,
      posts: [
        {
          ref: "Post",
          type: Schema.Types.ObjectId,
        },
      ],
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", user);

export {
  User,
  Role,
};
