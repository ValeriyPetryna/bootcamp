import { Comment } from "../db/models/blog.js";

const findAll = async (id) => {
  const query = id ? { userId: id } : {};
  const comments = await Comment.find(query).sort({ createdAt: -1 });
  return comments;
};

const findOne = async (id) => {
  const comment = await Comment.findById(id);
  return comment;
};

const createOne = async (comment) => {
  const newComment = await Comment.create(comment);

  return newComment;
};

const updateOne = async (id, comment) => {
  const updatedComment = await Comment.findOneAndUpdate({ _id: id }, comment, {
    new: true,
  });
  return updatedComment;
};

const deleteOne = async (id) => {
  const removed = await Comment.findByIdAndRemove(id);
  return removed;
};

export {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
