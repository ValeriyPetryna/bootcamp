const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = Schema({
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
  },
  createdAt: {
    type: String,
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: String,
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("Users", user);

module.exports = {
  User,
};
