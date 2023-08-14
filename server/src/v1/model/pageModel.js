const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  title: { type: String },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  detail: { type: String },
});

module.exports = mongoose.model("Pages", pageSchema);
