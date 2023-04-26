import React from 'react'

import { Link,Outlet } from 'react-router-dom'

export const Addpage = () => {
 
return(
  <>
   <div>
<div className='classnav'>
<nav >
  <div className='clslink'>

  <ul>
  <li> <Link to='addposter' className='c' >Posterpage</Link></li>
  <li> <Link to='addproducts' className='f'>Productpage</Link></li>
  </ul>
   <Outlet/>
 
   </div>
 </nav>
 </div> 
 </div>
    </>
  )


}
