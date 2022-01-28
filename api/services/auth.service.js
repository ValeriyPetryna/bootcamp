import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../utils/config.js";
import * as roleRepo from "../repository/role.repo.js";
import * as userRepo from "../repository/user.repo.js";

const register = async (user) => {
  const userData = await prepareUser(user);

  const newUser = await userRepo.createOne(userData);

  if (!newUser) {
    throw new Error("Cannot create document");
  }

  return newUser;
};

const login = async (body) => {
  const user = await userRepo.findOne({ username: body.username });

  if (!user) {
    throw new Error("User Not found.");
  }

  const passwordIsValid = comparePassword(body.password, user.password);

  if (!passwordIsValid) {
    throw new Error("Invalid Password!");
  }

  const token = jwt.sign({ id: user.id, username: user.username }, config.SECRET, {
    expiresIn: 86400, // 24 hours
  });

  const authorities = [];

  for (let i = 0; i < user.roles.length; i++) {
    authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
  }

  return {
    id: user._id,
    username: user.username,
    email: user.email,
    roles: authorities,
    accessToken: token,
  };
};

const prepareUser = async (data) => {
  let roles;

  if (data.roles) {
    const role = await roleRepo.findAll({ name: { $in: data.roles } });

    roles = role.map((role) => role._id);
  } else {
    const role = await roleRepo.findAll({ name: "user" });

    roles = [role._id];
  }

  const obj = {
    username: data.username,
    email: data.email,
    password: hashPassword(data.password),
    roles,
  };

  return obj;
};

const hashPassword = (password) => {
  const hashed = bcrypt.hashSync(password, 8);
  if (!hashed) {
    throw new Error("Cannot hash password");
  }
  return hashed;
};

const comparePassword = (value, password) => {
  return bcrypt.compareSync(value, password);
};

export {
  register,
  login,
};
