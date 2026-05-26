import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./utils/connectDB.js";
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
app.use("/message", messageRoute);
app.use("/review", reviewRoute);

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
