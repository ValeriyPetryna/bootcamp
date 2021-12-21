const mongoose = require("mongoose");
// const mongo_url = process.env.CONNECTION_STRING;
const mongo_url = 'mongodb://127.0.0.1:37017/';

module.exports = function() {
  mongoose
    .connect(mongo_url, {
      dbName: "blog_db",
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database connection established");
    })
    .catch(err => console.error(err));
};