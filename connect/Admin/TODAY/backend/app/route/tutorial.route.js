module.exports = app => {
    const tutorials = require("../controllers/regLog.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", tutorials.create);

    router.get("/find", tutorials.findAll);
  

    router.get("/:id", tutorials.findOne);
  
 
    router.put("/:id", tutorials.update);
  
   
    router.delete("/:id", tutorials.delete);
  
 
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api', router);
  };