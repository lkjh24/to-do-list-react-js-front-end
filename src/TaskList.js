import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const deleteTask = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.completed ? 'Completed' : 'Pending'}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
