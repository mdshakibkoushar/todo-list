import React, { useState } from 'react';
import './User.css'; 

const Task = ({ id, title, completed, toggleCompleted, deleteTask }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleCompleted}
        className="checkbox"
      />
      <span className={completed ? "completed" : ""}>{title}</span>
      <button onClick={() => deleteTask(id)} className="delete-button">Delete</button>
    </div>
  );
};

const TaskList = ({ tasks, toggleCompleted, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          toggleCompleted={() => toggleCompleted(task.id)}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};


const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Add a new task"
        className="task-input"
      />
      <button onClick={handleSubmit} className="add-button">Add Task</button>
    </div>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([
  ]);

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1 className="title">My Todo List</h1>
      <TaskList tasks={tasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
      <AddTask addTask={addTask} />
    </div>
  );
};

export default App;
