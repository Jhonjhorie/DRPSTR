// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './view/pages/Home';
import About from './view/pages/About';
import Contact from './view/pages/Contact';
import Cart from './view/pages/customer/cart'; // Import the Cart component
import Profile from './view/pages/customer/profile';
import Navbar from './view/components/Navbar';
import SubNavbar from './view/components/SubNavbarShop';
import Footer from './view/components/Footer';  

import Login from './view/pages/auth/login';
import SignUp from './view/pages/auth/signup';
import ForgotPassword from './view/pages/auth/forgotpassword';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar and SubNavbar are included at the top */}
        <Navbar />
        <SubNavbar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} /> {/* Add the Cart route */} 
            <Route path="/profile" element={<Profile />} /> {/* Add the Cart route */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>

        {/* Footer is added to the bottom of the page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
