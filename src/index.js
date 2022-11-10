import cors from "cors";
import bodyParser from "body-parser";
import express from 'express';
import { router as TaskRoutes } from "./routes/Routes.js";
import { initializePool } from "./controllers/pool.js";

const port = 8000;
const app = express();

export const pool = await initializePool();

app.use(cors());
app.use(bodyParser.json());
app.use(TaskRoutes);

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});