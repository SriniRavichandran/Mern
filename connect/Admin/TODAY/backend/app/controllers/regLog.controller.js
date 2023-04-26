const db = require("../models");
const Reg_log = db.reg_log;
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {

  const token=  jwt.sign(
    {email:req.body.email},
    "srinivasan"
  );
  const reg_log = new Reg_log({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role:req.body.role,
    token:token
  });

  reg_log
    .save(reg_log)
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


const generateToken=(id)=>{
  return jwt.sign({id},"srinivasan",{expiresIn:'20d'})
}

exports.findAll = (req, res) => {
  const email = req.query.email;
   var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};

  Reg_log.find(condition)
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
  
    Reg_log.findById(id)
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
  
    Reg_log.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
  
    Reg_log.findByIdAndRemove(id)
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
    Reg_log.deleteMany({})
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



  // exports.Login = (req, res) => {
   
  //   const {email, password} = req.body;
    


  //   console.log(req.body);
  
  //   Reg_log.findOne({email:email}).then((user)=>{
  
  //     if(!user){
  //       return res.status(400).json({
  //         error: "User not found"
  //       })
  //     }
  
  //     if(user.password==password){
        

  //       const payload = {
       
  //         email: user.email
  //       }
  //      jwt.sign(
  //         payload,
  //         "srinivasan",
  //         { expiresIn: 3600 },
  //         (err, token) => {
  //           const {name, role, email, _id} = user;
  //           res.json({
  //             token: "Bearer " + token,
  //             name: name,
  //             role: role,
  //             email: email,
  //             _id: _id,
  //           });
  //           if (err) {
  //             res.json({
  //               success: false,
  //               error: err,
  //             });
  //           }
  //           else{
  //             res.json({
  //               success:"success"
             
  //             });
  //           }
  //         }
  //       );
  //     }
  //     else{
  //       res.status(404).send({
  //         message: `Cannot login `
  //       })
  //     }
     
        
         
  //         }
  //   )}


  exports.getMe=(req,res)=>{
    console.log(req.body.id)
    const {_id,email,password,role}= Reg_log.findById(req.user.id);
    return res.status(200).json({_id,password,email,role})
  }





  exports.Login=async(req,res)=>{

    const {email,password}=req.body;

    const user=await Reg_log.findOne({email});

console.log("userdata",user);

    if(user && (await password==user.password)){
      return res.json({
        _id:user._id,
        name:user.name,
        
        email:user.email,
        role:user.role,
        token:user.token,
        idtoken:generateToken(user._id),
        status:"Login successfully"
      })
    }
    else{
      return res.status(404).json({msg:"invalid user Data"});
    }
  }

