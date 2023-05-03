import { controllerpostOne } from "../controllers/postone.controller";
module.exports = (app:any) => {
  // const post1_data = require("../controllers/postone.controller");

  var router = require("express").Router();

  // router.post("/data", post1_data.create);

  // router.get("/data", post1_data.findAll);

  // router.get("/data/:id", post1_data.findOne);

  // router.put("/data/:id", post1_data.update);

  // router.delete("/data/:id", post1_data.delete);

  // router.delete("/data", post1_data.deleteAll);

  router.get("/datas/:category", controllerpostOne.particulardata);

  app.use("/post1", router);
};
