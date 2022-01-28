import { getAllPosts, getOnePost, createPost, updatePost, removePost } from "../services/post.service.js";

const getAll = async (req, res, next) => {
  const { tag, user } = req.query;
  try {
    const result = await getAllPosts(tag, user);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await getOnePost(id);

    if (post) {
      res.send(post);
    } else {
      res.status(404).send({
        status: 404,
        message: "Post with selected id not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const createOne = async (req, res, next) => {
  const post = req.body;
  try {
    const newPost = await createPost(post);

    if (newPost) {
      res.status(201).json(newPost);
    } else {
      res.status(409).send({
        status: 409,
        message: "Post with selected title already exists",
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  const post = req.body;

  try {
    const updatedPost = await updatePost(id, post);
    if (updatedPost) {
      res.send(updatedPost);
    } else {
      res.status(404).send({
        status: 404,
        message: "Post with selected id does not exists",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await removePost(id);

    if (!removed) {
      res.status(500).send({
        status: 500,
        message: "Cannot find or delete document",
      });
    } else {
      res.status(200).send({
        status: 200,
        message: "Successfully deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};

export {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
