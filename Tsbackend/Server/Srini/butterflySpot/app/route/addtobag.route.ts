import auth from "../middleware/authMiddleware";
import { bag } from "../controllers/addtobag.controller";
module.exports = (app:any) => {


  var router = require("express").Router();

  router.post("/cart", bag.create);

  router.get("/cart", bag.findAll);

  router.get("/cart/:id", auth, bag.findOne);

  router.put("/cart/:id", auth, bag.update);

  router.delete("/cart/:id", auth, bag.deleteOne);

  app.use("/api", router);
};
