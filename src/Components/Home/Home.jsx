import React from "react";
import VerticalNavbar from "../Dashbars/VerticalNavbar";
import HorizontalNavbar from "../Dashbars/HorizontalNavbar";
import RightSidebar from "../Dashbars/RightSidebar";

const Home = () => {
  return (
    <div className="flex px-10">
      <VerticalNavbar />
      <div className=" flex items-center gap-10  ">
        <HorizontalNavbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
