const repo = require("../repository/tag.repo");
const postRepo = require("../repository/post.repo");

const getAllTags = () => repo.findAll();

const getOneTag = (id) => repo.findOne(id);

const createTag = async (body) => {
  const { name } = body;

  if (!name) {
    throw new Error("Body not found");
  }

  const newTag = await repo.createOne(name);

  return newTag;
};

const updateTag = (id, tag) => repo.updateOne(id, tag);

const removeTag = (id) => repo.deleteOne(id);

const tagToggle = async (postId, tagId) => {
  const post = await postRepo.findOne(postId);

  const toggle = post.tags.filter((el) => el.toString() === tagId).length;

  const result = await postRepo.tagToggle({ tagId, postId, toggle });

  return result;
};

module.exports = {
  getAllTags,
  getOneTag,
  createTag,
  updateTag,
  removeTag,
  tagToggle,
};
