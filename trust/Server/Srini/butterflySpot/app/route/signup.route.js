const auth = require("../middleware/authMiddleware.js");

module.exports = (app) => {
  const signup = require("../controllers/signup.controller");

  var router = require("express").Router();

  router.post("/user", signup.create);

  router.get("/user", auth, signup.findAll);

  router.get("/user/:id", signup.findOne);

  router.put("/user/:id", signup.update);

  router.delete("/user/:id", signup.delete);

  router.post("/user/login", signup.Login);

  app.use("/api", router);
};
