import './App.css';
import {useState} from 'react'
import Form from './Contents/Form/Form';
import List from './Contents/List/List';

let newId = 0;

function App() {

  // Block of Functions
  const [allTasks, setAllTasks] = useState([]);
  
  function getTask(task){
    if(task.trim() !== ""){
      newId += 1
      let newTask = {id: newId, task: task, done: false}
      setAllTasks([...allTasks, newTask])
    } 
  }


  function removeTask(delTask){
    let remain = allTasks.filter(task => task.id !== delTask)
    setAllTasks(remain)
  }


  function markTaskDone(doneTask){
    let newTaskArr = [];
    
    allTasks.forEach(task => {
      if (task.id === doneTask){
        task.done = true
      }
      newTaskArr.push(task)
    })

    setAllTasks(newTaskArr)

  }


  return (
    <div >

      <div className="container mt-5">
      <Form getTask = {getTask} />
      <List tasks = {allTasks} removeTask = {removeTask} markTaskDone = {markTaskDone} />
      </div>

    </div>
  );
}

export default App;
