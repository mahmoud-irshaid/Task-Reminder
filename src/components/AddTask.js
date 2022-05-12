import React, { useState } from 'react';

function AddTask({ addTask }) {
    const [title, settitle] = useState('')
    const [time, settime] = useState('')
    const [reminder, setreminder] = useState(false)


    let task = {
        title: title,
        time: time,
        reminder: reminder
    }

    const check = (e) => {
        e.preventDefault();
        if (!title || !time) alert('please add task')
        else {
            addTask(task)
            settitle('')
            settime('')
            setreminder(false)
        }
    }
    return (
        <form onSubmit={check} >
            <div className="inputs">
                <p>Title : </p>
                <input type='text' onChange={(e) => { settitle(e.target.value) }} />
            </div>

            <div className="inputs">
                <p>Time : </p>
                <input type='text' onChange={(e) => { settime(e.target.value) }} />
            </div>

            <div className="inputs">
                <span>Reminder</span>
                <input type="checkbox" onChange={(e) => { setreminder(e.target.checked) }} />
            </div>

            <input type='submit' value='add Task' />
        </form>
    );
}
export default AddTask;