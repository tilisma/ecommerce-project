import React from 'react'
import { Route, Routes} from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardFooter from '../components/DashboardFooter';
import Product from './dashboard/Product';
import AddProduct from './dashboard/AddProduct';
import Home from './dashboard/Home';
import Setting from './dashboard/Setting';

const Dashboard = () => {   
 
  toast("Logout Sucessfully")
    
  
  return ( 
   <>
      <DashboardHeader/> 
      <Routes> 
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/product" element={<Product/>}></Route> 
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/Setting" element={<Setting/>}></Route>
      </Routes> 
      <DashboardSidebar/> 
      <DashboardFooter/> 

     
       </>
  ) 
  }


export default Dashboard