import { controller_subcategory } from "../controllers/subcategory.controller";
module.exports = (app:any) => {
  // const subcategory = require("../controllers/subcategory.controller");

  var router = require("express").Router();

  router.post("/subcategory", controller_subcategory.create);

  router.get("/subcategory", controller_subcategory.findAll);

  router.get("/sub-category/:category", controller_subcategory.findOne);

  router.put("/subcategory/:id", controller_subcategory.update);

  router.delete("/subcategory/:id", controller_subcategory.deleteOne);

  app.use("/api", router);
};
