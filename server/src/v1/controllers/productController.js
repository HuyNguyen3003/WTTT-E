let productServices = require("../services/productServices");

let getAll = async (req, res) => {
  try {
    const data = req.body;

    const respone = await productServices.getAll();
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

let update = async (req, res) => {
  try {
    const data = req.body;
    const respone = await productServices.update(data);
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

let Delete = async (req, res) => {
  try {
    const data = req.body;

    const respone = await productServices.Delete(data);
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAll,
  update,
  Delete,
};
