import React, { useState } from "react";
import Searchbar from "./rightside/Searchbar";
import Trending from "./rightside/Trending";
import Whotofollow from "./rightside/Whotofollow";

const RightSidebar = () => {
  

  return (
    <div className="absolute right-10 top-5">
      <div>
        <Searchbar/>
        {/* <Trending/> */}
        <Whotofollow/>
        
      </div>
    </div>
  );
};

export default RightSidebar;
