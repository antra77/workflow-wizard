import React from "react";
import {Navbar,Activity} from "../components/index";

const Dashboard = () => {
  return (
    <div className="container-fluid bg-zinc-50 w-full m-2 rounded-2xl drop-shadow-xl">
      <Navbar title={"Dashboard"} />
      <div className="bg-zinc-50 w-3/4 m-5 flex items-center rounded-xl drop-shadow-md">
        <div className="flex flex-col gap-5 ml-8">
          <h1 className="text-3xl font-semibold text-blue-950">Hi, Sarah Parker</h1>
          <p className="text-sm">
            Welcome to Workflow Wizard, where your productivity meets its magic!
            Let&apos;s embark on a journey to streamline your tasks and unleash
            your efficiency.
          </p>
        </div>
        <img className="w-[40%]" src="/public/bg.png" alt="" />
      </div>
      <Activity/>
    </div>
  );
};

export default Dashboard;
