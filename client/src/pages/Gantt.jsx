import React from 'react'
import { Header, GanttChart } from "../components/index";


const Gantt = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:10">
      <Header category='App' title='Gantt Chart' />
      <GanttChart />
    </div>
  )
}

export default Gantt