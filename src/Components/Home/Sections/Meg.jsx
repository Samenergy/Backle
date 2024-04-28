// src/App.js
import React, { useState } from "react";
import Onyourmind from "./Onyourmind";
import PostList from "./PostList";
import Followers from "./Followers";

function Meg() {
  const [posts, setPosts] = useState([]);

  const handlePost = (post) => {
    const newPost = {
      id: Date.now(),
      text: post.text,
      attachment: post.attachment,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e1f7eb] ml-96 ">
      <Onyourmind onPost={handlePost} />
      <Followers/>
      <PostList posts={posts} />
    </div>
  );
}

export default Meg;
