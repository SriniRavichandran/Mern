const db = require("../models");
const Favourite_data = db.favourite_data;


exports.create = (req, res) => {


  const favourite_data = new Favourite_data({
    
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
favourite_data
    .save(favourite_data)
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
  
     Favourite_data.find(condition)
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
  
    Favourite_data.findById(id)
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
  
    Favourite_data.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update  with id=${id}. Maybe favourite was not found!`
          });
        } else res.send({ message: " updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating =" + id
        });
      });
  };



  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Favourite_data.findByIdAndRemove(id)
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
    Favourite_data.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount}  deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      }); 
  };







