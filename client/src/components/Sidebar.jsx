import React, { useState, useContext } from "react";
import { FcWorkflow } from "react-icons/fc";
import { TbLogout } from "react-icons/tb";
import { MdPerson } from "react-icons/md";
import { PiChartLineUp } from "react-icons/pi";
import { BiCalendar } from "react-icons/bi";
import { LuFolderKanban, LuListTodo } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext"; // Update the path to UserContext

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`container-fluid rounded-2xl drop-shadow-xl m-2 bg-zinc-50 dark:bg-zinc-800 text-sky-950 dark:text-zinc-50 ${
        showSidebar ? "w-64" : "w-16"
      }`}
    >
      {showSidebar ? (
        <>
          <button title="click to close" onClick={toggleSidebar}>
            <div className="flex gap-2 justify-center items-center mt-8 m-2">
              <FcWorkflow title="click to close" className="text-4xl" />
              <h1 className="font-bold">Workflow Wizard</h1>
            </div>
          </button>

          <div className="flex flex-col gap-2 mt-3">
            {[
              { Icon: PiChartLineUp, text: "Dashboard", to: "/dashboard" },
              { Icon: BiCalendar, text: "Schedule", to: "/schedule" },
              { Icon: LuFolderKanban, text: "Projects", to: "/projects" },
              { Icon: LuListTodo, text: "Tasks", to: "/tasks" },
            ].map(({ Icon, text, to }, index) => (
              <div key={index} className="flex gap-2 items-center ml-2">
                <Link
                  to={to}
                  className={`flex items-center w-full text-sky-950 dark:text-zinc-50 text-sm ${
                    location.pathname === to
                      ? "bg-zinc-50 dark:bg-zinc-700 drop-shadow-lg"
                      : ""
                  } rounded-xl py-3`}
                >
                  <Icon className="text-3xl ml-2" />
                  <span className="ml-2">{text}</span>
                </Link>
              </div>
            ))}
            <div className="border border-gray-200 dark:border-gray-700 border-t-2 border-b-2 border-l-0 border-r-0 flex flex-col m-3 text-sky-950 dark:text-zinc-50">
              <Link to="/profile" className="flex items-center m-3">
                <MdPerson className="text-2xl" />
                <p className="text-sm m-3">Profile</p>
              </Link>
              <a href="/" className="flex items-center ml-3">
                <TbLogout className="text-2xl" />
                <p className="text-sm m-3">Logout</p>
              </a>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-5">
              {user && (
                <>
                  <img
                    className="rounded-full w-20 h-20 object-cover"
                    src='https://images.unsplash.com/photo-1601117830731-1a36c879f666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D'
                    alt="User Profile"
                  />
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs tracking-tight">{user.email}</p>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            title="click to open"
            onClick={toggleSidebar}
            className="mt-8 m-3"
          >
            <FcWorkflow className="text-4xl" />
          </button>
          <div className="flex flex-col gap-3">
            {[PiChartLineUp, BiCalendar, LuFolderKanban, LuListTodo].map(
              (Icon, index) => (
                <Icon key={index} className="text-3xl m-3" />
              )
            )}
          </div>
          <div className="border border-gray-200 border-t-2 border-b-2 border-l-0 border-r-0 flex flex-col mt-5 mb-5 m-2 text-sky-950">
            <MdPerson className="text-2xl dark:text-zinc-50 m-3" />
            <TbLogout className="text-2xl dark:text-zinc-50 m-3" />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center mt-10">
            {user && (
              <img
                className="rounded-full w-14 h-14 object-cover"
                src='https://images.unsplash.com/photo-1601117830731-1a36c879f666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D'
                alt="User Profile"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
