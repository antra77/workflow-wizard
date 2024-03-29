import React from "react";
import {
  Navbar,
  Activity,
  Calendar,
  Progress,
  Welcome,
} from "../components/index";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex container-fluid gap-1 dark:bg-zinc-900">
      <Sidebar />

      <div className="relative container-fluid bg-zinc-50 dark:bg-zinc-800 w-full m-2 rounded-2xl drop-shadow-xl">
        <Navbar title={"Dashboard"} />
        <div className="flex gap-2">
          <Welcome />
          <Calendar />
        </div>
        <div className="flex gap-2">
          <Activity />
          <Progress />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
