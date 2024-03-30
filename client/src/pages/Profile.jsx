import React, { useContext } from "react";
import { UserContext } from "../../context/userContext"; // Update the path to UserContext
import { Navbar } from "../components/index";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex container-fluid gap-1 dark:bg-zinc-900">
      <Sidebar />
      <div className="container-fluid bg-zinc-50 dark:bg-zinc-800 w-full h-screen m-2 rounded-2xl drop-shadow-xl">
        <Navbar title="Profile" />
        <div className="p-4">
          {user ? (
            <div className="bg-zinc-50 dark:bg-zinc-700 drop-shadow-md rounded-2xl flex flex-col justify-center items-center gap-5 p-10">
              <h2 className="text-2xl text-sky-950 dark:text-zinc-50 font-semibold mb-8">
                Profile Information
              </h2>
              <img
                className="rounded-full w-40 h-40 object-cover"
                src="https://images.unsplash.com/photo-1601117830731-1a36c879f666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="User Profile"
              />
              <div className="flex flex-col gap-5 mt-8 dark:text-zinc-50">
              <p>
                <span className="text-sky-950 dark:text-zinc-50 font-semibold">
                  Name:
                </span>{" "}
                {user.name}
              </p>
              <p>
                <span className="text-sky-950 dark:text-zinc-50 font-semibold">
                  Email:
                </span>{" "}
                {user.email}
              </p>
              <p>
                <span className="text-sky-950 dark:text-zinc-50 font-semibold">
                  Role:
                </span>{" "}
                {user.role}
              </p>
              <p>
                <span className="text-sky-950 dark:text-zinc-50 font-semibold">
                  Contact:
                </span>{" "}
                {user.contact}
              </p>

              </div>

            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
