const mongoose = require("mongoose");
const { Schema } = mongoose;

const comment = Schema({
  userId: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
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

const post = Schema(
  {
    author: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
    likes: {
      type: [String],
      default: [],
    },
    comments: [
      {
        ref: 'Comment',
        type: Schema.Types.ObjectId
      }
    ],
    tags: [String],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", post);
const Comment = mongoose.model("Comment", comment);

module.exports = {
  Post,
  Comment
};
