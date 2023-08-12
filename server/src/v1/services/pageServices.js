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
  return new Promise(async (resolve, reject) => {
    try {
      const res = await page.findOneAndUpdate(
        { _id: data.id },
        { type: data.type },
        { title: data.title },
        { image: data.image },
        { detail: data.detail },
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
      const res = page.deleteOne({ _id: data.id });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { getAll, update, Delete };
