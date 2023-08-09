let adminServices = require("../services/adminServices");

let login = async (req, res) => {
  try {
    const data = req.body;

    const respone = await adminServices.login(data);
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

let forget = async (req, res) => {
  try {
    const data = req.body;
    const respone = await adminServices.forget(data);
    if (respone) return res.json(respone);
    else return res.json("fail");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  login,
  update,
  forget,
};
