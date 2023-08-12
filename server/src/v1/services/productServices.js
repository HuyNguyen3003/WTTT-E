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
  // console.log(data);
  try {
    if (!data.id) {
      // Nếu không có data.id, tạo một bản ghi mới
      const newProduct = new product({
        title: data.title,
        name: data.name,
        img: data.img,
        details: data.details,
      });

      const savedProduct = await newProduct.save();
      return savedProduct;
    } else {
      // Nếu có data.id, cập nhật bản ghi hiện có
      const updatedProduct = await product.findByIdAndUpdate(
        data.id,
        {
          type: data.title,
          name: data.name,
          img: data.img,
          details: data.details,
        },
        { new: true } // Lấy giá trị mới sau khi cập nhật
      );

      return updatedProduct;
    }
  } catch (error) {
    throw error;
  }
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
