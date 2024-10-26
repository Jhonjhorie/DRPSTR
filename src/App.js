// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './view/pages/Home';
import About from './view/pages/About';
import Contact from './view/pages/Contact';
import Navbar from './view/components/Navbar';
import SubNavbar from './view/components/SubNavbarShop';
import Footer from './view/components/Footer';  

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
          </Routes>
        </main>

        {/* Footer is added to the bottom of the page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
