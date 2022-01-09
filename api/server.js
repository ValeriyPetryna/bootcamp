const path = require("path");
const express = require("express");
const apiRouter = require("./routers");
const bodyParser = require("body-parser");
const db = require("./db/mongo");

const { DIST, PORT } = require("./utils/config");

const app = express();

db();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(DIST));

app.use("/api", apiRouter);

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../" + DIST + "/index.html"));
});

app.use((err, req, res, next) => {
  res.status(404).send(`Error occured: ${err.message}`);
});

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
