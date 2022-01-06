const { Tag } = require("../db/models/blog");

const findAll = async () => {
  const tags = await Tag.find({});
  return tags;
};

const findOne = async (id) => {
  const tag = await Tag.findById(id);
  return tag;
};

const createOne = async (tag) => {
  const doesTagExists = await Tag.exists({ tag });

  if (doesTagExists) {
    throw new Error(`Selected tag ${tag} already exist`);
  }

  const newTag = await Tag.create({ tag });
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

module.exports = {
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne,
};
