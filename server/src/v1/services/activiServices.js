const activi = require("../model/activiModel");

let getAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await activi.find();
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

let getId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await activi.findById(id);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
let deleteId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = activi.deleteOne({ _id: id });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

let create = async (data) => {
  try {
    if (!data._id) {
      const newProduct = new activi({
        customer: data.customer,
        product: data.product,
        detail: data.detail,
      });
      const savedProduct = await newProduct.save();
      return savedProduct;
    } else {
      if (data.detail) {
        const updatedPage = await activi.findByIdAndUpdate(
          data._id,
          {
            activi: true,
            detail: data.detail,
          },
          { new: true } // Lấy giá trị mới sau khi cập nhật
        );

        return updatedPage;
      }
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { getAll, create, getId, deleteId };
