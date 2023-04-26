import React,{useState,useEffect} from 'react'
import axios from 'axios'
export const List = () => {
  




    const [dataone,setData]=useState([]);

    useEffect(()=>{
        loadData();
    },[]);


    const loadData=(async()=>{
        const response=await axios.get('http://localhost:3690/user/')
        setData(response.data);
        console.log(response.data)
        
        

})

console.log(dataone)


  return (
    <div>
        <tr>
        <th>firstname</th>
        <th>lastname</th>
        <th>Email</th>
        <th>password</th>
        </tr>


{dataone.map((e)=>(
    <tr>
        <td>{e.name}</td>
        <td>{e.lastname}</td>
        <td>{e.email}</td>
        <td>{e.password}</td>
    </tr>
)
)}
        
    </div>
  )
}
