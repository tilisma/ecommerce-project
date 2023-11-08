import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
const navigate = useNavigate();
const handlelogin =()=>{ 
  navigate("/Login") 
}
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={Logo} alt="" />
          </div>
        </Link> 
       
       <div className="flex flex-row gap-4">
        {/* cart */} 
        <div > 
          <button onClick={handlelogin} className="bg-primary hover:bg-opacity-90 shadow-soft-2xl mr-2 flex h-8 items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5">Login</button> 
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div> 
          </div>
        </div> 
        
      </div>
    </header>
  );
};

export default Header;
