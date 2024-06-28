import PostModel from "../model/post.model.js";

// 查询
export const getPostList = async (req, res) => {
  const posts = await PostModel.find();

  res.success(
    {
      list: posts,
    },
    "操作成功"
  );
};

// 新增
export const createPost = async (req, res) => {
  const { title, author, body } = req.body;
  const post = new PostModel({
    title,
    author,
    body,
  });
  try {
    const result = await post.save();
    res.success(result, "操作成功");
  } catch (e) {
    res.error();
  }
};
