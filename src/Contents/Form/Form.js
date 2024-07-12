import "./from.css"
import { useState } from 'react';

function Form(props) {

    // Functions Block
    const {getTask} = props;

    const [newTask, setNewTask] = useState("")
    
    return (
        <div style={{backgroundColor:"#891A2B", borderRadius:"15px 15px 0px 0px" ,height:"250px"}}>

            <h2 style={{textAlign:"center", color:"white", paddingTop:"20px"}}>To-Do App!</h2>

            <div class="input-group flex-nowrap">
                <input id="formInput" type="text" class="form-control" placeholder="Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} aria-label="Task" aria-describedby="addon-wrapping" />
                <button id="inputBtn" class="btn btn-outline-secondary" type="button" onClick={() => getTask(newTask)} >Enter</button>
            </div>

        </div>
        

    )
}

export default Form
