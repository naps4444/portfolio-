import React, { useState } from "react";
import logo from "./../assets/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] text-[#1C1E53] w-11/12 md:w-full container mx-auto font-roboto py-4 lg:py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="text-xl font-bold" />
          <h1 className="font-bold text-2xl text-[#394149]">AgbaDev,</h1>
        </div>

        <div className="hidden md:flex md:space-x-4 md:items-center">
          <a href="#" className="block px-4 py-2 md:py-0 hover:text-[#5E3BEE]">
            Home
          </a>
          <a href="#" className="block px-4 py-2 md:py-0 hover:text-[#5E3BEE]">
          Portfolio
          </a>
          <a href="#" className="block px-4 py-2 md:py-0 hover:text-[#5E3BEE]">
          About me
          </a>
          <a href="#" className="block px-4 py-2 md:py-0 hover:text-[#5E3BEE]">
          Testimonials
          </a>
        </div>

        <div className="hidden md:block">
          <button className="py-3 px-5 border border-[#5E3BEE] rounded text-[#5E3BEE]  hover:bg-[#5E3BEE] hover:text-white">
            Contact Me
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none ml-auto">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 ">
          <a href="#" className="block px-4 py-2 hover:text-[#5E3BEE]">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:text-[#5E3BEE]">
          Portfolio
          </a>
          <a href="#" className="block px-4 py-2 hover:text-[#5E3BEE]">
          About me
          </a>
          <a href="#" className="block px-4 py-2 hover:text-[#5E3BEE]">
          Testimonials
          </a>
          <button className="block w-[130px] py-3 px-5 rounded text-[#5E3BEE] border border-[#5E3BEE] text-left hover:bg-[#5E3BEE] hover:text-white">
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
