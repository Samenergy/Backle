import React, { useState } from "react";
import Searchbar from "./rightside/Searchbar";
import Trending from "./rightside/Trending";
import Whotofollow from "./rightside/Whotofollow";

const RightSidebar = () => {
  

  return (
    <div className="absolute right-0 px-5 top-5  bg-[#edf2f6]    ">
      <div>
        <Searchbar/>
        <Trending/>
        <Whotofollow/>
        
      </div>
    </div>
  );
};

export default RightSidebar;
