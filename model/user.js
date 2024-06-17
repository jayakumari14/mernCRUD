const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/merncrud");

const userSchema = mongoose.Schema({
  uname: String,
  place: String,
  job: String,
});

module.exports = mongoose.model("user", userSchema);
