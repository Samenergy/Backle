import React from "react";
const HorizontalNavbar = () => {
  return (
    <div className="fixed left-96 top-5 bg-[#edf2f6] z-50 ">
      <div className="flex justify-center  text-md bg-white rounded-2xl shadow-lg duration-500">
        <a
          class="w-[182px] border border-l-[#ffffff] border-r-[#e9ecee] px-16 py-4 transition duration-500  hover:border-b-4 hover:border-b-[#00bf63]"
          href=""
        >
          FEED
        </a>
        <a
          class="w-[182px] border border-r-[#e9ecee] py-4 px-16 transition duration-500  hover:border-b-4 hover:border-b-[#00bf63]"
          href=""
        >
          PEOPLE
        </a>
        <a
          class="w-[182px] px-14 py-4 transition duration-500  hover:border-b-4 hover:border-b-[#00bf63]"
          href=""
        >
          TRENDING
        </a>
      </div>
      
    </div>
  );
};

export default HorizontalNavbar;
