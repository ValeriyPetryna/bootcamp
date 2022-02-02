import * as repo from "../repository/user.repo.js";

const getAllUsers = async () => {
  const users = await repo.findAll();

  return users;
};

const getOneUser = async (options) => {
  let query;

  if (options.username) {
    query = { username: options.username };
    // eslint-disable-next-line no-dupe-else-if
  } else if (options.username) {
    query = { email: options.email };
  } else if (options.id) {
    query = { id: options.id };
  }
  const user = await repo.findOne(query);

  return user;
};

const createUser = (user) => repo.createOne(user);

const updateUser = (id, user) => repo.updateOne(id, user);

const removeUser = (id) => repo.deleteOne(id);

export {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  removeUser,
};
