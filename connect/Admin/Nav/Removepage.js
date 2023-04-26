import React from 'react'
//import './Removestyle.css'
export const Removepage = () => {
  return (
    <div >
     
      <form >
      <div className="box">
      <h1>DELETE THE PRODUCT</h1>
   
      <label>ENTER THE ID</label>
      <input type="text" placeholder='enter the id' />
    
     
<label>or</label>

     <label>ENTER THE TITLE</label>
      <input type="text" placeholder="Enter the Title"  />
    
      <label>or</label>

<label>ENTER THE Poster</label>
 <input type="text" placeholder="Enter the Title"  />

 <label>or</label>

<label>ENTER THE div1</label>
 <input type="text" placeholder="Enter the Title"  />


     <button className='btn'>DELETE</button>
     </div>     
       </form>
      
       
    </div>
  )
}
