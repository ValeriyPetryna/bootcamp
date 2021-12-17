const path = require("path");
const express = require("express");
const apiRouter = require("./routers");

const port = 3000;
const serverPath = `http://localhost:${port}`;
const distPath = "dist/bootcamp/";

const app = express();

app.use(express.static(distPath));

app.use("/api", apiRouter);

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../" + distPath + "/index.html"));
});

app.use((err, req, res, next) => {
  res.status(404).send(`Error occured: ${err.message}`);
});

app.listen(port, () => {
  console.log(`Server started at: ${serverPath}`);
});
