import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";


function VerticalNavbar() {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredSearch, setIsHoveredSearch] = useState(false);
  const [isHoveredExplore, setIsHoveredExplore] = useState(false);
  const [isHoveredMessages, setIsHoveredMessages] = useState(false);
  const [isHoveredNotifications, setIsHoveredNotifications] = useState(false);
  const [isHoveredProfile, setIsHoveredProfile] = useState(false);
  const [isHoveredSettings, setIsHoveredSettings] = useState(false);
  const [isHoveredLogout, setIsHoveredLogout] = useState(false);

  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isActiveExplore, setIsActiveExplore] = useState(false);
  const [isActiveMessages, setIsActiveMessages] = useState(false);
  const [isActiveNotifications, setIsActiveNotifications] = useState(false);
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const [isActiveSettings, setIsActiveSettings] = useState(false);
  const [isActiveLogout, setIsActiveLogout] = useState(false);

  const handleMouseEnterHome = () => {
    setIsHoveredHome(true);
  };

  const handleMouseLeaveHome = () => {
    setIsHoveredHome(false);
  };

  const handleMouseEnterSearch = () => {
    setIsHoveredSearch(true);
  };

  const handleMouseLeaveSearch = () => {
    setIsHoveredSearch(false);
  };

  const handleMouseEnterExplore = () => {
    setIsHoveredExplore(true);
  };

  const handleMouseLeaveExplore = () => {
    setIsHoveredExplore(false);
  };

  const handleMouseEnterMessages = () => {
    setIsHoveredMessages(true);
  };

  const handleMouseLeaveMessages = () => {
    setIsHoveredMessages(false);
  };

  const handleMouseEnterNotifications = () => {
    setIsHoveredNotifications(true);
  };

  const handleMouseLeaveNotifications = () => {
    setIsHoveredNotifications(false);
  };

  const handleMouseEnterProfile = () => {
    setIsHoveredProfile(true);
  };

  const handleMouseLeaveProfile = () => {
    setIsHoveredProfile(false);
  };

  const handleMouseEnterSettings = () => {
    setIsHoveredSettings(true);
  };

  const handleMouseLeaveSettings = () => {
    setIsHoveredSettings(false);
  };

  const handleMouseEnterLogout = () => {
    setIsHoveredLogout(true);
  };

  const handleMouseLeaveLogout = () => {
    setIsHoveredLogout(false);
  };

  const handleClickHome = () => {
    setIsActiveHome(!isActiveHome);
  };

  const handleClickSearch = () => {
    setIsActiveSearch(!isActiveSearch);
  };

  const handleClickExplore = () => {
    setIsActiveExplore(!isActiveExplore);
  };

  const handleClickMessages = () => {
    setIsActiveMessages(!isActiveMessages);
  };

  const handleClickNotifications = () => {
    setIsActiveNotifications(!isActiveNotifications);
  };

  const handleClickProfile = () => {
    setIsActiveProfile(!isActiveProfile);
  };

  const handleClickSettings = () => {
    setIsActiveSettings(!isActiveSettings);
  };

  const handleClickLogout = () => {
    setIsActiveLogout(!isActiveLogout);
  };

  return (
    <div className="flex w-[250px]  ">
      <div className="bg-[#edf2f6] h-screen p-5 pt-8 w-[220px] duration-500 relative">
        <div>
          <img src="./src/assets/logo (1).png" className="-mt-20" />
        </div>
        <div className=" px-8 font-semibold  flex flex-col justify-between items-left -mt-5">
          <a href="/home">
            <div
              className={`${
                isActiveHome || isHoveredHome
                  ? "rounded-lg shadow-xl bg-white border border-[#ffffff]"
                  : "rounded-lg shadow-xl bg-white border border-[#ffffff]"
              } duration-500 flex items-center -ml-10 w-[225px] px-5 py-2`}
              onMouseEnter={handleMouseEnterHome}
              onMouseLeave={handleMouseLeaveHome}
              onClick={handleClickHome}
            >
              <GoHomeFill className="text-2xl w-auto mr-2.5" />
              <h1 className="text-xl">Home</h1>
            </div>
          </a>
          <a href="/">
            <div
              className={`${
                isActiveSearch || isHoveredSearch
                  ? "rounded-lg shadow-xl bg-white  text-gray-950"
                  : ""
              } duration-500 flex items-center -ml-9 w-[225px] px-5 py-2 mt-2 text-[#b1b8be] `}
              onMouseEnter={handleMouseEnterSearch}
              onMouseLeave={handleMouseLeaveSearch}
              onClick={handleClickSearch}
            >
              <IoSearch className="text-xl w-auto mr-3" />
              <h1 className="text-xl">Search</h1>
            </div>
          </a>
          <a href="/">
            <div
              className={`${
                isActiveExplore || isHoveredExplore
                  ? "rounded-lg shadow-xl bg-white  text-gray-950"
                  : ""
              } duration-500 flex items-center -ml-10 w-[225px] px-5 py-2 mt-2 text-[#b1b8be] `}
              onMouseEnter={handleMouseEnterExplore}
              onMouseLeave={handleMouseLeaveExplore}
              onClick={handleClickExplore}
            >
              <MdOutlineExplore className="text-2xl w-auto mr-2" />
              <h1 className="text-xl">Explore</h1>
            </div>
          </a>
          <a href="/">
            <div
              className={`${
                isActiveMessages || isHoveredMessages
                  ? "rounded-lg shadow-xl bg-white  text-gray-950"
                  : ""
              } duration-500 flex items-center -ml-10 w-[225px] px-5 py-2 mt-2 text-[#b1b8be] `}
              onMouseEnter={handleMouseEnterMessages}
              onMouseLeave={handleMouseLeaveMessages}
              onClick={handleClickMessages}
            >
              <TbMessageCircle2 className="text-2xl w-auto mr-2" />
              <h1 className="text-xl">Messages</h1>
            </div>
          </a>
          <a href="/">
            <div
              className={`${
                isActiveNotifications || isHoveredNotifications
                  ? "rounded-lg shadow-xl bg-white  text-gray-950"
                  : ""
              } duration-500 flex items-center -ml-10 w-[225px] px-5 py-2 mt-2 text-[#b1b8be] `}
              onMouseEnter={handleMouseEnterNotifications}
              onMouseLeave={handleMouseLeaveNotifications}
              onClick={handleClickNotifications}
            >
              <FaRegBell className="text-2xl w-auto mr-2" />
              <h1 className="text-xl">Notifications</h1>
            </div>
          </a>
          
          <a href="/">
            <div
              className={`${
                isActiveSettings || isHoveredSettings
                  ? "rounded-lg shadow-xl bg-white  text-gray-950"
                  : ""
              } duration-500 flex items-center -ml-10 w-[225px] px-5 py-2 mt-2 text-[#b1b8be] `}
              onMouseEnter={handleMouseEnterSettings}
              onMouseLeave={handleMouseLeaveSettings}
              onClick={handleClickSettings}
            >
              <IoIosSettings className="text-2xl w-auto mr-2" />
              <h1 className="text-xl">Settings</h1>
            </div>
          </a>
          <a href="/">
            <div
              className={`${
                isActiveProfile || isHoveredProfile
                  ? "rounded-lg shadow-xl bg-white  text-gray-950"
                  : ""
              } duration-500 flex items-center -ml-10 w-[225px] px-5 py-2 mt-2 text-[#b1b8be] `}
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
              onClick={handleClickProfile}
            >
              <FaUserCircle className="text-2xl w-auto mr-2" />
              <h1 className="text-xl">Profile</h1>
            </div>
          </a>
          <Link to="/login">
            <div
              className={`${
                isActiveLogout || isHoveredLogout
                  ? "rounded-lg shadow-xl bg-white  text-gray-950"
                  : ""
              } duration-500 flex items-center -ml-10 w-[225px] px-5 py-2 mt-2 text-[#b1b8be] `}
              onMouseEnter={handleMouseEnterLogout}
              onMouseLeave={handleMouseLeaveLogout}
              onClick={handleClickLogout}
            >
              <FiLogOut className="text-2xl w-auto mr-2" />
              <h1 className="text-xl">Log out</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VerticalNavbar;
