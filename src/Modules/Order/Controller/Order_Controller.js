import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../View/Home';
import Cart from '../View/Cart';
 
const HomeController = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
     </Routes>
  );
};

export default HomeController;
