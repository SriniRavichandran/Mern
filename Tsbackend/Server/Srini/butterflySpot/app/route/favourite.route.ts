import auth from "../middleware/authMiddleware";
import { controllerFavourite } from "../controllers/favourite.controller";

module.exports = (app:any) => {
  // const favourite = require("../controllers/favourite.controller");

  var router = require("express").Router();

  router.post("/favourite", controllerFavourite.create);

  router.get("/favourite", auth, controllerFavourite.findAll);

  router.get("/favourite/:id", auth, controllerFavourite.findOne);

  router.put("/favourite/:id", auth, controllerFavourite.update);

  router.delete("/favourite/:id", auth, controllerFavourite.deleteOne);

  router.get("/favourite-item/:email", controllerFavourite.particularData);

  app.use("/api", router);
};
