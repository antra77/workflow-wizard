import React, { useState } from "react";
import {
  FcWorkflow,
  FcComboChart,
  FcPlanner,
  FcParallelTasks,
  FcTodoList,
  FcLandscape,
  FcExternal,
} from "react-icons/fc";
import { Link } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`container-fluid rounded-2xl drop-shadow-xl bg-zinc-50 ${
        showSidebar ? "w-64" : "w-16"
      } h-screen`}
    >
        <TooltipComponent id="details"  position='TopCenter'>
      {showSidebar ? (
        <>
            <button id="details" title="click to close" onClick={toggleSidebar}>
                <div className="flex gap-2 items-center mt-10 m-3"><FcWorkflow title="click to close" className="text-4xl" /><h1 className="font-bold">Workflow Wizard</h1> </div>
              
            </button>

          <div id="details" title="dashboard" className="flex flex-col gap-2">
            <div  className="flex gap-2 items-center m-3">
              <FcComboChart className="text-4xl" />
              <Link to="/" className="text-md">
                Dashboard
              </Link>
            </div>
            <div id="details" title="schedule" className="flex gap-2 items-center m-3">
              <FcPlanner className="text-4xl" />
              <Link to="/schedule" className="text-md">
                Schedule
              </Link>
            </div>
            <div id="details" title="projects" className="flex gap-2 items-center m-3">
              <FcParallelTasks className="text-4xl" />
              <Link to="/projects" className="text-md">
                Projects
              </Link>
            </div>
            <div id="details" title="tasks" className="flex gap-2 items-center m-3">
              <FcTodoList className="text-4xl" />
              <Link to="/tasks" className="text-md">
                Tasks
              </Link>
            </div>
            <div className="border border-gray-200 border-t-2 border-b-2 border-l-0 border-r-0 flex flex-col m-2">
              <div className="flex gap-3 items-center m-5">
                <FcLandscape className="text-2xl" />
                <button onClick="" className="text-sm">
                  light mode
                </button>
              </div>
              <div className="flex gap-3 items-center mt-0 m-5">
                <FcExternal className="text-2xl" />
                <button onClick="" className="text-sm">
                  logout
                </button>
              </div>
            </div>
            <div id="details" title="profile" className=" flex flex-col gap-2 items-center justify-center mt-5 ">
              <img
                className="rounded-full w-20 h-20 object-cover"
                src="https://images.unsplash.com/photo-1601117830731-1a36c879f666?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="pic"
              />
              <a href="/profile" className="text-sm font-semibold">
                Sarah Parker
              </a>
              <p className="text-xs tracking-tight text-gray-400">
                sarah@mail.com
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <button onClick={toggleSidebar}>
            <FcWorkflow className="text-4xl mt-10 m-3" />
          </button>
          <div className="flex flex-col gap-3">
            <FcComboChart className="text-4xl m-3" />
            <FcPlanner className="text-4xl m-3" />
            <FcParallelTasks className="text-4xl m-3" />
            <FcTodoList className="text-4xl m-3" />
          </div>
          <div className=" border border-gray-200 border-t-2 border-b-2 border-l-0 border-r-0 flex flex-col mt-5 mb-5 m-2">
            <FcLandscape className="text-2xl m-3" />
            <FcExternal className="text-2xl m-3" />
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center mt-10 ">
            <img
              className="rounded-full w-14 h-14 object-cover"
              src="https://images.unsplash.com/photo-1601117830731-1a36c879f666?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pic"
            />
          </div>
        </>
      )}</TooltipComponent>
    </div>
  );
};

export default Sidebar;
