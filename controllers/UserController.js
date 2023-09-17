const User = require("../models/user");



// get all user
// const index = (req, res) => {
//     User.find()
//       .then((response) => {
//         res.status(200).json({
//           response,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({
//           message: "An error occured while handling your request",
//         });
//       });
//   };

// get user by id
const show = (req, res) => {
    let user_id = req.params.user_id;
    User.findById(user_id)
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
  
    let user = new User({
      name: req.body.name,
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
  
    let user_id = req.params.user_id;
    let updatedData = {
      name: req.body.firstname,
      email: req.body.email,
    };
    User.findByIdAndUpdate(user_id, { $set: updatedData })
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


module.exports = { remove, show, update, store};
