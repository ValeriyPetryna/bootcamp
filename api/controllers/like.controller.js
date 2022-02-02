import jwt_decode from 'jwt-decode';
import { getAllLikes, getOneLike, likeToggle, removeLike } from "../services/like.service.js";

const getAll = async (req, res, next) => {
  const { userId } = req.query;
  try {
    const result = await getAllLikes(userId);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await getOneLike(id);

    if (post) {
      res.send(post);
    } else {
      res.status(404).send({
        status: 404,
        message: "Like with selected id not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const changeOne = async (req, res, next) => {
  try {
    const { postId } = req.body;
    const token = req.headers["x-access-token"];

    const userId = jwt_decode(token).id;

    const like = await likeToggle(postId, userId);

    if (like) {
      res.status(201).json(like);
    } else {
      res.status(500).send({
        status: 500,
        message: "Cannot create document",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await removeLike(id);

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

export { getAll, getOne, changeOne, deleteOne };
