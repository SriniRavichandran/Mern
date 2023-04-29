const db = require("../models");
const Subcategory_data = db.subcategory_data;






exports.create = async(req, res) => {

      const subcategory_datas= new Subcategory_data({
        category: req.body.category,
        subcategory: req.body.subcategory,
        image: req.body.image
              
        });
      console.log(req.body)
      await subcategory_datas
          .save(subcategory_datas)
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

   Subcategory_data.find(condition)
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

  Subcategory_data.findById(id)
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
  
    Subcategory_data
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update`
          });
        } else res.send({ message: "Category data was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating =" + id
        });
      });
  };



  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Subcategory_data
    .findByIdAndRemove(id)
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
    Subcategory_data
    .deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Category were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      }); 
  };



