// src/components/PostList.js
import React from "react";

const PostList = ({ posts }) => {
  return (
    <div className=" w-[546px] bg-[#e1f7eb] rounded-2xl shadow-lg duration-500 mt-12 absolute top-44 left-96">
      {posts.map((post) => (
        <div key={post.id} className="p-4 my-2 bg-white rounded-2xl shadow-lg duration-500">
          <p>{post.text}</p>
          {post.attachment && (
            <div className="mt-2">
              {post.attachment.type.includes("image") ? (
                <img
                  src={URL.createObjectURL(post.attachment)}
                  alt="Attached Image"
                  className="max-w-full h-auto"
                />
              ) : (
                <video
                  src={URL.createObjectURL(post.attachment)}
                  controls
                  className="max-w-full"
                ></video>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
