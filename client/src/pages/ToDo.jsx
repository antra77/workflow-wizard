import React from 'react'
import {Header,TodoList} from '../components/index'


const ToDo = () => {
  return (
    <div className='className="m-2 md:m-10 p-2 md:10 '>
      <Header category="Page" title="To-do lists" />
      <TodoList/>
    </div>
  )
}

export default ToDo