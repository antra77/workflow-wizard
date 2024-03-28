/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = ({ title }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="container-fluid dark:bg-zinc-800 flex justify-between w-full rounded-2xl drop-shadow-xl dark:drop-shadow-xl mt-2 relative" style={{ zIndex: 999 }}>
      <h1 className="text-2xl font-medium text-sky-950 dark:text-zinc-50 m-5 tracking-tighter cursor-default">
        {title}
      </h1>
      <div className="flex gap-4 items-center mr-4">
        <p className="font-semibold text-sky-950 dark:text-zinc-50 cursor-default">Hi, Sarah</p>
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            className="rounded-full w-16 h-16 object-cover cursor-pointer"
            src="https://images.unsplash.com/photo-1601117830731-1a36c879f666?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pic"
          />
          {isHovering && (
            <div className="absolute flex flex-col gap-2 items-center top-20 right-0 bg-white drop-shadow-xl p-4 rounded-2xl">
              {/*can be edited later */}
              <img
                className="rounded-full w-20 h-20 object-cover cursor-pointer"
                src="https://images.unsplash.com/photo-1601117830731-1a36c879f666?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="pic"
              />
              <p className="font-semibold text-lg">Sarah Parker</p>
              <p className="text-xs tracking-tight bg-sky-400 rounded-xl pl-2 pr-2 drop-shadow-md">
                Project manager
              </p>
              <p className="text-gray-900 text-xs tracking-tight">
                sarah@mail.com
              </p>
              <p className="text-gray-900 text-xs tracking-tight">9874563211</p>
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
