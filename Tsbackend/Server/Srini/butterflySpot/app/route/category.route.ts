// const category_data = require("../controllers/category.controller");

import { controllerCategory } from "../controllers/category.controller";

module.exports = (app:any) => {
 

  var router = require("express").Router();

  router.post("/category", controllerCategory.create);

  router.get("/category", controllerCategory.findAll);

  router.get("/category/:id", controllerCategory.findOne);

  router.put("/category/:id", controllerCategory.update);

  router.delete("/category/:id", controllerCategory.deleteOne);

  app.use("/api", router);
};
