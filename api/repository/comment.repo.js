const { Comment } = require("../db/models/blog");

const findAll = async () => {
  const comments = await Comment.find({}).sort({ createdAt: -1 });
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

module.exports = {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
