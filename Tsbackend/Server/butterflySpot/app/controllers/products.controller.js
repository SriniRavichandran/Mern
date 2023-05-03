const db = require("../models");
const Products_data = db.products_data;


exports.create = (req, res) => {


  const products_data = new Products_data({
    category: req.body.category,
    subcategory: req.body.subcategory,
    title: req.body.title,
    price: req.body.price,
    brand: req.body.brand,
    offer: req.body.offer,
    description: req.body.description,
    image: req.body.image

  });
console.log(req.body.name);
products_data
    .save(products_data)
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


exports.particularData=(req,res)=>{
const subcategory=req.params.subcategory;


var condition = subcategory ? { subcategory: subcategory } : {};

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
}

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







