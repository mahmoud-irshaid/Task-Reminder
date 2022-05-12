import Task from './task'
import React, { } from 'react';

const Tasks = ({ tasks, deleteTask ,toggleReminder}) => {
    return (
        <div id="tasks">
            {tasks.map(task => (
                <Task
                    task={task}
                    deleteTask={deleteTask}
                    toggleReminder={toggleReminder}
                    key={task.id}
                />
            ))}
        </div>
    );
}
export default Tasks;