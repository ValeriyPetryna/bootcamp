import mongoose from "mongoose";
import conf from "../utils/config.js";

export default () => {
  mongoose
    .connect(conf.MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => console.error(err));
};
