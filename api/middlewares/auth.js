import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import config from "../utils/config.js";
import * as userRepo from "../repository/user.repo.js";
import * as roleRepo from "../repository/role.repo.js";

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    next({ message: "No token provided!" });
    return;
  }

  const userId = jwt_decode(token).id;

  req.body.userId = userId;
  // decode token
  jwt.verify(token, config.SECRET, (err, decoded) => {
    if (err) {
      next(err);
    } else {
      req.body.userId = decoded.id;
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

export { verifyToken, isAdmin, isModerator };
