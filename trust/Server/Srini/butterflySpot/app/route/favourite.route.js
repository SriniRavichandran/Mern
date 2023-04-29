const auth = require("../middleware/authMiddleware.js");
module.exports = (app) => {
  const favourite = require("../controllers/favourite.controller");

  var router = require("express").Router();

  router.post("/favourite", favourite.create);

  router.get("/favourite", auth, favourite.findAll);

  router.get("/favourite/:id", auth, favourite.findOne);

  router.put("/favourite/:id", auth, favourite.update);

  router.delete("/favourite/:id", auth, favourite.delete);

  router.get("/favourite-item/:email", favourite.particularData);

  app.use("/api", router);
};
