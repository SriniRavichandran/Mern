module.exports = (app) => {
  const subcategory = require("../controllers/subcategory.controller");

  var router = require("express").Router();

  router.post("/subcategory", subcategory.create);

  router.get("/subcategory", subcategory.findAll);

  router.get("/sub-category/:category", subcategory.findOne);

  router.put("/subcategory/:id", subcategory.update);

  router.delete("/subcategory/:id", subcategory.delete);

  app.use("/api", router);
};
