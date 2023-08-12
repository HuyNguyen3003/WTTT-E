const express = require("express");
const router = express.Router();
const adminController = require("./controllers/adminController");
const productController = require("./controllers/productController");
const pageController = require("./controllers/pageController");

let initWebRoutes = (app) => {
  //
  router.post("/login", adminController.login);

  router.get("/product", productController.getAll);
  router.post("/product/update", productController.update);
  router.post("/product/delete", productController.Delete);

  router.get("/page", pageController.getAll);
  router.post("/page/update", pageController.update);
  router.post("/page/delete", pageController.Delete);

  return app.use("/", router);
};

module.exports = initWebRoutes;
