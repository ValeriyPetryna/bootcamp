import { Post } from "../db/models/blog.js";

const findAll = async (tag, user) => {
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
      {
        $lookup: {
          from: "likes",
          localField: "likes",
          foreignField: "_id",
          as: "likes",
        },
      },
      { $match: { "tags.name": tag } },
    ]);
  } else {
    const query = user ? { userId: user } : {};
    posts = await Post.find(query).populate("tags", "tag -_id").populate("likes").populate("userId", "profile username").sort({ createdAt: -1 });
  }

  return posts;
};

const findOne = async (id) => {
  const post = await Post.findById(id)
    .populate("likes", "userId")
    .populate({
      path: "comments",
      select: "content userId",
      populate: { path: "userId", select: "username" },
    });

  if (!post) {
    throw new Error("Cannot find document");
  }
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

//todo: define logic for post patch request instead toggles
const likeToggle = async (options) => {
  const updateQuery = !options.toggle ? { $push: { likes: options.likeId } } : { $pull: { likes: options.likeId } };

  const like = await Post.findByIdAndUpdate({ _id: options.postId }, updateQuery);

  return like;
};

const commentToggle = async (options) => {
  const updateQuery = options.toggle ? { $push: { comments: options.commentId } } : { $pull: { comments: options.commentId } };

  const comment = await Post.findByIdAndUpdate({ _id: options.postId }, updateQuery);

  return comment;
};

const tagToggle = async (options) => {
  const updateQuery = !options.toggle ? { $push: { tags: options.tagId } } : { $pull: { tags: options.tagId } };

  const tag = await Post.findByIdAndUpdate({ _id: options.postId }, updateQuery);

  return tag;
};

export {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
  commentToggle,
  likeToggle,
  tagToggle,
};
