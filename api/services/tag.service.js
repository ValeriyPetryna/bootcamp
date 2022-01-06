const repo = require("../repository/tag.repo");
const postRepo = require("../repository/post.repo");

const getAllTags = () => repo.findAll();

const getOneTag = (id) => repo.findOne(id);

const createTag = async (body) => {
  const { tag } = body;

  if (!tag) {
    throw new Error("Body not found");
  }

  const newTag = await repo.createOne(tag);

  return newTag;
};

const setTag = async (tagId, postId) => {
  const pushTag = await postRepo.addTag(postId, newTag._id);

  if (!pushTag) {
    return null;
  }

  return pushTag;
};

const updateTag = (id, tag) => repo.updateOne(id, tag);

const removeTag = (id) => repo.deleteOne(id);

module.exports = {
  getAllTags,
  getOneTag,
  createTag,
  updateTag,
  removeTag,
};
