import React from "react";
import { Navbar, Kanban } from "../components/index";
import Sidebar from "../components/Sidebar";

const Projects = () => {
  return (
    <div className="flex container-fluid gap-1 dark:bg-zinc-900">
      <Sidebar />
      <div className="container-fluid bg-zinc-50 dark:bg-zinc-800 w-full m-2 rounded-2xl drop-shadow-xl">
        <Navbar title={"Kanban Board"} />
        <Kanban />
      </div>
    </div>
  );
};

export default Projects;
