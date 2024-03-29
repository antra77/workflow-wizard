import React, { useState } from "react";
import { Navbar, TodoList } from "../components/index";
import Sidebar from '../components/Sidebar'

const Tasks = () => {
  const [todoLists, setTodoLists] = useState([]);

  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDate, setNewTodoDate] = useState("");

  const addTodoList = () => {
    const newTodoList = {
      id: todoLists.length ? todoLists[todoLists.length - 1].id + 1 : 1,
      title: newTodoTitle,
      date: newTodoDate,
    };
    setTodoLists([...todoLists, newTodoList]);
    setNewTodoTitle("");
    setNewTodoDate("");
  };

  const deleteTodoList = (id) => {
    setTodoLists(todoLists.filter((todoList) => todoList.id !== id));
  };

  return (
    <div className="flex container-fluid gap-1 dark:bg-zinc-900">
      <Sidebar />
    <div className="container-fluid bg-zinc-50 dark:bg-zinc-800 w-full  m-2 rounded-2xl drop-shadow-xl">
      <Navbar title={"Tasks"} />
      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          placeholder="New Todo List Title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          className=" w-full max-w-xs p-5 bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-50 m-2 rounded-2xl drop-shadow-lg"
        />
        <input
          type="date"
          value={newTodoDate}
          onChange={(e) => setNewTodoDate(e.target.value)}
          className="bg-zinc-50 dark:bg-zinc-700 m-2 text-gray-500 dark:text-zinc-50 p-5 rounded-2xl drop-shadow-lg"
        />
        <button
          onClick={addTodoList}
          className=" bg-sky-700 dark:bg-zinc-700 m-2 p-3 text-white rounded-2xl drop-shadow-lg"
        >
          Add New Card
        </button>
      </div>
      <div className="flex items-center justify-center flex-wrap h-screen overflow-scroll">
        {todoLists.map((todoList) => (
          <div key={todoList.id} className="flex flex-col items-center m-2">
            <TodoList title={todoList.title} />
            <div className="flex gap-2">
              <span className="bg-sky-700 dark:bg-zinc-700 m-2 p-3 text-white  rounded-2xl drop-shadow-lg">
                {todoList.date}
              </span>
              <button
                onClick={() => deleteTodoList(todoList.id)}
                className="bg-sky-700 dark:bg-zinc-700 m-2 p-3 text-white rounded-2xl drop-shadow-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Tasks;
