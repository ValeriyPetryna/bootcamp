import * as userRepo from "../repository/user.repo.js";

const ROLES = ["user", "admin", "moderator"];

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const userByName = await userRepo.findOne({ username: req.body.username });
  if (userByName) {
    res.status(400).send({ message: "Failed! Username is already in use!" });
    return;
  }

  const userByEmail = await userRepo.findOne({ email: req.body.email });
  if (userByEmail) {
    res.status(400).send({ message: "Failed! Email is already in use!" });
    return;
  }

  next();
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`,
        });
        return;
      }
    }
  }

  next();
};

export {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};
