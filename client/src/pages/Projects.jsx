import React from 'react'
import {Navbar,Kanban} from "../components/index";


const Projects = () => {
  return (
<div className="container-fluid bg-zinc-50 w-full m-2 rounded-2xl drop-shadow-xl">
      <Navbar title={"Kanban Board"} />
      <Kanban/>
    </div>  )
}

export default Projects