import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { BsEmojiFrown } from "react-icons/bs";

const Trending = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = (e) => {
    e.preventDefault(); // Prevents the default behavior (page refresh)
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg mt-5 px-5 pt-4">
      <h1 className="font-semibold pb-4 border-b-2">Trending</h1>
      <a href="" className="">
        <div className="flex gap-2 items-center pt-4 pb-4 border-b-2">
          <div>
            <p className="text-xs text-gray-400">Celebrity's Birthday</p>
            <p className="text-sm font-bold">Happy Birthday, Lizzo</p>
            <p className="text-xs text-gray-700">Trending with</p>
            <p className="text-sm text-[#00bf63]">#happybirthday</p>
          </div>
          <div className="w-20">
            <img
              className="rounded-2xl"
              src="https://www.famousbirthdays.com/faces/jefferson-melissa-image.jpg"
              alt=""
            />
          </div>
        </div>
      </a>
      <a href="" className="">
        <div className="flex gap-2 items-center pt-4 pb-4 border-b-2 gap-x-40 ">
          <div>
            <p className="text-sm font-bold">#Arsenal</p>
            <p className="text-xs text-gray-400">30.3K Posts</p>
          </div>
          <div className="relative-top-3">
            <button
              onClick={handleDropdownToggle}
              className="cursor-pointer border rounded-lg bg-gray-100 p-[1.5px] "
              aria-label="Toggle dropdown"
            >
              <SlOptionsVertical />
            </button>

            {isOpen && (
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
      <a href="" className="">
        <div className="flex  items-center pt-4 pb-4 border-b-2 gap-x-11">
          <div>
            <p className="text-xs text-gray-400">Trending in Rwanda</p>
            <p className="text-sm font-bold w-44">Paul Kagame</p>
            <p className="text-sm text-[#00bf63]">#news</p>
          </div>
          <div className="relative -top-3">
            <button
              onClick={handleDropdownToggle}
              className="cursor-pointer border rounded-lg bg-gray-100 p-[1.5px] "
              aria-label="Toggle dropdown"
            >
              <SlOptionsVertical />
            </button>

            {isOpen && (
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
      <a href="" className="">
        <div className="flex  items-center pt-4 pb-4 border-b-2 gap-x-11">
          <div>
            <p className="text-xs text-gray-400">Music-Trending </p>
            <p className="text-sm font-bold w-44">Drake</p>
            <p className="text-sm text-[#00bf63]">60.5K posts</p>
          </div>
          <div className="relative -top-3">
            <button
              onClick={handleDropdownToggle}
              className="cursor-pointer border rounded-lg bg-gray-100 p-[1.5px] "
              aria-label="Toggle dropdown"
            >
              <SlOptionsVertical />
            </button>

            {isOpen && (
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
      <a href="" className="">
        <div className="flex  items-center pt-4 pb-4 border-b-2 gap-x-11">
          <div>
            <p className="text-xs text-gray-400">Technology-Trending </p>
            <p className="text-sm font-bold w-44">Elon Musk</p>
            <p className="text-sm text-[#00bf63]">189K posts</p>
          </div>
          <div className="relative -top-3">
            <button
              onClick={handleDropdownToggle}
              className="cursor-pointer border rounded-lg bg-gray-100 p-[1.5px] "
              aria-label="Toggle dropdown"
            >
              <SlOptionsVertical />
            </button>

            {isOpen && (
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
      <a href="">
      <div className="flex  items-center pt-2   pb-2  text-[#00bf63] hover:bg-slate-100">
        Show more
        </div>
      </a>
    </div>
  );
};

export default Trending;
