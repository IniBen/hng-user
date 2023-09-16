const User = require("../models/User");
const bcrypt = require("bcrypt");
const aResponse = require("../utility/aResponse");


// get all user
const index = (req, res) => {
  User.find()
    .then((response) => {
      res.status(200).json({
        response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "An error occured while handling your request",
      });
    });
};

// get user by id
const show = (req, res) => {
  let id = req.params.id;
  User.findById(id)
    .then((response) => {
      res.status(200).json({
        response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: error,
      });
    });
};

// create user
async function store(req, res) {
  const salt = await bcrypt.genSalt(7);

  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  user
    .save()
    .then((response) => {
      res.status(200).json({
        message: "User added successfully",
        response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: error,
      });
    });
}

// update user info
async function update(req, res, next) {
  const salt = await bcrypt.genSalt(7);

  const hashedSeed = await bcrypt.hash(req.body.wallet_seed, salt);

  // await createAddress.createAddress();

  let id = req.params.id;
  let updatedData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    bio: req.body.bio,
    password: req.body.password,
    photo: {
      name: req.file.originalname,
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
    OnBoard: {
      hasRegistered: req.body.hasRegistered,
    },
    wallet_seed: hashedSeed,
    wallet_address: req.body.wallet_address,
  };
  User.findByIdAndUpdate(id, { $set: updatedData })
    .then((response) => {
      res.status(200).json({
        message: "User data updated successfully",
        response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: error,
      });
    });
}

// // delete user
const remove = (req, res, next) => {
  // let userId = req.body.userId
  let id = req.params.id;
  User.findByIdAndRemove(id)
    .then((response) => {
      res.status(200).json({
        message: "User deleted successfully",
        response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: error,
      });
    });
};

// user login
async function login(req, res) {
  const saltRounds = 10; // increase this for greater security (but slower performance)
  const plainTextPassword = req.body.password;
  const email = req.body.email;

  User.findOne({ email }).then(async (user) => {
    if (user) {
      const hashedPasswordFromDB = user.password; // retrieve this from your password DB

      const hashedPasswordFromUser = await bcrypt.hash(
        plainTextPassword,
        saltRounds
      );

      const isMatch = bcrypt.compare(
        hashedPasswordFromUser,
        hashedPasswordFromDB
      );
      if (isMatch) {
        res.status(200).json({
          message: "Login successful",
          data: user,
        });
      } else {
        res.status(401).json({
          message: "Password did not match",
        });
      }
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  });
}

module.exports = { remove, show, update, store, index, login };
