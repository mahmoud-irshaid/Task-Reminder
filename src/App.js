import './App.css';
import React, { useState} from 'react';
import Tasks from './components/tasks'
import AddTask from './components/AddTask'



function App() {
  const [tasks, settasks] = useState([
    {
      id: 1,
      title: 'go to dentist',
      time: '26 Jan 6:00pm',
      reminder :false
    },

    {
      id: 2,
      title: 'take final exam',
      time: '1 Feb 10:00am',
      reminder:true
    },

    {
      id: 3,
      title: 'hang out with friends',
      time: '15 Feb 3:00pm',
      reminder:true
    }
  ]);
  const [showAdd, setshowAdd] = useState(false);


  /////Functions 


  const deleteTask = (id) => {
    settasks(tasks.filter(task => (
      task.id !== id
    )))
  }

  const addTask = (task) => {
    let id = Math.floor(Math.random() * 1000);
    task = { ...task, id }
    console.log(task)
    settasks([...tasks, task])
  }

  const toggleReminder = (id) => {
    settasks( tasks.map(task => 
      (task.id === id ? 
        {... task , reminder : !task.reminder} 
        : task)))
  }
  
  return (
    <div id="container">
      <div id="header">
        <h1>Task Reminder</h1>
        <button id="add" onClick={() => (setshowAdd(!showAdd))}
          style={{
            background: showAdd ? 'red' : 'green'
          }}
        >{showAdd ? 'Close' : 'Add'}</button>
      </div>
      {showAdd && <AddTask addTask={addTask} />}

      {tasks.length > 0 ?
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        /> : 'No Tasks Found'}

    </div>
  );
}

export default App;
