import React, { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='container mx-auto p-4 max-w-md'>
      <div>
        <div>
          <h1>Task Manager</h1>
        </div>
        <div>
          <TaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

function TaskForm({ newTask, setNewTask, addTask }) {
  return (
    <form onSubmit={addTask} className='flex space-x-2 mb-4'>
      <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Enter a new task'
        className='flex-grow'
      />
      <button type='submit'>Add</button>
    </form>
  );
}

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className='space-y-2'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className='flex items-center space-x-2'>
      <input
        type='checkbox'
        onChange={() => toggleTask(task.id)}
        className='h-4 w-4'
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Remove</button>
    </li>
  );
}
