const express = require("express");
const router = express.Router();
const adminController = require("./controllers/adminController");
const generator = require("./controllers/generatorController");
const motor = require("./controllers/motorController");
const waterpump = require("./controllers/waterpumpController");

let initWebRoutes = (app) => {
  //
  router.post("/login", adminController.login);
  router.post("/update", adminController.update);
  router.post("/forget", adminController.forget);
  //
  router.get("/generator", generator.findall);
  router.post("/generator/add", generator.add);
  router.post("/generator/update", generator.update);
  //
  router.get("/motor", motor.findall);
  router.post("/motor/add", motor.add);
  router.post("/motor/update", motor.update);
  //
  router.get("/waterpump", waterpump.findall);
  router.post("/waterpump/add", waterpump.add);
  router.post("/waterpump/update", waterpump.update);

  return app.use("/", router);
};

module.exports = initWebRoutes;
