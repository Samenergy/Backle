import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./Components/Login/Landingpage";
import Signup from "./Components/Login/Parts/Signup";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-[#e1f7eb] z-[-1]"></div>
      <div className="relative z-10">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Landingpage />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
