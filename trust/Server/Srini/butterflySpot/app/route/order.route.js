const auth = require("../middleware/authMiddleware");
const ErrorHandle = require("../middleware/errorhandler.js");

module.exports = (app) => {
  const orderdata = require("../controllers/order.controller");

  var router = require("express").Router();

  router.post("/order", auth, orderdata.create);

  router.get("/order", auth, orderdata.findAll);

  router.get("/order/:id", auth, orderdata.findOne);

  router.put("/order/:id", auth, orderdata.update);

  router.delete("/order/:id", auth, orderdata.delete);
  app.use(ErrorHandle);

  app.use("/api", router);
};
