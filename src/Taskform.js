import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { title, completed: false };
        const response = await axios.post('http://127.0.0.1:8000/api/tasks/', newTask);
        console.log(response.data);
        setTitle('');
        window.location.reload(); // Refresh the page to show the new task
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
