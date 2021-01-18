const mongoose = require("mongoose");
const secret = require("../config.js");
var connectionURL = secret.connectionURL;


mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
  })
  .catch((err) => {
    console.log("Can't connect to the database", err);
    process.exit();
  });