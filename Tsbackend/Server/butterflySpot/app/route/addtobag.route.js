
module.exports = app => {
    const addtobag = require("../controllers/addtobag.controller");
  
    var router = require("express").Router();

  
    router.post("/cart", addtobag.create);
  
    router.get("/cart", addtobag.findAll);
 
    router.get("/cart/:id", addtobag.findOne);

    router.put("/cart/:id", addtobag.update);

    router.delete("/cart/:id", addtobag.delete);

    router.delete("/cart", addtobag.deleteAll);


  
    app.use('/api', router);

  };