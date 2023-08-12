const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  type: { type: String },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  detail: { type: String },
});

module.exports = mongoose.model("Pages", pageSchema);
