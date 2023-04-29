
module.exports = app => {
    const post1_data = require("../controllers/post1.controller");
    
  
    var router = require("express").Router();

  
    router.post("/data", post1_data.create);
  
    // router.get("/data", post1_data.findAll);
 
    router.get("/data/:id", post1_data.findOne);

    router.put("/data/:id", post1_data.update);

    router.delete("/data/:id", post1_data.delete);

    // router.delete("/data", post1_data.deleteAll);

    router.get("/datas/:category", post1_data.particulardata);

  
    app.use('/post1', router);

  };