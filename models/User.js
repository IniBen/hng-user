const mongoose = require("mongoose");


const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
