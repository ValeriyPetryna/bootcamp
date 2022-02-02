import { Role } from "../db/models/user.js";

const findAll = async (query) => {
  const roles = await Role.find(query);
  return roles;
};

const findOne = async (id) => {
  const role = await Role.findById(id);
  return role;
};

const createOne = async (role) => {
  const newRole = await Role.create(role);
  return newRole;
};

const deleteOne = async (id) => {
  const removed = await Role.findByIdAndRemove(id);

  return removed;
};

export { findAll, findOne, createOne, deleteOne };
