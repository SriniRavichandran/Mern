import db from "../models";
const Sign_data = db.sign_up;


import jwt from 'jsonwebtoken';


const auth =async(req:any,res:any,next:any)=>{
  

let token:any;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            if(!token){
              return res.status(401).json({err:"Not Authorized "});
            }
            console.log(token);
            const decode:any=jwt.verify(token,"srinivasan");
            console.log("decode value =",decode.email);
          const  user = await Sign_data.findOne({email:decode.email})
            console.log("requser  = ",user.email,user.status);
            next();
        }catch(err){
          return res.status(401).json({err:"Not Authorized wrong token"});
        }
       
    }

}

export default auth;

