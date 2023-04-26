import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './EditStyle.css'
export const Editpage = () => {
  return (
    <>
   <div>
<div className='classnav'>
<nav >
  <div className='clslink'>
  
  <ul>
  <li> <Link to='poster' className='c' >Posterpage</Link></li>
  <li> <Link to='products' className='f'>Productpage</Link></li>
  </ul>
   <Outlet/>
   </div>
 </nav>
 </div> 
 </div>
    </>
  )
}
