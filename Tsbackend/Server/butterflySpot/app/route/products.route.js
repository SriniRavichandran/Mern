

module.exports = app => {
    const productdata = require("../controllers/products.controller");
  
    var router = require("express").Router();

  
    router.post("/product", productdata.create);
  
    router.get("/product", productdata.findAll);

    router.get("/products/:subcategory", productdata.particularData);
 
    router.get("/product/:id", productdata.findOne);

    router.put("/product/:id", productdata.update);

    router.delete("/product/:id", productdata.delete);

    router.delete("/product", productdata.deleteAll);


  
    app.use('/api', router);

  };