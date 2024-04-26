import React from "react";

const HorizontalNavbar = () => {
  return (
    <div className="fixed left-96 top-5">
      <div className="flex justify-center w-[500px] text-lg bg-white ">
        <a className="border border-r-black px-10" href="">FEED</a>
        <a className="border border-r-black px-10 " href="">PEOPLE</a>
        <a className="border  px-10 "  href="">TRENDING</a>
      </div>
    </div>
  );
};

export default HorizontalNavbar;
