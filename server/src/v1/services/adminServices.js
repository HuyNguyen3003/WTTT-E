const user = require("../model/adminModel");

let login = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await user.findOne({
        username: data.username,
        password: data.password,
      });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
let update = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await user.findOneAndUpdate(
        { _id: process.env._IDADMIN },
        { password: data.password },
        { new: true }
      );
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

let forget = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.email === process.env.MAILADMIN) {
        const res = await user.findOne({ _id: process.env._IDADMIN });
        resolve(res);
      } else resolve(null);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { login, update, forget };
