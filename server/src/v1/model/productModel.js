const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  name: String,
  price: String,
  details: String,
});

const productSchema = new mongoose.Schema({
  type: { type: String },
  name: String,
  img: String,
  details: [detailSchema], // Sử dụng Array để lưu nhiều chi tiết
});

module.exports = mongoose.model("Product", productSchema);
