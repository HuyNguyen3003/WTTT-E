const page = require("../model/pageModel");

let getAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await page.find();
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
let update = async (data) => {
  try {
    if (!data._id) {
      // Nếu không có data.id, tạo một bản ghi mới
      const newProduct = new page({
        title: data.title,
        name: data.name,
        image: data.img,
        detail: data.detail,
      });

      const savedProduct = await newProduct.save();
      return savedProduct;
    } else {
      // Nếu có data.id, cập nhật bản ghi hiện có
      console.log(data, "-----");

      const updatedPage = await page.findByIdAndUpdate(
        data._id,
        {
          type: data.title,
          name: data.name,
          image: data.img,
          detail: data.detail,
        },
        { new: true } // Lấy giá trị mới sau khi cập nhật
      );

      return updatedPage;
    }
  } catch (error) {
    throw error;
  }
};

let Delete = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = page.deleteOne({ _id: id.dataId });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { getAll, update, Delete };
