import { Like } from "../db/models/blog.js";

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

export {
  findAll,
  findOne,
  createOne,
  deleteOne,
};
