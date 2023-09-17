const express = require("express");
const UserController = require("../../controllers/usercontroller");

const router = express.Router();


router.get("/api/:user_id", UserController.show);
router.post("/api", UserController.store);
router.patch("/api/:user_id", UserController.update);
router.delete("/api/:user_id", UserController.remove);


module.exports = router;
