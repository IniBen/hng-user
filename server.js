const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./routes/users/user.js");
const cors = require("cors");
const crypto = require('crypto');
require('dotenv').config();

const port = process.env.PORT || 3000;
const corport = 3000;

const app = express();

app.use(
  cors({
    origin: `http://localhost:${corport}`,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbURI = process.env.MONGODB_URI

// app.locals.encryptionKey = crypto.randomBytes(32);

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => console.log("Connected to database"),
    app.listen(port, () => {
      console.log("running on port " + port);
    })
  )
  .catch((err) => console.error("Error connecting to database", err));

const corsOptions = {
  origin: `http://localhost:${corport}`,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use("/", router);

