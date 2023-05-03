const auth=require("../middleware/authMiddleware")

module.exports = app => {
    const orderdata = require("../controllers/order.controller");
  
    var router = require("express").Router();

  
    router.post("/order",auth, orderdata.create);
  
    router.get("/order",auth, orderdata.findAll);
 
    router.get("/order/:id", auth,orderdata.findOne);

    router.put("/order/:id", auth,orderdata.update);

    router.delete("/order/:id",auth, orderdata.delete);

    router.delete("/order",auth, orderdata.deleteAll);


  
    app.use('/api', router);

  };