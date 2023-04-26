import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';


export const Signup = () => {


const [data,setData]=useState({
firstname:"",
lastname:"",
email:"",
password:""
})

const navigate=useNavigate();

const handleChange=({
    currentTarget:input
})=>{
    setData({...data,[input.name]:input.value})
}



const handleSubmit=async(e)=>{
e.preventDefault();

try{

    const url="http://localhost:8080/api/users";
    const {data:res}=await axios.post(url,data);
    navigate("/login");
    console.log(res.message);

    console.log(res.message);

}catch(error){
      
}
}

  return (


    <>
<h1>Signup</h1>

<form onSubmit={handleSubmit}>
<label>Username</label> <br/>
<input type="text"  onChange={handleChange} name="firstname"  /><br/>


<label>lastname</label> <br/>
<input type="text"  onChange={handleChange} name="lastname"  /><br/>


{data.email}
{data.firstname}
{data.lastname}
{data.password}

<label>email</label> <br/>
<input type="email"  onChange={handleChange} name="email" /><br/>


<label>password</label> <br/>
<input type="password"  onChange={handleChange} name="password"  /><br/>


<button type='submit'>Submit</button>

</form>

     <Link to="/login">Login</Link>


    </>
  )
}
