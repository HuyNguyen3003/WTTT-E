const generator = require("../model/generatorModel");

let findAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await generator.find({ status: 1 });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
let add = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await generator.create({
        type: data.type,
        //
        title: data.title,
        brand: data.brand,
        engine: data.engine,
        guarantee: data.guarantee,
        voltage: data.voltage,
        //
        body: data.body,
        f: data.f,
        lvinsulation: data.lvinsulation,
        lvprotection: data.lvprotection,
        number: data.number,
        detail: {
          wattage: data.wattage,
          image: data.image,
        },
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
      if (data.email === process.env.MAILADMIN) {
        const res = await user.findOne({ _id: process.env._IDADMIN });
        resolve(res);
      } else resolve(null);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { findAll, update, add };
