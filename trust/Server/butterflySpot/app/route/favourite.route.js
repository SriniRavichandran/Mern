
module.exports = app => {
    const favourite = require("../controllers/favourite.controller");
  
    var router = require("express").Router();

  
    router.post("/favourite", favourite.create);
  
    router.get("/favourite", favourite.findAll);
 
    router.get("/favourite/:id", favourite.findOne);

    router.put("/favourite/:id", favourite.update);

    router.delete("/favourite/:id", favourite.delete);

    router.delete("/favourite", favourite.deleteAll);


  
    app.use('/api', router);

  };