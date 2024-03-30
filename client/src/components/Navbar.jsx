/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { UserContext } from "../../context/userContext"; // Update the path to UserContext

const Navbar = ({ title }) => {
  const { user } = useContext(UserContext);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="container-fluid dark:bg-zinc-800 flex justify-between w-full rounded-2xl drop-shadow-xl dark:drop-shadow-xl mt-2 relative"
      style={{ zIndex: 999 }}
    >
      <h1 className="text-2xl font-medium text-sky-950 dark:text-zinc-50 m-5 tracking-tighter cursor-default">
        {title}
      </h1>
      <div className="flex gap-4 items-center mr-4">
        {user && (
          <p className="font-semibold text-sky-950 dark:text-zinc-50 cursor-default">
            Hi, {user.name}
          </p>
        )}
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            className="rounded-full w-16 h-16 object-cover cursor-pointer"
            src='https://images.unsplash.com/photo-1601117830731-1a36c879f666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D' // Update with actual profile picture URL
            alt="Profile"
          />
          {isHovering && user && (
            <div className="absolute flex flex-col gap-2 items-center top-20 right-0 bg-white drop-shadow-xl p-4 rounded-2xl">
              <img
                className="rounded-full w-20 h-20 object-cover cursor-pointer"
                src='https://images.unsplash.com/photo-1601117830731-1a36c879f666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D' // Use actual profile picture URL
                alt="Profile"
              />
              <p className="font-semibold text-lg">{user.name}</p>
              <p className="text-xs tracking-tight bg-sky-400 rounded-xl pl-2 pr-2 drop-shadow-md">
                {user.role}
              </p>
              <p className="text-gray-900 text-xs tracking-tight">
                {user.email}
              </p>
              <p className="text-gray-900 text-xs tracking-tight">
                {user.phone}
              </p>
              <div className="flex gap-2 m-2 cursor-pointer">
                <IoLogoLinkedin />
                <IoLogoInstagram />
                <FaSquareXTwitter />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
