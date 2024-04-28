import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { BsEmojiFrown } from "react-icons/bs";

const Trending = () => {
  const [dropdowns, setDropdowns] = useState(Array(4).fill(false));

  const handleDropdownToggle = (index, event) => {
    event.preventDefault();
    setDropdowns(dropdowns.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg mt-5 px-5 pt-4">
      <h1 className="font-semibold pb-4 border-b-2">Trending</h1>
      {/* Your trend items */}
      {trendItems.map((item, index) => (
        <a href={item.href} key={index} className="">
          <div className="flex  items-center pt-4 pb-4 border-b-2  justify-between  ">
            {/* Your trend item content */}
            <div>
              <p className="text-xs text-gray-400">{item.type}-Trending</p>
              <p className="text-sm font-bold">{item.hashtag}</p>
              <p className="text-xs text-gray-400">{item.posts} Posts</p>
            </div>
            <div className="relative -top-3">
              <button
                onClick={() => handleDropdownToggle(index, event)}
                className="cursor-pointer border rounded-lg bg-gray-100 p-[1.5px] "
                aria-label="Toggle dropdown"
              >
                <SlOptionsVertical />
              </button>

              {dropdowns[index] && (
                <div className="absolute text-sm bg-white shadow-md py-2 mt-2 w-72 right-0 transition duration-300 transform origin-top-right -translate-y-2">
                  <a
                    href="#"
                    className=" flex items-center block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    <BsEmojiFrown className="mr-2" /> Not interested in This
                  </a>
                  <a
                    href="#"
                    className="flex items-center block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    <BsEmojiFrown className="mr-2" /> This Trend is harmful or
                    spammy
                  </a>
                </div>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

const trendItems = [
  {
    href: "",
    type: 'Sport',
    hashtag: "#Arsenal",
    posts: "30.3K",
  },
  {
    href: "",
    type: 'Rwanda',
    hashtag: "Paul Kagame",
    posts: "154.2K",
  },
  {
    href: "",
    type: 'Music',
    hashtag: "Drake",
    posts: "60.5K",
  },
  {
    href: "",
    type: 'Technology',
    hashtag: "Elon Musk",
    posts: "189K",
  },
];

export default Trending;