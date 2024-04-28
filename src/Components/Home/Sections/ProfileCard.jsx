import React, { useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const ProfileCard = ({ name, username, profileImage }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };

  return (
    <div className="flex flex-col items-center rounded-xl bg-white shadow  py-4  ">
      <a href="">
        <img
          src={profileImage}
          alt={username}
          className="w-16 h-16 rounded-full"
        />
        <RiVerifiedBadgeFill className="absolute top-[300px] text-[#00bf63] ml-6 text-xl" />
        <div className="my-2">
          <h2 className="text-md font-semibold">{name}</h2>
          <p className="text-xs text-gray-400">@{username}</p>
        </div>
      </a>
      <button
        className={`px-4 py-1 duration-700 rounded-lg ${
          isFollowing
            ? "bg-[#00bf63] border-[#00bf63] text-white"
            : "bg-white  border border-[#00bf63] text-[#00bf63]"
        }`}
        onClick={handleFollowClick}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default ProfileCard;
