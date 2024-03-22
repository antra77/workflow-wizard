import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FcMenu,
  FcWorkflow,
  FcTodoList,
  FcHeatMap,
  FcCalendar,
  FcTimeline,
  FcParallelTasks,
  FcConferenceCall,
} from "react-icons/fc";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen ">
      <div
        className={`fixed drop-shadow-xl hover:drop-shadow-2xl inset-y-0 left-0 z-50 w-64 h-full px-4 py-6 transition-transform duration-300 ease-in-out bg-zinc-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl mt-5 mb-5">
            <FcWorkflow />
          </h1>
          <h2 className="text-xl font-semibold">Workflow-Wizard</h2>
        </div>

        <ul className="m-10" >
          <h2 className="font-semibold">Dashboard</h2>
          <li className="py-5 text-md">
            <Link to="/" className="flex gap-3">
              <FcHeatMap className="text-2xl" />
              Progress
            </Link>
            <Link to="/team" className="flex gap-3 mt-5">
              <FcConferenceCall className="text-2xl" />
              Team
            </Link>
          </li>
          <h2 className="font-semibold">Monthly Tasks</h2>
          <li className="py-5 text-md">
            <Link to="/schedular" className="flex gap-3">
              <FcCalendar className="text-2xl" />
              Schedular
            </Link>
            <Link to="/gantt" className="flex gap-3 mt-5">
              <FcParallelTasks className="text-2xl" />
              Gantt Chart
            </Link>
          </li>
          <h2 className="font-semibold">Weekly Tasks</h2>
          <li className="py-5 text-md">
            <Link to="/kanban" className="flex gap-3">
              <FcTimeline className="text-2xl" />
              Kanban Board
            </Link>
          </li>
          <h2 className="font-semibold">Daily Tasks</h2>
          <li className="py-5 text-md">
            <Link to="/todo" className="flex gap-3">
              <FcTodoList className="text-2xl" />
              To-do List
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="absolute top-4 left-4 lg:hidden">
        {/* Mobile toggle button */}
        <button onClick={toggleSidebar} className="text-black">
          <FcMenu size={24} />
        </button>
      </div>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-opacity-50 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;