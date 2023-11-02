import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { TbSlash } from "react-icons/tb";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header id="header" className="w-full font-monos flex items-center justify-between p-4 lg:px-24 lg:py-4 text-emerald-400 bg-cyan-950 shadow-lg">
      <a href="#home" className="group hover:bg-emerald-400 hover:cursor-pointer duration-150 flex items-center border-2 border-emerald-400 rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl p-2">
        <FaLessThan className="h-4 w-4 group-hover:text-cyan-950" />
        <span className="text-xl self-start font-semibold ml-1 group-hover:text-cyan-950">
          ITQUAN
        </span>
        <TbSlash className="h-6 w-6 group-hover:text-cyan-950" />
        <FaGreaterThan className="h-4 w-4 group-hover:text-cyan-950" />
      </a>
      <button
        className="lg:hidden text-white text-3xl cursor-pointer"
        onClick={toggleMobileMenu}
      >
        &#8801;
      </button>
      <ul className={`lg:flex items-center gap-12 ${mobileMenuOpen ? "flex flex-col w-full h-screen" : "hidden"} lg:block`}>
        <a href="#home" className="group flex gap-1 font-semibold" >
          <span className="group-hover:cursor-pointer">01.</span>
          <span className="text-white group-hover:text-emerald-400 group-hover:cursor-pointer duration-150">
            Home
          </span>
        </a>
        <a href="#about" className="group flex gap-1 font-semibold">
          <span className="group-hover:cursor-pointer">02.</span>
          <span className="text-white group-hover:text-emerald-400 cursor-pointer duration-150">
            About
          </span>
        </a>
        <a href="#work" className="group flex gap-1 font-semibold">
          <span className="group-hover:cursor-pointer">03.</span>
          <span className="text-white group-hover:text-emerald-400 cursor-pointer duration-150">
            Work
          </span>
        </a>
        <a href="#contact" className="group flex gap-1 font-semibold">
          <span className="group-hover:cursor-pointer">04.</span>
          <span className="text-white group-hover:text-emerald-400 cursor-pointer duration-150">
            Contact
          </span>
        </a>
      </ul>
    </header>
  );
};

export default Header;
