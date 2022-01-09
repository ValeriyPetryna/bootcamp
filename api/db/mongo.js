const mongoose = require("mongoose");

const { MONGO_URL } = require("../utils/config");

module.exports = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => console.error(err));
};
