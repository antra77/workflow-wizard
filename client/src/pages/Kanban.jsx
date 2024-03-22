import React from 'react'
import { Header, KanbanBoard } from "../components/index";


const Kanban = () => {
  return (
    <div className='className="m-2 md:m-10 p-2 md:10 '>
      <Header category="App" title="Kanban Board" />
      <KanbanBoard />
    </div>
  )
}

export default Kanban