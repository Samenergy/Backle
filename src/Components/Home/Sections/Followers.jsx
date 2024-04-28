// src/components/FollowPeopleSection.js
import React from "react";
import ProfileCard from "./ProfileCard";

const FollowPeopleSection = () => {
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
    // Add more accounts as needed
  ];

  return (
    <div className="container mx-auto py-4 absolute top-40 left-96">
      <h2 className="text-md font-semibold mb-4">Follow People</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {accounts.map((account) => (
          <ProfileCard
            key={account.id}
            name={account.name}
            username={account.username}
            profileImage={account.profileImage}
            isFollowing={account.isFollowing} // Pass isFollowing to ProfileCard component
          />
        ))}
      </div>
    </div>
  );
};

export default FollowPeopleSection;
