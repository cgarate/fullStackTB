import express, { NextFunction, Request, Response } from "express";
import logger from "morgan";
const medianRouter = require("./routes/median");
const cors = require('cors')

const port = 3000;

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", medianRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(`An error occurred: ${err}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
