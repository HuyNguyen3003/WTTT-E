const mongoose = require("mongoose");

const activiSchema = new mongoose.Schema({
  customer: { type: String },
  product: { type: String },
  _id: { type: String },
  detail: { type: String },
  activi: { type: Boolean, default: false }, // Sửa dòng này để thêm kiểu và giá trị mặc định
});

function generateRandomNumber(length) {
  return Math.floor(Math.random() * Math.pow(10, length))
    .toString()
    .padStart(length, "0");
}

activiSchema.pre("save", async function (next) {
  if (!this._id) {
    const randomNumber = generateRandomNumber(10);
    this._id = `TTT${randomNumber}`;
  }
  next();
});

module.exports = mongoose.model("Activis", activiSchema);
