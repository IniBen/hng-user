const mongoose = require("mongoose");
const generateString = require("../utility/genString");

const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    bio: {
      type: String,
    },
    password: {
      type: String,
    },
    wallet_seed: {
      type: String,
    },
    privateKey: {
      type: String,
    },
    publicKey: {
      type: String,
    },
    wallet_address: {
      type: String,
    },
    photo: {
      name: String,
      data: Buffer,
      contentType: String,
    },
    onBoard: {
      createdAccount: {
        default: false,
        type: Boolean,
      },
      hasRegistered: {
        default: false,
        type: Boolean,
      },
      hasKyc: {
        default: false,
        type: Boolean,
      },
      hasFunded: {
        default: false,
        type: Boolean,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
