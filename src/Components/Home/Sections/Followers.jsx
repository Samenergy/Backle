// src/components/FollowPeopleSection.js
import React from "react";
import ProfileCard from "./ProfileCard";

const Followers = () => {
  // Dummy data for demonstration
  const accounts = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      profileImage:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      isFollowing: false, // Add isFollowing property
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      profileImage:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      isFollowing: false, // Add isFollowing property
    },
    {
      id: 3,
      name: "John Doe",
      username: "johndoe",
      profileImage:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      isFollowing: false, // Add isFollowing property
    },
    {
      id: 4,
      name: "Jane Smith",
      username: "janesmith",
      profileImage:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      isFollowing: false, // Add isFollowing property
    },
    {
      id: 5,
      name: "John Doe",
      username: "johndoe",
      profileImage:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      isFollowing: false, 
    },

    // Add more accounts as needed
  ];

  return (
    <div className="mx-auto py-4 absolute top-40 left-96 overflow-x-auto whitespace-nowrap">
      <h2 className="text-md font-semibold mb-4">Follow People</h2>
      <div className="flex space-x-4" style={{ maxWidth: "546px" }}>
        {accounts.map((account) => (
          <ProfileCard
            key={account.id}
            name={account.name}
            username={account.username}
            profileImage={account.profileImage}
            isFollowing={account.isFollowing}
          />
        ))}
      </div>
    </div>
  );
};

export default Followers;