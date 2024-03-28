/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Todo from "./Todo";
import { IoAddCircleSharp, IoChevronDownCircleSharp, IoChevronUpCircleSharp } from "react-icons/io5";

const TodoList = ({ title }) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isExpanded, setIsExpanded] = useState(true); // State to track if the card is expanded

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      setInputText("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  // Function to toggle card expansion
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Calculate task count
  const taskCount = todos.length;

  return (
    <div className="bg-zinc-50 dark:bg-zinc-700 m-5 p-2 rounded-xl drop-shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl m-2 p-5 font-semibold text-sky-900 dark:text-zinc-50  text-center">{title}</h1>
        <button onClick={toggleExpand} className="text-3xl text-sky-800 dark:text-zinc-50 p-2">
          {isExpanded ? <IoChevronUpCircleSharp title='Collapse' /> : <IoChevronDownCircleSharp title='Expand' />}
        </button>
      </div>
      {isExpanded && (
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 mt-10 flex">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="bg-zinc-50 dark:bg-zinc-600 dark:text-zinc-50 m-2 p-5 rounded-xl drop-shadow-md  outline-none"
            />
            <button onClick={handleAddTodo} className="pl-5">
              <IoAddCircleSharp id='details' title='add a task' className="text-4xl text-sky-800 dark:text-zinc-50" />
            </button>
          </div>
          <div>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onDelete={handleDeleteTodo}
                onUpdate={handleUpdateTodo}
              />
            ))}
          </div>
          <p className="bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-50 m-10 p-5 rounded-xl drop-shadow-md">Total Tasks: {taskCount}</p> {/* Display task count */}
        </div>
      )}
    </div>
  );
};

export default TodoList;
