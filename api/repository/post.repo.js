const { Post } = require("../db/models/blog");

const findAll = async (tag) => {
  let posts;
  if (tag) {
    posts = await Post.aggregate([
      {
        $lookup: {
          from: "tags",
          localField: "tags",
          foreignField: "_id",
          as: "tags",
        },
      },
      { $match: { "tags.tag": tag } },
    ]);
  } else {
    posts = await Post.find({}).populate("tags", "tag -_id").sort({ createdAt: -1 });
  }

  return posts;
};

const findOne = async (id) => {
  const post = await Post.findById(id).populate("comments", "content");
  return post;
};

const createOne = async (post) => {
  const doesPostExists = await Post.exists({ title: post.title });
  if (!doesPostExists) {
    const newPost = await Post.create(post);
    return newPost;
  }
  return null; // todo: add error
};

const updateOne = async (id, post) => {
  const doesPostExists = await Post.exists({ _id: id });
  if (doesPostExists) {
    const updatedPost = await Post.findOneAndUpdate({ _id: id }, post, {
      new: true,
    });
    return updatedPost;
  }
  return null; // todo: add error
};

const deleteOne = async (id) => {
  const removed = await Post.findByIdAndRemove(id);

  return removed;
};

const addComment = async (postId, commentId) => {
  const pushComment = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $push: { comments: commentId },
    }
  );

  return pushComment;
};

const removeComment = async (id) => {
  const deleteComment = await Post.findByIdAndUpdate(
    { _id: id },
    {
      $push: { comments: newComment._id },
    }
  );

  return deleteComment;
};

// todo: realize like toggle
const addLike = async (postId, likeId) => {
  const pushComment = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $push: { likes: likeId },
    }
  );

  return pushComment;
};

// todo: realize tag toggle
const addTag = async (postId, tagId) => {
  const pushTag = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $push: { tags: tagId },
    }
  );

  return pushTag;
};

module.exports = {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
  addComment,
  removeComment,
  addLike,
  addTag,
};
