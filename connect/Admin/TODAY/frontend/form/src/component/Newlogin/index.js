import React from 'react'
import {useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { SetauthToken } from '../SetauthToken';

export const Newlogin = () => {


  const navigate=useNavigate()


 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

      // const handleChange=(e)=>{
      //     setData({...data,[e.target.name]:[e.target.value]})
      // }


// const handleSubmit=()=>{

// const response=  axios.post(`http://localhost:8000/user/login`).then((resp)=>{
// if(resp.data.length > 0){
//   console.log("successfully");
//   navigate("/home");
// }
// }).catch((err)=>{
// console.log(err)
// })
// console.log(response.data);


// }



const handleSubmit=(event)=>{
  event.preventDefault();
 

  axios.post('http://localhost:8000/user/login',{
    email:email,
    password:password
  }).then((resp)=>{
  console.log(resp.data);
  if(resp.data.role=="user"){
    sessionStorage.setItem('Token',resp.data.token);
    SetauthToken(resp.data.token);
    navigate('/user');
    
  }
  else{
    sessionStorage.setItem('Token',resp.data.token);
    SetauthToken(resp.data.token);
    navigate('/admin')
  }

 

  }).catch((err)=>{
    console.log(err);
  })
}




  return (
    <div>

<p>Login page</p>  
        <br/>
        <br/>
    


       

        <form onSubmit={handleSubmit}>
        <label>email</label>
        <input type='text' onChange={(e)=>{setEmail(e.target.value)}}  name='email' /><br/>
        <label>password</label>
        <input type='text' onChange={(e)=>{setPassword(e.target.value)}}  name='password' /><br/>
       <input type="submit" />
     </form>

        
    </div>
  )
}
