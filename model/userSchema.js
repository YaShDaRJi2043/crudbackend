const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
});

const connection = new mongoose.model("datas", userSchema);
module.exports = connection;
