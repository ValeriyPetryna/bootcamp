import { Tag } from "../db/models/blog.js";

const findAll = async () => {
  const tags = await Tag.find({});
  return tags;
};

const findOne = async (id) => {
  const tag = await Tag.findById(id);
  return tag;
};

const createOne = async (tag) => {
  const doesTagExists = await Tag.exists({ name: tag });

  if (doesTagExists) {
    throw new Error(`Selected tag ${tag} already exist`);
  }

  const newTag = await Tag.create({ name: tag });
  return newTag;
};

const updateOne = async (id, tag) => {
  const updatedTag = await Tag.findOneAndUpdate({ _id: id }, { tag }, { new: true });

  return updatedTag;
};

const deleteOne = async (id) => {
  const removed = await Tag.findByIdAndRemove(id);
  return removed;
};

export {
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne,
};
