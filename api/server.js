import path from "path";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import router from "./routes/index.js";
import conf from "./utils/config.js";
import db from "./db/mongo.js";
import { errorHandler } from "./middlewares/index.js";

const app = express();
const __dirname = path.resolve();

db();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(conf.DIST));

app.use("/api", router);

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, conf.DIST, "/index.html"));
});

// global error handler
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at: http://localhost:${process.env.PORT || 3000}`);
});
