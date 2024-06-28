import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {type: String, required: true},
  desc: String,
  author: String,
  body: String,
  create_time: { type: Date, default: Date.now },
});

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;
