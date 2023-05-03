

module.exports = app => {
    const subcategory = require("../controllers/subcategory.controller");
  
    var router = require("express").Router();

  
    router.post("/subcategory", subcategory.create);
  
    router.get("/subcategory", subcategory.findAll);
 
    router.get("/subcategory/:id", subcategory.findOne);

    router.put("/subcategory/:id", subcategory.update);

    router.delete("/subcategory/:id", subcategory.delete);

    router.delete("/subcategory", subcategory.deleteAll);


  
    app.use('/api', router);

  };