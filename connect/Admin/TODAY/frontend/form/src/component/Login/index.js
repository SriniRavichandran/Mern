import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'



export const Login  = () => {


const navigate=useNavigate()


    const [data,setData]=useState({
        email:"",
        password:""
        })

        const handleChange=(e)=>{
            setData({...data,[e.target.name]:[e.target.value]})
        }


const handleSubmit=()=>{

const response=  axios.post(`http://localhost:8000/user/login`).then((resp)=>{
  if(resp.data.length > 0){
    console.log("successfully");
    navigate("/home");
  }
}).catch((err)=>{
console.log(err)
})
console.log(response.data);


}


  return (
    <div> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>Login page</p>  
        <br/>
        <br/>
     
        <form onSubmit={handleSubmit}>
        <label>Username</label><input type="text" onChange={handleChange}  name='email' /><br/>
        <label>password</label><input type="text" onChange={handleChange} name="password" /><br/>
        <input type="submit"/>
        {data.email}{data.password}
        </form>
    </div>
  )
}
