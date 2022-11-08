import cors from "cors";
import bodyParser from "body-parser";
import express from 'express';
import mongoose from 'mongoose'
import { router as todoRoutes } from "./routes/Todo.js";

const port = 8000;

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/todoapp")
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

app.use(cors());
app.use(bodyParser.json());
app.use(todoRoutes);

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});