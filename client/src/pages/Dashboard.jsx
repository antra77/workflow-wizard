import React from "react";
import {
  Navbar,
  Activity,
  Calendar,
  Progress,
  Welcome,
} from "../components/index";

const Dashboard = () => {
  return (
    <div className="container-fluid bg-zinc-50 dark:bg-zinc-800 w-full m-2 rounded-2xl drop-shadow-xl">
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
  );
};

export default Dashboard;
