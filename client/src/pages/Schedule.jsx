import React from "react";
import { Navbar, Schedular } from "../components/index";
import Sidebar from "../components/Sidebar";

const Schedule = () => {
  return (
    <div className="flex container-fluid gap-1 dark:bg-zinc-900">
      <Sidebar />
      <div className="container-fluid bg-zinc-50 dark:bg-zinc-800 w-full m-2 rounded-2xl drop-shadow-xl">
        <Navbar title={"Schedule"} />
        <Schedular />
      </div>
    </div>
  );
};

export default Schedule;
