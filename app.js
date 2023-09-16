const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

// const  connectToDb  = require('./db');
const userRouter = require('./routes/user');
const errorHandler = require('./middlewares/errorhandler');

app.use( express.json() );

//connect to database
const dbURI = process.env.MONGODB_URI;

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

app.use('/api', userRouter);

app.use( errorHandler )


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});


module.exports = app;