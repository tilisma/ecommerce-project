import React, { useState } from 'react'

const AddProduct = () => { 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); 
  const [description, setDescription] = useState(""); 

  const handleSubmit =(e) => { 
    e.preventDefault(); 
    console.log('Form Submitted Successfully:',{name,price, category, description});
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
  };

  return ( 
    <>
    <div className=',mt-10 mx-40 ml-48'> 
      <div className='flex gap-8'>
      <form action=''
      className='border-2 w-[50%] p-4 mt-8 ml-12 mb-4 bg-slate-100' onSubmit={handleSubmit}> 

      <div className='container'> 
        <h1 className='text-2xl text-center font-bold mb-4'> 
          Add Product
        </h1> 
        <div className='grid grid-cols-1 gap-2'>  
        <div> 
        <label htmlFor='name'>Name</label>  
        <input onChange={(e) => setName(e.target.value)} value={name} 
        className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md'type='text'name='name'placeholder='Name' required/>
         </div> 
         <div> 
          <label htmlFor="price">Price</label> 
          <input onChange={(e) => setPrice(e.target.value)} value={price} 
        className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md'type='number'name='price'placeholder='Price' required/>
         </div>
        </div> 

        <div>
          <label htmlFor="category" className='block text-sm font-semibold mb-2'>Category</label> 
          <input onChange={(e) => setCategory(e.target.value)} value={category} 
        className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md'type='text'name='category'placeholder='Category' required/> 
        </div> 
        <div>
        <label htmlFor="description" className='block text-sm font-semibold mb-2'>Description</label> 
          <input onChange={(e) => setDescription(e.target.value)} value={description} 
        className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md'type='text'name='description'placeholder='Description' required/> 
        </div>

        <div className='text-center'> 
        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-red-900 gap-4">  
        <span style={{ marginRight: "8px" }}>AddProduct</span>
           </button>
          </div>
       </div>
     </form>
   </div>
 </div> 
</>
  );
};

export default AddProduct