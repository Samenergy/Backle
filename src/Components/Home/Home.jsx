import React from "react";
import VerticalNavbar from "../Dashbars/VerticalNavbar";
import HorizontalNavbar from "../Dashbars/HorizontalNavbar";
import RightSidebar from "../Dashbars/RightSidebar";
import Meg from "./Sections/Meg";

const Home = () => {
  return (
    <div className="flex  px-20 ">
      <VerticalNavbar />
      <div className=" flex items-center gap-10  ">
        <HorizontalNavbar />
        <RightSidebar />
      </div>
      <Meg />
    </div>
  );
};

export default Home;
