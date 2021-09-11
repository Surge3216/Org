const mongoose = require("mongoose");
const { model, Schema } = require('mongoose');

const challengeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
        type: String,
    },
    coverImg: {
      type: String,
    },
  },
  { timestamps: true }
);
const Challenge = mongoose.model('Challenge', challengeSchema)
module.exports.Challenge = Challenge;