const mongoose = require("mongoose");
const { Schema } = mongoose;

const comment = Schema(
  {
    // user: {
    //   ref: "User",
    //   type: Schema.Types.ObjectId,
    // },
    post: {
      ref: "Post",
      type: Schema.Types.ObjectId,
    },
    content: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const like = Schema(
  {
    userId: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    postId: {
      ref: "Post",
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const tag = Schema({
  tag: {
    type: String,
    unique: true,
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
    likes: [
      {
        ref: "Like",
        type: Schema.Types.ObjectId,
      },
    ],
    comments: [
      {
        ref: "Comment",
        type: Schema.Types.ObjectId,
      },
    ],
    tags: [
      {
        ref: "Tag",
        type: Schema.Types.ObjectId,
      },
    ],
    user: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", post);
const Comment = mongoose.model("Comment", comment);
const Tag = mongoose.model("Tag", tag);
const Like = mongoose.model("Like", like);

module.exports = {
  Post,
  Comment,
  Tag,
  Like,
};
