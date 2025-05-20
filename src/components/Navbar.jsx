import React from "react";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <nav className="bg-amber-300 flex justify-center w-full p-2">
      <div className="navbar-content w-[80%]">
        <ul className=" gap-10 uppercase font-bold hidden lg:flex">
          <li className="hover:text-gray-300">All Categories</li>
          <li className="font-normal hover:text-gray-300">Today Deals</li>
          <li className="hover:text-gray-300">Electronics</li>
          <li className="hover:text-gray-300">Clothings</li>
          <li className="hover:text-gray-300">Computers</li>
          <li className="hover:text-gray-300">Furnitures</li>
          <li className="hover:text-gray-300">Mom & Baby</li>
          <li className="hover:text-gray-300">Books & More</li>
        </ul>
        <IoMdMenu className="  lg:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
