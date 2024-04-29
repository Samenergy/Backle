// src/components/Onyourmind.js
import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Onyourmind = ({ onPost }) => {
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAttachment = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  const handlePost = () => {
    if (text.trim() !== "") {
      onPost({ text, attachment });
      setText("");
      setAttachment(null);
    }
  };
  const handlePostAndCloseModal = () => {
    handlePost(); // Call handlePost function
    closeModal(); // Call closeModal function
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg duration-500 w-[546px] py-2 px-4 absolute top-28 left-96 ">
      <div className="flex items-center justify-between  ">
        <FaUserCircle className="text-[#00bf63] text-3xl mr-3" />
        <input
          type="text"
          className="w-full border  border-none focus:outline-none focus:ring-0 focus:ring-[#00bf63]"
          placeholder="What's on your mind?"
          value={text}
          onChange={handleChange}
          onClick={openModal}
        />
        <FaCirclePlus
          className="text-[#00bf63] text-3xl cursor-pointer hover:text-[#b0ebce] mr-2 ml-4 duration-500"
          onClick={openModal}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
            <textarea
              className="w-full h-24 p-2 mb-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#00bf63]"
              placeholder="What's on your mind?"
              value={text}
              onChange={handleChange}
            ></textarea>
            <input
              type="file"
              accept="image/*, video/*"
              className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleAttachment}
            />
            <div className="flex items-center gap-5 ">
              <button
                className="w-1/4 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="w-1/4 px-4 py-2 text-white bg-[#00bf63] rounded-md hover:bg-[[#00bf63]] focus:outline-none"
                onClick={handlePostAndCloseModal}
                
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onyourmind;
