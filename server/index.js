import "dotenv/config";
import express from "express";
import { expressjwt } from "express-jwt";

import bodyParser from "body-parser";
import "./db.js";
import postRouter from "./router/post.router.js";
import authRouter from './router/auth.router.js'
import responseHandler from "./middleware/responseHandler.js";
import cors from 'cors';

const app = express();
const port = 3001;
// 使用 cors 中间件
app.use(cors());

app.use(responseHandler);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(
  expressjwt({ secret:  process.env.JWT_Secret, algorithms: ["HS256"] }).unless({
    path: ["/api/v1/login"],
  })
);

app.use((err, req, res, next) => {
  console.log("err------", err.name);
  if (err.name === "UnauthorizedError") {
    res.status(401).send("Invalid token");
  }
  next();
});

app.get("/", (req, res) => {
  res.send("刘紫阳的生活日记");
});


app.use("/api/v1/login", authRouter);
app.use("/api/v1/posts", postRouter);

app.listen(port, () =>
  console.log(`express is running on http://localhost:${port}`)
);
