// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
      <nav className="bg-darkpurple p-1 py-2">
        <div className="container mx-auto flex justify-center">  
          <div className="flex items-center space-x-4">
             
            <Link to="/Login/SignUp" className="text-white">Sign Up</Link>
            <Link to="/Login" className="text-white">Login</Link>
           </div>
        </div>
      </nav>
    );
  }

export default Navbar;
