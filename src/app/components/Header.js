"use client";


import React from "react";
import useScrollDirection from "./hooks/useScrollDirection"; // Import your hook

const Header = () => {
  const scrollDirection = useScrollDirection(); // Use the hook

  return (
    <div
      className={`fixed top-0 w-full h-20 bg-transparent flex justify-between items-center shadow-lg transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="pl-4">
        <h1 className="text-white text-3xl"></h1>
      </div>
      <div className="pr-4">
        <ol className="flex space-x-4 text-white text-lg">
            <a href="#home_block"> 
                <li className="hover:underline cursor-pointer">Home</li>
            </a>
            <a href="#about_block"> 
            <li className="hover:underline cursor-pointer">About</li>
            </a>

            <a href="#exp__block">
            <li className="hover:underline cursor-pointer">Experience</li>    
            </a>

            <a href="#project_block">
            <li className="hover:underline cursor-pointer">Projects</li>
            </a>
        </ol>
      </div>
    </div>
  );
};

export default Header;
