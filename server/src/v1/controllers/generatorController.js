let generatorServices = require("../services/generatorServices");

let findall = async (req, res) => {
  try {
    const respone = await generatorServices.findAll();
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

let add = async (req, res) => {
  try {
    const data = req.body;
    const respone = await generatorServices.add(data);
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

let update = async (req, res) => {
  try {
    const data = req.body;
    const respone = await generatorServices.update(data);
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  findall,
  add,
  update,
};
