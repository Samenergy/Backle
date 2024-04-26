import React, { useState, useEffect } from "react";
import './slide.css'

const Slideimages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19309949/pexels-photo-19309949/free-photo-of-portrait-of-boys-standing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8972801/pexels-photo-8972801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const paragraphs = [
    "Power up Your Friendship",
    "Together is Better",
    "Connect with the world",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-1/2 h-screen flex items-center justify-center bg-[#37af65]">
      <div className="p-20 relative w-96 -top-24 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute top-0 left-0 w-96 duration-700 transform ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } rounded-lg shadow-lg`}
          />
        ))}
        <div className="absolute top-72 text-white  w-full text-center -ml-20">
          <p id="slide" className="text-3xl font-pacifico">{paragraphs[currentIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default Slideimages;
