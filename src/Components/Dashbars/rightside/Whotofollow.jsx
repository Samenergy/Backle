import React, { useState, useEffect } from "react";

// Dummy data representing users
const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    profileImage:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
    isFollowing: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    profileImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
    isFollowing: false,
  },
  {
    id: 38,
    name: "Julian Sutton",
    username: "@juliansutton",
    profileImage:
      "https://images.pexels.com/photos/1642161/pexels-photo-1642161.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
    isFollowing: false,
  },
  // Add more dummy user objects as needed
];

const Whotofollow = () => {
  const [users, setUsers] = useState(dummyUsers);

  useEffect(() => {
    // Set the dummy data when the component mounts
    setUsers(dummyUsers);
  }, []); // Empty dependency array to ensure useEffect runs only once when the component mounts

  const handleFollowClick = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <div className="flex flex-col items-start bg-white rounded-2xl shadow-lg duration-500 py-4 px-6 mt-5">
      <h1 className="text-lg font-semibold mb-4">Who to Follow</h1>
      <div className="flex flex-col gap-4 ">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between hover:bg-slate-100"
          >
            <a href="#" className="flex items-center gap-2">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-gray-500">@{user.username}</p>
              </div>
            </a>
            <button
              className="bg-[#00bf63] text-white px-4 py-1 rounded-lg  "
              onClick={() => handleFollowClick(user.id)}
            >
              {user.isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whotofollow;
