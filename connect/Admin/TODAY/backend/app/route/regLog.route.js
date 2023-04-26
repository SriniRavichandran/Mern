const auth =require('../middleware/authMiddleware.js');

module.exports = app => {
    const reglog = require("../controllers/regLog.controller");
  
    var router = require("express").Router();

  
    router.post("/", reglog.create);
  
    router.get("/",auth, reglog.findAll);
 
    router.get("/:id",auth, reglog.findOne);

    router.put("/:id",auth, reglog.update);

    router.delete("/:id",auth, reglog.delete);

    router.delete("/", reglog.deleteAll);

    router.post("/login",reglog.Login);

    router.get("/me",auth,reglog.getMe);
  
    app.use('/user', router);

  };
