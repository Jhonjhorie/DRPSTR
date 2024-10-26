// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
      <nav className="bg-darkpurple p-1 py-2">
        <div className="container mx-auto flex justify-center">  
          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-white">About</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
