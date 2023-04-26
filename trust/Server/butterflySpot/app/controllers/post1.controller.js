const db = require("../models");
const Post1Data = db.post1_data;


exports.create = (req, res) => {

  
  const post1_data = new Post1Data({
    category: req.body.category,
    title: req.body.title,
    price:req.body.price,
    brand: req.body.brand,
    image: req.body.image,
    offer: req.body.offer
            
  });

  post1_data
    .save(post1_data)
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
   var condition = category ? { category:req.body.category  } : {};

   Post1Data.find(condition)
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



exports.particulardata = (req, res) => {
    const category = req.params.category;
  
    Post1Data.find({category:category})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found  " + category });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error =" + err });
      });
  };






  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Post1Data.findById(id)
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
  
    Post1Data.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
  
    Post1Data.findByIdAndRemove(id)
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
    Post1Data.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} post1 were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      }); 
  };




