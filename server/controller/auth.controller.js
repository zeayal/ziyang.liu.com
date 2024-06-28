import jwt from "jsonwebtoken";

function login(req, res) {
  console.log("req.body", req.body);
  const { username, password } = req.body;
  if (username === "admin" && password == "123456") {
    const token =
      `Bearer ` +
      jwt.sign(
        {
          username: username,
          userId: 1,
          isAdmin: true,
        },
        process.env.JWT_Secret,
        {
          expiresIn: "1 days",
        }
      );

    res.json({
      status: "success",
      msg: "登陆成功",
      data: {
        token,
      },
    });
  } else {
    res.json({
      status: "error",
      msg: "登陆失败",
      data: null,
    });
  }
}

export default {
  login,
};
