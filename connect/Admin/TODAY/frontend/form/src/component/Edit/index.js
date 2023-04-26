import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import { SetauthToken } from '../SetauthToken';

export const Edit = () => {


    const params=useParams();
    const id=params.id;

    useEffect(() => {
        loadData()
    },[id]);
    
  //  const [getdata,setGetdata]=useState([]);

    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const loadData=(async()=>{
      const store= sessionStorage.getItem("Token");
      SetauthToken(store);
        const response=await axios.get("http://localhost:8000/user/"+id);
       
        setFirstname(response.data.name);
        setLastname(response.data.role);
        setEmail(response.data.email);
        setPassword(response.data.password);
       
    })
    


    
    const handleSubmit=()=>{
     
        axios.put('http://localhost:8000/user/'+id,{
            "name":firstname,
            "role":lastname,
            "email":email,
            "password":password
        });
        
    }
    

  return (
    <div>




<h1>Edit</h1>

<h1>edit : {id}</h1>

<form onSubmit={handleSubmit}>
<label>firstname</label>
   <input type='text' onChange={(e)=>{setFirstname(e.target.value)}} value={firstname}  name='name' /><br/>
   <label>lastname</label>
   <input type='text'  onChange={(e)=>setLastname(e.target.value)} value={lastname}  name='role' /><br/>
   <label>email</label>
   <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email} name='email' /><br/>
   <label>password</label>
   <input type='text' onChange={(e)=>setPassword(e.target.value)} value={password} name='password' /><br/>

  <input type="submit"  />
</form>
        
    </div>
  )
}
