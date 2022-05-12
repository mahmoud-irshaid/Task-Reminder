
const Task = ({ task, deleteTask ,toggleReminder}) => {
   return (
      <div onDoubleClick={() => (toggleReminder(task.id))} className={`task  ${task.reminder ? 'reminder' : ''}`}>
         <h2>{task.title}</h2>
         <p>{task.time}</p>
         <button className="delete" onClick={() => (deleteTask(task.id))}>X</button>
      </div>
   )
}
export default Task;