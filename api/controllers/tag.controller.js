const { getAllTags, getOneTag, createTag, updateTag, removeTag, tagToggle } = require("../services/tag.service");

const getAll = async (req, res, next) => {
  try {
    const result = await getAllTags();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const tag = await getOneTag(id);

    if (tag) {
      res.send(tag);
    } else {
      res.status(404).send({
        status: 404,
        message: "Tag with selected id not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const createOne = async (req, res, next) => {
  try {
    const tag = await createTag(req.body);

    if (tag) {
      res.status(201).json(tag);
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
  const { tag } = req.body;

  try {
    const updatedTag = await updateTag(id, tag);
    if (updatedTag) {
      res.send(updatedTag);
    } else {
      res.status(404).send({
        status: 404,
        message: "Tag with selected id does not exists",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await removeTag(id);

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

const changeOne = async (req, res, next) => {
  try {
    const { postId, tagId } = req.body;
    const tag = await tagToggle(postId, tagId);

    if (tag) {
      res.status(201).json(tag);
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

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  changeOne,
};
