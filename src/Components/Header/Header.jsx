import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="flex justify-between item-center flex-wrap py-0 pt-auto mx-auto">
          <h1 className="text-ms md:text-[1.5rem] lg:text-[2.5rem] text-white font-bold">
            Kconz Shopping
          </h1>
          <ul className="hidden  lg:flex py-0 pt-auto space-x-1 items-center ">
            <Link to="/">
              <li className=" hover:bg-slate-600 p-4  hover:text-white rounded-xs">
                Home
              </li>
            </Link>
            <Link to="/products">
              <li className=" hover:bg-slate-600 p-4  hover:text-white rounded-xs">
                Products
              </li>
            </Link>
            <Link to="/about">
              <li className=" hover:bg-slate-600 p-4  hover:text-white rounded-xs">
                About
              </li>
            </Link>
            <Link to="/shopping-cart">
              <li className=" hover:bg-slate-600 p-3  hover:text-white rounded-xs">
                Shopping Cart
              </li>
            </Link>
          </ul>
          <div
            className="space-y-2 lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="block w-8 h-1 rounded-full bg-gray-600"></span>
            <span className="block w-8 h-1 rounded-full bg-gray-600"></span>
            <span className="block w-8 h-1 rounded-full bg-gray-600"></span>
          </div>
        </div>
        {isMenuOpen ? (
          <ul className="flex flex-col pt-5 lg:hidden ">
            <Link to="/">
              <li className=" hover:bg-slate-600 p-3  hover:text-white rounded-xs">
                Home
              </li>
            </Link>
            <Link to="/products">
              <li className=" hover:bg-slate-600 p-3  hover:text-white rounded-xs">
                Products
              </li>
            </Link>
            <Link to="/about">
              <li className=" hover:bg-slate-600 p-3  hover:text-white rounded-xs">
                About
              </li>
            </Link>
            <Link to="/shopping-cart">
              <li className=" hover:bg-slate-600 p-3  hover:text-white rounded-xs">
                Shopping Cart
              </li>
            </Link>
          </ul>
        ) : null}
      </nav>
    </>
  );
}

export default Header;
