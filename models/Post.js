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
    userImg: {
      type: String,
    },
    img: {
      type: String,
      default: ""
    },
    video:{
      type: String,
      default: ""
    },
    likes: {
      type: Array,
      default: [],
    },
    comments:
       [
        {
          body: String,
          username: String,
          userImage: String
        }
      ],
  },
  { timestamps: true }
);
const Post = mongoose.model('Post', postSchema)
module.exports.Post = Post;
