import React from "react";
import { IoSearch } from "react-icons/io5";
const RightSidebar = () => {
  return (
    <div className="absolute right-40 top-5">
      <div>
        <div className="flex items-center text-md bg-white rounded-2xl shadow-lg duration-500 py-4">
          <a href="">
            <div className=" px-3 ">
              <IoSearch className="text-[#00bf63] text-xl" />
            </div>
          </a>
          <input
            type="text"
            placeholder="Search"
            className=" text-lg focus:outline-none border-none"
          />
        </div>
        <div className="bg-white rounded-2xl shadow-lg mt-10 px-5 py-4">
          <h1 className="font-semibold">What's happening</h1>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
