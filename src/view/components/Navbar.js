// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/LOGO.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="bg-purple p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center">
          <span className="text-white font-iceland text-3xl">DRP</span>
          <Logo className="h-20 w-20 mx-2" /> {/* SVG Logo */}
          <span className="text-white font-iceland text-3xl">STR</span>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-700 rounded-md p-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white rounded-l-md pr-40 p-1 outline-none"
          />
          <button className="p-2">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>

        {/* Navigation Links and Icons */}
        <div className="flex items-center space-x-5">
          <FontAwesomeIcon icon={faShoppingCart} className="text-white text-2xl cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
