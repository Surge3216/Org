const mongoose = require("mongoose");
const { model, Schema } = require('mongoose');

const bioSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    },
    aboutMe: {
      type: String,
      max: 2000,
    },
    city: {
      type: String,
      required: true
    },
    age: {
        type: String,
        required: true
      },
    state: {
       type: String,
       required: true
    },
    img: {
      type: String,
      default:"https://i.imgur.com/yv5bdwV.png"
    },
  },
  { timestamps: true }
);
const Bio = mongoose.model('Bio', bioSchema)
module.exports.Bio = Bio;