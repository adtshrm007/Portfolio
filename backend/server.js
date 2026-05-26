import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./utils/connectDB.js";
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at ${port}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed!!!!");
    process.exit(1);
  });
