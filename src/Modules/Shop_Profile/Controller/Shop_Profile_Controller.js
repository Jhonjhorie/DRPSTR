import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ShopProfile from '../View/Dashboard';
  
const ShopProfileController = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopProfile />} />
      </Routes>
  );
};

export default ShopProfileController;
