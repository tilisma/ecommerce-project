import React, { useState } from 'react'


const Product = () => { 
  const [inputValue,SetInputValue]=useState({ 
    name:"" ,
    price:"",
    category:"",
    description:"",
    actions:"",

})  
const handleChange= (e)=>{ 
    SetInputValue({  
       ...inputValue,
       [e.target.name]:e.target.value 
    }) 
}  
console.log(inputValue);  
const navigate = useNavigate();
const handledashboard =(e) =>{   
    e.preventDefault();
    axios.post("https://achyut.acetechnepal.com/login/",inputValue) 
         .then(()=>{
             navigate("/dashboard") 
             toast("Login Sucessfully")
         });
    
    
}
  return (
    <div className='container mx-auto mt-8 ml-48'>
      <table className='w-full mt-8 ml-8 mb-4 text-sm font-semibold'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Price</th>
            <th className='px-4 py-2'>Category</th>
            <th className='px-4 py-2'>Description</th>
            <th className='px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="border px-4 py-2" >Product 1</td>
              <td className="border px-4 py-2">$10.99</td>
              <td className="border px-4 py-2">Category A</td>
              <td className="border px-4 py-2">Description for Product 1</td>
              <td className="border px-4 py-2">
           
                <button className="bg-green-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mr-2">
                  Edit
                  </button>

                <button  className="bg-blue-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
                  Delete
                  </button>
                
              </td>
            </tr> 
        </tbody>
      </table>
      </div> 
  );
};

export default Product