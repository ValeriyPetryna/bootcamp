const repo = require("../repository/user.repo");

const getAllUsers = async () => {
  const users = await repo.findAll();

  return users;
};

const getOneUser = async (options) => {
  let query;

  if (options.username) {
    query = { username: options.username };
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

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  removeUser,
};
