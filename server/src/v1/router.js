const express = require("express");
const router = express.Router();
const adminController = require("./controllers/adminController");

let initWebRoutes = (app) => {
  //
  router.post("/login", adminController.login);
  router.post("/update", adminController.update);
  router.post("/forget", adminController.forget);

  return app.use("/", router);
};

module.exports = initWebRoutes;
