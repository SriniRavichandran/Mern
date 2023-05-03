const auth=require("../middleware/authMiddleware.js")

module.exports = app => {
    const orderdata = require("../controllers/order.controller");
  
    var router = require("express").Router();

  
    router.post("/order",orderdata.create);
  
    router.get("/order", orderdata.findAll);
 
    router.get("/order/:id", orderdata.findOne);

    router.put("/order/:id", orderdata.update);

    router.delete("/order/:id", orderdata.delete);

    router.delete("/order", orderdata.deleteAll);


  
    app.use('/api', router);

  };