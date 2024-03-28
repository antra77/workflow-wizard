/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FiBell,FiBellOff } from "react-icons/fi";
import { LuTrash } from "react-icons/lu";
import { TbProgressBolt } from "react-icons/tb";
import { IoCheckmarkDoneCircleOutline,IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdOutlineCircle } from "react-icons/md";





const Todo = ({ todo, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const [checked, setChecked] = useState(false);
  const [priority, setPriority] = useState(false);
  const [status, setStatus] = useState('none'); // Default status is 'none'

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleUpdate = () => {
    if (text.trim() !== '') {
      onUpdate(todo.id, text);
      setEditing(false);
    }
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (!checked) {
      setStatus('completed'); // Set status to 'completed' if the task is checked
    } else {
      setStatus('none'); // Set status back to 'none' if the task is unchecked
    }
  };

  const handlePriorityToggle = () => {
    setPriority(!priority);
    if (!priority) {
      setStatus('priority'); // Set status to 'priority' if it's not priority
    } else {
      setStatus('none'); // Set status back to 'none' if priority is removed
    }
  };

  const handleProgressToggle = () => {
    setStatus('in progress');
    setChecked(false); // Uncheck the checkbox when marking as in progress
  };

  const handleCompletedToggle = () => {
    setStatus('completed');
    setChecked(true);
  };

  return (
    <div className="flex bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-50 m-5 p-5 rounded-xl drop-shadow-md">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <div
          className={`flex items-center justify-center ${
            status === 'completed' ? 'bg-transparent' : status === 'priority' ? 'bg-transparent' : status === 'none' ? 'bg-transparent' : 'bg-transparent'
          }`}
          onClick={handleCheckboxChange}
        >
          {status === 'completed' && <IoCheckmarkDoneCircleSharp className="text-sky-800 dark:text-zinc-50 text-3xl" />}
          {status === 'priority' && <FiBell className="text-sky-800 dark:text-zinc-50 text-3xl" />}
          {status === 'in progress' && <TbProgressBolt className="text-sky-800 dark:text-zinc-50 text-3xl" />}
          {status === 'none' && <MdOutlineCircle  className="text-sky-800 dark:text-zinc-50 text-3xl" />}
        </div>
        <span className={status === 'completed' ? 'line-through' : ''}>
          {editing ? (
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={handleUpdate}
              autoFocus
              className="outline-none"
            />
          ) : (
            <div onDoubleClick={() => setEditing(true)} className="cursor-pointer">
              {todo.text}
            </div>
          )}
        </span>
      </label>
      <div className="flex gap-5 ml-5">      <button
        onClick={handlePriorityToggle}
        className='text-xl'
      >
        {priority ? <FiBellOff id='details' title='remove priority' className='text-2xl text-sky-800 dark:text-zinc-50'/> : <FiBell id='details' title='mark as priority' className='text-2xl text-sky-800 dark:text-zinc-50'/>}
      </button>
      <button
        onClick={handleProgressToggle}
        className='text-xl'
      >
        <TbProgressBolt id='details' title='mark in progress' className='text-2xl text-sky-800 dark:text-zinc-50'/>
      </button>
      <button
        onClick={handleCompletedToggle}
        className='text-xl'
      >
        <IoCheckmarkDoneCircleOutline id='details' title='mark as completed' className='text-2xl text-sky-800 dark:text-zinc-50'/>
      </button>
      <button onClick={handleDelete}>
        <LuTrash id='details' title='delete' className='text-2xl text-sky-800 dark:text-zinc-50' />
      </button>
</div>
    </div>
  );
};

export default Todo;
