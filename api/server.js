const path = require("path");
const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/index");
const bodyParser = require("body-parser");
const db = require("./db/mongo");

const { DIST, PORT } = require("./utils/config");
const { errorHandler } = require("./middlewares/index");

const app = express();

db();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(DIST));

app.use("/api", apiRouter);

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", DIST, "/index.html"));
});

// global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
