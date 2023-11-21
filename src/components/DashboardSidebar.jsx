import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <div className='w-48 bg-gray-300 h-screen fixed left-0 top-20'>
    <ul className='font-semibold text-lg flex flex-col gap-4 items-center'> 
   <Link to="/dashboard"><li>Home</li></Link>
   <Link to="/dashboard/product"> <li>Product</li></Link>
   <Link to="/dashboard/addproduct"><li>AddProduct</li></Link>
   <Link to="/dashboard/setting"><li>Setting</li></Link>
    </ul>
    </div>
  )
}

export default DashboardSidebar