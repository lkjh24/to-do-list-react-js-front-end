import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
