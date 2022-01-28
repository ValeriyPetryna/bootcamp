import { getAllComments, getOneComment, updateComment, setComment, unsetComment } from "../services/comment.service.js";

const getAll = async (req, res, next) => {
  try {
    const result = await getAllComments();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await getOneComment(id);

    if (post) {
      res.send(post);
    } else {
      res.status(404).send({
        status: 404,
        message: "Comment with selected id not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const createOne = async (req, res, next) => {
  try {
    const { postId, content, userId } = req.body;
    const newComment = await setComment(postId, content, userId);

    if (newComment) {
      res.status(201).json(newComment);
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

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  const comment = req.body;

  try {
    const updatedComment = await updateComment(id, comment);
    if (updatedComment) {
      res.send(updatedComment);
    } else {
      res.status(404).send({
        status: 404,
        message: "Comment with selected id does not exists",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await unsetComment(id);

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
