const db = require("../models");
const Products_data = db.addtobag_data;


exports.create = (req, res) => {


  const product_data = new Products_data({
    
    image: req.body.image,
    productid: req.body.productid,
    title: req.body.title,
    price: req.body.price,
    offer: req.body.offer,
    quantity: req.body.quantity,
    value: req.body.value,
    discountprice: req.body.discountprice,
    email: req.body.email,
    order: req.body.order
  });
console.log(req.body.name);
product_data
    .save(product_data)
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
    const category = req.query.category;
     var condition = category ? { category: category } : {};
  
     Products_data.find(condition)
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
  
    Products_data.findById(id)
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
  
    Products_data.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
  
    Products_data.findByIdAndRemove(id)
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
    Products_data.deleteMany({})
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







