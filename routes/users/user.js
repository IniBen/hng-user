const express = require("express");
const UserController = require("../../controllers/UserController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", UserController.index);
router.get("/api/:user_id", UserController.show);
router.post("/api", UserController.store);
router.patch("/api/:user_id", UserController.update);
router.delete("/api/:user_id", UserController.remove);
// router.post("/login", UserController.login);

module.exports = router;
