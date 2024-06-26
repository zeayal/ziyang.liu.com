const express = require("express");
const { expressjwt } = require("express-jwt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwtSecret = `secret123456`

app.use(
  expressjwt({ secret: jwtSecret, algorithms: ["HS256"] }).unless({
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

app.post("/api/v1/login", (req, res) => {
  console.log("req.body", req.body);
  const { username, password } = req.body;
  if (username === "admin" && password == "123456") {
    const token =
      `Bearer ` +
      jwt.sign({
        username: username,
        userId: 1,
        isAdmin: true,
      }, jwtSecret, {
        expiresIn: '1 days'
      });

    res.json({
      status: "ok",
      msg: '登陆成功',
      data: {
        token,
      },
    });
  }

  res.json({
    status: "error",
    msg: '登陆失败',
    data: null,
  })
});

app.post("/api/v1/posts", (req, res) => {
  res.send("刘紫阳的生活日记");
});

app.listen(port, () =>
  console.log(`express is running on http://localhost:${port}`)
);
