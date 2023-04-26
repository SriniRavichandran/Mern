const db = require("../models");
const Sign_up = db.sign_up;
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {

  const token=  jwt.sign(
    {email:req.body.email},
    "srinivasan"
  );
  const sign_up = new Sign_up({
          "email": req.body.email,
            "password": req.body.password,
            "role": req.body.role,
            "firstname":req.body.firstname,
            "lastname": req.body.lastname,
            "phoneno": req.body.phoneno,
            "status": req.body.status,
             token:token
  });

  sign_up
    .save(sign_up)
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


const generateToken=(email)=>{
  return jwt.sign({email},"srinivasan",{expiresIn:'20d'})
}

exports.findAll = (req, res) => {
  const email = req.query.email;
   var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};

   Sign_up.find(condition)
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
  
    Sign_up.findById(id)
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
  
    Sign_up.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
  
    Sign_up.findByIdAndRemove(id)
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
    Sign_up.deleteMany({})
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





  exports.getMe=(req,res)=>{
    console.log(req.body.id)
    const {_id,email,password,role}= Sign_up.findById(req.user.id);
    return res.status(200).json({_id,password,email,role})
  }


  exports.Login=async(req,res)=>{
 const {email,password}=req.body;
     const user=await Sign_up.findOne({email});
  console.log("userdata",user);
     if(user && (await password==user.password)){
      return res.json({
    _id:user._id,
     name:user.name,
     email:user.email,
     role:user.role,
    
     idtoken:generateToken(req.body.email),
     status:user.status

     })
     }
     else{
    return res.status(404).json({msg:"invalid user Data"});
    } 
  }



      