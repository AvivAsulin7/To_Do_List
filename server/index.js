import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routerTodo from "./routes/todo.js";

dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/todo", routerTodo);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlPArser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));
