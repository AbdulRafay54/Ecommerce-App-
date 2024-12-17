import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold text-white">
          <Link to="/">MyShop</Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <img
            src="https://www.shareicon.net/data/512x512/2017/05/09/885755_list_512x512.png"
            alt="Menu Icon"
            className="w-8 h-8"
          />
        </button>

        <div className="hidden md:flex space-x-8">
          <Link
            className="text-gray-300 hover:text-white text-lg transition duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-300 hover:text-white text-lg transition duration-300"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-gray-300 hover:text-white text-lg transition duration-300"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-gray-300 hover:text-white text-lg transition duration-300"
            to="/product"
          >
            Product
          </Link>
        </div>
      </div>

      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4`}
      >
        <Link
          className="block text-gray-300 hover:text-white text-lg py-2"
          to="/"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          className="block text-gray-300 hover:text-white text-lg py-2"
          to="/about"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className="block text-gray-300 hover:text-white text-lg py-2"
          to="/contact"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <Link
          className="block text-gray-300 hover:text-white text-lg py-2"
          to="/product"
          onClick={toggleMenu}
        >
          Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
