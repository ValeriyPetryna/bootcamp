const config = require("../utils/config");
const jwt = require("jsonwebtoken");

const { User, Role } = require("../db/models/user");
const userRepo = require("../repository/user.repo");
const roleRepo = require("../repository/role.repo");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  // decode token
  jwt.verify(token, config.SECRET, (err, decoded) => {
    if (err) {
      next(err);
    } else {
      req.userId = decoded.id;
      next();
    }
  });
};

const isAdmin = async (req, res, next) => {
  const user = await userRepo.findOne({ id: req.userId });

  if (user) {
    const roles = await roleRepo.findAll({
      _id: { $in: user.roles },
    });

    if (roles) {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({ message: "Require Admin Role!" });
      return;
    }
  }
};

const isModerator = async (req, res, next) => {
  const user = await userRepo.findOne({ id: req.userId });
  if (user) {
    const roles = await roleRepo.findAll({
      _id: { $in: user.roles },
    });

    if (roles) {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }

      res.status(403).send({ message: "Require Moderator Role!" });
      return;
    }
  }
};

module.exports = {
  verifyToken,
  isAdmin,
  isModerator,
};
