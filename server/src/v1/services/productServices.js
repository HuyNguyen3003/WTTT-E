const product = require("../model/productModel");

let getAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await product.find();
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
let update = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await product.findOneAndUpdate(
        { _id: data.id },
        { type: data.type },
        { name: data.name },
        { img: data.img },
        { details: data.details },
        { new: true }
      );
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

let Delete = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = product.deleteOne({ _id: data.id });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { getAll, update, Delete };
