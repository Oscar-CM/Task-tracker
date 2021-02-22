import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Meeting at school',
        day:'Feb 5th at 2.30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Going to the hospital',
        day:'Feb 15th at 11.00am',
        reminder:false,
    },
    {
        id:3,
        text:'Visiting a friend',
        day:'March 3rd at 4.00pm',
        reminder:'false',
    }
])
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}
const toggleReminder = (id) => {
  setTasks(tasks.map((task) =>task.id === id ? {...task, reminder:
  !task.reminder}:task))

}
  return (
    <div className='container'>
       <Header/>
       <AddTask/>
       <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>
    </div>
  )
}

export default App


