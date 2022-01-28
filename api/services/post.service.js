import * as repo from "../repository/post.repo.js";

const getAllPosts = async (tag, user) => {
  const posts = await repo.findAll(tag, user);

  return posts;
};

const getOnePost = (id) => repo.findOne(id);

const createPost = (post) => repo.createOne(post);

const updatePost = (id, post) => repo.updateOne(id, post);

const removePost = (id) => repo.deleteOne(id);

export {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  removePost,
};
