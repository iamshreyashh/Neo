import React from 'react';

const Profile = ({ acc, net }) => {
  return (
    <div className="flex px-12 pt-30 items-start space-x-16">
      {/* Left Section - Profile + Bio (Shifted Left) */}
      <div className="flex flex-col items-center justify-end mr-16"> {/* Moved left */}
        {/* Profile Image */}
        <img
          src="public/sociall.png"
          width={200}
          height={200}
          className="rounded-full"
          alt="Profile"
        />

        {/* Bio Section */}
        <div className="mt-16 p-4 w-[300px] border border-gray-400 rounded-lg bg-gradient-to-r from-gray-600 to-black text-white shadow-lg break-words">
          <span className="font-bold">Address:</span> {acc} <br />
          <span className="font-bold">Network:</span> {net}
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="h-400 w-[2px] bg-gray-400"></div>

      {/* Right Section - Social Media Post (Added Spacing) */}
      <div className="flex flex-col items-center  ml-50"> {/* Added spacing after divider */}
        {/* Post Image */}
        <img
          src="public/shelly.jpg"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
          alt="Social Media Post"
        />

        {/* Post Caption */}
        <div className="mt-2 text-gray-700 text-center">
          <span className="font-bold">Shreyash</span>: Enjoying the Web3 world! 🚀
        </div>

        <div className="mt-6"></div>

        <img
          src="public/sociall.png"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
          alt="Social Media Post"
        />

        {/* Post Caption */}
        <div className="mt-2 text-gray-700 text-center">
          <span className="font-bold">Shreyash</span>: Enjoying the Web3 world! 🚀
        </div>

        
      </div>
    </div>
  );
};

export default Profile;