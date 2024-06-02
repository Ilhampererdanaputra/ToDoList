// src/components/ToDoList.js
import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Create Guest Experience mobile check-in",
    "Document current CI/CD process",
    "Perform Code Review for final Pillow-Talk release",
    "Implement new Color Palette from Design Team",
    "Fix image uploading process for guest check-in",
    "Provide on-boarding documentation",
  ]);
  const [newTask, setNewTask] = useState("");
  const [doneCount, setDoneCount] = useState(0);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleTaskComplete = (e) => {
    setDoneCount(doneCount + (e.target.checked ? 1 : -1));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-800 text-white p-8 rounded shadow-md w-2/3">
        <h1 className="text-2xl mb-4">Chores ToDo List</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={handleTaskComplete}
                />
                <span>{task}</span>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleDeleteTask(index)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p>Done: {doneCount}</p>
          <div className="flex mt-2">
            <input
              type="text"
              className="flex-grow p-2 rounded-l bg-gray-200 text-gray-800"
              placeholder="Add todo"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
              onClick={handleAddTask}
            >
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
