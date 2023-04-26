import React from 'react'
//import './Adminnavbar.css'
import { Link } from 'react-router-dom'
import {HouseLine,PlusCircle,MinusCircle,PenNib,UsersThree,Truck} from 'phosphor-react'
export const AdminNavbar = () => {
  return (
    <div className='classnavbar'>
      <nav>
    <div className='classlink'>
            <Link to='/' className='a' ><HouseLine size={25}/>Home</Link>
            <Link to='/add' className='b' ><PlusCircle size={20} />Add</Link>
            <Link to='/edit' className='g' ><PenNib size={20} />Edit</Link>
            <Link to='/delete' className='d' ><MinusCircle size={20} />Delete</Link>
            <Link to='/customerdetails' className='e'  ><UsersThree size={32} />Customer Details</Link>
            <Link to='/ordermanagement' className='f' ><Truck size={32} />Order Management</Link>
           
            </div>     
      </nav>  
     
     </div>
  )
}
