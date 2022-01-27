const { User } = require("../db/models/user");

const findAll = async () => {
  const users = await User.find({}).sort({ createdAt: -1 });

  return users;
};

const findOne = async (query) => {
  const user = await User.findOne(query).populate("roles", "name -_id");
  return user;
};

const createOne = async (user) => {
  const doesUserExists = await User.exists({ username: user.username });
  if (!doesUserExists) {
    const newUser = await User.create(user);

    return newUser;
  }
  return null; // todo: add error
};

const updateOne = async (id, user) => {
  const doesUserExists = await User.exists({ _id: id });
  if (doesUserExists) {
    const updatedUser = await User.findOneAndUpdate({ _id: id }, user, {
      new: true,
    });
    return updatedUser;
  }
  return null; // todo: add error
};

const deleteOne = async (id) => {
  const removed = await User.findByIdAndRemove(id);

  return removed;
};

module.exports = {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
