const mongoose = require("mongoose");

const { Schema } = mongoose;

const shrortSch = new Schema({
  url: String,
  id: String,
});

const shrortSch = mongoose.model("shorturl", shrortSch);

module.exports = shrortSch;
