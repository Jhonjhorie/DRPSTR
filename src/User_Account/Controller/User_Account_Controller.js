import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Profile from '../View/profile';
  
const UserController = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      </Routes>
  );
};

export default UserController;
