import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DefaultSidebar } from "./adminComponents/sideNav";
import Dashboard from "./dashboard";
import Reviews from "./reviews";
import Reports from "./reports";
import Accounts from "./accounts";
import Settings from "./settings";
import Returns from "./returns";

const App = () => {
  return (
    <Router>
      <div
        style={{
          backgroundImage: "url('/assets/images/bgForAdmin.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex"
      >
        <DefaultSidebar />

        <section className="flex-grow p-4">
          <div className="flex items-center justify-center h-full w-full pt-20 pb-6 pr-4">
            <div className="bg-gray-100 bg-opacity-70 flex h-full w-full p-4 ">
              <Routes>
                <Route path="/admin/app" element={<Dashboard />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/reviews" element={<Reviews />} />
                <Route path="/admin/reports" element={<Reports />} />
                <Route path="/admin/returns" element={<Returns />} />
                <Route path="/admin/accounts" element={<Accounts />} />
                <Route path="/admin/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
