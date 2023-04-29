const auth = require("../middleware/authMiddleware.js");

module.exports = (app) => {
  const addtobag = require("../controllers/addtobag.controller");

  var router = require("express").Router();

  router.post("/cart", addtobag.create);

  router.get("/cart", auth, addtobag.findAll);

  router.get("/cart/:id", auth, addtobag.findOne);

  router.put("/cart/:id", auth, addtobag.update);

  router.delete("/cart/:id", auth, addtobag.delete);

  app.use("/api", router);
};
