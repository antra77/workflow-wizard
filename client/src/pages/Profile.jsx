import React from "react";
import { Navbar } from "../components/index";
import Sidebar from '../components/Sidebar'

const Profile = () => {
  return (
    <div className="flex container-fluid gap-1 dark:bg-zinc-900">
      <Sidebar />
    <div className="container-fluid bg-zinc-50 dark:bg-zinc-800 w-full h-screen m-2 rounded-2xl drop-shadow-xl">
    <Navbar title='Profile'/>
    </div></div>
  );
};

export default Profile;
