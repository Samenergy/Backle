import React, { useState } from "react";
import Searchbar from "./rightside/Searchbar";
import Trending from "./rightside/Trending";
import Whotofollow from "./rightside/Whotofollow";

const RightSidebar = () => {
  

  return (
    <div className="absolute right-0 pr-20 top-0 pt-5  bg-[#e1f7eb]    ">
      <div>
        <Searchbar/>
        <Trending/>
        <Whotofollow/>
        
      </div>
    </div>
  );
};

export default RightSidebar;
