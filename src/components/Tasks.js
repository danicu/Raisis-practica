import Task from "./Task"

// const task = ({ id, text, day, reminder }) => {
//   id: {
//     id
//   }
//   text: {
//     text
//   }
//   day: {
//     day
//   }
//   reminder: {
//     reminder
//   }
// }

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
