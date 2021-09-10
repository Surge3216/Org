const mongoose = require("mongoose");
const { model, Schema } = require('mongoose');

const postSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      max: 2000,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments:{
      type: Array,
      default: [
        {
          body: String,
          username: String,
          createdAt: String
        }
      ]
    }
  },
  { timestamps: true }
);
const Post = mongoose.model('Post', postSchema)
module.exports.Post = Post;