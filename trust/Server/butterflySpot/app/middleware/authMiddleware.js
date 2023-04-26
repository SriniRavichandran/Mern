const db = require("../models");
//const Reg_log = db.reg_log;
const jwt=require('jsonwebtoken')


const auth =async(req,res,next)=>{
  

let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            console.log(token);
            const decode=jwt.verify(token,"srinivasan");
            
            req.user = await Reg_log.findOne(decode.email);
            console.log("requser  = ",req.user);
            next();
        }catch(err){
          return res.status(401).json({err:"Not Authorized wrong token"});
        }
        if(!token){
          return res.status(401).json({err:"Not Authorized "});
        }
    }

}

module.exports=auth;

