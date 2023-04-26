const db = require("../models");
const Sign_data = db.sign_up;


const jwt=require('jsonwebtoken')


const auth =async(req,res,next)=>{
  

let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            if(!token){
              return res.status(401).json({err:"Not Authorized "});
            }
            console.log(token);
            const decode=jwt.verify(token,"srinivasan");
            console.log("decode value =",decode.email)
          const  user = await Sign_data.findOne({email:decode.email})
            console.log("requser  = ",user.email,user.status);
            next();
        }catch(err){
          return res.status(401).json({err:"Not Authorized wrong token"});
        }
       
    }

}

module.exports=auth;

