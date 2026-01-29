import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "./dbConnect.js"
const port = process.env.PORT;
import todoRouter from "./todo.controller.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
      res.status(200).json({msg: "API calls working fine"});
});

app.use("/api", todoRouter);

app.listen(port, () => {
      console.log(`Server is up and running at: http://localhost:${port}`);
});