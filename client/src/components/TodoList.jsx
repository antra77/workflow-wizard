import React, { useState } from "react";
import Todo from "./Todo";
import { FcPlus } from "react-icons/fc";
import SubHeader from "./SubHeader";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

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

  // Calculate task count
  const taskCount = todos.length;

  return (
    <div>
      <SubHeader title="Daily Tasks"/>
      <div className="flex flex-col w-[100%] md:w-[60%] md:ml-52">
        <div className="mb-4 mt-10 flex">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-grow px-4 py-2 ml-5 rounded-xl border outline-none hover:drop-shadow-md"
          />
          <button onClick={handleAddTodo} className="pl-5">
            <FcPlus className="text-4xl" />
          </button>
        </div>
        <div>
          <p>Total Tasks: {taskCount}</p> {/* Display task count */}
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onUpdate={handleUpdateTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
