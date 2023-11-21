import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import { ToastContainer, toast } from 'react-toastify'


const Login = () => {  
const [inputValue,SetInputValue]=useState({ 
    username:"" ,
    password:"",
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
    <div>
        <section className="bg-[#F3F4F5] ">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full mt-10 bg-white rounded-lg shadow  md:mt-10 sm:max-w-md xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                    Admin Login
                                </h1>
                                <form onSubmit={handledashboard} 
                                    
                                    className="space-y-4 md:space-y-6"
                                    action="#"
                                >
                                    <div>
                                        <label
                                            htmlFor="username"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Your Username
                                        </label>
                                        <input value={inputValue.username} onChange={handleChange}
                                            
                                           
                                            required
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input value={inputValue.password} onChange={handleChange} 
                                                
                                                
                                                type='password'
                                                required
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                            />
                                        </div>
                                    </div>
                                    <button 
                                        type="submit "  
                                        className=" py-5  bg-primary hover:bg-opacity-90 shadow-soft-2xl mr-2 flex h-8 items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  "
                                    >
                                       Login
                                    </button> 
                                    <ToastContainer /> 
                            
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Login