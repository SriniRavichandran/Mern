import { controllerparticular } from "../controllers/posttwo.controller";
module.exports = (app:any) => {
  // const post2_data = require("../controllers/posttwo.controller");

  var router = require("express").Router();

  // router.post("/data", post2_data.create);

  // router.get("/data", post2_data.findAll);

  router.get("/datas/:category", controllerparticular.controllerparticulardata);

  // router.get("/data/:id", post2_data.findOne);

  // router.put("/data/:id", post2_data.update);

  // router.delete("/data/:id", post2_data.delete);

  // router.delete("/data", post2_data.deleteAll);

  app.use("/post2", router);
};
