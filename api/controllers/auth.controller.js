import { register, login } from "../services/auth.service.js";

const signUp = async (req, res, next) => {
  try {
    const newUser = await register(req.body);

    if (newUser) {
      res.send({ message: "User was registered successfully! Please log in" });
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

const signIn = async (req, res, next) => {
  try {
    const loggedIn = await login(req.body);

    if (loggedIn) {
      res.status(201).json(loggedIn);
    } else {
      res.status(500).send({
        status: 500,
        message: "Cannot login with current credentionals",
      });
    }
  } catch (error) {
    next(error);
  }
};

export {
  signIn,
  signUp,
};
