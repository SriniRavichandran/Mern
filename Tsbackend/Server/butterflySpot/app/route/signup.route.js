const auth =require('../middleware/authMiddleware.js');

module.exports = app => {
    const signup = require("../controllers/signup.controller");
   
    var router = require("express").Router();

  
    router.post("/user", signup.create);
  
    router.get("/user", signup.findAll);
 
    router.get("/user/:id", signup.findOne);

    router.put("/user/:id", signup.update);

    router.delete("/user/:id", signup.delete);

    router.delete("/user", signup.deleteAll);

    router.post("/user/login",signup.Login);

    router.get("/me",signup.getMe);
  
    app.use('/api', router);

  };