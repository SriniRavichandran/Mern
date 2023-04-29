module.exports = (app) => {
  const category_data = require("../controllers/category.controller");

  var router = require("express").Router();

  router.post("/category", category_data.create);

  router.get("/category", category_data.findAll);

  router.get("/category/:id", category_data.findOne);

  router.put("/category/:id", category_data.update);

  router.delete("/category/:id", category_data.delete);

  app.use("/api", router);
};
