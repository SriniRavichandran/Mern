const db = require("../models");
const Order_data = db.order_data;


exports.create = (req, res) => {


  const order_data = new Order_data({
    
    email: req.body.email,
    Address: req.body.Address,
    phone: req.body.phone,
    place: req.body.place,
    pincode:req.body.pincode,
    state: req.body.state,
    name: req.body.name,
    productid: req.body.productid,
    title:req.body.title,
    price: req.body.price,
    offer: req.body.offer,
    quantity: req.body.quantity,
    value: req.body.value,
    discountprice: req.body.discountprice,
    image: req.body.image,
    orderstatus1: req.body.orderstatus1,
    orderdate: req.body.orderdate
       

  });
console.log(req.body.name);
order_data
    .save(order_data)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred ."
      });
    });
};


exports.findAll = (req, res) => {
    const email = req.query.email;
     var condition = email ? { email: email } : {};
  
     Order_data.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred ."
        });
      });
  };
  
  


  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Order_data.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found  " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error id=" + id });
      });
  };




  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Order_data.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating =" + id
        });
      });
  };



  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Order_data.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete `
          });
        } else {
          res.send({
            message: " deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete " + id
        });
      });
  };




  exports.deleteAll = (req, res) => {
    Order_data.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Tutorials were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      }); 
  };







