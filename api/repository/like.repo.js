const { Like } = require("../db/models/blog");

const findAll = async () => {
  const likes = await Like.find({});
  return likes;
};

const findOne = async (id) => {
  const like = await Like.findById(id);
  return like;
};

const createOne = async (like) => {
  const newLike = await Like.create(like);
  return newLike;
};

const deleteOne = async (id) => {
  const removed = await Like.findByIdAndRemove(id);
  return removed;
};

module.exports = {
  findAll,
  findOne,
  createOne,
  deleteOne,
};
