module.exports = {
  DIST: "dist/bootcamp/",
  MONGO_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@bci.egvlc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  SECRET: "secret-key"
};
