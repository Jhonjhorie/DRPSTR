import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminSuper from '../View/AdminSuper';
  
const AdminSuperController = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminSuper />} />
      </Routes>
  );
};

export default AdminSuperController;
