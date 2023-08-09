let adminServices = require("../services/motorServices");

let findall = async (req, res) => {
  try {
    const respone = await adminServices.findAll();
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

let add = async (req, res) => {
  try {
    const data = req.body;
    const respone = await adminServices.add(data);
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

let update = async (req, res) => {
  try {
    const data = req.body;
    const respone = await adminServices.update(data);
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
