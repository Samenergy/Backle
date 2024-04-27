import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="flex items-center text-md bg-white rounded-2xl shadow-lg duration-500 py-4">
      <a href="">
        <div className="px-3">
          <IoSearch className="text-[#00bf63] text-xl" />
        </div>
      </a>
      <input
        type="text"
        placeholder="Search"
        className="text-lg focus:outline-none border-none"
      />
    </div>
  );
};

export default Searchbar;
