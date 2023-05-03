import { productController } from "../controllers/products.controller";
module.exports = (app:any) => {
  // const productdata = require("../controllers/products.controller");

  var router = require("express").Router();

  router.post("/product", productController.create);

  router.get("/product", productController.findAll);

  router.get("/products/:subcategory", productController.particularData);

  router.get("/product/:id", productController.findOne);

  router.put("/product/:id", productController.update);

  router.delete("/product/:id", productController.deleteOne);

  app.use("/api", router);
};
