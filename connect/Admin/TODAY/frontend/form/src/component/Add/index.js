import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { SetauthToken } from '../SetauthToken';
 

export const Add = () => {



useEffect(()=>{
    loadData();
},[]);

const [getdata,setGetdata]=useState([]);
const loadData=(async()=>{
    const store= sessionStorage.getItem("Token");
    SetauthToken(store);
    const response=await axios.get("http://localhost:8000/user/");
    setGetdata(response.data);
    console.log(response.data);
  
   
});

const navigate=useNavigate();
const [userdetails,setUserdetails]=useState({
    name:"",
    role:"",
    email:"",
    password:""
})


const payload = {
 
    "role":userdetails.role,
    "email":userdetails.email

  }



const handleDetails=({
    currentTarget:input
})=>{
     setUserdetails({...userdetails,[input.name]:input.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/user/',{
        "name":userdetails.name,
        "role":userdetails.role,
        "email":userdetails.email,
        "password":userdetails.password
    }).then((resp)=>{
        sessionStorage.setItem("TOKEN",resp.data.token)
    });
    setTimeout(()=>{
        loadData();
    },100)
}


const handleDelete=(id)=>{
    axios.delete("http://localhost:8000/user/"+id)
      setTimeout(()=>{
        loadData();
      },100);
}

  return (
    <div>

     <form onSubmit={handleSubmit}>
     <h1>Add</h1>
     <label>firstname</label>
        <input type='text' onChange={handleDetails}  name='name' /><br/>
        <label>lastname</label>
        <input type='text'  onChange={handleDetails}  name='role' /><br/>
        <label>email</label>
        <input type='text' onChange={handleDetails}  name='email' /><br/>
        <label>password</label>
        <input type='text' onChange={handleDetails}  name='password' /><br/>
       <input type="submit" />
     </form>

{userdetails.name}<br/>
{userdetails.role}<br/>
{userdetails.email}<br/>
{userdetails.password}<br/>



<div >
    <h1>List</h1>


    <tr >
        <th style={{paddingLeft:'10px'}}>id</th>
        <th style={{paddingLeft:'10px'}}>firstname</th>
        <th style={{paddingLeft:'5px'}}>lastname</th>
        <th style={{paddingLeft:'5px'}}>email</th>
        <th style={{paddingLeft:'5px'}}>password</th>
        <th style={{paddingLeft:'5px'}}>Edit</th>
        <th style={{paddingLeft:'5px'}}>Delete</th>
    </tr>

    {console.log(getdata)}

    { getdata.map((e)=>(     
     <tr key={e._id}>
        <td style={{paddingLeft:'5px'}}>{e._id}</td>
        <td style={{paddingLeft:'5px'}}>{e.name}</td>
        <td style={{paddingLeft:'5px'}}>{e.role}</td>
        <td style={{paddingLeft:'5px'}}>{e.email}</td>
        <td style={{paddingLeft:'5px'}}>{e.password}</td>
        <td style={{paddingLeft:'5px'}}><button onClick={()=>{navigate("/edit/"+e._id)}}>Edit</button></td>
        <td style={{paddingLeft:'5px'}}><button onClick={()=>{handleDelete(e._id)}}>Delete</button></td>

    </tr>


    ))}
    
</div>

    </div>
  )
}
