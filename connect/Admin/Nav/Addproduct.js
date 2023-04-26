import React from 'react'
//import './Addpagestyle.css'
import {useState} from 'react'
import Axios from 'axios'

export const Addproduct = () => {

const [category,setDetailcategory]=useState("");
const [id,setDetailsid]=useState("");
const [title,setDetailstitle]=useState("");
const [price,setDetailsprice]=useState("");
const [brand,setDetailsbrand]=useState("");
const [offer,setDetailsoffer]=useState("");
const [description,setDetailsdescription]=useState("");
const [image,setDetailsimage]=useState("");
const [select,setDetailsselect]=useState("");








const handle=((e)=>{
e.preventDefault();
Axios.post(`http://localhost:3406/info`,{id,select,category,title,price,brand,offer,image})
.then(()=>{
console.log(select,category,id,title,price,brand,offer,offer,image)

}).catch((err)=>{
console.log(err);
})
})










return(
  
  <div className='Addproduct'>
<h1>Add The Deteils</h1>
<form onSubmit={handle}>
<div className='Addproductbox'>
<label htmlFor='slt'  >Select Major</label>
<select id='slt' value={select} onChange={(e)=>{const val=e.target.value;setDetailsselect(val)}}>
<option value="men">Men</option>
<option value="women">Women</option>
<option value="kids">Kids</option>
</select>
</div>


<div className='Addproductbox'>
  <label htmlFor='dc'>Category</label>
  <input id='dc' type='text' value={category}  onChange={(e)=>setDetailcategory(e.target.value)} required  />
</div>


<div className='Addproductbox'>
  <label htmlFor='di'>ID</label>
  <input id='di' type='text'  value={id}  onChange={(e)=>setDetailsid(e.target.value)} required />
</div>

<div className='Addproductbox'>
  <label htmlFor='dt'>Title</label>
  <input id='dt' type='text'  value={title} onChange={(e)=>setDetailstitle(e.target.value)} required />
</div>

<div className='Addproductbox'>
  <label htmlFor='dp'>price</label>
  <input  id='dp' type='text'  value={price}  onChange={(e)=>setDetailsprice(e.target.value)} required/>
</div>

<div className='Addproductbox'>
  <label htmlFor='db'>brand</label>
  <input id='db' type='text'  value={brand} onChange={(e)=>setDetailsbrand(e.target.value)} required  />
</div>

<div className='Addproductbox'>
  <label htmlFor='do'>Offer</label>
  <input id='do' type='text' value={offer} onChange={(e)=>setDetailsoffer(e.target.value)}  required />
</div>

<div className='Addproductbox'>
  <label htmlFor='dD'>Description</label>
  <input id='dD' type='text' value={description}  onChange={(e)=>setDetailsdescription(e.target.value)}  required/>

</div>

<div className='Addproductbox'>
  <label htmlFor='dI'>Image</label>
  <input id='dI' type='file' value={image}  onChange={(e)=>setDetailsimage((e.target.value))}  required />
</div>

  <button className='btn1'>Submit</button>


</form>
</div>

)

}