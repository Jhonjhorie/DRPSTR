// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

 
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbarShop';
import Footer from './components/Footer';  

import AdminModeratorController from './AdminModerator/Controller/Admin_Controller';
import AdminSuperController from './AdminSuper/Controller/AdminSuper_Contoller';
import LoginController from './Login/Controller/Login_Controller';
import OrderController from './Order/Controller/Order_Controller';
import ShopController from './Shop_Profile/Controller/Shop_Profile_Controller';
import UserAccountController from './User_Account/Controller/User_Account_Controller';
 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
         <Navbar />
         <SubNavbar />

         <main className="flex-grow container mx-auto p-4">
          <Routes> 
            
           <Route path="/*" element={<OrderController />} />  
           <Route path="/Login/*" element={<LoginController />} />
           <Route path="/AdminModerator/*" element={<AdminModeratorController />} />  
           <Route path="/AdminSuper/*" element={<AdminSuperController />} />
           <Route path="/Shop/*" element={<ShopController />} />  
           <Route path="/UserAccount/*" element={<UserAccountController />} />

          </Routes>
        </main>

         <Footer />
      </div>
    </Router>
  );
}

export default App;
