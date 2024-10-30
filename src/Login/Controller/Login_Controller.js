import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Login from '../View/login';
import SignUp from '../View/signup';
import ForgotPassword from '../View/forgotpassword';
 
 
const HomeController = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      
     </Routes>
  );
};

export default HomeController;
