const mongoose = require("mongoose");

const generatorSchema = new mongoose.Schema({
  //5 type
  type: {
    type: String,
  },
  //
  title: {
    type: String,
  },
  brand: {
    type: String,
  },
  engine: {
    type: String,
  },

  supplier: {
    type: String,
    default: "Tân Thành Tài",
  },
  guarantee: {
    type: String,
  },
  //
  voltage: {
    type: String,
  },

  body: {
    type: String,
  },
  f: {
    type: String,
  },
  lvinsulation: {
    type: String,
  },
  lvprotection: {
    type: String,
  },
  number: {
    type: String,
  },
  detail: {
    wattage: {
      type: String,
    },
    image: {
      type: String,
    },
  },

  status: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Generator", generatorSchema);
