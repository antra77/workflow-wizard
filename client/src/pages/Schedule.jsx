import React from "react";
import {Navbar,Schedular} from "../components/index";

const Schedule = () => {
  return (
    <div className="container-fluid bg-zinc-50 dark:bg-zinc-800 w-full m-2 rounded-2xl drop-shadow-xl">
      <Navbar title={"Schedule"} />
      <Schedular/>
    </div>
  );
};

export default Schedule;
