import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";

function VerticalNavbar() {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredUsers, setIsHoveredUsers] = useState(false);
  const [isHoveredMessages, setIsHoveredMessages] = useState(false);

  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveUsers, setIsActiveUsers] = useState(false);
  const [isActiveMessages, setIsActiveMessages] = useState(false);

  const handleMouseEnterHome = () => {
    setIsHoveredHome(true);
  };

  const handleMouseLeaveHome = () => {
    setIsHoveredHome(false);
  };

  const handleMouseEnterUsers = () => {
    setIsHoveredUsers(true);
  };

  const handleMouseLeaveUsers = () => {
    setIsHoveredUsers(false);
  };

  const handleMouseEnterMessages = () => {
    setIsHoveredMessages(true);
  };

  const handleMouseLeaveMessages = () => {
    setIsHoveredMessages(false);
  };

  const handleClickHome = () => {
    setIsActiveHome(!isActiveHome);
  };

  const handleClickUsers = () => {
    setIsActiveUsers(!isActiveUsers);
  };

  const handleClickMessages = () => {
    setIsActiveMessages(!isActiveMessages);
  };

  return (
    <div className="flex border border-[#00AFEE] shadow-xl rounded-lg">
      <div className="bg-[#edf2f6] h-screen p-5 pt-8 w-[220px] duration-500 relative">
        <div>
          <img src="./src/assets/logo (1).png" className="-mt-20" />
        </div>
        <div className="pt-[50px] px-8 font-semibold text-md flex flex-col justify-between items-left text-[16px]">
          <a href="/">
            <div
              className={`${
                isActiveHome || isHoveredHome
                  ? "rounded-lg shadow-xl bg-white text-[#00bf63] border border-[#ffffff]"
                  : ""
              } duration-500 flex items-center -ml-14 w-[225px] px-5 py-2`}
              onMouseEnter={handleMouseEnterHome}
              onMouseLeave={handleMouseLeaveHome}
              onClick={handleClickHome}
            >
              <GoHomeFill className="text-3xl w-auto mr-2.5" />
              <h1 className="text-2xl">Home</h1>
            </div>
          </a>
          <a href="/">
            <div
              className={`${
                isActiveUsers || isHoveredUsers
                  ? "rounded-lg shadow-xl bg-white text-[#00bf63] border border-[#ffffff]"
                  : ""
              } duration-500 flex items-center -ml-14 w-[225px] px-5 py-2`}
              onMouseEnter={handleMouseEnterUsers}
              onMouseLeave={handleMouseLeaveUsers}
              onClick={handleClickUsers}
            >
              <FaSearch className="text-3xl w-auto mr-2.5" />
              <h1 className="text-2xl">Search</h1>
            </div>
          </a>
          <a href="/">
            <div
              className={`${
                isActiveMessages || isHoveredMessages
                  ? "rounded-lg shadow-xl bg-white text-[#00bf63] border border-[#ffffff]"
                  : ""
              } duration-500 flex items-center -ml-14 w-[225px] px-5 py-2 mt-20`}
              onMouseEnter={handleMouseEnterMessages}
              onMouseLeave={handleMouseLeaveMessages}
              onClick={handleClickMessages}
            >
              <MdOutlineExplore className="text-3xl w-auto mr-2.5 " />
              <h1 className="text-2xl">Explore</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VerticalNavbar;
