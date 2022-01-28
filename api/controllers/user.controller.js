import { getAllUsers, getOneUser, createUser, updateUser, removeUser } from "../services/user.service.js";

const getAll = async (req, res, next) => {
  try {
    const result = await getAllUsers();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await getOneUser({ id });

    if (result) {
      res.send(result);
    } else {
      res.status(404).send({
        status: 404,
        message: "User with selected query not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const createOne = async (req, res, next) => {
  const user = req.body;

  try {
    const result = await createUser(user);

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).send({
        status: 500,
        message: "Cannot create user",
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  const user = req.body;

  try {
    const result = await updateUser(id, user);
    if (result) {
      res.send(result);
    } else {
      res.status(404).send({
        status: 404,
        message: "User with selected id does not exists",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await removeUser(id);

    if (!result) {
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

const allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

const userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

const adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

const moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

export {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  allAccess,
  userBoard,
  adminBoard,
  moderatorBoard,
};
