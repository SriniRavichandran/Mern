import auth from "../middleware/authMiddleware";
import { signupController } from "../controllers/signup.controller";

module.exports = (app:any) => {
 

  var router = require("express").Router();

  router.post("/user", signupController.create);

  router.get("/user",auth, signupController.findAll);

  router.get("/user/:id", signupController.findOne);

  router.put("/user/:id", signupController.update);

  router.delete("/user/:id", signupController.deleteOne);

  router.post("/user/login", signupController.Login);

  app.use("/api", router);
};
