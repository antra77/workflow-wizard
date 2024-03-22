/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FcHighPriority,FcLowPriority,FcOk,FcEmptyTrash,FcRefresh,FcExternal  } from "react-icons/fc";



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
    <div className="flex justify-between items-center p-2 rounded-xl m-5 border-b">
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
          {status === 'completed' && <FcOk className="text-white text-3xl" />}
          {status === 'priority' && <FcHighPriority className="text-white text-3xl" />}
          {status === 'in progress' && <FcRefresh className="text-white text-3xl" />}
          {status === 'none' && <FcExternal  className="text-white text-3xl" />}
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
      <div className="flex gap-2">      <button
        onClick={handlePriorityToggle}
        className='text-xl'
      >
        {priority ? <FcLowPriority className='text-2xl'/> : <FcHighPriority className='text-2xl'/>}
      </button>
      <button
        onClick={handleProgressToggle}
        className='text-xl'
      >
        <FcRefresh className='text-2xl'/>
      </button>
      <button
        onClick={handleCompletedToggle}
        className='text-xl'
      >
        <FcOk className='text-2xl'/>
      </button>
      <button onClick={handleDelete}>
        <FcEmptyTrash className='text-2xl' />
      </button>
</div>
    </div>
  );
};

export default Todo;
