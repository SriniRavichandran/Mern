import auth from "../middleware/authMiddleware";
import { orderController } from "../controllers/order.controller";

module.exports = (app:any) => {
  // const orderdata = require("../controllers/order.controller");

  var router = require("express").Router();

  router.post("/order", auth, orderController.create);

  router.get("/order", auth, orderController.findAll);

  router.get("/order/:id", auth, orderController.findOne);

  router.put("/order/:id", auth, orderController.update);

  router.delete("/order/:id", auth, orderController.deleteOne);
 

  app.use("/api", router);
};
